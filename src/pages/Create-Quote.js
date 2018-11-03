import React, { Component} from 'react';
import Quote from '../lib/quotes-service';
import { withAuth } from '../components/AuthProvider';
import Header from '../components/Header';
import ProductPicker from '../components/ProductPicker';

class NewQuote extends Component {
  state = {
    name: '',
    customer_name: '',
    customer_address: '',
    customer_email: '',
    products:[],
    isLoading: false
  }

  handleOnChange = (e) => {
    this.setState({
      //seleccionar dinamicamente que coges y cual es su valor
      [e.target.name]: e.target.value,
    })
  }

handleSubmit = (e) => {
  e.preventDefault();
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

render() {
  const {name, customer_name, customer_address, customer_email, products} = this.state

  return (
    <div>
      <Header/>
      <form onSubmit = {this.handleSubmit}>
        <input type="text" name='name' onChange={this.handleOnChange} placeholder="Name" />
        <input type="text" name="customer_name" onChange={this.handleOnChange} placeholder="Customer Name" />
        <input type="text" name="customer_address" onChange={this.handleOnChange} placeholder="Customer Address" />
        <input type="text" name="customer_email" onChange={this.handleOnChange} placeholder="email@quoter.io" />
        <input type="text" name="products" onChange={this.handleOnChange} placeholder="Products" />
        <ProductPicker/>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
}

  
export default withAuth()(NewQuote);