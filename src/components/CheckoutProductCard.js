import React from "react";
import "./styles/CheckoutProductCard.scss";

function CheckoutProductCard(props) {
  const { description, name, id, price, onClickRemoveItem, currency } = props;

  const handleClick = () => onClickRemoveItem(id);

  return (
    <div key={id} className="containerCheck">
      <div className="check">
        <button onClick={handleClick}>X</button>
        <div className="name">{name}</div>
        <span className="hover">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1024px-Infobox_info_icon.svg.png"></img>
        </span>
        <div className="description">{description}</div>
      </div>
      <div className="quantity">
        <input></input>
      </div>
      <div className="value">{currency.value}</div>
      <div>{price}</div>
    </div>
  );
}

export default CheckoutProductCard;
