import React from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header'
import Product from './pages/Product';
import Cart from './pages/Cart';
import Home from './pages/Home'

 
function App() {
  return (
  <CartProvider>
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/cart" element={<Cart />}/>
     </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
