import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class CafesNavBarComponent extends Component {
    render() {
        const rStyle = {
            flexGrow: "5"
        };
        const bStyle = {
            flexGrow: "1"
        }
        return (
            <div className='d-flex flex-row'>
                <span style={rStyle}><Link to="/cafes">Cafe</Link></span>
                <span style={bStyle}><Link to="/restaurants">Restaurants</Link></span>
                <span style={bStyle}><Link to="/bars">Bars</Link></span>

            </div>
        );
    }
}

export default CafesNavBarComponent;