import React, { Component } from "react";
import ProductPicker from "./ProductPicker";
import Products from "../lib/products-service";

class QuoteProducts extends Component {
  state = {
    products: []
  };

  handleData = data => {
    this.getProduct(data);
  };

  getProduct = id => {
    Products.getProduct(id).then(product => {
      const { products } = this.state;
      products.push(product);
      this.setState({
        products: products
      });
      this.props.sendData(id);
    });
  };

  handleDelete = (event) =>{
    const { products } = this.state;
    // const { productsArr } = this.state;

    products.splice(this.index,1);
    // productsArr.splice(this.index,1);
    this.setState ({
      products: products
    })
  }

  /* Sum of product's price */
  calculateSubtotal = products => {
    return (products.reduce((acc, product) => {
      const pretax = acc + product.price;
      return pretax;
    }, 0)).toFixed(2);
  };

  calculateVAT = products => {
    return (this.calculateSubtotal(products) * 0.21).toFixed(2);
  };

  calculateTotal = products => {
    return (this.calculateSubtotal(products) * 1.21).toFixed(2);
  };

  render() {
    console.log(this.state)
    return (
      <div className="quote-products-component-div">
        {/* Products returned after using the product picker */}
        <div className="quote-product">
          <ul className="quote-product-list">
            {this.state.products.map(product => {
              return (
                <li className="quote-product-line" key={product._id}>
                  <div className="quote-product-info">
                    <div className="quote-product-media">
                      <div className="quote-product-image media-left">
                        <img src={product.image} alt="product badge" />
                      </div>
                      <div className="quote-product-name">{product.name}</div>
                    </div>
                    <div className="quote-product-price">
                      <div>{product.price}</div>
                      <div>{product.currency}</div>
                    </div>
                  <div><button className="delete is-small" onClick={this.handleDelete}></button></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="product-picker">
            <ProductPicker sendData={this.handleData} />
          </div>
          <br />
          <hr />
          <div className="quote-product-total">
            <div className="quote-product-subtotal">
              <span className="quote-product-subtotal-title">SUBTOTAL</span>
              <span className="quote-product-subtotal-value">
                {this.calculateSubtotal(this.state.products)}€
              </span>
            </div>
            <div className="quote-product-vat">
              <span className="quote-product-vat-title">VAT 21%</span>
              <span className="quote-product-vat-value">
                {this.calculateVAT(this.state.products)}€
              </span>
            </div>
            <hr />
            <div className="quote-product-checkout">
              <span className="quote-product-checkout-title">TOTAL</span>
              <span className="quote-product-checkout-value">
                {this.calculateTotal(this.state.products)}€
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default QuoteProducts;
