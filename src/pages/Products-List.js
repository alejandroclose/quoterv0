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
            <Sidebar/>
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
            <Sidebar/>
              <div className="main-page-content">
              <div className="page-header page-header-products">
              <h1>My Products</h1>
              </div>
                <ul className="cards-collection">
                  {this.state.products.map(product => {
                    return (
                      <div className="card" key={product._id}>
                        <div className="card-content card-content-products">
                          <div className="content">{product.name}</div>
                          <div className="card-footer">
                            
                            <Link
                              to={`/products/${product._id}`}
                              className="card-footer-item fas fa-edit edit-product-btn"><span className="fa-icon-caption">Edit</span></Link>
                            <i
                              className="card-footer-item fas fa-trash trash"
                            //   onClick={() => this.handleDeleteQuote(quote._id)}
                            ><span className="fa-icon-caption">Delete</span></i>
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

export default withAuth()(ProductsList);
