import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import { Cartographer } from './Cartographer';
import { Northridge } from './realms/Northridge';
import { Ashbrook } from './realms/Ashbrook';

export const Game = () => {
  const navigate = useNavigate();

  const handleSubmit = (realm: string) => {
    navigate(`/${realm}`)
  }
  return (
    <div>
      <Routes>
        <Route path='/northridge' element={<Northridge />} />
        <Route path='/ashbrook' element={<Ashbrook />}/>
      </Routes>
      < Cartographer />
      <button onClick={() => handleSubmit('northridge')}>Northridge</button>
      <button onClick={() => handleSubmit('ashbrook')}>Ashrbook</button>
    </div>
  )
}
