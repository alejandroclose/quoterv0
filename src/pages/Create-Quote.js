import React, { Component} from 'react';
import { withAuth } from '../components/AuthProvider';
import Header from '../components/Header';
import QuoteInfo from '../components/QuoteInfo';
import QuoteProducts from '../components/QuoteProducts';
import Quote from '../lib/quotes-service';
import Products from "../lib/products-service";


class CreateQuote extends Component {
  state ={
    name: '',
    customer_name: '',
    customer_address: '',
    customer_email: '',
    productsArr:[],
    productDetail:[],
    isLoading: false
  }
  handleProductsData = (prod) => {
    const productArr = this.state.productsArr;
    productArr.push(prod);

    this.setState({
      productsArr: productArr
    })
  }

  

  handleProductsDetail = (id) => {
    Products.getProduct(id).then(product => {
      const { productDetail } = this.state;
      productDetail.push(product);
      this.setState({
        productDetail: productDetail
      })


    })
  }

  handleInfoData = (infoState) => {
    this.setState({
      name: infoState.name,
      customer_name: infoState.customer_name,
      customer_address: infoState.customer_address,
      customer_email: infoState.customer_email
    })
  }

  handleSubmit = (e) => {
    const {name, customer_name, customer_address, customer_email, productsArr} = this.state
    Quote.crateQuote({name, customer_name, customer_address, customer_email, productsArr})
    .then((result) => {
      this.props.history.push(`/quotes`)
      window.location.reload()
    })
    .catch((err) =>{
      console.error(err);
    })
  }

  render(){
    return(
      <div>
        <Header/>
        <div className="quote-buttons">
          <button className="button is-success is-outlined" onClick={() => this.handleSubmit()}>Save Quote</button>
        </div>
        <div className="quote-template">
        <div className="quote-header">
        <div className="company-logo"><img src="/images/noun_thunder_434559.png" alt="company logo"/></div>
        <div className="quote-title">QUOTE</div>
        </div>
        <div className="quote-sub-header">
        <div className="company-info">
        <p>THOR SL</p>
        <p>C/Pamplona 96</p>
        <p>08018 Barcelona</p>
        <p>www.thor.es</p>
        </div>
        <div className="quote-info">
        <QuoteInfo sendData={this.handleInfoData}/>
        </div>
        </div>
        <div className="quote-products">
        <QuoteProducts sendData={this.handleProductsData}/>
        </div>

        
        
        </div>
      </div>
    )
  }
}

  
export default withAuth()(CreateQuote);