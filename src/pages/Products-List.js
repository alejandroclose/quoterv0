import React, { Component } from "react";
import Users from "../lib/user-service.js"
import Header from "../components/Header";
import { withAuth } from '../components/AuthProvider';

class ProductsList extends Component {
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
      .catch(error => console.error("Error!:", error));
  }

  render() {
    const {isLoading} = this.state;
    switch (isLoading) {
      case true:
        return <div>Loading</div>;
      default:
        return (
          <div>
            <Header />
            <div className="page-content">
              <div className="main-page-content">
                <ul className="cards-collection">
                  {this.state.products.map(product => {
                    console.log(product);
                    return (
                      <div className="card" key={product._id}>
                        <div className="card-content">
                          <div className="content">{product.name}</div>
                          <div className="card-footer">
                            <a href="/products" className="card-footer-item">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
    }
  }
}

export default withAuth() (ProductsList);
