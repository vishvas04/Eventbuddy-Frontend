import React from "react";
import {
  Box,
  Card,
  Typography,
  Stack,
  Skeleton,
  Divider,
  Button,
  Chip,
} from "@mui/material";

const EventDetailsSkeleton = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
    >
      <Card variant='outlined' sx={{ maxWidth: 480, maxHeight: 220 }}>
        <Skeleton variant='rectangular' width={480} height={220} />
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
              <Skeleton variant='text' width={350} />
            </Typography>
            <Typography gutterBottom sx component='div'>
              <Skeleton variant='text' width={100} />
            </Typography>
          </Stack>
          <Typography color='text.secondary' variant='body2'>
            <Skeleton variant='text' />
          </Typography>
        </Box>
        <Divider />

        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant='h6' component='div'>
            About
          </Typography>
          <Typography color='text.secondary' variant='body2'>
            <Skeleton variant='text' />
          </Typography>
        </Box>

        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant='body2'>
            Interest
          </Typography>
          <Stack direction='row' spacing={1}>
            <Chip
              color='primary'
              label={<Skeleton variant='text' width={50} />}
              size='small'
            />
          </Stack>
        </Box>

        <Divider />
        <Box sx={{ p: 2, alignSelf: "flex-end" }}>
          <Skeleton variant='rectangular' width={100} height={36} />
        </Box>
      </Card>
    </Box>
  );
};

export default EventDetailsSkeleton;
