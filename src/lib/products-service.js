import axios from "axios";
require('dotenv').config();

class ProductsApi {
  constructor() {
    this.productsApi = axios.create({
      baseURL: "https://quoterapp.herokuapp.com/products",
      withCredentials: true
    });
  }

  getProducts() {
    return this.productsApi.get(`/`).then(({ data }) => data);
  }

  getProduct(id) {
    return this.productsApi.get(`/${id}`).then(({ data }) => data);
  }

  editProduct(id, body) {
    return this.productsApi.put(`/${id}`, body);
  }

  createProduct(id, body) {
    return this.productsApi.put(`/${id}`, body);
  }

  deleteProduct(id) {
    return this.productsApi.delete(`/${id}`);
  }
}

const productsApi = new ProductsApi();

export default productsApi;