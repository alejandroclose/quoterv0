import React, { Component } from 'react';
import ProductPicker from './ProductPicker';

class QuoteProducts extends Component {
  state = {
    productPickers: [],
    products: []
  }
  addProductPicker = (e) => {
    this.setState({
      productPickers: this.state.productPickers.concat(<ProductPicker/>)
    })
  }

  handleOnChange = (e) => {
    const prod = e.target.value;
    this.props.sendData(prod);
  }

  render() {
    return (
      <div>
        <div className="header">
          {/* <form onSubmit={this.addProductPicker}> */}
          {this.state.productPickers.map((productPicker, index) => {
            return(
              <div key={index} onChange={this.handleOnChange}>
                {productPicker}
              </div>
            )
          })}
            <button onClick={() => this.addProductPicker()}> Add Product </button>
        </div>
      </div>
    )
  }
}

export default QuoteProducts;