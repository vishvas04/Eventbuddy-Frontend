import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import EventDetailsSkeleton from "./EventDetailsSkeleton";
const EventDetails=()=> {
  const{eventId}=useParams();

  const[eventData,setEventData]=useState();
  const getData=async()=>{
      const response= await fetch(
        `https://www.eventbriteapi.com/v3/events/${eventId}/`,
        {
          headers: {
            Authorization: `Bearer FH4Y2J7QVMBDJIXBB77L`,
          },
        }
      );
      const data=await response.json();
      console.log("data",data)
      setEventData(data)
      
  }
  useEffect(()=>{ 
    getData()

  },[eventId])
  
  return (
    <div style={{ paddingTop: "35px" }}>
      <Navbar />
      {eventData?
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        minHeight='100vh'
      >
        <Card variant='outlined' sx={{ maxWidth: 550, maxHeight: 220 }}>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
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
                {(eventData?.start.local)}
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
            <Button variant='contained' color='primary'>
              Register
            </Button>
          </Box>
        </Card>
      </Box>
      :<EventDetailsSkeleton/>
        }
    </div>
  );
}
export default EventDetails;