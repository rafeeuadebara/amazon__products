import "./PriceItem.css";
import React from "react";

const PriceItem = ({ price }) => {
  return (
    <div className="ui inverted relaxed divided list price-item">
      <div className="item">
        <div className="content">
          <div className="header">
            <img src={price.imageUrl} />
          </div>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <button class="ui secondary button">
            <a href={price.detailPageURL}>click link</a>
          </button>
        </div>
      </div>

      <div className="item">
        <div className="content">
          <span className="pricetitle"> Description -</span>
          {price.title}
        </div>
      </div>

      <div className="item">
        <div className="content">
          {" "}
          <span className="price"> price-</span>
          {price.price}
        </div>
      </div>

      <div className="item">
        <div className="content">
          <span className="rating"> rating-</span>
          {price.rating}
        </div>
      </div>

      <hr></hr>
    </div>
  );
};

export default PriceItem;

/**
 *
 *
 */
