import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectName, selectStatus, selectSurvyed } from '../features/realms/northridgeSlice';

export const Northridge = () => {
  const name = useAppSelector(selectName);
  const status = useAppSelector(selectStatus);
  const survyed = useAppSelector(selectSurvyed);

  return (
    <div>
      <div>{name}</div>
      <div>{status}</div>
      <div>{survyed}</div>
    </div>
  )
}