import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';

const About = (props) => {
  const [clickCount, setClickCount] = useState(0);

  const handelClick = () => setClickCount(clickCount + 1);

  useEffect(() => {
    console.log('Outer');
    return function () {
      console.log('Iuter');
    }
  }, [])


  return (
    <div>
      <h1>About</h1>

      <h3>Click</h3>
      <div className={styles.handelMouseMove} onClick={handelClick}>
        <h5>Click: {clickCount}</h5>
      </div>
    </div>
  );
}

export default About;
