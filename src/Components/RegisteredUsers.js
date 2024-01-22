import { Box, Typography, useTheme } from "@mui/material";
import User from "./User";

const RegisteredUsers=(props)=>{
    console.log("users",props.users)
   
    return (
      <div>
        <Typography variant='h5' fontWeight='500' sx={{ mb: "1.5rem" }}>
          Registered Users
        </Typography>
        <Box display='flex' flexDirection='column' gap="1.5rem">
          {props.users.map(
            (user, index) =>
              user._id !== "65aa0371666d044403dc5f89" && (
                <User
                  key={user._id}
                  name={`${user.firstName} ${user.lastName}`}
                />
              )
          )}
        </Box>
      </div>
    );
    
}
export default RegisteredUsers;