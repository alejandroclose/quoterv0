import axios from "axios";

class UsersApi {
  constructor() {
    this.usersApi = axios.create({
      baseURL: "http://localhost:5000/profile",
      withCredentials: true
    });
  }

  getUserProducts() {
    return this.usersApi.get(`/products`).then(({ data }) => data);
  }
}
const usersApi = new UsersApi();

export default usersApi;