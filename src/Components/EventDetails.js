import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button ,Snackbar, snackbarClasses} from "@mui/material";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import EventDetailsSkeleton from "./EventDetailsSkeleton";
import RegisteredUsers from "./RegisteredUsers";
import { getData } from "../util/storage";
const EventDetails=()=> {
  const{eventId}=useParams();
  const userId=getData("userId");
  const token=getData("token")
  const[eventData,setEventData]=useState();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const[users,setUsers]=useState([])
  const[flag,setFlag]=useState(false);
  const getEventData=async()=>{
      const response = await fetch(
        `http://localhost:6001/api/events/${eventId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data=await response.json();
      
      setEventData(data.data)
      
  }
  const usersRegistered=async ()=>{
    const response = await fetch(
      `http://localhost:6001/api/user/events/${eventId}/registered-users`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWEyNTBjZDdjMzcyNWIwYzUxYjM0MCIsImlhdCI6MTcwNTY4MTY1Mn0.5OXSgT24ZURzM8HLZB1cOnamtmR7kDM_8V9a6HIaRxk`,
         
        },
      }
    );
    const data=await response.json();
    const filteredUsers = data.users.filter(
      (user) => user._id !== userId
    );
    setUsers(filteredUsers);
    const check = data.users.find((user) => user._id == userId);
    if(check)
    {
      
      setFlag(true)
    }
  
  }
  console.log("users",users)
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };
  useEffect(()=>{ 
    getEventData()
    usersRegistered();

  },[eventId])
  
  const registerForEvent=async()=>{
  
    const response = await fetch(
      `http://localhost:6001/api/user/${userId}/register-for-event`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWEyNTBjZDdjMzcyNWIwYzUxYjM0MCIsImlhdCI6MTcwNTY4MTY1Mn0.5OXSgT24ZURzM8HLZB1cOnamtmR7kDM_8V9a6HIaRxk`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          eventId: eventData.id,
          eventName: eventData.name.text,
        }),
      }
    );
    if (response.ok) {
      setIsSnackbarOpen(true);
    }
    const data=response.json();
    
  }
  return (
    <div style={{ paddingTop: "35px" }}>
      <Navbar />
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        {eventData ? (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            minHeight='100vh'
          >
            <Card variant='outlined' sx={{ maxWidth: 550, maxHeight: 220 }}>
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "fit",
                }}
                src={`${eventData?.logo?.original?.url}`}
                alt='Event Image'
              />
            </Card>
            <Card
              style={{
                marginTop: "0.8rem",
                display: "flex",
                flexDirection: "column",
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
                    {eventData?.name?.text}
                  </Typography>
                  <Typography gutterBottom sx component='div'>
                    {new Date(eventData?.start.local).toLocaleDateString()}
                  </Typography>
                </Stack>
                <Typography color='text.secondary' variant='body2'>
                  {eventData?.summary}
                </Typography>
              </Box>
              <Divider />

              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant='h6' component='div'>
                  About
                </Typography>
                <Typography color='text.secondary' variant='body2'>
                  {eventData?.description.text}
                </Typography>
              </Box>

              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant='body2'>
                  Interest
                </Typography>
                <Stack direction='row' spacing={1}>
                  <Chip color='primary' label='Music' size='small' />
                </Stack>
              </Box>

              <Divider />
              <Box sx={{ p: 2, alignSelf: "flex-end" }}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={registerForEvent}
                  disabled={flag}
                >
                  {!flag ? "Register" : "Registered"}
                </Button>
              </Box>
            </Card>
            <Snackbar
              open={isSnackbarOpen}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message='Successfully registered for the event!'
            />
          </Box>
        ) : (
          <EventDetailsSkeleton />
        )}
        {users.length > 0 && (
          <Box
            height='100%'
            padding='3rem'
            border='1px solid #ccc' // Add a border to the RegisteredUsers box
          >
            <RegisteredUsers users={users} />
          </Box>
        )}
      </div>
    </div>
  );
  
}
export default EventDetails;