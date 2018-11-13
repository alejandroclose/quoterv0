import React, { Component } from "react";
import { Link } from "react-router-dom";
import Users from "../lib/user-service";
import Header from "../components/Header";
import { withAuth } from "../components/AuthProvider";
import Quote from "../lib/quotes-service";

class Quotes extends Component {
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
      .catch(error => console.error("Error!:", error));
  }

  handleDeleteQuote(id) {
    Quote.deleteQuote(id)
      .then(data => {
        this.props.history.push("/quotes");
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { isLoading } = this.state;
    switch (isLoading) {
      case true:
        return (
          <div>
            <Header />
            Loading Quotes...
          </div>
        );
      default:
        return (
          <div className="quotes-list">
            <Header />
            <div className="page-content">
              <div className="main-page-content">
                <h1>My Quotes</h1>
                <Link
                  className="button is-success is-outlined"
                  to="/quotes/new"
                >
                  Add Quote
                </Link>
                <ul className="cards-collection">
                  {this.state.quotes.map(quote => {
                    return (
                      <div className="card" key={quote._id}>
                        <div className="card-content">
                          <div className="content">{quote.name}</div>
                          <div className="card-footer">
                            <Link
                              to={`/quotes/${quote._id}`}
                              className="card-footer-item fas fa-edit"
                            />
                            <i
                              className="card-footer-item fas fa-trash trash"
                              onClick={() => this.handleDeleteQuote(quote._id)}
                            />
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

export default withAuth()(Quotes);
