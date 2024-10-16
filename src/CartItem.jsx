import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  // Access cart items from the Redux store
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Increment quantity of a cart item
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement quantity of a cart item, or remove it if quantity reaches 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // Remove item if quantity is 0
    }
  };

  // Remove an item from the cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost of each item based on its quantity
  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.replace("$", ""));
    return (cost * item.quantity).toFixed(2);
  };

  // Calculate the total amount for all items in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace("$", ""));
      return total + cost * item.quantity;
    }, 0).toFixed(2);
  };

  // Handler for checkout (not fully implemented, just an alert for now)
  const handleCheckoutShopping = (e) => {
    alert('Checkout functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3>Your cart is empty.</h3>
        )}
      </div>
      <div className="cart-actions">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br/>
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
