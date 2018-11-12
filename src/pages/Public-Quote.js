import React, { Component } from "react";
import QuoteInfo from "../components/QuoteInfo";

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
    console.log(id)
  }
  render() {
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
              <QuoteInfo sendData={this.handleInfoData} />
            </div>
          </div>
          <div className="quote-products">
            <div className="quote-products-component-div">
              {/* Products returned after using the product picker */}
              <div className="quote-product">
                {/* <ul className="quote-product-list">
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
                          <div>
                            <button onClick={this.handleDelete}>Delete</button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul> */}
              </div>
              <div>
                <br />
                <hr />
                <div className="quote-product-total">
                  <div className="quote-product-subtotal">
                    <span className="quote-product-subtotal-title">
                      SUBTOTAL
                    </span>
                    {/* <span className="quote-product-subtotal-value">
                      {this.calculateSubtotal(this.state.products)}€
                    </span> */}
                  </div>
                  <div className="quote-product-vat">
                    <span className="quote-product-vat-title">VAT 21%</span>
                    <span className="quote-product-vat-value">
                      {/* {this.calculateVAT(this.state.products)}€ */}
                    </span>
                  </div>
                  <hr />
                  <div className="quote-product-checkout">
                    <span className="quote-product-checkout-title">TOTAL</span>
                    <span className="quote-product-checkout-value">
                      {/* {this.calculateTotal(this.state.products)}€ */}
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
