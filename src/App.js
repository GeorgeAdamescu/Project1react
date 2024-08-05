import logo from './logo.svg';
 import './App.css';
import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import { useState } from "react";
import {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import About from './pages/About';
import Error from './pages/Error';
const App = () => {



return (
<Routes>
<Route exact path='/' element={<Home/>}/>
<Route exact path='/about' element={<About/>}/>
<Route exact path='*' element={<Error/>}/>
</Routes>
);

}
export default App;
