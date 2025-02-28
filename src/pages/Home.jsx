import React from 'react'
import Navbar from '../components/Navbar';

const Home = ({cart , setCart}) => {
  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <div>Home</div>
    </div>
  );
}

export default Home