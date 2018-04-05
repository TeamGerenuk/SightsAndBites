import React from "react";

export default props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.city}
        onChange={props.handleChange}
        placeholder="Enter a city name here..."
      />
    </form>
  );
};
