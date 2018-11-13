import axios from "axios";
require('dotenv').config();

class PublicProductsApi {
  constructor() {
    this.publicProductsApi = axios.create({
      baseURL: `${process.env.HEROKU_URI}/quote`,
      withCredentials: true
    });
  }
  getProduct(id) {
    return this.publicProductsApi.get(`/product/${id}`).then(({ data }) => data);
  }
}

const publicProductsApi = new PublicProductsApi();

export default publicProductsApi;