
import { Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
const User = ({name}) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap:"1.2rem"
          // alignItems: "center",
        }}
      >
        <Avatar>{name[0]}</Avatar>
        <Typography
         
          variant='h5'
          fontWeight='500'
          
        >
          {name}
        </Typography>
      </div>
    );
}
export default User;