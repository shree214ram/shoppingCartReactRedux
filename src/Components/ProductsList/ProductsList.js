import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./ProductsList.css";

class ProductsList extends React.Component {

    productQuantityChange = (e, action, val) => {
        const oldData =  this.props.data
        this.props.productQuantityChange(e,action, val, oldData);
    }
    showCheckoutPage = () => {
        if(this.props.subTotalAmount > 0 ){
            this.props.showCheckoutPage();
        } else {
            alert('Please Select a product.')
        }
    }
    render() {

        const resultArray = [];
        const data = this.props.data;
        (data || []).map((currentObject, index1) => {
            const newInnerArray = [];
            const currentObjectMain = currentObject
            Object.keys(currentObjectMain).map((key, index) => {
                const productNameArray = [];
                productNameArray.push(
                    <td key={index} title={key} className="shoping__cart__item">
                        <img src="http://localhost:3000/veggi.jpg" height="100px" alt="" />
                        <h5 style={{'text-transform': 'capitalize'}}>{currentObjectMain[key]}</h5>
                    </td>
                );
                const productPriceArray = [];
                productPriceArray.push(
                    <td key={index} title={key} className="shoping__cart__price">
                        $ {currentObjectMain[key]}
                    </td>
                );
                if(key == 'name'){
                    newInnerArray.push(productNameArray)
                }
                else if(key == 'price'){
                    newInnerArray.push(productPriceArray)
                }
            }
            );
            newInnerArray.push(
                <td key={`Quantity${index1}`} title={index1} className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <span 
                                className="dec qtybtn"
                                onClick={e => this.productQuantityChange(e,'minus', index1)}
                            >-</span>
                            <input type="text" value={currentObjectMain['quantity']} />
                            <span 
                                className="inc qtybtn" 
                                onClick={e => this.productQuantityChange(e,'plus', index1)}
                            >+</span>
                        </div>
                    </div>
                </td> 
            )
            newInnerArray.push(
                <td key={`Total${index1}`} title={index1} className="shoping__cart__total">
                    ${currentObjectMain['total']}
                </td>
            )
            newInnerArray.push(
            <td key={`Close${index1}`} title={index1} className="shoping__cart__item__close">
                <span className="icon_close"></span>
            </td>
            )
            resultArray.push(
                <tr key={index1}>
                    {newInnerArray}
                </tr>
            );
        });

        return (
            <div className="main shoping-cart spad">
                {!data || !data[0] && <span className="errorMsgClass">" Records not available!"</span>
                }
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {resultArray}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            
                        </div>
                        <div className="col-lg-6">
                           
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>${this.props.subTotalAmount}</span></li>
                                    <li>Total <span>${this.props.subTotalAmount}</span></li>
                                </ul>
                                <a  onClick={this.showCheckoutPage} href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsList;
