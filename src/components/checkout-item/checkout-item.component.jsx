import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { deleteItem, removeItem, addItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, deleteItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteItem: (checkOutItem) => dispatch(deleteItem(checkOutItem)),
  removeItem: (checkOutItem) => dispatch(removeItem(checkOutItem)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
