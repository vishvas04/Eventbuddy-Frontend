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
// import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import './UserProfile.css';

const UserProfile = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [interests, setInterests] = useState([]);
  const [events, setEvents] = useState(['Event 1', 'Event 2', 'Event 3', 'Event 4','Event 5','Event 6','Event 6','Event 6']); // Placeholder for registered events

  const handleAddInterest = () => {
    if (selectedInterest.trim() !== '') {
      setInterests([...interests, selectedInterest.trim()]);
      setSelectedInterest('');
    }
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

          <div>
            <Typography variant="h6" gutterBottom style={{ flex: '75%' }}>
              Add Interests
            </Typography>
            <Select
              className="select1 "
              // label="Select Interest"
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
              <MenuItem value="Coding">Sports</MenuItem>
              {/* Add more interests as needed */}
            </Select>
            <Button variant="contained" onClick={handleAddInterest} className='btn1'>Add</Button>
          </div>

          <Divider style={{ margin: '20px 0', background: '#ffffff' }} />

          <div>
            <Typography variant="h6" gutterBottom>
              Registered Interests
            </Typography>
            <List>
              {interests.map((interest, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  // sx={{ background: 'rgba(255, 255, 255, 0.1)', marginBottom: '5px', borderRadius: '5px' }}
                >
                  <ListItemText primary={interest} />
                  <ListItemSecondaryAction>
                    {/* You can add options like delete or edit here */}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
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
          <List>
            {events.map((event, index) => (
              <ListItem
                key={index}
                disableGutters
                // sx={{ background: 'rgba(255, 255, 255, 0.1)', marginBottom: '5px', borderRadius: '5px' }}
              >
                <ListItemText primary={event} />
                <ListItemSecondaryAction>
                  {/* You can add options like unregister or view details here */}
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
