import React, { useState } from 'react';

// custom components
import CardForm from '../../components/CMS/CardForm';

// redux
import {
  useAppDispatch as useDispatch,
} from '../../hooks';
import { addCard } from '../../redux/actions/cardActions';

import { RewardTypeProps } from '../../types';

export default function AddCard() {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [annualFee, setAnnualFee] = useState<number>(0);
  const [rewardTypes, setRewardTypes] = useState<RewardTypeProps>({
    Travel: 0,
    Flights: 0,
    Hotels: 0,
    Dining: 0,
    Cashback: 0,
    Gas: 0,
  });

  const resetFields = () => {
    setName('');
    setBank('');
    setAnnualFee(0);
    setRewardTypes({
      Travel: 0,
      Flights: 0,
      Hotels: 0,
      Dining: 0,
      Cashback: 0,
      Gas: 0,
    });
  };

  // TODO: refactor this. there has to be a better way to handle these
  const handleTravelChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Travel: Number(e.target.value) as number,
    });
  const handleFlightsChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Flights: Number(e.target.value) as number,
    });
  const handleHotelsChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Hotels: Number(e.target.value) as number,
    });
  const handleDiningChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Dining: Number(e.target.value) as number,
    });
  const handleCashbackChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({
      ...rewardTypes,
      Cashback: Number(e.target.value) as number,
    });
  const handleGasChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRewardTypes({ ...rewardTypes, Gas: Number(e.target.value) as number });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('component:', rewardTypes);
    dispatch(addCard(name, bank, annualFee, rewardTypes));
    resetFields();
  };

  return (
    <CardForm
      title="Add Card"
      handleSubmit={handleSubmit}
      nameValue={name}
      nameChangeHandler={(e) => setName(e)}
      bankValue={bank}
      bankChangeHandler={(e) => setBank(e)}
      annualFeeValue={annualFee}
      annualFeeChangeHandler={(e) => setAnnualFee(e)}
      rewardTypesValue={rewardTypes}
      handleTravelChange={handleTravelChange}
      handleFlightsChange={handleFlightsChange}
      handleHotelsChange={handleHotelsChange}
      handleDiningChange={handleDiningChange}
      handleCashbackChange={handleCashbackChange}
      handleGasChange={handleGasChange}
    />
  );
}
