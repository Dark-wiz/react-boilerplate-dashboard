import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="error">
                <div className="error__content">
                    <div className="col-lg-8">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Login</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label for="feFirstName">Username</label>
                                                        <input type="text" className="form-control" id="feFirstName" placeholder="First Name" value="Sierra" /> </div>
                                                    <div className="form-group col-md-12">
                                                        <label for="feLastName">Password</label>
                                                        <input type="text" className="form-control" id="feLastName" placeholder="Last Name" value="Brooks" /> </div>
                                                </div>
                                                <button type="submit" className="btn btn-accent">Login</button>
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

export default Login;