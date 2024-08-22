import React, { useEffect, useState } from 'react'

import Category from '../../components/Category/Category'
import MostLovingProduct from '../../components/ProductSection/MostLovingProduct'
import { Link } from 'react-router-dom';

import './Home.css'
import Carasol from '../../components/Carasol/Carasol';
import Testimonial from '../../components/Testimonial/Testimonial';
import Blog from '../../components/Blog/Blog';

import bn1 from '../../Assets/bn1.png';
import bn2 from '../../Assets/bn2.png';
import bn3 from '../../Assets/bn3.png';
import bn4 from '../../Assets/bn4.png';
// import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  const [showAll, setShowAll] = useState(false); // State to toggle view

  const categories = [
    {
      id: 1,
      categoryName: "Baby Toys",
      imageUrl: bn1
    },
    {
      id: 2,
      categoryName: "Teddy Bear",
      imageUrl: bn2
    },
    {
      id: 3,
      categoryName: "Carry Cot",
      imageUrl: bn3
    },
    {
      id: 4,
      categoryName: "Riders",
      imageUrl: bn4
    },
    {
      id: 5,
      categoryName: "Baby Cars",
      imageUrl: bn3
    },
    {
      id: 1,
      categoryName: "Baby Toys",
      imageUrl: bn1
    },
    {
      id: 2,
      categoryName: "Teddy Bear",
      imageUrl: bn2
    },
    {
      id: 3,
      categoryName: "Carry Cot",
      imageUrl: bn3
    },
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 6);



  return (
    <>
      <Carasol />

      <section className='my-5 category'>
        <div className="container">
          <div className="row head">
            <div className="col-md-12 text-center">
              <h2>Our Category</h2>
            </div>
          </div>

          <div className="category-grid">
            {visibleCategories.map((category, index) => (
              <Link
                to={`/category/products`}
                className="main-category"
                key={index}
                style={{ backgroundImage: `url(${category.imageUrl})` }}
              >
                <div className="content">
                  <h3>{category.categoryName}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center view-more-container mt-3">
            <button className="viewMoreBtn" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>

        </div>
      </section>

      <Category />
      <MostLovingProduct />

      <section className='banners py-5' >
        <div className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <Link to={`/shop`} >
                <img src="https://toyzone.in/cdn/shop/files/premium-range.jpg?v=1671702631" alt="" />
              </Link>
            </div>
            <div className="col-md-6 mb-2"><Link to={`/shop`} ><img src="https://toyzone.in/cdn/shop/files/best-sellers.jpg?v=1671707575" alt="" /></Link></div>
            <div className="col-md-6 mb-2"><Link to={`/shop`} ><img src="https://toyzone.in/cdn/shop/files/new-launch.jpg?v=1671707567" alt="" /></Link></div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Blog />
    </>
  )
}

export default Home