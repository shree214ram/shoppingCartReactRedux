import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css";
import { fetchList, productQuantityChange, formDataChanged, emptyCartData } from "./homeAction";
import ProductsList from "../ProductsList/ProductsList";
import Header from "../Header/Header";
import Greetings from "../Greetings/Greetings";
import Checkout from "../Checkout/Checkout";
import OrderSummary from "../OrderSummary/OrderSummary";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: [],
      showGreetings: false,
      showCheckoutPage: false,
      showProductList: false,
      showOrderSummary: false
    };
  }

  productQuantityChange = (e, action, val, Olddata) => {
    this.props.productQuantityChange(e, action, val, Olddata);
  };


  showProductList = () => {
    this.setState({ showProductList: true, showCheckoutPage: false, showOrderSummary: false })
  };

  showCheckoutPage = () => {
    this.setState({ showProductList: false, showCheckoutPage: true, showOrderSummary: false })
  };

  showGreetings = () => {
    this.props.emptyCartData(this.props.data);
    this.setState({
      showGreetings: true,
      showCheckoutPage: false,
      showOrderSummary: false,
      subTotalAmount: 0,
    })
  };


  formDataChanged = (name, value, Olddata) => {
    this.props.formDataChanged(name, value, Olddata);
  };

  placeOrder = () => {
    this.setState({ showProductList: false, showCheckoutPage: false, showOrderSummary: true })
  };

  componentDidMount() {
    this.props.fetchLists();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.someValue !== prevState.someValue) {
      return { someState: nextProps.someValue };
    }
    else return null;
  }
  render() {
    const { data, isLoading, subTotalAmount, userFormData } = this.props;

    if (isLoading === true) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header subTotalAmount={subTotalAmount} />
        {
          !this.state.showProductList && !this.state.showCheckoutPage && !this.state.showOrderSummary &&
          <Greetings showProductList={this.showProductList} />
        }
        {
          this.state.showProductList && !this.state.showCheckoutPage && !this.state.showOrderSummary &&
          <ProductsList showCheckoutPage={this.showCheckoutPage} productQuantityChange={this.productQuantityChange} data={data} subTotalAmount={subTotalAmount} />
        }
        {
          this.state.showCheckoutPage && !this.state.showProductList && !this.state.showOrderSummary &&
          <Checkout
            formDataChanged={this.formDataChanged}
            showProductList={this.showProductList}
            data={data}
            subTotalAmount={subTotalAmount}
            userFormData={this.props.userFormData}
            placeOrder={this.placeOrder}
          />
        }
        {
          this.state.showOrderSummary && !this.state.showProductList && !this.state.showCheckoutPage &&
          <OrderSummary
            showGreetings={this.showGreetings}
            data={data}
            subTotalAmount={subTotalAmount}
            userFormData={this.props.userFormData}
          />
        }
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.home.isLoading,
    cartDetails: state.home.cartDetails,
    data: state.home.data,
    subTotalAmount: state.home.subTotalAmount,
    userFormData: state.home.userFormData,
    error: state.home.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(fetchList()),
  productQuantityChange: (e, action, val, Olddata) => dispatch(productQuantityChange(e, action, val, Olddata)),
  formDataChanged: (name, value, Olddata) => dispatch(formDataChanged(name, value, Olddata)),
  emptyCartData: (Olddata) => dispatch(emptyCartData(Olddata))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
