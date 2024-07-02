import React from "react";
import DetailItem from "../DetailItem/DetailItem";

const Item = () => {
  const arrItem = [1, 2, 3, 4];

  return (
    <div className="container mx-auto grid-cols-4 grid gap-3 mb-3">
      {arrItem.map((value) => {
        return <DetailItem value={value} />;
      })}
    </div>
  );
};

export default Item;
