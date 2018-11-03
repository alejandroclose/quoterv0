import React, { Component} from 'react';
import Quote from '../lib/quotes-service';
import { withAuth } from '../components/AuthProvider'
import Header from '../components/Header';

class EditQuote extends Component {
  state = {
    name: '',
    customer_name: '',
    customer_address: '',
    customer_email: '',
    // products:[],
    isLoading: false
  }

  componentDidMount(){
    const {id} = this.props.match.params

    Quote.getQuote(id)
    .then((data) => {
      const {name, customer_name, customer_address, customer_email, products} = data;

      this.setState({
        name,
        customer_name: customer_name || '', 
        customer_address: customer_address || '' ,
        customer_email: customer_email || '' ,
        products
      })
    })
    .catch((err)=>{
      console.error(err)
    })
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {id} = this.props.match.params;
    const { name, customer_name, customer_address, customer_email} = this.state;
    Quote.editQuote(id, {name, customer_name, customer_address, customer_email})
    .then ((result) => {
      this.props.history.push(`/quotes`)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { name, customer_name, customer_address, customer_email, products} = this.state;
    return (
      <div>
        <Header/>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={name} name="name" onChange={this.handleOnChange}/>
        <input type="text" value={customer_name} name="customer_name" onChange={this.handleOnChange}/>
        <input type="text" value={customer_address} name="customer_address" onChange={this.handleOnChange}/>
        <input type="text" value={customer_email} name="customer_email" onChange={this.handleOnChange}/>
        <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default withAuth()(EditQuote);

/// Not mine


// render() {
//   const { name, last_name, email, number, adress } = this.state
//   return (
//       <div>
//          <h1 className="register-title">Edit Patient</h1>
//         <form onSubmit={this.handleSubmit} className="register">
//           <label className="label" htmlFor="">Name</label>
//           <input className="register-input" type="text" value={name} name="name" onChange={this.handleOnChange} placeholder="Name"/>
//           <label className="label" htmlFor="">Last name</label>
//           <input className="register-input" type="text" value={last_name} name="last_name" onChange={this.handleOnChange} placeholder="Last Name"/>
//           <label className="label " htmlFor="">Email</label>
//           <input className="register-input" type="text" value={email} name="email" onChange={this.handleOnChange} placeholder="Email"/>
//           <label className="label" htmlFor="">Phone number</label>
//           <input className="register-input"  type="number" value={number} name="number" onChange={this.handleOnChange} placeholder="Number"/>
//           <label className="label" htmlFor="">Adress</label>
//           <input className="register-input" type="text" value={adress} name="adress" onChange={this.handleOnChange} placeholder="Adress" />
//           <input className="register-button" type="submit" value="Update" />
//         </form>
//       </div>
//   )
// }
// }
// export default withRouter(FormEditPatient);

// ////Not Mine