import React, { Component } from "react";
import Users from "../lib/user-service";
import { withAuth } from "../components/AuthProvider";

class ProductPicker extends Component {
  state = {
    products: [],
    isLoading: true,
    pick: "",
    selectedProduct: null
  };

  componentDidMount() {
    Users.getUserProducts()
      .then(data => {
        this.setState({
          products: data,
          isLoading: false,
        });
      })
      .catch(error => console.error("Product Picker error!:", error));
  }

  // picks the id of the selected product and sends it as props.
  handleOnChange = e => {
    const selectedIndex = e.target.options.selectedIndex;
    const selectedId = e.target.options[selectedIndex].getAttribute("value");
    this.setState({
      selectedProduct: selectedId
    })
  };

  handleClick = () => {
    this.props.sendData(this.state.selectedProduct);
  }

  render() {
    const { isLoading } = this.state;
    switch (isLoading) {
      case true:
        return <div>Loading Product List...</div>;
      default:
        return (
          <div className="select is-small">
            <select onChange={this.handleOnChange}>
              <option />
              {this.state.products.map(product => {
                return (
                  <option key={product._id} value={product._id}>
                    {product.name}
                  </option>
                );
              })}
            </select>
            <button onClick={this.handleClick}>Add</button>
          </div>
        );
    }
  }
}

export default withAuth()(ProductPicker);
