import React from "react";

export default props => {
  return (
    <div className="result">
      {/* actual image src to be replaced later */}
      <img src="http://via.placeholder.com/600x600" alt="" />
      <p className="name">{props.name}</p>
    </div>
  );
};
