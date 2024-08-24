import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Checkout.css';

const statesAndCities = {
    "Delhi": ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Karnataka": ["Bengaluru", "Mysuru", "Hubballi", "Belagavi", "Mangaluru"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
    "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Bikaner"],
    "Punjab": ["Chandigarh", "Amritsar", "Ludhiana", "Patiala", "Jalandhar"],
    "Haryana": ["Gurugram", "Faridabad", "Hisar", "Ambala", "Karnal"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Munger", "Muzaffarpur"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
    "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kottayam", "Alappuzha"],
    "Andhra Pradesh": ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
    "Telangana": ["Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam"],
    "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Durg", "Korba"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Berhampur", "Rourkela", "Sambalpur"],
    "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu", "Solan"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
    "Sikkim": ["Gangtok", "Namchi", "Pelling", "Mangan", "Rangpo"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Bomdila", "Ziro"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Phek"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Baptist"],
    "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Kakching", "Senapati"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia"]
};


const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity(''); // Reset city when state changes
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/order-confirm')
    };
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        navigate('/order-confirm')
    };

    return (
        <>
            <section className="bread">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <h1>Checkout</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                </div>
            </section>

            <section className="checkout-section py-5">
                <div className="container">
                    <div className="row">
                        {/* Delivery Details */}
                        <div className="col-md-6 mb-4">
                            <h3>Delivery Details</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">State</label>
                                    <select id="state" className="form-control" value={selectedState} onChange={handleStateChange} required>
                                        <option value="">Select State</option>
                                        {Object.keys(statesAndCities).map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <select id="city" className="form-control" value={selectedCity} onChange={handleCityChange} disabled={!selectedState} required>
                                        <option value="">Select City</option>
                                        {selectedState && statesAndCities[selectedState].map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Enter your address" value={address} onChange={handleAddressChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" required />
                                </div>
                                
                            </form>
                            {address && (
                                <div className="address-display mt-4">
                                    <h4>Address:</h4>
                                    <p>{address}, {selectedCity}, {selectedState}</p>
                                </div>
                            )}
                        </div>

                        {/* Payment Information */}
                        <div className="col-md-6 mb-4">
                            <h3>Payment Information</h3>
                            <div className="payment-options">
                                <div className="payment-option">
                                    <input 
                                        type="radio" 
                                        id="cod" 
                                        name="paymentMethod" 
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={handlePaymentChange}
                                    />
                                    <label htmlFor="cod">Cash on Delivery</label>
                                </div>
                                <div className="payment-option">
                                    <input 
                                        type="radio" 
                                        id="razorpay" 
                                        name="paymentMethod" 
                                        value="razorpay"
                                        checked={paymentMethod === 'razorpay'}
                                        onChange={handlePaymentChange}
                                    />
                                    <label htmlFor="razorpay">Razorpay Online Payment</label>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="order-summary">
                                <h3>Order Summary</h3>
                                <div className="summary-details">
                                    <p>Items: <span>₹Total Price</span></p>
                                    <p>Shipping: <span>₹Shipping Cost</span></p>
                                    <p>Total: <span>₹Total Amount</span></p>
                                </div>
                                <button className="btn btn-primary btn-block" type="submit" onClick={handlePlaceOrder}>Place Order</button>
                            </div>
                        </div>

                       
                       
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
