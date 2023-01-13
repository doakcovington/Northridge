import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectName, selectStatus, selectSurveyed, incrementStatus, changeSurveyed } from '../../features/realms/ashbrookSlice';
import { decrementKoboldHealth, selectKoboldHealth } from '../../features/npcs/koboldSlice';
import { Kobold } from '../npcs/Kobold';

export const Ashbrook = () => {
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
  if (status > 100) {
    dispatch(changeSurveyed())
  }

  const handleAttack = () => {
    setInterval(() => {
      dispatch(decrementKoboldHealth(1))
    }, 1000)
  }

  const koboldHealth = useAppSelector(selectKoboldHealth)

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
      {koboldHealth > 0 &&
        <div>
          <Kobold />
          <button onClick={() => handleAttack()}>Attack</button>
        </div>
      }
    </div>
  )
}