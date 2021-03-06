import React, { useState } from 'react';
import styles from './Home.module.scss';

const Home = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const clickHendler = () => {
    setCount(count + step);
  }

  const onChanchHendler = ({ target: { value } }) => {
    setStep(Number(value))
  }

  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  })

  const handelMouseMove = event => setCoordinates({
    x: event.clientX,
    y: event.clientY,
  })


  return (
    <div>
      <h1>Home</h1>
      <h3>ClickHendler</h3>
      <h3>{count}</h3>
      <input type="number" onChange={onChanchHendler} value={step} />
      <button onClick={clickHendler}>Click</button>
      <br />
      <br />
      <br />
      <br />
      <h3>HandelMouseMove</h3>
      <div className={styles.handelMouseMove} onMouseMove={handelMouseMove}>
        <h5>X: {coordinates.x}</h5>
        <h5>Y: {coordinates.y}</h5>
      </div>
    </div>
  );
}

export default Home;


