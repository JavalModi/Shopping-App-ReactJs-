import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound, index } from "./pages"
import { Navbar } from './components';
export default function 
() {
  return (
  <>
   <BrowserRouter>


  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product" element={<Products />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/product/*" element={<PageNotFound />} />
  </Routes>

</BrowserRouter>
  </>
  )
}
