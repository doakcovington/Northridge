import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectGoblinHealth, selectAttack, selectName, selectSpawned } from '../../features/npcs/goblinSlice';

export const Goblin = () => {
  const name = useAppSelector(selectName);
  const health = useAppSelector(selectGoblinHealth);
  const attack = useAppSelector(selectAttack);
  const spawned = useAppSelector(selectSpawned);


  return (
    <div>
      <div>Name: {name}</div>
      <div>Health: {health}</div>
    </div>
  )

}