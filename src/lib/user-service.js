import axios from "axios";
require('dotenv').config();

class UsersApi {
  constructor() {
    this.usersApi = axios.create({
      baseURL: 'http://localhost:5000/profile',
      withCredentials: true
    });
  }

  getUserProducts() {
    return this.usersApi.get(`/products`).then(({ data }) => data);
  }

  getUserServices() {
    return this.usersApi.get(`/services`).then(({data}) => data)
  }

  getUserQuotes() {
    return this.usersApi.get(`/quotes`).then(({ data }) => data);
  }

  getUserServices() {
    return this.usersApi.get(`/services`).then(({ data }) => data);
  }
}
const usersApi = new UsersApi();

export default usersApi;
