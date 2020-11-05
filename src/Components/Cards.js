import React from "react";

export default function Cards(props) {
  return (
    <div className="card card-wrapped">
      <div className="card-header">
        <h3>{props.type}</h3>
        <h3
          style={{
            float: "right",
            display: "inline-block",
            border: "1px solid blue",
          }}
        >
          {props.count}
        </h3>
      </div>
      <hr />
      <div className="card-footer">
        <a href="#">CTA</a>
      </div>
    </div>
  );
}
