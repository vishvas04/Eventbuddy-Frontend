import Registration from "./Components/Registration";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import UserProfile from "./Components/UserProfile";
import Ranbir from "./Components/Ranbir";
import Zomaland from "./Components/Zomaland";
import Concert from "./Components/Concert";
import Test from "./Components/Test";
import Marathon from "./Components/Marathon";
import Comic from "./Components/Comic";
import {Routes,Route} from "react-router-dom"
// import {Typography} from '@material-ui/core';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element = {<Login/>} />
        <Route path ="/home" element = {<MainPage />} />
        <Route path ="/user" element = {<UserProfile />} />
        <Route path ="/Ranbir" element = {<Ranbir />} />
        <Route path ="/Zomaland" element = {<Zomaland />} />
        <Route path ="/Concert" element = {<Concert />} />
        <Route path ="/Test" element = {<Test />} />
        <Route path ="/Marathon" element = {<Marathon />} />
        <Route path ="/Comic" element = {<Comic />} />
      </Routes>
    </>
  );
}

export default App;