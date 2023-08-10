import React from "react";

function Text({ value, handleGetValue }) {
  return (
    <div className="text">
      <div className="container">
        <div className="form">
          <textarea
            onChange={(e) => handleGetValue(e)}
            name=""
            placeholder="Enter/Paste Your Text Here..."
            value={value}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Text;
