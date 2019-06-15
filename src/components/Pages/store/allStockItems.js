import React, { Component } from 'react';
import DatatablePage from '../../ReusableComponents/dataTables';
import { connect } from 'react-redux'
import { getStockitems } from '../../../redux/actions/storeAction';

class AllStockItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.getStockitems();
    }
    render() {
        const allStockItems = [];
        const data = {
            columns: [
                {
                    label: "Name of Stock Item",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Number of Stock Item",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Date In",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Available Stock Item",
                    field: "serial",
                    sort: "asc"
                },
                {
                    label: "Actions",
                    field: "update",
                    sort: "asc"
                }
            ],
            rows: allStockItems,
        }
        return (
            <div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <h3 className="page-title">All Stock Items</h3>
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
const mapStateToProps = (state) => {
    // stockitems: state.store.allStockItems
}

export default connect(mapStateToProps, { getStockitems })(AllStockItems);