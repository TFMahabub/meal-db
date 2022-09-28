import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className="navbar bg-base-300">
        <div className='mx-3 navbar'>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">meal-DB</a>
          </div>
          <div className="flex-none">
            <a className='mr-4 text-lg' href="">Home</a>
            <a className='mr-4 text-lg' href="">Product</a>
            <a className='mr-4 text-lg' href="">Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;