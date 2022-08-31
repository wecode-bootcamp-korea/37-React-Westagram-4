import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 재현님의 컴포넌트
import LoginJaehyeon from "./pages/jaehyeon/Login/Login";
import MainJaehyeon from "./pages/jaehyeon/Main/Main";
// 지윤님의 컴포넌트
import LoginJieyoon from "./pages/jieyoon/Login/Login";
import MainJieyoon from "./pages/jieyoon/Main/Main";
// 진수님의 컴포넌트
import LoginJinsoo from "./pages/jinsoo/Login/Login";
import MainJinsoo from "./pages/jinsoo/Main/Main";
// 주원님의 컴포넌트
import LoginJuwon from "./pages/juwon/Login/Login";
import MainJuwon from "./pages/juwon/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginJaehyeon />} />
        <Route path="/Main" element={<MainJaehyeon />} />
        <Route path="/Login" element={<LoginJieyoon />} />
        <Route path="/Main" element={<MainJieyoon />} />
        <Route path="/Login" element={<LoginJinsoo />} />
        <Route path="/Main" element={<MainJinsoo />} />
        <Route path="/Login" element={<LoginJuwon />} />
        <Route path="/Main" element={<MainJuwon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
