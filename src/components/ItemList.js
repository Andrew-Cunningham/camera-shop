import React, { useState, useEffect } from "react";

export default function ItemList(props) {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const getAllCameras = async () => {
      const response = await fetch("http://localhost:8000/cameras");
      const json = await response.json();
      setitems(json);
    };
    getAllCameras();
    console.log(items)
  }, []);

  let itemStyle = {
    width: '70%'
  };

  let nameStyle={
    fontSize: '2em'  
  }

  let priceStyle={
    fontSize: '1.5em'  
  }
  let onSaleStyle={
      fontSize: '1.5em'
  }
  let offSaleStyle={
    display: 'hidden',
    fontWeight:'900'
}

const onClick=e=>{
  e.preventDefault()
  
 props.addToCart(e.target.value)
//  e.target.value=''
}
let filterItems=items


const onChange =e=>{
    console.log(e.target.value)
    let change=e.target.value
    filterItems=items.filter(function(change){
        console.log(change.name.toLowerCase())
        if(change.name.toLowerCase().includes(e.target.value)===true){
        return change.name.toLowerCase().includes(e.target.value)}
       
        
    })
    setitems(filterItems)
    console.log(filterItems)
    console.log(items)
}





  return (
    <div style={itemStyle}>
        <input onChange={onChange} placeholder='Filter for what you are looking for here ...'/>
      {filterItems.length>1? filterItems.map(item => {
        return (
          <div key={item.id} >
            <div style={nameStyle}>Camera Name: {item.name}</div>
            <div
              style={{
                height:'17em',
                width: '20em',
                backgroundImage: `url(${item.picture})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              
            </div>
            <div style={item.onSale===true ? onSaleStyle : offSaleStyle}>{item.onSale===true ? 'ON SALE!' : null}</div>
            <div style={priceStyle}>Price: ${item.price}</div>
            <div>Rating: {('⭐'.repeat(item.rating)) }</div>
            <button value={JSON.stringify(item)} onClick={onClick}>ADD TO CART</button>
          </div>
        );
      }): items.map(item => {
        return (
          <div key={item.id} >
            <div style={nameStyle}>Camera Name: {item.name}</div>
            <div
              style={{
                height:'17em',
                width: '20em',
                backgroundImage: `url(${item.picture})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            >
              
            </div>{console.log('im running')}
            <div style={item.onSale===true ? onSaleStyle : offSaleStyle}>{item.onSale===true ? 'ON SALE!' : null}</div>
            <div style={priceStyle}>Price: ${item.price}</div>
            <div>Rating: {('⭐'.repeat(item.rating)) }</div>
            <button value={JSON.stringify(item)} onClick={onClick}>ADD TO CART</button>
          </div>
        );
      })}
     
    </div>
  );
}
