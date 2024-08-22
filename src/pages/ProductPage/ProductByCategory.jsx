import React, { useState, useEffect } from 'react';

import pic2 from '../../Assets/Picture2.png';
import pic3 from '../../Assets/Picture3.png';
import pic4 from '../../Assets/Picture4.jpg';
import pic5 from '../../Assets/Picture5.png';
import pic6 from '../../Assets/Picture6.jpg';
import pic7 from '../../Assets/Picture7.png';
import pic8 from '../../Assets/Picture8.png';
import pic11 from '../../Assets/Picture11.png';
import pic12 from '../../Assets/Picture12.png';
import { Link, NavLink } from 'react-router-dom';

const ProductByCategory = () => {

    const ShopProducts = [
        { productName: "Eco Panda Magic Car", productImage: pic2, actualPrice: "1500.00", discountPercentage: 27, offPrice: "1099.00" },
        { productName: "Musical Activity Walker", productImage: pic3, actualPrice: "2000.00", discountPercentage: 25, offPrice: "1500.00" },
        { productName: "Educational Building Blocks", productImage: pic4, actualPrice: "800.00", discountPercentage: 20, offPrice: "640.00" },
        { productName: "Stuffed Teddy Bear", productImage: pic5, actualPrice: "1000.00", discountPercentage: 30, offPrice: "700.00" },
        { productName: "Wooden Rocking Horse", productImage: pic6, actualPrice: "2500.00", discountPercentage: 20, offPrice: "2000.00" },
        { productName: "Battery Operated Toy Car", productImage: pic7, actualPrice: "3500.00", discountPercentage: 15, offPrice: "2975.00" },
        { productName: "Interactive Learning Tablet", productImage: pic8, actualPrice: "1800.00", discountPercentage: 22, offPrice: "1404.00" },
        { productName: "Puzzle Mat", productImage: pic11, actualPrice: "900.00", discountPercentage: 10, offPrice: "810.00" },
        { productName: "Baby Gym Play Mat", productImage: pic12, actualPrice: "1600.00", discountPercentage: 20, offPrice: "1280.00" },
        { productName: "Musical Activity Walker", productImage: pic3, actualPrice: "2000.00", discountPercentage: 25, offPrice: "1500.00" },
        { productName: "Educational Building Blocks", productImage: pic4, actualPrice: "800.00", discountPercentage: 20, offPrice: "640.00" },
        { productName: "Stuffed Teddy Bear", productImage: pic5, actualPrice: "1000.00", discountPercentage: 30, offPrice: "700.00" },
        { productName: "Wooden Rocking Horse", productImage: pic6, actualPrice: "2500.00", discountPercentage: 20, offPrice: "2000.00" },
        { productName: "Battery Operated Toy Car", productImage: pic7, actualPrice: "3500.00", discountPercentage: 15, offPrice: "2975.00" },
        { productName: "Interactive Learning Tablet", productImage: pic8, actualPrice: "1800.00", discountPercentage: 22, offPrice: "1404.00" },
        { productName: "Puzzle Mat", productImage: pic11, actualPrice: "900.00", discountPercentage: 10, offPrice: "810.00" },
        { productName: "Baby Gym Play Mat", productImage: pic12, actualPrice: "1600.00", discountPercentage: 20, offPrice: "1280.00" },
    ];

    const [displayedProducts, setDisplayedProducts] = useState(9);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setDisplayedProducts(prevCount => prevCount + 4);
            setLoading(false);
        }, 1000); // Simulate a delay for the loader
    };

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Category Name</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Category Name</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section>
                <div className="shop-container">
                    <div className="products-section">
                        <div className="products-grid">
                            {ShopProducts.slice(0, displayedProducts).map((product, index) => (
                                <Link key={index} to={`/single-product`} className="product-card">
                                    <img src={product.productImage} alt={product.productName} />
                                    <h3>{product.productName}</h3>
                                    <p className="price">₹{product.offPrice} <span className="actual-price">₹{product.actualPrice}</span></p>
                                    <p className="discount">{product.discountPercentage}% Off</p>
                                </Link>
                            ))}
                        </div>
                        {loading && <div className="loader"></div>}
                        {!loading && displayedProducts < ShopProducts.length && (
                            <button className="show-more-button" onClick={handleShowMore}>Show More</button>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductByCategory;
