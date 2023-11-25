import { FormEvent, useState } from 'react';
import logo from '../assets/atlas-app-services.png';
import styles from '../styles/LoginPage.module.css';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    console.log("yeah")
    event.preventDefault();
  };

  const handleButtonClicked = (event: FormEvent<HTMLButtonElement>): void => {
    console.log('nay')
  };

  return (
    <div className={styles.container}>
      <img
        alt='Atlas Device Sync'
        className={styles.logo}
        src={logo}
      />
      <h1>
      Atlas Device SDK for Web
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type='text'
          placeholder='Email'
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          autoCorrect='off'     // Safari only
          autoCapitalize='none' // Safari only
        />
        <input
          className={styles.input}
          type='password'
          placeholder='Password (min. 6 chars)'
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <div className={styles.buttons}>
          <button
            className={styles.button}
            type='submit'
            value='login'
            onClick={handleButtonClicked}
          >
            Log In
          </button>
          <button
            className={styles.button}
            type='submit'
            value='register'
            onClick={handleButtonClicked}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
