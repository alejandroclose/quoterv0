import React, { Component } from "react";
import { Link } from "react-router-dom";
import Users from "../lib/user-service";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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
            <div className="page-content">
              <Sidebar />
              <div className="main-page-content">
                LOADING QUOTES...</div>
            </div>


          </div>
        );
      default:
        return (
          <div className="quotes-list">
            <Header />
            <div className="page-content">
              <Sidebar />
              <div className="main-page-content">
                <div className="page-header page-header-quotes">
                  <h1>My Quotes</h1>
                </div>
                <ul className="cards-collection">
                  <Link
                    to="/quotes/new"
                  >
                    <div className="card card-new-quote">
                      <div className="card-content card-content-quotes">
                        <div className="content card-content-new-quote"><div>Create a</div><div>New Quote</div><div className="icon"><i className="fa fa-money-check" /></div></div>
                      </div>
                    </div>
                  </Link>
                  {this.state.quotes.map(quote => {
                    return (
                      <div className="card" key={quote._id}>
                        <Link
                          to={`/quotes/${quote._id}`}>
                          <div className="card-content card-content-quotes">
                            <div className="content">{quote.name}</div>
                          </div>
                        </Link>
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
