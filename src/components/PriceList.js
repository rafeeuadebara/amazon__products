import React from "react";
import PriceItem from "./PriceItem";

const PriceList = ({ prices }) => {
  const renderedList = prices.map((price) => {
    return <PriceItem price={price} />;
  });

  return <div>{renderedList}</div>;
};

export default PriceList;
