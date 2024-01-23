import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Home from "./Components/Home";
import UserProfile from "./Components/UserProfile";
import { Routes, Route ,Navigate} from "react-router-dom";
import EventDetails from "./Components/EventDetails";
import { getData } from "./util/storage";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
function App() {
  const token=getData("token");
  console.log("token",token)
  useEffect(()=>{
    console.log("Refres afte")
  },[token])

  return (
    <>
      {token && <Navbar />}
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/home'
          element={token ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/user/profile'
          element={token ? <UserProfile /> : <Navigate to='/login' />}
        />
        <Route
          path='/event-details/:eventId'
          element={token ? <EventDetails /> : <Navigate to='/login' />}
        />
      </Routes>
    </>
  );
}

export default App;
