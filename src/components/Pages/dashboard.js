import React, { Component } from 'react';
import CardWithGraph from '../ReusableComponents/cardWithGraph';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="main-content-container container-fluid px-4">
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <span className="text-uppercase page-subtitle">Dashboard</span>
                    </div>
                </div>

                <div className="row">
                    <CardWithGraph label="Posts" value="100" graphValue="40" graphClass="stats-small__percentage stats-small__percentage" />
                    <CardWithGraph label="Posts" value="100" graphValue="40" graphClass="stats-small__percentage stats-small__percentage" />
                    <CardWithGraph label="Posts" value="100" graphValue="40" graphClass="stats-small__percentage stats-small__percentage" />

                </div>


            </div>);
    }
}

export default Dashboard;