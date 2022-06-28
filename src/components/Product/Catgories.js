import React, { useState } from "react";
import Catgorie from "./Catgorie";
import "./product.css";

const Catgories = () => {
  const [data, setData] = useState(Catgorie);
  const filterResult = catItem => {
    const result = Catgorie.filter(curData => {
      return curData.Catgories !== catItem;
    });
    setData(result);
  };
  return (
    <div>
      {thisProduct.map(product => {
        const { id, url, title, price, description } = values;
        return (
          <div key={id} className="product-detail">
            <div className="product-detail-image">
              <img src={url} alt="product" />
            </div>
            <div className="product-detail-info">
              <h3>{title}</h3>
              <h4>${price}</h4>
              <p className="lead">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catgories;
