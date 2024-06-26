import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Frontpage from './components/Frontpage';
import Login from './components/Login';
import SignUp from "./components/Register";
import SignUpWorker from './components/Registerworker';
import SignInworker from './components/Loginworker';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainuser from './components/Mainuser';
import Perperson from './components/Perperson';
import UserCard from './components/Card';
import Plumberpages from './components/Plumberpages';
import MediaCover from './components/Image';
import Bookingcomponents from './components/Bookingcomponents';
import Updatepage from './components/Profilepage';
import Account from './components/Accountdetails';
import Updatedetails from './components/Updatedetails';
import Workerrequested from './components/Workerrequested';
import uservalaCard from './components/UserCard';
import Otp from './components/Otp';
import JobCard from './components/CardForJobDetail';
import Jobdetail from './components/Jobdetail';
import Otherdetailsworker from './components/Otherdetailsworker';
import Extradetailsform from './components/Extradetailsform';
import Addressworker from './components/Addressworker';
import Uploadfilesworker from './components/Uploadfilesworker';
import Profileworker from './components/Profileworker';
import Workerdetailsupdate from './components/Workerdetailsupdate';
import Accountdetails from './components/Accountdetails';
import BaseModalDialog from './components/BaseModalDialog';
import Unavailablepage from './components/Unavailablepage';
import Sidebarworker from './components/Sidebarworker';
import Otpuser from './components/Otpuser';
import WorkersByProfession from './components/WorkerByProfession';
import Workercard from './components/Workercard';
import Useraddress from './components/Useraddress';
import Chatbox from './components/Chat';
import Requestsuser from './components/Requestsuser';

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/loginuser' element={<Login />} />
          <Route path='/Registeruser' element={<SignUp />} />
          <Route path='/registerworker' element={<SignUpWorker />} />
          <Route path='/loginworker' element={<SignInworker />} />
           <Route path='/otpuser' element={<Otpuser />} />
           <Route path='/otpworker' element={<Otp />} />
            <Route path='/extradetailsform' element={<Extradetailsform />} />
            <Route path='/otherdetails' element={<Otherdetailsworker />} />
            <Route path='/mainpage' element={<Mainuser />} />
          <Route path='/categories/:profession' element={<Plumberpages />} />
          <Route path='/chatbox' element={<Chatbox />} />
           <Route path='/request/:id' element={<Perperson />} />
          <Route path='/requesting/:id' element={<Bookingcomponents />} />
          <Route path='/profileuser' element={<Account />} /> 
          <Route path='/unavailable' element={<Unavailablepage />} />
          <Route path='/requestsbyuser' element={<Requestsuser />} />
          <Route path='/workerprofile' element={<Profileworker />} />
          <Route path='/mainworkerpage' element={<Workerrequested />} />
          <Route path='/updateworkerprofile' element={<Workerdetailsupdate />} />
          <Route path='/updatedetails' element={<Updatedetails />} />
          <Route path='/addressuser/:userId' element={<Addressworker />} />
          <Route path='/Useraddress' element={<Useraddress />} />
          <Route path='/viewingrequest/:id' element={<Jobdetail />} />
          <Route path='/addressworker' element={<Addressworker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
