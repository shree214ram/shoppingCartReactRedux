import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OrderSummary.css";


class OrderSummary extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    showGreetings = () => {
        this.props.showGreetings();
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
            <div>
                <div className="col-lg-12 text-center" >
                    <div className="adjust">
                        <div className="container" >
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="breadcrumb__text">
                                        <h2>Thankyou for the order!!!</h2>
                                        <div className="breadcrumb__option">
                                            <span>We Appreciate your Timings :)  </span>
                                        </div>
                                        <p className="fontColor">“Delivery is on its way” </p>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkout__order">
                                                    <h4>Your Personal Details</h4>
                                                    <div style={{'minHeight': '230px'}}>
                                                    <div className="checkout__order__products"><span className="right">{userFormData.name}</span> <span className="left">Fist Name</span> </div>
                                                    <div className="checkout__order__products">
                                                        <span className="right">{userFormData.surname}</span> <span className="left">Last Name</span>
                                                    </div>

                                                    <div className="checkout__order__products">
                                                        <span className="right">{userFormData.phone}</span> <span className="left">Phone</span>
                                                    </div>


                                                    <div className="checkout__order__products">
                                                        <span className="right">{userFormData.email}</span> <span className="left">Email</span>
                                                    </div>


                                                    <div className="checkout__order__products">
                                                        <span className="right">{userFormData.description}</span> <span className="left">Description</span>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="checkout__order">
                                                    <h4>Your Order Summary</h4>
                                                    <div className="checkout__order__products">Products <span>Total</span></div>
                                                    <ul>
                                                        {resultArray}
                                                    </ul>

                                                    <div className="checkout__order__subtotal">Subtotal <span>${subTotalAmount}</span></div>
                                                    <div className="checkout__order__total">Total <span>${subTotalAmount}</span></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="site-btn" onClick={this.showGreetings}>Close</button>
                </div>
            </div>
        );
    }
}

export default OrderSummary;

