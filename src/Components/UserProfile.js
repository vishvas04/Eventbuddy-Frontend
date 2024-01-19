import React from 'react';
import './UserProfile.css'; 

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-heading">
        <h1>Profile</h1>
      </div>

      <div className="profile-details">
        <div className="profile-item">
          <label>Name:</label>
          <p>Vishvas</p>
        </div>
        <div className="profile-item">
          <label>College:</label>
          <p>VNR</p>
        </div>
        <div className="profile-item">
          <label>Contact:</label>
          <p>xyz</p>
        </div>
        <div className="profile-item">
          <label>Email:</label>
          <p>XYZ@...</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
