import React, { Component } from 'react';
import DatatablePage from '../../ReusableComponents/dataTables';

class AllVehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const allVehicles = [];
        const data = {
            columns: [
                {
                    label: "Name of Vehicle",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Number of Vehicle",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Date In",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Available Vehicle",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Actions",
                    field: "update",
                    sort: "asc"
                },
                {
                    // label: "Actions",
                    field: "viewHistory",
                    sort: "asc"
                }
            ],
            rows: allVehicles,
        }
        return (
            <div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <h3 className="page-title">All Vehicles</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <DatatablePage data={data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default AllVehicles;