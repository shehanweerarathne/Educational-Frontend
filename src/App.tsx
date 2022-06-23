import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Header from "./components/common/heading/Header";
import Home from "./components/home/Home";
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
            <br/>
            <Routes>
                <Route path={'/'} element={<Home/>} />
                <Route path={'/about'} element={<About/>} />
            </Routes>
        </Router>

    </div>
  );
}

export default App;
