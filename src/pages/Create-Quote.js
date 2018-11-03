import React, { Component} from 'react';
import { withAuth } from '../components/AuthProvider';
import Header from '../components/Header';
import QuoteInfo from '../components/QuoteInfo';
import QuoteProducts from '../components/QuoteProducts';

class CreateQuote extends Component {
  state ={
    products: []
  }
  handleProductsData = (prod) => {
    this.state.products.push(prod)
    console.log(this.state.products)
  }
  render(){
    return(
      <div>
        <Header/>
        <QuoteInfo/>
        <QuoteProducts sendData={this.handleProductsData}/>
      </div>
    )
  }
}

  
export default withAuth()(CreateQuote);