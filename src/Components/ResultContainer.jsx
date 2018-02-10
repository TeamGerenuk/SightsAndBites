import React, { Component } from "react";
import Result from "./Result";

export default class ResultsContainer extends Component {
  componentWillReceiveProps(newProps) {}
  render(props) {
    let final;
    if (this.props.sights.length > 1) {
      final = this.props.sights.map((sight, i) => {
        return (
          <Result
            key={i}
            name={this.props.sights[i].name}
            photo_reference={this.props.sights[i].photos[0].photo_reference}
          />
        );
      });
    }
    return <div className="left">{final}</div>;
  }
}
