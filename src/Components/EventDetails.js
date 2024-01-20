import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Navbar from "./Navbar";

export default function EventDetails(props) {
  return (
    <div>
      <Navbar />
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
            src='https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1705467643%2Fsxrkxzv7hgexadicanbd.png'
            alt="Event Image"
          />
        </Card>
        <Card
          style={{ marginTop: "0.8rem", display: 'flex', flexDirection: 'column' }}
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
                Zomaland by Zomato Live | Hyderabad
              </Typography>
              <Typography gutterBottom sx component='div'>
                2024-01-31
              </Typography>
            </Stack>
            <Typography color='text.secondary' variant='body2'>
              Indulge in a vibrant food and music festival featuring top artists,
              delicious cuisines, and immersive experiences.
            </Typography>
          </Box>
          <Divider />

          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant='h6' component='div'>
              About
            </Typography>
            <Typography color='text.secondary' variant='body2'>
              Join us for an unforgettable experience at Zomaland by Zomato Live
              in Hyderabad. This event brings together the best in music,
              delicious cuisines, and immersive activities. Explore a world of
              flavors, enjoy live performances by top artists, and create lasting
              memories with friends and family.
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
          <Box sx={{ p: 2, alignSelf: 'flex-end' }}>
            <Button variant='contained' color='primary'>
              Register
            </Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
}
