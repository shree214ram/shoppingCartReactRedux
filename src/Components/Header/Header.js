import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./Header.css";


class Header extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { subTotalAmount } = this.props;

    return (
      <div>
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="header__top__left">
                            <ul>
                                <li><i className="fa fa-envelope"></i> hello@nutritionhealth.com</li>
                                <li>Free Shipping for all Order of $99</li>
                            </ul>
                            {/* <img src="http://localhost:3000/logo.jpg" height="100px" alt="" /> */}

                        </div>
                        
                    </div>
                    <div className="col-lg-6">
                        <div className="header__top__right">
                           
                            <div className="header__top__right__language">
                                <img src="img/language.png" alt="" />
                                <div>English</div>
                                <span className="arrow_carrot-down"></span>
                                <ul>
                                    <li><a>Spanis</a></li>
                                    <li><a>English</a></li>
                                </ul>
                            </div>
                            <div className="header__top__right__auth">
                                <a><i className="fa fa-user"></i> Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="header__logo">
                        <a><img src="http://localhost:3000/logo.jpg" height="100px" alt=""/></a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <nav className="header__menu humberger__menu__nav mobile-menu">
                        <ul>
                            <li className="active"><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Pages</a>
                            </li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-3">
                    <div className="header__cart">
                        <ul>
                            <li><a><i className="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div className="header__cart__price">item: <span>${subTotalAmount}</span></div>
                    </div>
                </div>
            </div>
            <div className="humberger__open">
                <i className="fa fa-bars"></i>
            </div>
        </div>

      </div>
    );
  }
}

export default Header; 

