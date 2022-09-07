import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

// 재현님의 컴포넌트
import LoginJaehyeon from './pages/jaehyeon/Login/Login';
import MainJaehyeon from './pages/jaehyeon/Main/Main';
// 지윤님의 컴포넌트
import LoginJieyoon from './pages/jieyoon/Login/Login';
import MainJieyoon from './pages/jieyoon/Main/Main';
import MemberJieyoon from './pages/jieyoon/Member/Member';
// 진수님의 컴포넌트
import LoginJinsoo from './pages/jinsoo/Login/Login';
import MainJinsoo from './pages/jinsoo/Main/Main';
// 주원님의 컴포넌트
import LoginJuwon from './pages/juwon/Login/Login';
import MainJuwon from './pages/juwon/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginJaehyeon />} />
        <Route path="/Main/jaehyeon" element={<MainJaehyeon />} />
        <Route path="/Login/jieyoon" element={<LoginJieyoon />} />
        <Route path="/Main/jieyoon" element={<MainJieyoon />} />
        <Route path="/Member/jieyoon" element={<MemberJieyoon />} />
        <Route path="/Login/jinsoo" element={<LoginJinsoo />} />
        <Route path="/Main/jinsoo" element={<MainJinsoo />} />
        <Route path="/Login/juwon" element={<LoginJuwon />} />
        <Route path="/Main/juwon" element={<MainJuwon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
