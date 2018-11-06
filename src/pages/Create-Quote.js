import React, { Component} from 'react';
import { withAuth } from '../components/AuthProvider';
import Header from '../components/Header';
import QuoteInfo from '../components/QuoteInfo';
import QuoteProducts from '../components/QuoteProducts';
import Quote from '../lib/quotes-service';
import QuoteSelectedProducts from '../components/QuoteSelectedProducts';


class CreateQuote extends Component {
  state ={
    name: '',
    customer_name: '',
    customer_address: '',
    customer_email: '',
    productsArr:[],
    productDetail:{},
    isLoading: false
  }
  handleProductsData = (prod) => {
    const productArr = this.state.productsArr;
    productArr.push(prod);

    this.setState({
      productsArr: productArr
    })
  }

  handleInfoData = (infoState) => {
    console.log(infoState)
    this.setState({
      name: infoState.name,
      customer_name: infoState.customer_name,
      customer_address: infoState.customer_address,
      customer_email: infoState.customer_email
    })
  }

  handleProductDetail = (product) => {
    console.log('Product',product)
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
        <div className="quote-template">
        <div className="quote-header">
        <div className="company-logo"><img src="/images/noun_thunder_434559.png"/></div>
        <div className="quote-title">QUOTE</div>
        </div>
        <div className="quote-sub-header">
        <div className="company-info">
        <p>THOR SL</p>
        <p>C/Pamplona 96</p>
        <p>08018 Barcelona</p>
        <p>www.thor.cat</p>
        </div>
        <div className="quote-info">
        <QuoteInfo sendData={this.handleInfoData}/>
        </div>
        </div>
        <QuoteProducts sendData={this.handleProductsData} sendDetail={this.handleProductDetail()}/>
        <QuoteSelectedProducts prodArr = {this.state.productsArr}/>
        <button onClick={() => this.handleSubmit()}>Save Quote</button>
        </div>
      </div>
    )
  }
}

  
export default withAuth()(CreateQuote);