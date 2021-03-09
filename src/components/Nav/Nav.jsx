import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss'

const Nav = () => {

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/timer'>Timer</Link></li>
          <li><Link to='/contacts'>Contacts</Link></li>
        </ul>

      </nav>
    </>
  );
}

export default Nav;