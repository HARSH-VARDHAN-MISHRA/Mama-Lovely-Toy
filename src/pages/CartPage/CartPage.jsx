import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Teddy Bear",
            imageUrl: "https://via.placeholder.com/150",
            price: 20.00,
            quantity: 1
        },
        {
            id: 2,
            name: "Baby Car",
            imageUrl: "https://via.placeholder.com/150",
            price: 35.00,
            quantity: 2
        },
        {
            id: 3,
            name: "Building Blocks",
            imageUrl: "https://via.placeholder.com/150",
            price: 15.00,
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
            <section className="breadcrumb-section">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Cart</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="cart-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="cart-title">Your Cart</h2>
                            {cartItems.length === 0 ? (
                                <p className="empty-cart-message">Your cart is empty.</p>
                            ) : (
                                <div className="cart-items">
                                    {cartItems.map(item => (
                                        <div className="cart-item" key={item.id}>
                                            <img src={item.imageUrl} alt={item.name} className="item-image" />
                                            <div className="item-details">
                                                <h4>{item.name}</h4>
                                                <p>Price: ${item.price.toFixed(2)}</p>
                                                <div className="quantity-control">
                                                    <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                                </div>
                                                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                            </div>
                                            <div className="item-total">
                                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            <div className="cart-summary">
                                <h2>Summary</h2>
                                <p>Total Items: {cartItems.length}</p>
                                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                                <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartPage;
