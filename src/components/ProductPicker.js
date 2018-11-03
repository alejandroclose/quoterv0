import React, { Component } from "react";
import Users from "../lib/user-service";
import { withAuth } from "../components/AuthProvider";

class ProductPicker extends Component {
  state = {
    products: [],
    isLoading: true
  };

  componentDidMount() {
    Users.getUserProducts()
      .then(data => {
        this.setState({
          products: data,
          isLoading: false
        });
      })
      .catch(error => console.error("Product Picker error!:", error));
  }

  render() {
    const { isLoading } = this.state;

    switch (isLoading) {
      case true:
        return <div>Loading Product List...</div>;
      default:
        return (
          <div className="select is-small">
          <select>
            <option></option>
            {this.state.products.map(product => {
              return(
                <option key={product._id}>{product.name}</option>
              )
            })}
          </select>
        </div>
        );
    }
  }
}

export default withAuth()(ProductPicker);
