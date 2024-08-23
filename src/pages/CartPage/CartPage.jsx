import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

import pic5 from '../../Assets/Picture5.png';
import pic6 from '../../Assets/Picture6.jpg';
import pic7 from '../../Assets/Picture7.png';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Teddy Bear",
            imageUrl: pic5,
            price: 2000, // Use INR instead of USD
            quantity: 1
        },
        {
            id: 2,
            name: "Baby Car",
            imageUrl: pic6,
            price: 3500,
            quantity: 2
        },
        {
            id: 3,
            name: "Building Blocks",
            imageUrl: pic7,
            price: 1500,
            quantity: 1
        }
    ]);

    const handleQuantityChange = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
        ));
    };

    const handleRemoveItem = id => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Your Cart</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="cart-page py-5">
                <div className="container">
                    <div className="row">
                        {cartItems.length === 0 ? (
                            <p className="empty-cart-message">Your cart is empty.</p>

                        ) : (

                            <>
                                <div className="col-md-8 mb-4">
                                    <div className="cart-items">
                                        {cartItems.map(item => (
                                            <div className="cart-item" key={item.id}>
                                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                                <div className="cart-item-details">
                                                    <h4 className='mb-0 flex-wrap'>{item.name}</h4>
                                                    <p className="item-price">Price: ₹{item.price.toLocaleString()}</p>
                                                    <div className="quantity-control">
                                                        <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                                    </div>
                                                    <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                                </div>
                                                {/* <div className="cart-item-total">
                                                    <p>Total: ₹{(item.price * item.quantity).toLocaleString()}</p>
                                                </div> */}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="cart-summary">
                                        <h2>Summary</h2>
                                        <p  className="d-flex justify-content-between align-items-center">Total Items: <span>{cartItems.length} Items</span></p>
                                        <p  className="d-flex justify-content-between align-items-center">Total Price: <span>₹{totalPrice.toLocaleString()}</span></p>
                                        <div className="coupon-section">
                                            <input type="text" placeholder="Enter coupon code" />
                                            <button className="apply-coupon-btn">Apply Coupon</button>
                                        </div>
                                        <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;
