import Character from 'components/Character';
import Characters from 'components/Characters';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </Router>
  );
};

export default App;
