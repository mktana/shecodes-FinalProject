import { useState } from "react";

//styles
import styles from "./Signup.module.css";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('')

     const handleSubmit = (e) => {
      e.preventDefault()
      console.log(userName, password, email)
    }

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
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
       <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <button className="btn">Signup</button>
    </form>
  );
}
