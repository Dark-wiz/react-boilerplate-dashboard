import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">Overview</span>
                        <h3 className="page-title">User Profile</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card card-small mb-4 pt-3">
                            <div className="card-header border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <img className="rounded-circle" src="images/avatars/0.jpg" alt="User Avatar" width="110" /> </div>
                                <h4 className="mb-0">Sierra Brooks</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Account Details</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-6">
                                                        <label for="feFirstName">First Name</label>
                                                        <input type="text" className="form-control" id="feFirstName" placeholder="First Name" value="Sierra" /> </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="feLastName">Last Name</label>
                                                        <input type="text" className="form-control" id="feLastName" placeholder="Last Name" value="Brooks" /> </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default UserProfile;