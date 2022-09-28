import styles from './login.scss';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// import { USER_ROLE_ENUM } from '@/constants/user';
import { dispatch } from '@/store';
import { setUserInfo } from '@/store/user';
import { judgeIsLogin } from '@/store/login';

import { login } from '@/services/demo.service';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const navigate = useNavigate();
  const loginInfo = useSelector((state: any) => state.login);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    // If logged in, return to the source page
    if (loginInfo.isLogin) {
      navigate(-1);
    }

    // console.log(1234);
  }, []);

  const loginF = () => {
    login('username', 'pwd')
      .then((res: any) => {
        // console.log(2222, res);
        // localStorage.setItem();
        dispatch(
          judgeIsLogin({
            isLogin: true,
            token: res.token,
          })
        );
        if (res) {
          navigate('/');
        }
        // dispatch(
        //   setUserInfo({
        //     token: '123',
        //     name: 'awefeng',
        //     phone: '',
        //     // role: USER_ROLE_ENUM.ADMIN,
        //   })
        // );
      })
      .catch(error => {
        dispatch(
          judgeIsLogin({
            isLogin: false,
            token: '',
          })
        );
        // console.log(55555, error);
      });
  };

  return (
    <div className={styles['edit-patient']}>
      login...
      <Button variant="primary" onClick={() => i18n.changeLanguage('da')}>
        da
      </Button>
      <Button variant="primary" onClick={() => i18n.changeLanguage('en')}>
        en
      </Button>
      <h1>{t('title', { framework: 'React' })}</h1>
      <br />
      <br />
      <br />
      <Link to="/">Redirect home page...</Link>
      <Button variant="primary" onClick={loginF}>
        login
      </Button>
    </div>
  );
};

export default Login;
