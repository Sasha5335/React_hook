import React, { useEffect, useState } from 'react';
import styles from './About.module.scss';

const About = (props) => {
  const [state, setState] = useState(0);

  const handelClick = () => setState(state + 1);

  useEffect(() => {
    console.log('Outer');
    return function () {
      console.log('Iuter');
    }
  })


  return (
    <div>
      <h1>About</h1>

      <div id="handelMouseMove" className={styles.handelMouseMove} onClick={handelClick}>
        <h3>Click</h3>
        <h5>Click: {state}</h5>
      </div>
    </div>
  );
}

export default About;
