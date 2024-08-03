import React from "react";

function ShowItemsAppearance({ title, listItem, onClickItem, state }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <div className="content">
        {listItem.map((item) => {
          return (
            <div
              key={item.id}
              className={`square ${
                state[`${title}`]?.id === item?.id ? "squareFocus" : ""
              }`}
              onClick={() => onClickItem({ data: item, name: title })}
            >
              <img height="50" src={item.imgUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowItemsAppearance;
