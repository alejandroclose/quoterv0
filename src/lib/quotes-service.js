import axios from "axios";
require('dotenv').config();

class QuotesApi {
  constructor() {
    this.quotesApi = axios.create({
      baseURL: "https://quoterapp.herokuapp.com/quotes",
      withCredentials: true
    });
  }

  getQuotes() {
    return this.quotesApi.get('/').then(({data}) => data);
  }

  getQuote(id){
    return this.quotesApi.get(`/${id}`).then(({data}) => data);
  }

  editQuote (id, body){
    return this.quotesApi.put(`/${id}`, body);
  }

  crateQuote(body) {
    return this.quotesApi.post('/', body);
  }

  deleteQuote(id) {
    return this.quotesApi.delete(`/${id}`);
  }
}

const quotesApi = new QuotesApi();

export default quotesApi;