import React, { Component } from "react";
import ProductPicker from "./ProductPicker";
import Products from "../lib/products-service";

class QuoteProducts extends Component {
  state = {
    products: [],
    prices:[]
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



  render() {
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
          <br/>
          <hr />
          <div className="quote-product-total">
          <div className="quote-product-vat">
          VAT 21% {this.state.products.reduce((acc, product) => {
            this.handlePretax()
            }, 0)}€
          </div>
          <hr/>
          {/* Sum of product's price */}
            <div className="quote-product-checkout">
            TOTAL {this.state.products.reduce((acc, product) => {
              const pretax = acc + product.price;
              const total = (pretax * 1.21).toFixed(2);
              return total;
            }, 0)}€
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default QuoteProducts;
