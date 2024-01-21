import React from 'react';
import {  useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import { useState,useEffect } from 'react';
import { token } from '../helper';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';
import Skeleton from "@mui/material/Skeleton";
const Home = () => {

  const navigate=useNavigate();
  const navigateEvents=(eventId)=>{
    
    navigate(`/event-details/${eventId}`)
  }
  const formatDate=(dateString)=>{
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString();
  }
  const [edata,setEData]=useState([]);
  const [loading, setLoading] = useState(true);
  const getData=async()=>{
    const response = await fetch("http://localhost:6001/api/events/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data=await response.json();
    setEData(data.data);
    setLoading(false);
    
  }
  useEffect(()=>{
    getData();
  },[])

  const renderSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 12; i++) {
      skeletons.push(
        <Grid key={`skeleton-${i}`} item xs={12} sm={6} md={4} lg={3}>
          <Card style={{ height: "100%" }}>
            <Skeleton variant='rectangular' height={140} />
            <CardContent
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <Skeleton variant='text' width={150} />
              </div>
              <div>
                <Skeleton variant='text' width={100} />
              </div>
            </CardContent>
            <CardContent>
              <Skeleton variant='text' />
            </CardContent>
          </Card>
        </Grid>
      );
    }
    return skeletons;
  };
  
  if(edata.length==0){
    console.log("null event")
    renderSkeletons()
  }
  return (
    <div style={{ paddingTop: "65px" }}>
      <Navbar />
      <Grid container spacing={3}>
        {loading
          ? renderSkeletons()
          : edata.map((event, idx) => (
              <Grid
                key={event.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                onClick={() => navigateEvents(event.id)}
              >
                <Card style={{ height: "100%" }}>
                  <CardMedia
                    component='img'
                    height='140'
                    image={event.logo.original.url}
                    alt={event.name.text}
                  />
                  <CardContent
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <Typography variant='h6'>{event.name.text}</Typography>
                    </div>
                    <div>
                      <Typography variant='subtitle1'>
                        {formatDate(event.start.local)}
                      </Typography>
                    </div>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {event.summary}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

export default Home;
