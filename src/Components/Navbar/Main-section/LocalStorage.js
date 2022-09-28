import React, { useState } from 'react';

const setItemm = (product) =>{
const itemLocalStorage = localStorage.getItem('addItem');
const itemParse = JSON.parse(itemLocalStorage);
let addItems;
if(itemParse){
  const isExiste = itemParse.find(item => item === product.strIngredient1);
  if(isExiste){
    return alert('Already Exist');
  }
  addItems = [...itemParse, product.strIngredient1];
}
else{
  addItems =  [product.strIngredient1];
}
// console.log(addItems);
localStorage.setItem('addItem', JSON.stringify(addItems));
}
export default setItemm;
