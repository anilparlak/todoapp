import React from "react";
import "./listItem.style.scss";

const ListItem = ({
  title = '',
  checked = false, 
  handleDeleteEvent,
  handleCheckEvent}) => {

  return (
    <div className="list-segments">
      <div className="list-segment">
        <div className="list-segment__left">
          <input className={(checked) ? "checked" : ""} type="checkbox" id="todo" name={title} value={title} onChange={handleCheckEvent} />
          <label htmlFor="todo" data-content={title && title}>
           {title && title}
          </label>
        </div>
        <div className="list-segment__right">
          <i onClick={handleDeleteEvent}>
            <svg
              fill="#db2828"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path d="M 24 4 C 20.704135 4 18 6.7041348 18 10 L 11.746094 10 A 1.50015 1.50015 0 0 0 11.476562 9.9785156 A 1.50015 1.50015 0 0 0 11.259766 10 L 7.5 10 A 1.50015 1.50015 0 1 0 7.5 13 L 10 13 L 10 38.5 C 10 41.519774 12.480226 44 15.5 44 L 32.5 44 C 35.519774 44 38 41.519774 38 38.5 L 38 13 L 40.5 13 A 1.50015 1.50015 0 1 0 40.5 10 L 36.746094 10 A 1.50015 1.50015 0 0 0 36.259766 10 L 30 10 C 30 6.7041348 27.295865 4 24 4 z M 24 7 C 25.674135 7 27 8.3258652 27 10 L 21 10 C 21 8.3258652 22.325865 7 24 7 z M 13 13 L 35 13 L 35 38.5 C 35 39.898226 33.898226 41 32.5 41 L 15.5 41 C 14.101774 41 13 39.898226 13 38.5 L 13 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" />
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
