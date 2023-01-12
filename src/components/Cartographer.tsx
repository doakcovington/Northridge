import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectHealth, selectName, selectAttack, selectMana } from '../features/cartographer/cartographerSlice';

export const Cartographer = () => {
  const health = useAppSelector(selectHealth)
  const name = useAppSelector(selectName);
  const attack = useAppSelector(selectAttack);
  const mana = useAppSelector(selectMana);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>{name}</div>
      Health: {health}
    </div>
  )
}