import React from "react";

export default props => {
  const {
    loading,
    showPrevLink,
    showNextLink,
    handlePrevClick,
    handleNextClick
  } = props;
  return (
    <div className="nav-link-container">
      {/* anchor tag for previous page*/}
      <a
        href="/"
        className={`nav-link ${showPrevLink ? "show" : "hide"} 
          ${loading ? "greyed-out" : ""}`}
        onClick={handlePrevClick}
      >
        Prev
      </a>
      {/* anchor tag for next page*/}
      <a
        href="/"
        className={`nav-link ${showNextLink ? "show" : "hide"}
          ${loading ? "greyed-out" : ""}`}
        onClick={handleNextClick}
      >
        Next
      </a>
    </div>
  );
};
