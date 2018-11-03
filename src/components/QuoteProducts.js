import React, { Component } from 'react';
import ProductPicker from './ProductPicker';

class QuoteProducts extends Component {
  state = {
    productPickers: [],
    products: []
  }
  addProductPicker = (e) => {
    e.preventDefault();
    this.setState({
      productPickers: this.state.productPickers.concat(<ProductPicker/>)
    })
    console.log('product picker added');
    // this.props.sendData()
  }

  handleOnChange = (e) => {
    // this.state.products.push(e.target.value)
    const prod = e.target.value;
    this.props.sendData(prod);
  }

  render() {
    return (
      <div>
        <div className="header">
          <form onSubmit={this.addProductPicker}>
          {this.state.productPickers.map((productPicker, index) => {
            return(
              <div key={index} onChange={this.handleOnChange}>
                {productPicker}
              </div>
            )
          })}
            <button type="submit"> Add Product </button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuoteProducts;