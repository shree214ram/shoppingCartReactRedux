import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./Header.css";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    showProductList = () => {
        this.props.showProductList();
    }
    formDataChanged = (e) => {
        const oldData = this.props.userFormData
        this.props.formDataChanged(e.target.name, e.target.value, oldData);
    }
    placeOrder = () => {
        if (
            !this.props.userFormData.name ||
            this.props.userFormData.name == "" ||
            !this.props.userFormData.surname ||
            this.props.userFormData.surname == "" ||
            !this.props.userFormData.email ||
            this.props.userFormData.email == "" ||
            !this.props.userFormData.phone ||
            this.props.userFormData.phone == "" ||
            !this.props.userFormData.description ||
            this.props.userFormData.description == ""
        ) {
            alert('Please fill the form.')
        } else {
            this.props.placeOrder();
        }
    }
    render() {
        const { data, subTotalAmount, userFormData } = this.props;
        const resultArray = [];
        (data || []).map((currentObject, index1) => {
            const newInnerArray = [];
            const currentObjectMain = currentObject
            if (currentObjectMain.quantity > 0) {
                Object.keys(currentObjectMain).map((key, index) => {

                    if (key == 'name') {
                        newInnerArray.push(currentObjectMain[key])
                    }
                }
                );
                newInnerArray.push(
                    <span key={`Total${index1}`} title={index1}>${currentObjectMain['total']}</span>
                )
                resultArray.push(
                    <li key={index1}>
                        {newInnerArray}
                    </li>
                );
            }
        });
        return (
            <div className="main shoping-cart spad">
                <div className="container">
                    <div className="checkout__form">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__btns">
                                    <a onClick={this.showProductList} href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                        Upadate Cart</a>
                                </div>
                            </div>
                        </div>
                        <h4>Billing Details</h4>

                        {/* <form action="#"> */}
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input name="name" onChange={(e) => { this.formDataChanged(e) }} value={userFormData.name} type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input name="surname" onChange={(e) => { this.formDataChanged(e) }} value={userFormData.surname} type="text" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input name="phone" onChange={(e) => { this.formDataChanged(e) }} value={userFormData.phone} type="number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input name="email" onChange={(e) => { this.formDataChanged(e) }} value={userFormData.email} type="email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="checkout__input">
                                        <p>Order notes<span>*</span></p>
                                        <input name="description" onChange={(e) => { this.formDataChanged(e) }} value={userFormData.description} type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery." />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">Products <span>Total</span></div>
                                        <ul>
                                            {resultArray}
                                        </ul>

                                        <div className="checkout__order__subtotal">Subtotal <span>${subTotalAmount}</span></div>
                                        <div className="checkout__order__total">Total <span>${subTotalAmount}</span></div>

                                        <button type="button" onClick={this.placeOrder} className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;
