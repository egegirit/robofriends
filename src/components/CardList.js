import React from "react";
import Card from "./Card";

/* robot list as prop */
const CardList = ({ robots }) => {
  return (
    <div>
      {/* Iterate over the robot list, create an array of iterated robots */}
      {robots.map((user, i) => {
        return (
          <Card
            /* Each child in array or iterator should have unique "key" prop */
            /* But index are not the best key, since removing items may break it */
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
