import React from "react";
import { allPart } from "../Constants";
import ShowItemsAppearance from "../Components/ShowItemsAppearance";

function AllSection({ onClickItem, state }) {
  const dataAllPart = allPart.map((part) => {
    const listItem = [];

    for (let i = 0; i < part.total; i++) {
      listItem.push({
        id: i + 1,
        imgUrl: `Assets/${part.name}/${i + 1}.png`,
      });
    }
    return { name: part.name, listItem };
  });

  return (
    <>
      {dataAllPart.map(({ name, listItem }) => (
        <ShowItemsAppearance
          key={name}
          title={name}
          listItem={listItem}
          onClickItem={onClickItem}
          state={state}
        />
      ))}
    </>
  );
}

export default AllSection;
