import React, { Component } from "react";
import Users from "../lib/user-service.js";
import Header from "../components/Header";
import { withAuth } from "../components/AuthProvider";
import { Link } from "react-router-dom";

class ServicesList extends Component {
    state = {
        services: [],
        isLoading: true
    }

    componentDidMount() {
        Users.getUserServices()
            .then(data => {
                this.setState({
                    services: data,
                    isLoading: false
                });
            })
            .catch(error => console.error("Error!:", error))
    }

    render() {
        const { isLoading } = this.state;

        switch (isLoading) {
            case true:
                return (
                    <div>
                        <Header />
                        Loading Services...
                    </div>
                );
            default:
                return (
                    <div className="services-list">
                        <Header />
                        <div className="page-content">
                            <div className="main-page-content">
                                <h1>My Services</h1>
                                <ul className="cards-collection">
                                    {this.state.services.map(service => {
                                        return (
                                            <div className="card" key={service._id}>
                                                <div className="card-content">
                                                    {service.name}
                                                    <div className="card-footer">
                                                        <Link to={`/services/${service._id}`} className="card-footer-item"> Edit</Link>
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

export default withAuth()(ServicesList);