import React, { useEffect, useState } from 'react';
import { format, addMilliseconds } from 'date-fns';
import styles from './Timer.module.scss';

const Timer = (props) => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const switchStopWatch = () => setIsRunning(!isRunning);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(time => addMilliseconds(time, 1000));
      }, 1000);

      return () => {
        clearInterval(id);
      }
    }
  }, [isRunning, time])


  return (
    <div className={styles.timer}>
      <h1>Timer</h1>

      <h3>{format(time, 'HH:mm:ss')}</h3>
      <button onClick={switchStopWatch}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={() => { setTime(new Date(0, 0, 0, 0, 0, 0, 0)) }}>Reset</button>
    </div>
  );
}

export default Timer;
