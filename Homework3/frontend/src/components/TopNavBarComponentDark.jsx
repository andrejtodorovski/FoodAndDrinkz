import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/TopNavBarComponent.css'
class TopNavBarComponentDark extends Component {
    render() {
        const buttonStyle = {
            borderRadius: "20px"
        };
        const logoStyle = {
            padding: "30px"
        };
        const logStyle = {
            padding: "5px"
        }
        return (
            <div className='topNavBarContainerDark pl-5'>
                <div className='btn1'>
                    <button type="button" className="btn ml-5 mt-2 topNavBarContainerDark" style={buttonStyle}><span style={logoStyle}><Link to="/">
                        <img src='https://i.ibb.co/X20ttwm/Pin-Point-Dark.jpg' alt='logo-dark'></img>
                        </Link></span></button>
                </div>
            </div>
            
        );
    }
}

export default TopNavBarComponentDark;