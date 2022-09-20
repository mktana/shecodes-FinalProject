import { useState } from 'react'

//styles
import styles from './Login.module.css'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(userName
       , password);
    };

    return (
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
        <h2>Login</h2>
        <label>
          <span>username:</span>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="pasword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button className='btn'>Login</button>
      </form>
    );
}
