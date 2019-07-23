import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Cart from "./Cart";

export default function ItemsContainer() {
  let conatinerStyle = {
    padding: "20px",
    display: "flex",
    flexDirection: "row"
  };

  const [cart, setCart] = useState([]);

  //   useEffect(() => {

  //     addToCart(item);
  //   }, []);

  const addToCart = item => {
    item = JSON.parse(item);
    item.inCart = true;
    item.id=(Math.random()*456)
    const newCartItem = [...cart, item];
    setCart(newCartItem);
  };

  const removeItemFromCart = id => {
    console.log(id)
    const newCart = cart.filter(function(id, i) {
      console.log(id.id);
      console.log(cart[i].id)
      return cart[i].id !== id.id
    })
console.log(newCart)
    setCart(newCart);
  };

  const emptyCart=()=>{
      setCart([])
  }

  return (
    <div style={conatinerStyle}>
      <ItemList addToCart={addToCart} />
      <Cart cart={cart} removeItemFromCart={removeItemFromCart} emptyCart={emptyCart} />
    </div>
  );
}
