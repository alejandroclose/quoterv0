import React, { Component } from "react";
import Quote from "../lib/quotes-service";
import Products from "../lib/products-service";
import { withAuth } from "../components/AuthProvider";
import Header from "../components/Header";
import ProductPicker from "../components/ProductPicker";


class EditQuote extends Component {
  state = {
    name: "",
    customer_name: "",
    customer_address: "",
    customer_email: "",
    productsArr: [],
    products: [],
    isLoading: true
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
          productsArr: products || [],
          isLoading:false
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
    const { id } = this.props.match.params;
    const {
      name,
      customer_name,
      customer_address,
      customer_email,
      productsArr
    } = this.state;

    Quote.editQuote(id, {
      name,
      customer_name,
      customer_address,
      customer_email,
      productsArr
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
      return this.getProduct(id);
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
  
  handlePickerData = data => {
    this.getNewProduct(data);
  }

  getNewProduct = id => {
    Products.getProduct(id).then(product => {
      const { products } = this.state;
      products.push(product);
      this.setState({
        products: products
      })
      this.getNewId(id)
    })
  }

  getNewId = (id) => {
    const { productsArr } = this.state;
    productsArr.push(id);
    this.setState({
      productsArr: productsArr
    })
  }

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
    const {
      name,
      customer_name,
      customer_address,
      customer_email
    } = this.state;

    const { isLoading } = this.state;
    switch (isLoading) {
      case true:
        return <div>
          <Header/>
          Loading Quote...</div>;
      default:
    

    return (
      <div class="edit-quote">
        <Header />
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
              {this.showProducts()}
            <ul>
              {this.state.products.map((product, index) => {
                return (
                  <li className="quote-product-line" key={index}>
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
            <div className="quote-edit-product-picker">
            <ProductPicker sendData={this.handlePickerData}/>
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

        {/* 
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
}

export default withAuth()(EditQuote);
