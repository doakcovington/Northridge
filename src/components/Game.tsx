import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import { Cartographer } from './Cartographer';
import { Northridge } from './Northridge';

export const Game = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/northridge')
  }
  return (
    <div>
      <Routes>
        <Route path='/northridge' element={<Northridge />} />
      </Routes>
      < Cartographer />
      <button onClick={() => handleSubmit()}>Northridge</button>
    </div>
  )
}
