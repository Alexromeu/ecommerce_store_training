import React from 'react';
import { CartProvider } from './context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header'
import Product from './pages/Product';
import Cart from './pages/Cart';
import Home from './pages/Home'
import './components/carousel_styles/base.css'
import './components/carousel_styles/embla.css'
import './components/contact_form/contact_form_styles.css'
import './App.css';

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
