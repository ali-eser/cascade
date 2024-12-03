import {useState} from "react";
// import {useNavigate} from "react-router-dom";

import loginService from "../services/loginService.ts";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Cascade Login</h1>
      <form className="login-form">
        <input type="text"
               name="username"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               placeholder="Username"
        />
        <input type="password"
               name="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;