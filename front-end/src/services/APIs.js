import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'http://localhost:3001',
});

const login = (email, password) => apiBase.post('/login', { email, password });

const create = ({ name, email, password }) => (
  apiBase.post('/register', { name, email, password }));

export { login, create };
