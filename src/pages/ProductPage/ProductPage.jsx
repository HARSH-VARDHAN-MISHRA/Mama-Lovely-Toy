import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css'; // Import the CSS file for styling

import pic2 from '../../Assets/Picture2.png';
import pic3 from '../../Assets/Picture3.png';
import pic4 from '../../Assets/Picture4.jpg';
import pic5 from '../../Assets/Picture5.png';
import pic6 from '../../Assets/Picture6.jpg';
import pic7 from '../../Assets/Picture7.png';
import pic8 from '../../Assets/Picture8.png';
import pic11 from '../../Assets/Picture11.png';
import pic12 from '../../Assets/Picture12.png';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const productDetails = {
        name: "Musical Activity Walker",
        photo: pic6,
        mrp: "₹520",
        sellingPrice: "₹299",
        dimension: "24*12*8",
        weight: "450 gm",
        description: "The Musical Activity Walker is designed to entertain and support your child's early steps with interactive features and durable design.",
        sizes: ["Small", "Medium", "Large"]
    };

    const relatedProducts = [
        {
            productName: "Eco Panda Magic Car",
            productImage: pic2,
            actualPrice: "1500.00",
            discountPercentage: 27,
            offPrice: "1099.00"
        },
        {
            productName: "Musical Activity Walker",
            productImage: pic3,
            actualPrice: "2000.00",
            discountPercentage: 25,
            offPrice: "1500.00"
        },
        {
            productName: "Educational Building Blocks",
            productImage: pic4,
            actualPrice: "800.00",
            discountPercentage: 20,
            offPrice: "640.00"
        },
        {
            productName: "Stuffed Teddy Bear",
            productImage: pic5,
            actualPrice: "1000.00",
            discountPercentage: 30,
            offPrice: "700.00"
        },
        {
            productName: "Wooden Rocking Horse",
            productImage: pic6,
            actualPrice: "2500.00",
            discountPercentage: 20,
            offPrice: "2000.00"
        },
        {
            productName: "Battery Operated Toy Car",
            productImage: pic7,
            actualPrice: "3500.00",
            discountPercentage: 15,
            offPrice: "2975.00"
        },
        {
            productName: "Interactive Learning Tablet",
            productImage: pic8,
            actualPrice: "1800.00",
            discountPercentage: 22,
            offPrice: "1404.00"
        },
        {
            productName: "Puzzle Mat",
            productImage: pic11,
            actualPrice: "900.00",
            discountPercentage: 10,
            offPrice: "810.00"
        },
        {
            productName: "Baby Gym Play Mat",
            productImage: pic12,
            actualPrice: "1600.00",
            discountPercentage: 20,
            offPrice: "1280.00"
        }
    ];

    const handleQuantityChange = (event) => {
        setQuantity(Number(event.target.value));
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>{productDetails.name}</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/">Our Products</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{productDetails.name}</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="product-page">
                <div className="container">
                    <div className="product-details">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="product-photo">
                                    <img src={productDetails.photo} alt={productDetails.name} />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="product-info">
                                    <h2>{productDetails.name}</h2>
                                    <p className="product-description">{productDetails.description}</p>
                                    <div className="product-pricing">
                                        <p className="mrp">MRP:  {productDetails.sellingPrice} <span>{productDetails.mrp}</span></p>
                                    </div>
                                    <div className="quantity-selector">
                                        <button className="quantity-btn" onClick={handleDecrement}>-</button>
                                        <input
                                            id="quantity"
                                            type="number"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            min="1"
                                        />
                                        <button className="quantity-btn" onClick={handleIncrement}>+</button>
                                    </div>
                                    <div className="product-specs">
                                        <p><strong>Dimension:</strong> {productDetails.dimension}</p>
                                        <p><strong>Weight:</strong> {productDetails.weight}</p>
                                    </div>
                                    
                                    <div className="product-actions">
                                        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                                        <button className="buy-now-btn">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="related-products">
                        <h2>Related Products</h2>
                        <div className="grid-4 product-section">
                        {relatedProducts && relatedProducts.map((product, index) => (
                            <Link to={`/single-product`} className="sin-product" key={index}>
                                <div className="img">
                                    <img src={product.productImage} alt={product.productName} />
                                    <div className="absolute-items">
                                        <div className="offPercent">{product.discountPercentage}% Off</div>
                                    </div>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name">{product.productName}</div>
                                    <div className="acctual-price">₹{product.actualPrice}</div>
                                    <div className="off-price">₹{product.offPrice}</div>

                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="popup-close" onClick={handleClosePopup}>×</button>
                        <div className="popup-header">
                            <img src={productDetails.photo} alt={productDetails.name} />
                            <h2>{productDetails.name}</h2>
                        </div>
                        <div className="popup-body">
                            <p><strong>Quantity:</strong> {quantity}</p>
                            <p><strong>Price:</strong> {productDetails.sellingPrice} (Total: ₹{quantity * parseFloat(productDetails.sellingPrice.replace('₹', ''))})</p>
                        </div>
                        <div className="popup-footer">
                            <button className="popup-btn" onClick={handleClosePopup}>Add More Products</button>
                            <button className="popup-btn">Proceed to Billing</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductPage;
