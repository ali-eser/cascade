import {useState} from "react";
// import {useNavigate} from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Cascade Login</h1>
      <form>
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
      </form>
    </div>
  )
}

export default LoginForm;