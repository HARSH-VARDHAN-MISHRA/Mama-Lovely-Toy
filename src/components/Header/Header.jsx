import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/logo.png';
import CartSidebar from '../CartSidebar/CartSidebar';

const Header = () => {
  const cartNumber = 3;
  const [openCart, setOpenCart] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showDropUp, setShowDropUp] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const handleOpenClick = () => {
    setOpenCart(!openCart);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isLoggedIn = false; // Adjust based on your authentication state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleProfileClick = () => {
    setActiveTab('profile');
    setShowDropUp(!showDropUp);
  };

  const handleCloseDropUp = () => {
    setShowDropUp(false);
  };


  const toggleSidebar = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleCartClick = () => {
    setActiveTab('cart');
    toggleSidebar();
  };




  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="MAMA Luvmee" />
              </Link>
            </div>
            <nav className="navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li className="dropdown">
                  <Link to="/products">Products</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/category/products">Baby Toys</Link></li>
                    <li><Link to="/category/products">Teddy Bear</Link></li>
                    <li><Link to="/category/products">Carry Cot</Link></li>
                    <li><Link to="/category/products">Riders</Link></li>
                    <li><Link to="/category/products">Baby Cars</Link></li>
                  </ul>
                </li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Support</Link></li>
              </ul>
            </nav>
            <div className="header-right">
              <div className="user-actions">
                <Link to="/profile"><i className="fas fa-user"></i></Link>
                <Link  className="cart-icon" onClick={handleCartClick}>
                  <i className="fas fa-shopping-cart"></i>
                  {cartNumber > 0 && <span className="cart-number">{cartNumber}</span>}
                </Link>
                <button className='hamburger' onClick={handleOpenClick}>
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div className="auth-buttons">
                <Link to="/login" className="login-button">Sign In</Link>
                <Link to="/register" className="register-button">Create an Account</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={`sidebar ${openCart ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={handleOpenClick}>
            <i className="fas fa-times"></i>
          </button>
          <div className="profile">
            <img src="https://avatars.githubusercontent.com/u/138967484?v=4" alt="Profile" />
            <div className="profile-info">
              <h3>Harsh Vardhan</h3>
              <p>info@gmail.com</p>
            </div>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
            <li className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <i className="fas fa-tag"></i> Products {isDropdownOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/products/baby-toys">Baby Toys</Link></li>
                  <li><Link to="/products/teddy-bear">Teddy Bear</Link></li>
                  <li><Link to="/products/carry-cot">Carry Cot</Link></li>
                  <li><Link to="/products/riders">Riders</Link></li>
                  <li><Link to="/products/baby-cars">Baby Cars</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/shop"><i className="fas fa-shopping-cart"></i> Shop</Link></li>
            <li><Link to="/blog"><i className="fas fa-blog"></i> Blog</Link></li>
            <li><Link to="/support"><i className="fas fa-headset"></i> Support</Link></li>
            {isLoggedIn ? (
              <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
            ) : ""}

          </ul>

          {isLoggedIn ? "" : (
            <>
              <div className="bottom-side">
                <Link to="/login" className='login-button'><i className="fas fa-sign-in-alt"></i> Sign In</Link>
                <Link to="/register" className='register-button'><i className="fas fa-user-plus"></i> Register</Link>
              </div>
            </>
          )}
        </nav>
      </section>


      {/* ==== Bottom Navbar  ====  */}
      <section className="bottom-nav">
        <div className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          <Link to="/"><i className="fas fa-home"></i></Link>
          <span>Home</span>
        </div>
        {/* <div className={`nav-item ${activeTab === 'search' ? 'active' : ''}`} onClick={() => setActiveTab('search')}>
          <Link to="/search"><i className="fas fa-search"></i></Link>
          <span>Search</span>
        </div> */}
        <div className={`nav-item ${activeTab === 'shop' ? 'active' : ''}`} onClick={() => setActiveTab('shop')}>
          <Link to="/shop"><i className="fa-solid fa-store"></i></Link>
          <span>Shop</span>
        </div>
        <div className={`nav-item ${activeTab === 'cart' ? 'active' : ''}`}  onClick={handleCartClick}>
          <Link to="#"><i className="fa-solid fa-basket-shopping"></i></Link>
          <span>Cart</span>
        </div>
        {isLoggedIn ? (
          <>
            <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
              <Link to="/profile"><i className="fas fa-user"></i></Link>
              <span>Profile</span>
            </div>
          </>
        ) : (
          <>
            <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={handleProfileClick}>
              <Link><i className="fas fa-user"></i></Link>
              <span>Profile</span>
            </div>
          </>
        )}
      </section>


      <section className={`not-login-dropUp ${showDropUp ? 'visible' : ''}`}>
        <div className="bottom-side">
          <Link to="/login" className="login-button" onClick={handleCloseDropUp}>
            <i className="fas fa-sign-in-alt"></i> Sign In
          </Link>
          <Link to="/register" className="register-button" onClick={handleCloseDropUp}>
            <i className="fas fa-user-plus"></i> Register
          </Link>
        </div>
      </section>

      <CartSidebar isOpen={isCartOpen} toggleSidebar={toggleSidebar} />

    </>
  );
};

export default Header;
