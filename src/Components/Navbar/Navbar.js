import React, { Component } from 'react';
import './Navbar.css';
import Logo from '../../Assets/Img/logo.svg';
import {MDBBtn} from 'mdb-react-ui-kit';

export default class Navbar extends Component {
    render() {
        return (
            <>
            <div className="nav">
            <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <div className="nav-title">
                <img src={Logo} className="logoClass"/>
              </div>
            </div>
            <div className="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

                    <div className="nav-links" style={{ color: "grey" }}>
              <a href="#" target="_blank">Home</a>
              <a href="#" target="_blank">Customer</a>
              <a href="#" target="_blank">Contact Us</a>
              <a href="#" target="_blank">Enterprise</a>
              <a href="#" target="_blank">Pricing</a>
              <a href="#" target="_blank">Login</a>
              <a><MDBBtn className="mt-3" style={{ backgroundImage: "linear-gradient(to right, #9e017a, #fd5355)", borderRadius: "20px" }}>Sign Up</MDBBtn></a>
            </div>
          </div>
            </>
        )
    }
}
