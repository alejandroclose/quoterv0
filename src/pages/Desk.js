import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Users from "../lib/user-service";
import Header from "../components/Header";
import { withAuth } from '../components/AuthProvider';
import Quote from '../lib/quotes-service';


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

  handleDeleteQuote(id){
    console.log(id)
    Quote.deleteQuote(id)
    .then((data) => {
      console.log('quote deleted');
      this.props.history.push('/quotes')
        window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    })
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
              <Link className="button is-success is-outlined" to="/quotes/new">Add Quote</Link>
                <ul className="cards-collection">
                  {this.state.quotes.map(quote => {
                    return (
                      <div className="card" key={quote._id}>
                        <div className="card-content">
                          <div className="content">{quote.name}</div>
                          <div className="card-footer">
                            <Link to={`/quotes/${quote._id}`} className="card-footer-item">
                              Edit
                            </Link>
                            <i className="card-footer-item fas fa-trash" onClick={() => this.handleDeleteQuote(quote._id)}>
                            </i>
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