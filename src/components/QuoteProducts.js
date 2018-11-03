import React, { Component } from 'react';
import ProductPicker from './ProductPicker';

class QuoteProducts extends Component {
  state = {
    products: []
  }

  addProductPicker = (e) => {
    e.preventDefault();
    this.setState({
      products: this.state.products.concat(<ProductPicker/>)
    })
    console.log(this.state.products);
    console.log('product picker added')
  }

  render() {
    return (
      <div>
        <div className="header">
          <form onSubmit={this.addProductPicker}>
          {this.state.products.map((productPicker, index) => {
            return(
              <div key={index}>
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