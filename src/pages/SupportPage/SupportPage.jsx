import React, { useEffect } from 'react';
import './SupportPage.css';
import { Link } from 'react-router-dom';
import left from './side.jpg'

const SupportPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
        <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Contact Us</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className='contact-section'>
                
                <div className="contact-container container py-5">
                    <div className="first">
                        <div className="left">
                            <img src={left} alt="" />
                        </div>
                        <div className="right">
                            <h2>Contact Us</h2>
                            <p>We love hearing from our customers. If you have a question please get in touch and speak to one of our consultants.</p>
                            <p><span>Tel: </span>+91 123 456 7890 </p>
                            <p><span>Email: </span> info@mamalovelytoy.com</p>
                            <p><span>Address: </span>123 Lovely Street, Delhi, India</p>
                        </div>
                    </div>
                    <div className="second">
                        
                        <form action="" className='mt-5'>
                            <div className="same-field">
                                <div className="left">
                                    <label htmlFor="firstName">First Name*</label>
                                    <input type="text" name='firstName' id="name" />
                                </div>
                                <div className="right">
                                    <label htmlFor="lastName">Last Name*</label>
                                    <input type="text" name='lastName' id="surname" />
                                </div>
                            </div>
                            <div className="same-field">
                                <div className="left">
                                    <label htmlFor="email">First Email*</label>
                                    <input type="text" name='email' id="name" />
                                </div>
                                <div className="right">
                                    <label htmlFor="phoneNo">Phone number*</label>
                                    <input type="text" name='phoneNo' id="surname" />
                                </div>
                            </div>
                            <div className="same-field formessage">
                                <label htmlFor="message">Message*</label>
                                <textarea name="message" id="msg"></textarea>
                            </div>
                            <button type='submit' className='sendbtn'>Submit</button>
                        </form>
                    </div>
                    <div className="third">
                        {/* <AdressHomePage /> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SupportPage;
