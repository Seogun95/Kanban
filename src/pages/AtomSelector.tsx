import { hoursSelector, minuteState } from 'atom';
import React from 'react';
import { useRecoilState } from 'recoil';

export function AtomSelector() {
  const [minutes, setMinutes] = useRecoilState(minuteState);

  const [hours, setHours] = useRecoilState(hoursSelector);
  const onMinuteChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setMinutes(Number(e.currentTarget.value));
  };

  const onHoursChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(Number(e.currentTarget.value));
  };

  return (
    <>
      <input
        value={minutes}
        onChange={onMinuteChangeHandler}
        type="number"
        placeholder="분"
      />
      <input
        value={hours}
        onChange={onHoursChangeHandler}
        type="number"
        placeholder="시간"
      />
    </>
  );
}
