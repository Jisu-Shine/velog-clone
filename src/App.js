import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home_page'


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route> 
      </Routes>
    </div>
  );
}

export default App;