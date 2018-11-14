import React, { Component } from "react";
import PrivateQuote from "../lib/public-quotes-service";
import PublicProducts from "../lib/public-products-service";

class PublicQuote extends Component {
  state= {
    name:"",
    customer_name:"",
    customer_address:"",
    productsArr: [],
    products: [],
    isLoading: true
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    PrivateQuote.getQuote(id)
    .then(data => {
      const {
        name,
        customer_name,
        customer_address,
        customer_email,
        products
      } = data;

      this.setState({
        name,
        customer_name: customer_name || "",
        customer_address: customer_address || "",
        customer_email: customer_email || "",
        productsArr: products || [],
        isLoading:false 
      });
      this.handleData();
    })
    .catch(err => {
      console.error(err);
    })
  }

  handleData = () => {
    this.state.productsArr.map(id => {
      return this.getProduct(id);
    });
  };

  getProduct = id => {
    PublicProducts.getProduct(id).then(product => {
      const { products } = this.state;
      console.log('asdf',products)
      const newProducts = products;

      newProducts.push(product);
      this.setState({
        products: newProducts
      })
    })
  }

  calculateSubtotal = products => {
    return products
      .reduce((acc, product) => {
        const pretax = acc + product.price;
        return pretax;
      }, 0)
      .toFixed(2);
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
      <div className="public-quote">
        <div className="quote-template">
          <div className="quote-header">
            <div className="company-logo">
              <img src="/images/noun_thunder_434559.png" alt="company logo" />
            </div>
            <div className="quote-title">QUOTE</div>
          </div>
          <div className="quote-sub-header">
            <div className="company-info">
              <p>THOR SL</p>
              <p>C/Pamplona 96</p>
              <p>08018 Barcelona</p>
              <p>www.thor.es</p>
            </div>
            <div className="quote-info">
                  <div className="customer-info">
                    <input
                      type="text"
                      defaultValue={this.state.name}
                      name="name"
                  
                    />
                    <input
                      type="text"
                      defaultValue={this.state.customer_name}
                      name="customer_name"
          
                    />
                    <input
                      type="text"
                      defaultValue={this.state.customer_address}
                      name="customer_address"
                    />
                    <input
                      type="text"
                      defaultValue={this.state.customer_email}
                      name="customer_email"
                    />
                  </div>
                </div>
          </div>
          <div className="quote-products">
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
                            <div className="quote-product-name">
                              {product.name}
                            </div>
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
                <br />
                <hr />
                <div className="quote-product-total">
                  <div className="quote-product-subtotal">
                    <span className="quote-product-subtotal-title">
                      SUBTOTAL
                    </span>
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
          </div>
        </div>
      </div>
    );
  }
}

export default PublicQuote;