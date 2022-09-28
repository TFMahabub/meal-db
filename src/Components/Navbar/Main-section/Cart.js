import React, { useEffect, useState } from 'react';
import Product from './Product';

const Cart = (props) => {
  const [datas, setData] = useState([]);

  // console.log(props.clicked)
  
  
  useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res=>res.json())
    .then(data => setData(data.meals));
  },[]);
  
  const buttonOnClick = product => props.clicked(product);
  return (
    <div className='grid gap-[30px] md:grid-cols-2 xl:grid-cols-3 m-10'>
      {
        datas.map(product => <Product 
          key ={product.idMeal} 
          buttonOnClick = {buttonOnClick} 
          product = {product}></Product>)
      }
    </div>
  );
};

export default Cart;