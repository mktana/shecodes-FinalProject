import React from "react";
import { useState } from "react";

export default function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <label>
        <span>username:</span>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
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

      <label>
        <span>password:</span>
        <input
          type="pasword"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

    </form>
  );
}
