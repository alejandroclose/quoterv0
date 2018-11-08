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

  render() {
    return (
      <div>
        {/* Products returned after using the product picker */}
        <div>
          {this.state.products.map(product => {
            return (
              <li className="quote-product-line" key={product._id}>
                <div className="quote-product-info">
                  <div className="quote-product-image media-left">
                    <img src={product.image} alt="product badge" />
                  </div>
                  <div>{product.name}</div>
                  <div className="quote-product-price">
                    <div>{product.price}</div>
                    <div>{product.currency}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
        <div>
          <div>
            <ProductPicker sendData={this.handleData} />
          </div>

          {/* Sum of product's price */}
          <div>
            {this.state.products.reduce((acc, product) => {
              return acc + product.price;
            }, 0)}
          </div>
        </div>
      </div>
    );
  }
}
export default QuoteProducts;
