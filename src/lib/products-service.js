import axios from "axios";

class ProductsApi {
  constructor() {
    this.productsApi = axios.create({
      baseURL: "http://localhost:5000/products",
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