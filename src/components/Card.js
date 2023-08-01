import React from "react";

const Card = ({ name, email, id }) => {
  // Now you can use name instead of props.name with the destructuring
  return (
    // Used tachyons css classes for styling
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* Different id's create different robot images */}
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
