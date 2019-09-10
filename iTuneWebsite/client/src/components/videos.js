import React from "react";
import axios from "axios";
import "../search.css";
import loader from "../loader.gif";
import PageNavigation from "./PageNavigation";
import Favorite from "./Favorite";
import { Button } from "reactstrap";

class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      Results: {},
      loading: false,
      message: "",
      totalResult: 0,
      totalPages: 0,
      currentPageNo: 0,
      favoriteList: []
    };
    this.cancel = "";
  }

  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  componentWillMount = (updatedPageNo = "", query) => {
    // to get page number automatically
    let pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `/videos/${query}/${pageNumber}`;

    // to cancel results if user back space and types in new request
    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token
      })
      .then(res => {
        //   get response of total results
        const total = res.data.resultCount;
        const totalPagesCount = this.getPageCount(total, 20);
        const resultNotFound = !res.data.results.length
          ? "There are no more search results. Please try a new search"
          : "";
        //   set state
        this.setState({
          Results: res.data.results,
          message: resultNotFound,
          totalResult: total,
          totalPages: totalPagesCount,
          currentPageNo: updatedPageNo,
          loading: false
        });
      })
      .catch(error => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data"
          });
        }
      });
  };

  handleOnInputChange = event => {
    const query = event.target.value;
    //if nothing on query set state to empty
    if (!query) {
      this.setState({
        query,
        Results: {},
        message: "",
        totalPages: 0,
        totalResult: 0
      });
    } else {
      this.setState({ query: query, loading: true, message: "" }, () => {
        this.componentWillMount(1, query);
      });
    }
  };

  handlePageClick = (type, e) => {
    e.preventDefault();
    const updatedPageNo =
      "Prev" === type
        ? this.state.currentPageNo - 1
        : this.state.currentPageNo + 1;

    // check our page current state
    if (!this.state.loading) {
      this.setState({ loading: true, message: "" }, () => {
        this.componentWillMount(updatedPageNo, this.state.query);
      });
    }
  };

  //addToFavorite
  addToFavorite = (index, trackViewUrl, artistName, artworkUrl100) => {
    const { favoriteList } = this.state;

    let item = {
      id: index,
      link: trackViewUrl,
      title: artistName,
      img: artworkUrl100
    };

    this.setState({ favoriteList: [...favoriteList, item] });

    console.log(favoriteList);
  };

  renderSearchResults = () => {
    const { Results } = this.state;
    // set state for search results
    if (Object.keys(Results).length && Results.length) {
      return (
        <div className="results-container">
          {Results.map((result, index) => {
            return (
              <div className="result-item">
                <a key={index} href={result.trackViewUrl}>
                  <h6 className="image-username">{result.artistName}</h6>
                  <div className="image-wraper">
                    <img
                      className="image"
                      src={result.artworkUrl100}
                      alt={result.artistName}
                    />
                  </div>
                </a>
                <div>
                  <Button
                    color="outline-success"
                    size="sm"
                    onClick={this.addToFavorite.bind(
                      this,
                      index,
                      result.trackViewUrl,
                      result.artistName,
                      result.artworkUrl100
                    )}
                  >
                    addToFavorite
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const {
      query,
      loading,
      message,
      currentPageNo,
      totalPages,
      favoriteList
    } = this.state;
    // next and previous page handle
    const showPrevLink = 1 < currentPageNo;
    const showNextLink = totalPages > currentPageNo;
    console.log(favoriteList);

    return (
      <div className="container">
        {/* favorite pass props */}
        <Favorite favoriteList={favoriteList} />

        {/* Heading*/}
        <h2 className="heading">Search For Videos Below</h2>
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            name="query"
            value={query}
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon" aria-hidden="true" />
        </label>

        {/* Message */}
        {message && <p className="message"> {message}</p>}

        {/*loader */}
        <img
          src={loader}
          className={`search-loading ${loading ? "show" : "hide"}`}
          alt="loader"
        />

        {/* Navigation */}
        <PageNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={e => this.handlePageClick("prev", e)}
          handleNextClick={e => this.handlePageClick("next", e)}
        />

        {/* Results */}
        {this.renderSearchResults()}

        {/* Navigation */}
        <PageNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={e => this.handlePageClick("prev", e)}
          handleNextClick={e => this.handlePageClick("next", e)}
        />
      </div>
    );
  }
}

export default Videos;
