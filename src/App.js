import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home_page'
import WritePage from './pages/write_page/index'
import MyPage from "./pages/my_page";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/write" element={<WritePage />}/>
        <Route path="/mypage" element={<MyPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;