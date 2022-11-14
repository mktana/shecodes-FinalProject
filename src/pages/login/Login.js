import { useState } from "react";
import { InputComponent } from "../../components/InputComponent";

//styles
import styles from "./Login.module.css";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
    //console.log(userName, password);
  };

  const handleUserName = (e) => {
    setUserName(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>

      <InputComponent
        title={"your name"}
        type={"text"}
        value={userName}
        onChange={handleUserName}
      />
      <InputComponent
        title={"your password"}
        type={"password"}
        value={password}
        onChange={handlePassword}
      />

      <button className="btn">Login</button>
    </form>
  );
}
