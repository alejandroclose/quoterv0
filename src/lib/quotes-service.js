import axios from "axios";

class QuotesApi {
  constructor() {
    this.quotesApi = axios.create({
      baseURL: "http://localhost:5000/quotes",
      withCredentials: true
    });
  }

  getQuotes
}