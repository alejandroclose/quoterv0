import React, { Component } from "react";
import Users from "../lib/user-service.js";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { withAuth } from "../components/AuthProvider";
import { Link } from "react-router-dom";

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
    const { isLoading } = this.state;

    switch (isLoading) {
      case true:
        return (
          <div>
            <Header />
            <div className="page-content">
              <Sidebar />
              <div className="main-page-content">
                LOADING PRODUCTS...</div>
            </div>

          </div>
        );
      default:
        return (
          <div className="products-list">
            <Header />
            <div className="page-content">
              <Sidebar />
              <div className="main-page-content">
                <div className="page-header page-header-products">
                  <h1>My Products</h1>
                </div>
                <ul className="cards-collection">
                <Link
                    to="/quotes/new"
                  >
                    <div className="card card-new-product">
                      <div className="card-content card-content-product">
                        <div className="content card-content-new-product"><div>Create a</div><div>New Product</div><div className="icon"><i className="fa fa-industry" /></div></div>
                      </div>
                    </div>
                  </Link>
                  {this.state.products.map(product => {
                    return (
                      <div className="card box-shaddow-products" key={product._id}>
                        <div className="card-content card-content-products">
                          <div className="content">{product.name}</div>
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

export default withAuth()(ProductsList);
