import React, { Component } from 'react';
import { InputField } from '../../ReusableComponents/inputField';
import { connect } from 'react-redux'
import { addStockitem } from '../../../redux/actions/storeAction';

class AddStockItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: {
                stockItemName: "",
                stockItemNumber: "",
                dateIn: "",
                dateOut: "",
                noOfStockItemAvailable: "",
                noOfStockItemUsed: "",
                personWithStockItem: "",
                whereStockItemIsUsed: "",
                returnDateOfStockItem: "",
                detailsAboutStockItem: "",
            }
        }
        this.onChange = this.onChange.bind(this)

    }

    onChange(e) {
        const { stock } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            stock: {
                ...stock,
                [name]: value
            }
        })
        console.log(value)
    }

    onSubmit() {
        this.props.addStockitem()
    }
    render() {
        const {
            stockItemName,
            stockItemNumber,
            dateIn,
            dateOut,
            noOfStockItemAvailable,
            noOfStockItemUsed,
            personWithStockItem,
            whereStockItemIsUsed,
            returnDateOfStockItem,
            detailsAboutStockItem } = this.state.stock
        return (
            <div>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <h3 className="page-title">Register Stock Item</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1" />

                    <div className="col-lg-10">
                        <div className="card card-small mb-4">
                            {/* <div className="card-header border-bottom">
                                <h6 className="m-0">Stock Item Details</h6>
                            </div> */}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form>
                                                <div className="form-row">
                                                    <InputField label="Name of stock item *" placeholder="Enter stock name" name="stockItemName" value={stockItemName} onChange={this.onChange} required={true} />

                                                    <InputField label="Number of stock item *" placeholder="Enter number of stock item" name="stockItemNumber" value={stockItemNumber} onChange={this.onChange} type="number" min="0" required={true} />

                                                    <InputField label="Stock in date *" name="dateIn" value={dateIn} onChange={this.onChange} type="date" required={true} />

                                                    <InputField label="Stock out date" name="dateOut" value={dateOut} onChange={this.onChange} type="date" />

                                                    <InputField label="Number of stock item Available" placeholder="Enter number of stock item available" name="noOfStockItemAvailable" value={noOfStockItemAvailable} onChange={this.onChange} type="number" min="0" />

                                                    <InputField label="Number of stock item Used" name="noOfStockItemUsed" value={noOfStockItemUsed} onChange={this.onChange} type="number" min="0" placeholder="Enter number of stock item used" />

                                                    <div class="form-group col-md-6">
                                                        <label for="feInputState">Person with stock item</label>
                                                        <select id="feInputState" class="form-control">
                                                            <option selected="">Choose person</option>
                                                            <option name={personWithStockItem}>...</option>
                                                        </select>
                                                    </div>

                                                    <InputField label="Where stock item is used or fixed" placeholder="Enter name of place stock item is used" name="whereStockItemIsUsed" value={whereStockItemIsUsed} onChange={this.onChange} />

                                                    <InputField label="Date stock item was returned " name="returnDateOfStockItem" value={returnDateOfStockItem} onChange={this.onChange} type="date" />

                                                    <div class="form-group col-md-12">
                                                        <label for="detailsAboutStockItem">Details about stock item</label>
                                                        <textarea class="form-control" name="detailsAboutStockItem" rows="5">{detailsAboutStockItem}</textarea>
                                                    </div>
                                                </div>

                                                <button type="submit" className="btn btn-accent">Add Stock Item</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="card card-small mb-4 pt-3">
                            <div className="card-header border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <img className="rounded-circle" src="images/avatars/0.jpg" alt="User Avatar" width="110" /> </div>
                                <h4 className="mb-0">Sierra Brooks</h4>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {


}

export default connect(addStockitem)(AddStockItem);