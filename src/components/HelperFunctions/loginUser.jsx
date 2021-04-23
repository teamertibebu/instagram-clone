import axios from 'axios';

const loginUser = async (credentials, setToken) => {
  return await fetch('/signIn', { method: 'GET' })
    .then(({ data }) => data)
    .then((data) => setToken(data.json()));
};

export default loginUser;
