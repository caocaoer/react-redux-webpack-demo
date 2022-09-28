import styles from './home.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from 'react-bootstrap';
// import { login } from '@/services/demo.service';
// import { deepClone } from 'utilibs';

// const obj: any = { a: 100, b: { c: 200 } };
// // const objCopy = obj;
// const objCopy = deepClone(obj);
// obj.b.c = 300;
// console.log('obj===', obj);
// console.log('objCopy===', objCopy);

const Home = () => (
  <div className={styles.home}>
    <Stack direction="horizontal" gap={2}>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </Stack>
    <br />
    <br />
    <Link to="/edit-patient/12">Redirect edit patient page...</Link>
    <br />
    <Link to="/login">Redirect login page...</Link>
  </div>
);

export default Home;
