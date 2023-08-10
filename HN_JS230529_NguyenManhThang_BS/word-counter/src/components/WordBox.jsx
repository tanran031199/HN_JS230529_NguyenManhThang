import React from "react";

function WordBox({ icon, title, count }) {
  return (
    <div className="wordBox">
      <div className="count-title">
        <h3>
          <i className="count-icons">{icon}</i>
          {title}
        </h3>

        <p className="show-count">{count}</p>
      </div>
    </div>
  );
}

export default WordBox;
