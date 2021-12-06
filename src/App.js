import React from 'react';
import './App.css';
import Header from './componets/Header';
import Insert from './componets/Insert';
import Navbar from './componets/Navbar';
import Search from "./componets/Search";
import Workout from './componets/Workout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header></Header>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'></Route>
        <Route path='/insert' element={<Insert></Insert>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='/workout' element={<Workout></Workout>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
