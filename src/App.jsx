import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='bg-zinc-900 w-full h-screen text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
