import axios from "axios";

class QuotesApi {
  constructor() {
    this.quotesApi = axios.create({
      baseURL: "http://localhost:5000/quotes",
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

  crateQuote(id, body) {
    return this.quotesApi.post(`/${id}`, body);
  }

  deleteProduct(id) {
    return this.quotesApi.delete(`/${id}`);
  }
}

const quotesApi = new QuotesApi();

export default quotesApi;