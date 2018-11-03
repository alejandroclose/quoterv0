import React, { Component} from 'react';
import { withAuth } from '../components/AuthProvider';

class NewQuote extends Component {
  state = {
    name: '',
    customer_name: '',
    customer_address: '',
    customer_email: '',
    isLoading: false
  }

  handleOnChange = (e) => {
    this.setState({
      //seleccionar dinamicamente que coges y cual es su valor
      [e.target.name]: e.target.value,
      
    })
    const infoState = this.state;
    this.props.sendData(infoState)
  }

render() {
  return (
    <div>
        <input type="text" name='name' onChange={this.handleOnChange} placeholder="Name" />
        <input type="text" name="customer_name" onChange={this.handleOnChange} placeholder="Customer Name" />
        <input type="text" name="customer_address" onChange={this.handleOnChange} placeholder="Customer Address" />
        <input type="text" name="customer_email" onChange={this.handleOnChange} placeholder="email@quoter.io" />
        {/* <button type="submit">Save Customer Info</button> */}
    </div>
  )
}
}

  
export default withAuth()(NewQuote);