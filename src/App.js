import Registration from "./Components/Registration";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import UserProfile from "./Components/UserProfile";
import {Routes,Route} from "react-router-dom"
import EventDetails from "./Components/EventDetails";
// import {Typography} from '@material-ui/core';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element = {<Login/>} />
        <Route path ="/home" element = {<MainPage />} />
        <Route path ="/user" element = {<UserProfile />} />
        <Route path ="/event-details" element = {<EventDetails />} />
      </Routes>
    </>
  );
}

export default App;