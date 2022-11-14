import { useState } from "react";
import { InputComponent } from "../../components/InputComponent";

//styles
import styles from "./Signup.module.css";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.val)
    
  };

  const handleUserName = (e) => {
    setUserName(e.target.value);
  }

   const handlePassword = (e) => {
    setPassword(e.target.value);
  }

    const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  //return inside the form :
  //<InputComponent title={} type={} value={} onChange={}/>

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>

      <InputComponent title={'your name'} type ={'text'} value={userName} onChange={handleUserName}/>
      <InputComponent title={'your password'} type ={'password'} value={password} onChange={handlePassword}/>
      <InputComponent title={'your email'} type ={'email'} value={email} onChange={handleEmail}/>

      <button className="btn" >Signup</button>
    </form>
  );
}
