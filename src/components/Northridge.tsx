import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectName, selectStatus, selectSurveyed } from '../features/realms/northridgeSlice';
import { incrementStatus, changeSurveyed } from '../features/realms/northridgeSlice';

export const Northridge = () => {
  const name = useAppSelector(selectName);
  const status = useAppSelector(selectStatus);
  const surveyed= useAppSelector(selectSurveyed);
  const dispatch = useAppDispatch();

  // const handleSurvey = () => {
  //   while (status < 100) {
  //     console.log('here')
  //     setInterval(() => {
  //       dispatch(incrementStatus(1))
  //     }, 100)
  //   }
  //   dispatch(changeSurveyed)
  // }
  const handleSurvey = () => {
      setInterval(() => {
        dispatch(incrementStatus(1))
      }, 1000)
    if (status > 100) {
      console.log('here')
      dispatch(changeSurveyed())
    }
  }

  if (status > 100) {
    console.log('here')
    dispatch(changeSurveyed())
  }


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
    </div>
  )
}