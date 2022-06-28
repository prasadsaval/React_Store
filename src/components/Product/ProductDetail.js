import React, { useContext } from "react";
import { StateContext } from "../../context/GlobalState";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { addToCart } = useContext(StateContext);

  const { productId } = useParams();

  const { products } = useContext(StateContext);

  const thisProduct = products.filter(product => product.id === productId);

  // render JSX
  return (
    <section>
      {thisProduct.map(product => {
        return (
          <div key={product.id} className="product-detail">
            <div className="product-detail-image">
              <img src={product.url} alt="product" />
            </div>
            <div className="product-detail-info">
              <h3>{product.title}</h3>
              <h4>${product.price}</h4>
              <p className="lead">{product.description}</p>

              <button
                onClick={() => addToCart(product)}
                className="add-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default ProductDetail;
