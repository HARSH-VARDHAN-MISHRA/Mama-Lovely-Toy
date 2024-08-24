import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Shop from './pages/Shop/Shop';
import ProductByCategory from './pages/ProductPage/ProductByCategory';
import BlogPage from './pages/BlogPage/BlogPage';
import SupportPage from './pages/SupportPage/SupportPage';
import Login from './components/Auth/Login';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CartPage from './pages/CartPage/CartPage';
import Checkout from './pages/CartPage/Checkout';
import ConfirmOrder from './pages/CartPage/ConfirmOrder';

function App() {
  return (
    <>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/single-product' element={<ProductPage/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/our-category' element={<CategoryPage/>} />
        <Route path='/category/products' element={<ProductByCategory/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contact' element={<SupportPage/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/order-confirm' element={<ConfirmOrder/>} />

        {/* ==== Authentication ====  */}
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
