import React, { Component } from "react";


handlePretax = data => {
  this.state.products.reduce((acc, product) => {
    const pretax = acc + product.price;
    console.log(pretax)
    return pretax
  }, 0)
}