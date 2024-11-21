import React from 'react';
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import SignIn from './Signin';
import Signup from './signup';
import Profile from './profile';
import VenueInfo from './VenueInfo';
import OrgProfile from './OrgProfile';
function App() {
  return (
   <>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='profile' element={<Profile/>}/>
      {/* <Route path='orgprofile' element={<OrgProfile/>}/> */}
      <Route path='venuedetails/:id' element={<VenueInfo/>}/>
     </Routes>
   </>
  );
}
export default App;