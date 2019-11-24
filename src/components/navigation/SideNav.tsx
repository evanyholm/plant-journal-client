import React from 'react';
import { observer } from 'mobx-react';
import styles from './SideNav.module.scss';
import { Link } from 'react-router-dom';

const SideNav = observer(({ prop }) => {
  return (
    <div className={styles.container}>
      <Link to="/">Home</Link>
    </div>
  );
});
export default SideNav;
