import axios from "axios";
require('dotenv').config();

class PublicQuotesApi {
  constructor() {
    this.publicQuotesApi = axios.create({
      baseURL: `${process.env.HEROKU_URI}/quote`,
      withCredentials: true
    });
  }
  getQuote(id){
    return this.publicQuotesApi.get(`/${id}`).then(({data}) => data);
  }
}

const publicQuotesApi = new PublicQuotesApi();

export default publicQuotesApi;