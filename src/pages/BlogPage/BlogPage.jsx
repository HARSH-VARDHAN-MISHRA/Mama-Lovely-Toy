import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const blogs = [
    {
        title: "Top 10 Educational Toys for Children",
        image: "https://toyzone.in/cdn/shop/articles/Artboard_1_7_1_1200x800.png?v=1709703000",
        summary: "Discover the top 10 educational toys that help your children learn while having fun.",
        author: "Rajesh Kumar",
        date: "July 25, 2024"
    },
    {
        title: "The Importance of Play in Child Development",
        image: "https://htmldemo.net/kidol/kidol/assets/img/blog/1.jpg",
        summary: "Learn about the significant role of play in the overall development of children.",
        author: "Neha Sharma",
        date: "July 20, 2024"
    },
    {
        title: "Safety Tips for Toy Buyers",
        image: "https://toyzone.in/cdn/shop/articles/Artboard_2_2_1200x800.png?v=1709212165",
        summary: "Ensure your child's safety by following these essential toy-buying tips.",
        author: "Priya Singh",
        date: "July 10, 2024"
    },
    {
        title: "How to Choose the Right Toy for Your Child",
        image: "https://htmldemo.net/kidol/kidol/assets/img/blog/3.jpg",
        summary: "A guide to selecting the best toys that suit your child's age and interests.",
        author: "Amit Patel",
        date: "July 15, 2024"
    },
    {
        title: "Top 10 Educational Toys for Children",
        image: "https://toyzone.in/cdn/shop/articles/Artboard_1_7_1_1200x800.png?v=1709703000",
        summary: "Discover the top 10 educational toys that help your children learn while having fun.",
        author: "Rajesh Kumar",
        date: "July 25, 2024"
    },
    {
        title: "The Importance of Play in Child Development",
        image: "https://htmldemo.net/kidol/kidol/assets/img/blog/1.jpg",
        summary: "Learn about the significant role of play in the overall development of children.",
        author: "Neha Sharma",
        date: "July 20, 2024"
    },
    {
        title: "Safety Tips for Toy Buyers",
        image: "https://toyzone.in/cdn/shop/articles/Artboard_2_2_1200x800.png?v=1709212165",
        summary: "Ensure your child's safety by following these essential toy-buying tips.",
        author: "Priya Singh",
        date: "July 10, 2024"
    },
    {
        title: "How to Choose the Right Toy for Your Child",
        image: "https://htmldemo.net/kidol/kidol/assets/img/blog/3.jpg",
        summary: "A guide to selecting the best toys that suit your child's age and interests.",
        author: "Amit Patel",
        date: "July 15, 2024"
    },

    
];

const BlogPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Our Blogs</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Our Blogs</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {blogs.map((blog, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="blog-card">
                                    <img src={blog.image} alt={blog.title} className="blog-image" />
                                    <div className="blog-content">
                                        <h3 className="blog-title">{blog.title}</h3>
                                        <p className="blog-summary">{blog.summary}</p>
                                        <div className="blog-meta">
                                            <span className="blog-author">{blog.author}</span> | <span className="blog-date">{blog.date}</span>
                                        </div>
                                        <Link to={`/single-blog`} className="read-more-btn">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPage