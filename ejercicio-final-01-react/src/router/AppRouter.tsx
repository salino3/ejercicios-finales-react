import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { detail, list, root } from './interfaces';
import { DetailPage, LoginPage, ListPage } from "../pages";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={root} element={<LoginPage />} />
        <Route path={list} element={<ListPage />} />
        <Route path={detail} element={<DetailPage />} />
      </Routes>
    </Router>
  );
}
