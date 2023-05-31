import React from 'react';
import {Route, Routes} from "react-router-dom";
import PiratasForm from './Components/PiratasForm';
import Header from './Components/Header';
import Piratas from './Components/Piratas';
import PiratasDetail from './Components/PiratasDetail';


const Root=() =>{
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Piratas />} />
        <Route path='/pirate'element={<PiratasForm/>}/>
        <Route path='/pirate/:id' element={<PiratasDetail/>}/>
      </Routes>
    </>
  );
};

export default Root;