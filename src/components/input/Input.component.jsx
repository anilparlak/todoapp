import React from "react";
import "./input.style.scss";

const Input = ({
  handleChange = null,
  value = null,
  empty = true,
  handleKeyDown
}) => {
  return (
    <div className="input-group">
      <input className="form-input" onChange={handleChange} value={value} onKeyDown={(e) => ( (e.key === "Enter") && handleKeyDown(e))}/>
      <label className="form-input-label">New Task</label>
      {empty && <span className="input-group--warning">Please Enter a Task</span>}
    </div>
  );
};

export default Input;
