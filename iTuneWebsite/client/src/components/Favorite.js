import React from "react";
import { Table } from "reactstrap";

export default props => {
  const { favoriteList } = props;

  return (
    <div className="favorite">
      <Table bordered dark>
        <thead>
          <tr>
            <th>#Favorite List</th>
            <th>
              <i class="fa fa-music" aria-hidden="true" />
            </th>
          </tr>
        </thead>
      </Table>
      <Table bordered>
        <tbody>
          <tr className="row-container">
            {favoriteList.map(item => {
              return (
                <div>
                  <a key={item.id} href={item.link}>
                    <td className="favorite-wraper">
                      <img
                        className="favourite-image"
                        src={item.img}
                        alt={item.title}
                      />
                    </td>
                    <td className="favorite-username">{item.title}</td>
                  </a>
                </div>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
