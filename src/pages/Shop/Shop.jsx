import React, { useState, useEffect } from 'react';
import './Shop.css';

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

const Shop = () => {
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

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(12); // 6 products per page
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = ShopProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Shop</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <div className="shop-container">
                <button className="filter-toggle-btn" onClick={() => setShowFilter(!showFilter)}>
                    {showFilter ? 'Hide Filters' : 'Show Filters'}
                </button>
                <div className={`filter-section ${showFilter ? 'show' : ''}`}>
                    <h2>Filters</h2>
                    <div className="filter-group">
                        <h3>Category</h3>
                        <div className="category-list">
                            <label><input type="checkbox" name="category" value="Toys" /> Toys</label>
                            <label><input type="checkbox" name="category" value="Electronics" /> Electronics</label>
                            <label><input type="checkbox" name="category" value="Books" /> Books</label>
                        </div>
                    </div>
                    <div className="filter-group">
                        <h3>Price Range</h3>
                        <div className="price-range">
                            <input type="range" className='form-range' min="0" max="5000" step="100" />
                            <div className="price-values">
                                <span>0</span>
                                <span>5000</span>
                            </div>
                        </div>
                    </div>
                    <div className="filter-group">
                        <h3>Size</h3>
                        <select className='form-select'>
                            <option>All</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <h3>Sort By</h3>
                        <select className='form-select'>
                            <option>Best Match</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
                <div className="products-section">
                    <div className="products-grid">
                        {currentProducts.map((product, index) => (
                            <Link to={`/single-product`} key={index} className="product-card">
                                <img src={product.productImage} alt={product.productName} />
                                <h3>{product.productName}</h3>
                                <p className="price">₹{product.offPrice} <span className="actual-price">₹{product.actualPrice}</span> </p>
                                <p className="discount">{product.discountPercentage}% Off</p>
                            </Link>
                        ))}
                    </div>
                    <div className="pagination">
                        {Array.from({ length: Math.ceil(ShopProducts.length / productsPerPage) }, (_, index) => (
                            <button key={index} onClick={() => paginate(index + 1)} className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}>
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
