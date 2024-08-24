import React from 'react';
import { Link } from 'react-router-dom';
import './ConfirmOrder.css';

const ConfirmOrder = () => {
  return (
    <>

      <section className="confirm-order-section py-5">
        <div className="container">
          <div className="row">
            {/* Confirmation Message */}
            <div className="col-md-12 text-center">
              <h2><i class="fa-solid fa-circle-check"></i> Thank You for Your Order! </h2>
              <p>Your order has been placed successfully. You will receive a confirmation email shortly.</p>
            </div>

            {/* Order Summary */}
            <div className="col-md-6 mx-auto mb-2">
              <div className="checkout-order-summary">
                  <p>Payment Method: <span>Cash on Delivery</span></p>
                  <p>Transaction ID: <span>1234567890</span></p>
                  <p>Total: <span>₹Total Amount</span></p>
              </div>
            </div>

            {/* Order Actions */}
            <div className="col-md-12 text-center view-more-container py-0">
              <Link to="/" className=" viewMoreBtn">Continue Shopping</Link> &nbsp;
              <Link to="/order-history" className="viewMoreBtn">View Order History</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConfirmOrder;
