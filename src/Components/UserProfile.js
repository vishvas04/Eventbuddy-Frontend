// UserProfile.js
import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Avatar,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Grid,
} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './UserProfile.css';

const interestImages = {
  Dancing: 'https://rukminim2.flixcart.com/image/400/480/ky4qgsw0/sticker/l/v/r/medium-dance-wall-decals-wall-stickers-for-dance-girl-dancing-original-imagafg5xehnq4jz.jpeg?q=20&crop=false',
  Singing: 'https://classroomclipart.com/image/static7/preview2/young-girl-standing-on-stage-holding-microphone-singing-surround-58786.jpg',
  'Space Exploration': 'https://media.istockphoto.com/id/1353874144/photo/astronaut-in-outer-space-spaceman-with-starry-and-galactic-background-sci-fi-digital-wallpaper.jpg?s=300',
  'Writing Blogs': 'https://www.aprompt.co.uk/uploads/blog/bloggers-wiltshire.jpge',
  Sports: 'https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40.jpg',
  // Add more interests and their corresponding images
};

const eventImages = {
  'Event 1': 'URL_TO_EVENT_IMAGE_1',
  'Event 2': 'URL_TO_EVENT_IMAGE_2',
  'Event 3': 'URL_TO_EVENT_IMAGE_3',
  // Add more events and their corresponding images
};

const UserProfile = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [interests, setInterests] = useState([]);
  const [events, setEvents] = useState(['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6', 'Event 7', 'Event 8','Event 9']); // Placeholder for registered events

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

  const handleDeleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
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
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
              variant="outlined"
              margin="normal"
              sx={{ background: '#ffffff', flex: '75%', marginRight: '5%' }}
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
            <Typography variant="h6" gutterBottom>
              Registered Interests
            </Typography>
          </div>
          <div className='box1' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {interests.map((interest, index) => (
              <Paper key={index} style={{ width: '150px', margin: '10px', padding: '10px', borderRadius: '15px', position: 'relative', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                <div style={{ backgroundImage: `url(${interestImages[interest]})`, backgroundSize: 'cover', height: '80px', borderRadius: '10px', marginBottom: '10px' }} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="body1" style={{ textAlign: 'center', fontWeight: 'bold', color: 'red', flex: 1 }}>{interest}</Typography>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteInterest(index)}
                    style={{ color: '#000000' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Paper>
            ))}
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper
          elevation={10}
          style={{
            padding: '20px',
            background: 'linear-gradient(45deg, #4d86f7 30%, #2a5bb1 90%)',
            color: '#ffffff',
            borderRadius: '20px',
            marginTop: '20px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Registered Events
          </Typography>
          <div className='box1' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {events.map((event, index) => (
              <Paper key={index} style={{ width: '150px', margin: '10px', padding: '10px', borderRadius: '15px', position: 'relative', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }}>
                <div style={{ backgroundImage: `url(${eventImages[event]})`, backgroundSize: 'cover', height: '80px', borderRadius: '10px', marginBottom: '10px' }} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-evenlyx' }}>
                  <Typography variant="body1" style={{ textAlign: 'center', fontWeight: 'bold', color: 'red', flex: 1 }}>{event}</Typography>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDeleteEvent(index)}
                    style={{ color: '#000000', marginTop: '5px' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Paper>
            ))}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
