import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './main';
import DetalleP from './DetalleP';
import * as React from 'react';

const SetVideos = () => {
  return (
    <Router>
      <Routes>
        <Route path="/question/:q" element={<DetalleP />} />
        <Route path="/" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default SetVideos;
