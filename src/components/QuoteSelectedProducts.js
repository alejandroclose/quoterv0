import React, { Component } from "react";
import { withAuth } from "../components/AuthProvider";
import Products from "../lib/products-service";

class QuoteSelectedProducts extends Component {
  state = {
    products: [],
  };

  render() {
    return (
          <div key={this.state.products.id}>
            {this.props.prodArr
            .map((productId) => {
              Products.getProduct(productId)
              .then(data => {
                this.handle(data)
               }).catch(error =>{
                 console.error('Error"', error);
               })
               
              })
            }
          
          </div>
        );
    }
  }

export default withAuth()(QuoteSelectedProducts);