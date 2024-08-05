import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <>
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
