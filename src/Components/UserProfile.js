// UserProfile.js
import React, { useState ,useEffect} from 'react';
import {
  Paper,
  Typography,
  Avatar,
  Select,
  MenuItem,
  Chip,
  Divider,
  Grid,
  Box,
  Card,
  Stack,
} from '@mui/material';
import Button from '@mui/material/Button';
import { getData } from '../util/storage';
import './UserProfile.css';



const UserProfile = () => {
  const [selectedInterest, setSelectedInterest] = useState('');
  const [interests, setInterests] = useState();
  const [events, setEvents] = useState([]); // Placeholder for registered events
  const[userData,setUserData]=useState()
  const userId=getData("userId")
  const token=getData("token")
  const getUserData=async()=>{
    const response = await fetch(
      `http://localhost:6001/api/user/${userId}`,{
        method:"GET",
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );
    
    const data=await response.json();
    setUserData(data.user)
    setEvents(data.user.registeredEvents)
    
  }
  const getInterests=async()=>{
    const response = await fetch(`http://localhost:6001/api/user/${userId}/interests`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data=await response.json();
    console.log("data",data)
    setInterests(data.interests)
  }
  useEffect(()=>{
    getUserData()
    getInterests()
  },[])

  const handleAddInterest = async () => {
    
    if (selectedInterest.trim() !== '') {
      const response = await fetch(
        `http://localhost:6001/api/user/${userId}/interest`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            interests:[selectedInterest.trim()]
          })
        }
      );
      const data=await response.json();
      console.log("data",data)
      if (!interests.includes(selectedInterest.trim())) {
        setInterests((prevInterests) => [
          ...prevInterests,
          selectedInterest.trim(),
        ]);
        
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
    <Grid
      container
      spacing={3}
      justifyContent='center'
      alignItems='center'
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} md={6}>
        <Paper
          elevation={10}
          style={{
            padding: "20px",
            background: "linear-gradient(45deg, #4d86f7 30%, #2a5bb1 90%)",
            color: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt='User Avatar'
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
              sx={{ width: 100, height: 100, margin: "20px" }}
            />
            <Typography variant='h5' align='center' gutterBottom>
              {userData?.firstName} {userData?.lastName}
            </Typography>
          </div>

          <Divider style={{ margin: "20px 0", background: "#ffffff" }} />

          <div className='interest'>
            <Typography variant='h6' gutterBottom style={{ flex: "75%" }}>
              Add Interests
            </Typography>
            <Select
              className='select1'
              // style={{width:'400px'}}
              value={selectedInterest}
              onChange={(e) => setSelectedInterest(e.target.value)}
              variant='outlined'
              margin='normal'
              sx={{
                background: "#ffffff",
                width: "150px",
                height: "30px",
                marginRight: "5%",
              }}
            >
              <MenuItem value='sports'>Sports</MenuItem>
              <MenuItem value='music'>Music</MenuItem>
              <MenuItem value='dance'>Dance</MenuItem>
              <MenuItem value='proramming'>Programming</MenuItem>
              <MenuItem value='comedy'>Comedy</MenuItem>
            </Select>
            <Button
              variant='contained'
              onClick={handleAddInterest}
              className='btn1'
              sx={{ fontSize: "12px", padding: "6px 12px", width: "100px" }}
            >
              Add
            </Button>
          </div>

          <Divider style={{ margin: "20px 0", background: "#ffffff" }} />

          <div>
            <Typography variant='h6'>Registered Interests</Typography>
          </div>
          <div
            className='box1'
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {interests?.map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                onDelete={() => handleDeleteInterest(index)}
                color='primary' // Change color here
                size='medium' // Change size here
                style={{ margin: "5px" }}
              />
            ))}
          </div>
        </Paper>
      </Grid>

      {events.length > 0 && (
        <Grid
          item
          xs={12}
          md={6}
          justifyContent='center'
          alignItems='center'
          style={{ height: "70vh" ,border:'2px black'}}
        >
          
            <Typography variant='h6' textAlign='center'gutterBottom>
              Registered Events
            </Typography>
            <div
              className='box1'
              style={{
                overflowY: "auto",
                maxHeight: "450px", // Set the maximum height here
              }}
            >
              {events.map((event, index) => (
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                  minHeight='20vh'
                >
                  <Card
                    variant='outlined'
                    sx={{ maxWidth: 550, maxHeight: 220 }}
                    
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "fit",
                      }}
                      src={event.imgUrl}
                      alt='Event Image'
                    />
                  </Card>
                  <Card
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginBottom:"30px"
                    }}
                    variant='outlined'
                    sx={{ maxWidth: 550, maxHeight: 420 }}

                  >
                    <Box sx={{ p: 2 }}>
                      <Stack
                        direction='row'
                        justifyContent='space-between'
                        alignItems='center'
                      >
                        <Typography gutterBottom variant='h6' component='div'>
                          {event.eventName}
                        </Typography>
                      </Stack>
                      <Typography color='text.secondary' variant='body2'>
                        {event.summary}
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              ))}
            </div>
          
        </Grid>
      )}
    </Grid>
  );
};

export default UserProfile;