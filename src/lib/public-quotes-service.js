import axios from "axios";
require('dotenv').config();

class PublicQuotesApi {
  constructor() {
    this.publicQuotesApi = axios.create({
      baseURL: "https://quoterapp.herokuapp.com/quote",
      withCredentials: true
    });
  }
  getQuote(id){
    return this.publicQuotesApi.get(`/${id}`).then(({data}) => data);
  }
}

const publicQuotesApi = new PublicQuotesApi();

export default publicQuotesApi;