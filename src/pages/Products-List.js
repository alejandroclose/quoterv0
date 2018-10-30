import React, { Component } from "react";
import Products from "../lib/products-service";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class ProductsList extends Component {
  state = {
    products: [],
    isLoading: true
  };
  componentDidMount() {
    Products.getProducts()
      .then(data => {
        this.setState({
          products: data,
          isLoading: false
        });
      })
      .catch(error => console.error("Error!:", error));
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div>
          <ul className="cards-collection">
            {this.state.products.map(product => {
              console.log(product);
              return (
                <div className="card" key={product._id}>
                  <div className="card-content">
                    <div className="content">{product.name}</div>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductsList;
