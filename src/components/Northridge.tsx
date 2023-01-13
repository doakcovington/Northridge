import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectName, selectStatus, selectSurveyed } from '../features/realms/northridgeSlice';
import { incrementStatus, changeSurveyed } from '../features/realms/northridgeSlice';
import { decrementGoblinHealth, selectGoblinHealth } from '../features/npcs/goblinSlice';

import { Goblin } from './npcs/Goblin';

export const Northridge = () => {
  const name = useAppSelector(selectName);
  const status = useAppSelector(selectStatus);
  const surveyed= useAppSelector(selectSurveyed);
  const dispatch = useAppDispatch();

  const handleSurvey = () => {
      setInterval(() => {
        dispatch(incrementStatus(1))
      }, 1000)
    if (status > 100) {
      dispatch(changeSurveyed())
    }
  }

  const handleAttack = () => {
    setInterval(() => {
      dispatch(decrementGoblinHealth(1))
    }, 1000)
  }

  if (status > 100) {
    dispatch(changeSurveyed())
  }

  const goblinHealth = useAppSelector(selectGoblinHealth)


  return (
    <div>
      <div>Name: {name}</div>
      <div>Status: {status}</div>
      <div>{surveyed}</div>
      {status < 100 &&
        <button onClick={() => handleSurvey()}>Survey</button>
      }
      {surveyed &&
        <h2>Surveyed</h2>
      }
      {goblinHealth > 0 &&
        <div>
          <Goblin />
          <button onClick={() => handleAttack()}>Attack</button>
        </div>
      }
    </div>
  )
}