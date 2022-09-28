import React, { useState } from 'react';
import Cart from './Cart';
import setItemm from './LocalStorage';
import OrderSummery from './OrderSummery';
import Product from './Product';

const Main = () => {
  const [food, setFood] = useState([])
  const clicked = product => {
    const newProduct = [...food, product];
    setFood(newProduct);
    setItemm(product);
  }
  return (
    <div className='xl:grid grid-cols-[75%_25%]'>
      <Cart
      clicked ={clicked}
      ></Cart>
      <OrderSummery food ={food}></OrderSummery>
    </div>
  );
};

export default Main;