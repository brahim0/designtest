import React, { Component } from 'react'
import logo from '../logo_bh.jpg';
import { FaAlignRight } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import {  Link } from "react-router-dom";



export default class Header extends Component {
    state={
        isOpen:false
    };
    handleToggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        });
        console.log(this.state.isOpen);
    }
    render() {
        return (
            <>
            <nav className="nav  mb-3 navbar-expand-lg  header">
            
            <a className="mr-auto p-2 "><img src={logo} className="logo" /></a>
            <button className="navbar-toggler d-flex justify-content-end mr-2 my-2" type="button" onClick={this.handleToggle} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color:'white' }}>
            {this.state.isOpen ? <IoIosCloseCircle /> : <FaAlignRight />}
            </button>
           

            
        
          </nav>
          <div >
            <ul className={this.state.isOpen ? "nav-links show-nav ": "nav-links"}>
                    <li className="nav-item">
                      <Link className="nav-link"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link"  to="/resume">Resume</Link>

                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>

                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>

                    </li>


                </ul>
            </div>
            
          
          </>
        )
    }
}
