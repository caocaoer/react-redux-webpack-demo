import styles from './edit-patient.scss';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const EditPatient = () => {
  const { id } = useParams();

  useEffect(() => {
    // console.log(213, id);
  }, []);

  return (
    <div className={styles['edit-patient']}>
      EditPatient...
      <Link to="/">Redirect home page...</Link>
    </div>
  );
};

export default EditPatient;
