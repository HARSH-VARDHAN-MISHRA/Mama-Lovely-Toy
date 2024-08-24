import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section className="profile-section py-5">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-4">
            <div className="profile-sidebar">
              <div className="profile-userpic text-center">
                <img src="https://via.placeholder.com/150" alt="User" className="img-fluid rounded-circle" />
              </div>
              <div className="profile-usertitle text-center">
                <div className="profile-usertitle-name">
                  Harsh Vardhan
                </div>
                <div className="profile-usertitle-job">
                  harsh@example.com
                </div>
              </div>
              <div className="profile-usermenu">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link to="/profile" className="nav-link active">
                      <i className="fa fa-home"></i> Overview 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/orders" className="nav-link">
                      <i className="fa fa-shopping-bag"></i> My Orders 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                      <i className="fa fa-cog"></i> Account Settings 
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="col-md-8">
            <div className="profile-content">
              <h3 className="mb-4">Account Overview</h3>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Personal Information</h5>
                  {isEditing ? (
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" defaultValue="Harsh Vardhan" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" defaultValue="harsh@example.com" />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" defaultValue="+91 9876543220" />
                      </div>
                      <button type="button" className="btn btn-primary" onClick={toggleEdit}>Save Changes</button>
                    </form>
                  ) : (
                    <>
                      <p>Name: Harsh Vardhan</p>
                      <p>Email: harsh@example.com</p>
                      <p>Phone: +91 9876543220</p>
                      <button type="button" className="btn btn-secondary" onClick={toggleEdit}>Edit Profile</button>
                    </>
                  )}
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Recent Orders</h5>
                  <p>Order #12345 - Delivered</p>
                  <p>Order #67890 - In Transit</p>
                  <Link to="/orders" className="btn btn-secondary">View All Orders</Link>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Account Settings</h5>
                  <Link to="/settings" className="btn btn-secondary">Update Password</Link>
                  <Link to="/settings" className="btn btn-secondary ml-2">Email Preferences</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
