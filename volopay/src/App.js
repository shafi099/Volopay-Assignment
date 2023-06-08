import React from 'react';
import { Routes, Route } from "react-router-dom"
import All from './All';
import Your from './Your';
import Blocked from './Blocked'
import { mockApiResponse } from './mockApi';
import './App.css'
const App = () => {

  const cards = mockApiResponse.data;
  return (
    <>
     
       <Routes>
        
       <Route path="/" element={ <All cards={cards} /> } />
       <Route path="/Your" element={ <Your cards={cards} /> } />
       <Route path="/Blocked" element={ <Blocked cards={cards} /> } />
      </Routes>
    </>

  );
};

export default App;
