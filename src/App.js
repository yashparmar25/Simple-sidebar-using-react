import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className=" box1 flex-col">
        <div className="col">
          <Sidebar />
        </div>

        <div className='data'>
          <Routes path="/" element={<Dashborad />}>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Skill" element={<Skill />}></Route>
            <Route path="/Project" element={<Project />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

function Dashborad() {
  return <div className='h1'>Welcome to the Dashboard
  </div>;
  
}


function Project() {
  return (
    <div className='mainpage'>
    <div className='h1'>Welcome to the Project Page</div>
    <p className='p'>You click button to reach That page</p>
    </div>

  );
}

function Home() {
  return (
    <div className='mainpage'>
  <div className='h1'>Welcome to the Home Page</div>
  <p className='p'>You click button to reach That page</p>
  </div>
  );
}

function Skill() {
  return (
    <div className='mainpage'>
    <div className='h1'>Welcome to the Skill Page</div>
    <p className='p'>You click button to reach That page</p>
    </div>

  );}

function Contact() {
  return (
    <div className='mainpage'>
    <div className='h1'>Welcome to the Contact Page</div>
    <p className='p'>You click button to reach That page</p>
    </div>

  );}