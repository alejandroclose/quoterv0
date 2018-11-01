import React, { Component } from 'react';
import Users from "../lib/user-service"
import Header from "../components/Header"
import { withAuth } from '../components/AuthProvider';


class Desk extends Component {
  state = {
    quotes: [],
    isLoading: true
  };

  
  componentDidMount() {
    Users.getUserQuotes()
      .then(data => {
        this.setState({
          quotes: data,
          isLoading: false
        });
    })
    .catch(error => console.log("Error!:", error))
  }

  render() {
    const { isLoading } = this.state
    switch(isLoading) {
      case true:
        return <div>Loading Quotes</div>;
        default:
    
    return (
      <div>
        <Header/>
        <div className="page-content">
              <div className="main-page-content">
              <button className="button is-success is-outlined">Add Quote</button>
                <ul className="cards-collection">
                  {this.state.quotes.map(quote => {
                    return (
                      <div className="card" key={quote._id}>
                        <div className="card-content">
                          <div className="content">{quote.name}</div>
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
    )
  }
  }
}

export default withAuth()(Desk);