const baseURL = import.meta.env.VITE_BASE_URL;

type UserToLogin = { username: string; password: string };

const login = async (credentials: UserToLogin)=> {
  const { username, password } = credentials;
  console.log(username, password)

  try {
    const res = await fetch(`${baseURL}/api/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log(data);
    return res.json();
  } catch (err) {
    console.log("Error: ", err);
  }
}

export default { login };