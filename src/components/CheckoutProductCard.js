import React from "react";
import "./styles/CheckoutProductCard.scss";

function CheckoutProductCard(props) {
  const { description, name, id, price, onClickRemoveItem, currency } = props;

  const handleClick = () => onClickRemoveItem(id);

  return (
    <div key={id} className="container">
      <div>
        <button onClick={handleClick}>X</button>
        <div className="name">{name}</div>
        <div className="descripton">{description}</div>
      </div>
      <div>
        <input></input>
      </div>
      <div>{currency.value}</div>
      <div>{price}</div>
    </div>
  );
}

export default CheckoutProductCard;
