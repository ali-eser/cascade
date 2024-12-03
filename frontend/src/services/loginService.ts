const baseURL = process.env.BASE_URL;

type UserToLogin = { username: string; password: string };

const login = async (credentials: UserToLogin)=> {
  const { username, password } = credentials;

  const res = await fetch(`${baseURL}/api/login`, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  console.log(res);
  return res.json();
}

export default { login };