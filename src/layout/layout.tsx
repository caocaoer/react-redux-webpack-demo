import styles from './layout.scss';
import React from 'react';
import classnames from 'classnames/bind';
import Sidebar from '@/components/sidebar/sidebar';
import { Outlet } from 'react-router';

const cx = classnames.bind(styles);

class Layout extends React.Component {
  render() {
    return (
      <div className={cx(['d-flex', 'layout'])}>
        <div className={styles.left}>
          <Sidebar />
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Layout;
