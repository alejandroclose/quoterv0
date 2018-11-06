import React, { Component } from "react";
import ProductPicker from "./ProductPicker";
import Products from "../lib/products-service";

class QuoteProducts extends Component {
  state = {
    productPickers: [],
    selectedProduct: ""
  };

  addProductPicker = e => {
    this.setState({
      productPickers: this.state.productPickers.concat(
        <ProductPicker sendData={this.handleData} />
      )
    });
  };

  handleData = data => {
    console.log("data", data);
    this.setState({
      selectedProduct: data,
      product: []
    });
  };

  handleOnChange = e => {
    const prod = e.target.value;
    this.props.sendData(prod);
  };

  handleDetail = () => {
    Products.getProduct(this.state.selectedProduct)
      .then((result) => {
       this.props.sendDetail(result)
      })
  }

  render() {
    return (
      <div>
        <div className="product-picker">

          {this.state.productPickers.map((productPicker, index) => {
            return (<div key={index} onChange={this.handleOnChange}>
                  {productPicker}
                </div>
            );
          })
          
          }
          <button onClick={() => this.addProductPicker()}> Add Product </button>
        </div>
      </div>
    );
  }
}

export default QuoteProducts;
