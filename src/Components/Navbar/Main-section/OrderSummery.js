import React, { useEffect, useState } from 'react';
import setItem from './LocalStorage';

const OrderSummery = (props) => {
  const foods = props.food
  const [data, setData] = useState([]);
  const [length,setLength] = useState(0);

  useEffect(()=>{
    const localStorageItem = JSON.parse(localStorage.getItem('addItem'));
    const localStorageItemLength = localStorageItem.length;
    setData(localStorageItem);
    setLength(localStorageItemLength)
  },[foods])
  const clearAllData = () =>{
    localStorage.clear('addItem');
    setData([]);
  }
  // localStorageItem.map(item=>console.log(item));
  return (
    <div className='bg-[#0652DD] xl:h-[100vh] xl:sticky xl:top-0 text-center p-6 xl:w-full'>
      <h2 className='text-2xl font-semibold text-white'>Order-summery</h2>
      <h4 className='my-3 text-lg font-medium text-white'>Selected Items: {length}</h4>
      <ul className='text-white'>
        {
          data.map(item => <ol key={item}>{item}</ol>)
        }
      </ul>
      <button onClick={clearAllData} className='btn'>Clear</button>
    </div>
  );
};

export default OrderSummery;