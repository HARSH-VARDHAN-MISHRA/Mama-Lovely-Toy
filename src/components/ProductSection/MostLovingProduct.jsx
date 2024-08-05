import React from 'react'

import pic2 from '../../Assets/Picture2.png';
import pic3 from '../../Assets/Picture3.png';
import pic4 from '../../Assets/Picture4.jpg';
import pic5 from '../../Assets/Picture5.png';
import pic6 from '../../Assets/Picture6.jpg';
import pic7 from '../../Assets/Picture7.png';
import pic8 from '../../Assets/Picture8.png';
import pic9 from '../../Assets/Picture9.jpg';
import pic10 from '../../Assets/Picture10.jpg';
import pic11 from '../../Assets/Picture11.png';
import pic12 from '../../Assets/Picture12.png';
import { Link } from 'react-router-dom';

const MostLovingProduct = () => {
    const products = [
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
            productName: "Remote Control Helicopter",
            productImage: pic9,
            actualPrice: "2200.00",
            discountPercentage: 18,
            offPrice: "1804.00"
        },
        {
            productName: "Doll House Set",
            productImage: pic10,
            actualPrice: "2700.00",
            discountPercentage: 25,
            offPrice: "2025.00"
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
    return (
        <>
            <section style={{ background: "var(--bg-yellow)" }}>
                <div className="container py-5">
                    <div className="row head">
                        <div className="col-md-12 text-center">
                            <h2>Most Loving Products</h2>
                        </div>
                    </div>

                    <div className="grid-5 product-section">
                        {products && products.slice(0,10).map((product, index) => (
                            <Link to={`/single-product`} className="sin-product" key={index}>
                                <div className="img">
                                    <img src={product.productImage} alt={product.productName} />
                                    <div className="absolute-items">
                                        <div className="offPercent">{product.discountPercentage}% Off</div>
                                        <div className="openModal"><i className="fa-regular fa-eye"></i></div>
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
                    {products && products.length > 10 && (
                        <div className="col-12 text-center">
                            <div className="view-more-container">
                                <Link to="/shop" className="viewMoreBtn">
                                    View All Products
                                </Link>
                            </div>
                        </div>
                    )}

                </div>
            </section>

        </>
    )
}

export default MostLovingProduct