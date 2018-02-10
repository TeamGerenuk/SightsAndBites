import React from "react";

export default props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" value={props.city} onChange={props.handleChange} />
      <input type="submit" value="Submit" />
    </form>
  );
};
