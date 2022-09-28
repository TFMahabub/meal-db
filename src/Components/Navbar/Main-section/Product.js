import React from 'react';

const Product = (props) => {
  const {strMealThumb,strIngredient1,strInstructions, idMeal} = props?.product;
  const sliceText = strInstructions>200? strInstructions :strInstructions.slice(0, 120) + '...';
  return (
        <div>
          <div className="card bg-base-100 shadow-2xl border-2 rounded-xl">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
              <div className="p-4">
                <h2 className="card-title">{strIngredient1}</h2>
                <p>{sliceText}</p>
              </div>
            <button onClick={() => props.buttonOnClick(props.product)} className="btn btn-block rounded-[8px]">Add To Card</button>
          </div>
        </div>
  );
};

export default Product;