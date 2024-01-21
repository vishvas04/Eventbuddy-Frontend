import React from 'react';
import './UserProfile.css'; 

const UserProfile = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    // setPersonName([...personName],event);
    // console.log(personName)
    // setPersonName(...personName,event);
    // setPersonName((prevValues) => [...prevValues, event]);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(personName)
  };
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
