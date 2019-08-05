import React, { useState } from "react";

export default function Cart(props) {
  let cartStyle = {
    backgroundColor: "Orange",
    minHeight: "15em",
    height: "40%",
    width: "30%",
    border: "1px solid black",
    fontSize: "2em",
    color: "white"
  };
  let itemInCartStyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    fontSize: "1em",
    color: "black"
  };
  const [cartItems, setCartItems] = useState({
    subtotal: 0.0,
    tax: 0.0,
    total: 0.0
  });
  let newState = {
    subtotal: 0.0,
    tax: 0.0,
    total: 0.0
  };
  let subtotal = 0;

  const _handleClick = e => {
    e.preventDefault();
    console.log("delete");
    console.log(e.target.id);
    props.removeItemFromCart(e.target.id);
  };

  const checkoutClick = e => {
    e.preventDefault();
    props.emptyCart();
  };

  return (
    <>
      <div style={cartStyle}>
        <div>YOUR CART</div>
        {console.log(props.cart)}
        {props.cart.map(itemInCart => {
          return (
          (newState.subtotal= newState.subtotal + itemInCart.price),
          (cartItems.subtotal=newState.subtotal),
            (
              <div style={itemInCartStyle} key={itemInCart.id}>
                
                
                
                {console.log(cartItems.subtotal)}
                <div>{itemInCart.name}</div>
                <div id={itemInCart.id} onClick={_handleClick}>
                  ❌
                </div>
              </div>
            )
          );
        })}
        <div>Subtotal: ${newState.subtotal>0 ? cartItems.subtotal : cartItems.subtotal=0}</div>
        <div>Tax: ${cartItems.subtotal*0.08}</div>
        <div>Total: ${cartItems.subtotal + (cartItems.subtotal*0.08)}</div>
        <button onClick={checkoutClick}>CHECKOUT</button>
      </div>
    </>
  );
}
