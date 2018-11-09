import React, { Component } from "react";
import Quote from "../lib/quotes-service";
import { withAuth } from "../components/AuthProvider";
import Header from "../components/Header";
import Products from "../lib/products-service";

class EditQuote extends Component {
  state = {
    name: "",
    customer_name: "",
    customer_address: "",
    customer_email: "",
    productsArr: [],
    products: [],
    isLoading: false
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    Quote.getQuote(id)
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
          productsArr: products || []
        });
        this.handleData();
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const {
      name,
      customer_name,
      customer_address,
      customer_email
    } = this.state;
    Quote.editQuote(id, {
      name,
      customer_name,
      customer_address,
      customer_email
    })
      .then(result => {
        this.props.history.push(`/quotes`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleData = () => {
    this.state.productsArr.map(id => {
      this.getProduct(id);
    });
  };

  getProduct = id => {
    Products.getProduct(id).then(product => {
      const { products } = this.state;
      const newProducts = products;
      newProducts.push(product);
      this.setState({
        products: newProducts
      });
    });
  };

  showProducts = () => {
    this.state.products.map((product, index) => {
      return (
        <li className="quote-product-line" key={index}>
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
    });
  };

  render() {
    const {
      name,
      customer_name,
      customer_address,
      customer_email
    } = this.state;
    return (
      <div>
        <Header/>
        <div className="quote-buttons">
          <button
            className="button is-success is-outlined"
            onClick={() => this.handleSubmit()}
          >
            Save Quote
          </button>
        </div>
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
                  value={name}
                  name="name"
                  onChange={this.handleOnChange}
                />
                <input
                  type="text"
                  value={customer_name}
                  name="customer_name"
                  onChange={this.handleOnChange}
                />
                <input
                  type="text"
                  value={customer_address}
                  name="customer_address"
                  onChange={this.handleOnChange}
                />
                <input
                  type="text"
                  value={customer_email}
                  name="customer_email"
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
          </div>
          <div className="quote-products">
            <ul>
              {this.showProducts}
              {this.state.products.map((product, index) => {
                return (
                  <li className="quote-product-line" key={index}>
                    <div className="quote-product-info">
                    <div>
                      <div className="quote-product-image media-left">
                        <img src={product.image} alt="product badge" />
                      </div>
                      <div>{product.name}</div>
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
        </div>

        {/* <Header/>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={name} name="name" onChange={this.handleOnChange}/>
        <input type="text" value={customer_name} name="customer_name" onChange={this.handleOnChange}/>
        <input type="text" value={customer_address} name="customer_address" onChange={this.handleOnChange}/>
        <input type="text" value={customer_email} name="customer_email" onChange={this.handleOnChange}/>
        <button type="submit">Save</button>
        </form> */}
      </div>
    );
  }
}

export default withAuth()(EditQuote);
