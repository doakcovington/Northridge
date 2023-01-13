import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectKoboldHealth, selectAttack, selectName, selectSpawned } from '../../features/npcs/koboldSlice';

export const Kobold = () => {
  const name = useAppSelector(selectName);
  const health = useAppSelector(selectKoboldHealth);
  const attack = useAppSelector(selectAttack);
  const spawned = useAppSelector(selectSpawned);

  return (
    <div>
      <div>Name: {name}</div>
      <div>Health: {health}</div>
    </div>
  )
}