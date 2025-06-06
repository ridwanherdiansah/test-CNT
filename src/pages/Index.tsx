import { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Auth from './auth/Login';
import PrivatePages from './private';

const MainPages = () => {

  return <BrowserRouter>
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Auth />} />

      {/* Protected route */}
      <Route path="/*" element={<PrivatePages />} />

    </Routes>
  </BrowserRouter>
};

export default MainPages;
