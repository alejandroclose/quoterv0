import axios from 'axios';
require('dotenv').config();

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: "https://quoterapp.herokuapp.com",
      withCredentials: true
    })
  }

  signup(user) {
    const { username, password } = user;
    return this.auth.post('/auth/signup', {username, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me(user) {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const auth = new Auth();

export default auth