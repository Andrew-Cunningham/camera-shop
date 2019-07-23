import React, {useState} from "react";

export default function Cart(props) {
  let cartStyle = {
    backgroundColor: "Orange",
    minHeight: "15em",
    height: '40%',
    width: "30%",
    border:'1px solid black',
    fontSize: '2em',
    color: 'white'
  };
  let itemInCartStyle={
    display: "flex",
    flexDirection: "row",
    backgroundColor:'white',
    fontSize: '1em',
    color:'black'
  }
  const [cartItems, setCartItems] = useState(
      {
          subtotal: 0.00,
          tax: 0.00,
          total: 0.00
      }
  );
let newState={
    subtotal:0.00,
    tax:0.00,
    total:0.00
}  
let subtotal=0

  const _handleClick=e=>{
      e.preventDefault()
      console.log('delete')
      console.log(e.target.id)
      props.removeItemFromCart(e.target.id)
  }

  const checkoutClick=(e)=>{
      e.preventDefault()
      props.emptyCart()
  }

  return (
      <>
    <div style={cartStyle}>
      <div>YOUR CART</div>
      {props.cart.map(itemInCart => {
        return (
            {subtotal: subtotal + itemInCart.price},  
      <div style={itemInCartStyle} key={itemInCart.id}><div>{itemInCart.name}</div><div id={itemInCart.id} onClick={_handleClick}>❌</div></div>)})}
      <div>Subtotal: ${cartItems.subtotal}</div>
      <div>Tax: ${cartItems.tax}</div>
      <div>Total: ${cartItems.total}</div>
      <button onClick={checkoutClick}>CHECKOUT</button>
    </div>
    </>
  );
}
