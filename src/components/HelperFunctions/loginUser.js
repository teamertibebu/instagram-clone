export default async function loginUser(credentials, setToken) {
  const token = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
  setToken(token);
}
