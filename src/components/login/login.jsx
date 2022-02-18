import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../footer/footer';
import Header from './../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const navigate = useNavigate();
    const goToMaker = (userId) => {
        navigate('/maker', {            
            state: { id: userId }
        });
    };

    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => goToMaker(data.user.uid))
    };

    useEffect(() => {
        const off = authService.onAuthChange(user => {             
            user && goToMaker(user.uid);            
         });

         return () => off();
    });
    return (
        <section className={styles.login}>
            <Header />
            <h1>Login</h1>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>Google</button>
                </li>
                <li className={styles.item}>
                    <button className={styles.button} onClick={onLogin}>Github</button>
                </li>
            </ul>
            <Footer />
        </section>
    );
};

export default Login;