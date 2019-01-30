import React, { Component } from "react";
import Users from "../lib/user-service.js";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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
                        <div className="page-content">
                            <Sidebar />
                            <div className="main-page-content">
                                LOADING SERVICES...</div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="services-list">
                        <Header />
                        <div className="page-content">
                            <Sidebar />
                            <div className="main-page-content">
                                <div className="page-header page-header-services">
                                    <h1>My Services</h1>
                                </div>
                                <ul className="cards-collection">
                                    <Link
                                        to="/quotes/new"
                                    >
                                        <div className="card card-new-service">
                                            <div className="card-content card-content-services">
                                                <div className="content card-content-new-service"><div>Create a</div><div>New Service</div><div className="icon"><i className="fa fa-briefcase" /></div></div>
                                            </div>
                                        </div>
                                    </Link>
                                    {this.state.services.map(service => {
                                        return (
                                            <div className="card box-shaddow-services" key={service._id}>
                                                <div className="card-content card-content-services">
                                                    <div className="content">
                                                        {service.name}
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