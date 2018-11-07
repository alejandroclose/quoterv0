import React, { Component } from "react";
import ProductPicker from "./ProductPicker";
import Products from "../lib/products-service";

class QuoteProducts extends Component {
  state = {
    products: []
  }

  handleData = data => {
    this.getProduct(data);
  }

  getProduct = (id) => {
    Products.getProduct(id)
      .then((product)=> {
        const { products } = this.state;
        products.push(product)
        this.setState({
          products: products,
        })
      })
  }

  render(){
    
    return(<div>
      <div>
        <ProductPicker sendData={this.handleData}/>
      </div>
      <div>
        {this.state.products.map((product)=>{
          return <li key={product._id}>{product.name}</li>
        })}
      </div>
      {/* Sum of products prices */}
      <div style={{margin: "20px"}}>
        {this.state.products.reduce((acc, product) => {
          return acc + product.price
        }, 0)}
      </div>
    </div>)
  }
}
export default QuoteProducts;