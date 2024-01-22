// UserProfile.js
import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Avatar,
  Select,
  MenuItem,
  Chip,
  Divider,
  Grid,
} from '@mui/material';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import './UserProfile.css';
const eventImages = {
  'Event 1': 'URL_TO_EVENT_IMAGE_1',
  'Event 2': 'URL_TO_EVENT_IMAGE_2',
  'Event 3': 'URL_TO_EVENT_IMAGE_3',
  // Add more events and their corresponding images
};

const UserProfile = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [interests, setInterests] = useState([]);
  const [events, setEvents] = useState(['vishvas']); // Placeholder for registered events

  const handleAddInterest = () => {
    if (selectedInterest.trim() !== '') {
      // Check if the interest already exists in the array
      if (!interests.includes(selectedInterest.trim())) {
        setInterests([...interests, selectedInterest.trim()]);
      }
      setSelectedInterest('');
    }
  };

  const handleDeleteInterest = (index) => {
    const newInterests = [...interests];
    newInterests.splice(index, 1);
    setInterests(newInterests);
  };
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={10}
          style={{
            padding: '20px',
            background: 'linear-gradient(45deg, #4d86f7 30%, #2a5bb1 90%)',
            color: '#ffffff',
            borderRadius: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt="User Avatar" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" sx={{ width: 100, height: 100, margin: '20px' }} />
            <Typography variant="h5" align="center" gutterBottom>
              Vishvas
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" gutterBottom>
              Hyderabad
            </Typography>
          </div>

          <Divider style={{ margin: '20px 0', background: '#ffffff' }} />

          <div className='interest'>
            <Typography variant="h6" gutterBottom style={{ flex: '75%' }}>
              Add Interests
            </Typography>
            <Select
              className="select1"
              // style={{width:'400px'}}
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
              variant="outlined"
              margin="normal"
              sx={{ background: '#ffffff', flex: '12%', marginRight: '5%' }}
            >
              <MenuItem value="Dancing">Dancing</MenuItem>
              <MenuItem value="Singing">Singing</MenuItem>
              <MenuItem value="Space Exploration">Space Exploration</MenuItem>
              <MenuItem value="Writing Blogs">Writing Blogs</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
            </Select>
            <Button variant="contained" onClick={handleAddInterest} className='btn1'>Add</Button>
          </div>

          <Divider style={{ margin: '20px 0', background: '#ffffff' }} />

          <div>
            <Typography variant="h6">
              Registered Interests
            </Typography>
          </div>
          <div className='box1' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {interests.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                onDelete={() => handleDeleteInterest(index)}
                color="primary" // Change color here
                size="medium" // Change size here
                style={{ margin: '5px' }}
              />
            ))}
          </div>
        </Paper>
      </Grid>

      {events.length > 0 && (
        <Grid item xs={12} md={6} justifyContent="center" alignItems="center" style={{ height: '70vh' }}>
          <Paper
            elevation={10}
            style={{
              padding: '20px',
              background: '',
              color: '#ffffff',
              borderRadius: '20px',
              marginTop: '20px',
            }}
          >
            <Typography variant="h6" gutterBottom style={{color:'red'}}>
              Registered Events
            </Typography>
            <div
              className='box1'
              style={{
                overflowY: 'auto',
                maxHeight: '399px', // Set the maximum height here
              }}
            >
              {events.map((event, index) => (
                <Paper key={index} style={{ margin: '10px', padding: '10px', borderRadius: '15px', position: 'relative', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)', height: '359px' }}>
                  <div style={{ backgroundImage: `url(${eventImages[event]})`, backgroundSize: 'cover', height: '200px', borderRadius: '10px', marginBottom: '10px' }} />
                  <div style={{ textAlign: 'center' }}>
                    <Typography variant="body1" style={{ fontWeight: 'bold', color: 'red' }}>{event}</Typography>
                  </div>
                </Paper>
              ))}
            </div>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default UserProfile;