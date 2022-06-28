import React, { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  // consuming contexts
  const { addToCart, favoriteItems, addToFavorite, removeFromFavorite } =
    useContext(StateContext);

  // Cart button display
  function cartButton() {
    return (
      <button onClick={() => addToCart(product)} className="add-cart-btn">
        Add to Cart
      </button>
    );
  }

  // determine which Favorite button to display
  function favoriteButton() {
    // check which product is already favorited
    const alreadyFavorited = favoriteItems.some(item => item.id === product.id);

    if (alreadyFavorited) {
      return (
        <i
          onClick={() => removeFromFavorite(product.id)}
          className="ri-heart-fill favorite favorite-btn"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => addToFavorite(product)}
          className="ri-heart-line favorite favorite-btn"
        ></i>
      );
    }
  }

  // render JSX
  return (
    <div key={product.id} className="product-card">
      <div className="product-image">
        {/* product image */}
        <img src={product.imageURL} alt="product" />
      </div>
      <div className="product-info">
        {/* product title */}
        <h5>{product.title}</h5>
        <h3>{product.name}</h3>
        <p> color : {product.color}</p>
        <p>type :{product.type} </p>
        <p>type :{product.gender} </p>

        <h5>
          {product.currency} {product.price}
        </h5>

        {/* favorite button */}
        {favoriteButton()}

        {/* cart button */}
        {cartButton()}
      </div>
    </div>
  );
}

export default ProductItem;
