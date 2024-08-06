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
        <Route path='/category/products' element={<ProductByCategory/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contact' element={<SupportPage/>} />

        {/* ==== Authentication ====  */}
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
