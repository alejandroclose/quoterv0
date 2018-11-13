import React, { Component } from "react";
import { withAuth } from "../components/AuthProvider";
import Header from "../components/Header";
import Product from "../lib/products-service";

class CreateProduct extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    price: null,
    currency: "",
    unit: "",
    owner:""
  }

  handleSubmit = e => {
    const {
      name, description, image, price, currency, unit, owner
    } = this.state;

    Product.createProduct({
      name, description, image, price, currency,unit, owner
    })
    .then(result => {
      this.props.history.push(`/products`);
      window.location.reload();
    })
    .catch(err => {
      console.error(err);
    });
  };

  render() {
    return( <div>
      <Header/>
      ASDF</div>)
  }
}

export default withAuth()(CreateProduct);