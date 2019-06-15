import React, { Component } from 'react';
import { InputField } from '../../ReusableComponents/inputField';

class UpdateVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicle: {
                name: "",
                details: "",
                staffId: "",
                stockItemId: "",
            }
        }
    }

    onChange(e) {
        const { vehicle } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            vehicle: {
                ...vehicle,
                [name]: value
            }
        })
        console.log(value)
    }

    render() {
        const {
            name,
            details,
            staffId,
            stockItemId } = this.state.vehicle
        return (
            <div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <h3 className="page-title">Update Vehicle</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1" />

                    <div className="col-lg-10">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Stock Item Details</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-row">
                                                    <InputField label="Name of vehichle *" placeholder="Enter vehicle name" name="name" value={name} onChange={this.onChange} required={true} />
                                                    <div class="form-group col-md-6">
                                                        <label for="details">Details about Vehicle</label>
                                                        <textarea class="form-control" name="details" rows="5">{details}</textarea>
                                                    </div>
                                                </div>


                                                <button type="submit" className="btn btn-accent">Update</button>
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

export default UpdateVehicle;