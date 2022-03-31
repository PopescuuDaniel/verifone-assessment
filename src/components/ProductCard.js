import React from "react";
import "./styles/ProductCard.scss";

function ProductCard(props) {
  const { id, name, price, onClickAddToCart, currency } = props;

  const handleClick = () => onClickAddToCart(id);

  return (
    <div key={id} className="productContainer">
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="content">
        <div className="price">
          <p>Price</p>
          <div className="priceCurrency">
            <p>{currency.value}</p>
            <p className="pricenumber">{price}</p>
          </div>
        </div>
        <button className="button" onClick={handleClick}>
          <div className="img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1200px-Shopping_cart_icon.svg.png"></img>
          </div>
          <div className="add">Add to cart</div>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
