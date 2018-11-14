import axios from "axios";
require('dotenv').config();

class UsersApi {
  constructor() {
    this.usersApi = axios.create({
      baseURL: "https://quoterapp.herokuapp.com/profile",
      withCredentials: true
    });
  }

  getUserProducts() {
    return this.usersApi.get(`/products`).then(({ data }) => data);
  }

  getUserQuotes() {
    return this.usersApi.get(`/quotes`).then(({ data }) => data);
  }
}
const usersApi = new UsersApi();

export default usersApi;
