import React, { Component} from 'react';
import { withAuth } from '../components/AuthProvider';
import Header from '../components/Header';
import QuoteInfo from '../components/QuoteInfo';
import QuoteProducts from '../components/QuoteProducts';
import Quote from '../lib/quotes-service';

class CreateQuote extends Component {
  state ={
    name: '',
    customer_name: '',
    customer_address: '',
    customer_email: '',
    products:[],
    isLoading: false
  }
  handleProductsData = (prod) => {

    const product = this.state.products;
    product.push(prod);

    this.setState({
      products: product
    })
  }

  handleInfoData = (infoState) => {
    this.setState({
      name: infoState.name,
      customer_name: infoState.customer_name,
      customer_address: infoState.customer_address,
      customer_email: infoState.customer_email
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    const {name, customer_name, customer_address, customer_email, products} = this.state
    Quote.crateQuote({name, customer_name, customer_address, customer_email, products})
    .then((result) => {
      console.log('createQuote', result);
      this.props.history.push(`/quotes`)
      window.location.reload()
    })
    .catch((err) =>{
      console.error(err);
    })
  }


  render(){
    console.log(this.state)
    return(
      <div>
        <Header/>
        <QuoteInfo sendData={this.handleInfoData}/>
        <QuoteProducts sendData={this.handleProductsData}/>
        <button onClick={() => this.handleSubmit()}>Save Quote</button>
      </div>
    )
  }
}

  
export default withAuth()(CreateQuote);