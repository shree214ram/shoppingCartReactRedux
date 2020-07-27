import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Greetings.css";


class Greetings extends React.Component {
    componentDidMount() {
    }

    componentWillUnmount() {
    }
    showProductList = () => {
        this.props.showProductList();
    }
    render() {


        return (
            <div>
                <div className="col-lg-12 text-center set-bg" >
                    <div className="adjust">
                        <div className="container" >
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="breadcrumb__text">
                                        <h2>Welcome to our Nutrition Site!</h2>
                                        <div className="breadcrumb__option">
                                            <span>Good health is true wealth!!!!</span>
                                        </div>
                                        <p className="fontColor">“The higher your energy level, the more efficient your body, the better you feel and the more you will use your talent to produce outstanding results.”</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="site-btn" onClick={this.showProductList}>Order Now</button>
                </div>
            </div>
        );
    }
}

export default Greetings;

