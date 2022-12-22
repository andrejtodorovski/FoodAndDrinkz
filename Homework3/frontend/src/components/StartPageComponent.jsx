import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class StartPageComponent extends Component {
    render() {
        const buttonStyle = {
            borderRadius: "20px"
        };
        // const logoStyle = {
        //     padding: "30px"
        // };
        const logStyle = {
            padding: "5px"
        }
        return (
            <div className='bg-secondary bg-gradient'>
                <div className='d-flex p-2 justify-content-around'>
                    <div>
                        Find the best places for you in Skopje
                        Everything you need in just a few clicks
                    </div>
                    <div>
                        <span className='w-20 h-20 p-2'><img className='img-fluid' src={"https://cdn-icons-png.flaticon.com/512/869/869191.png"} alt={"mapImg"}/></span>
                    </div>
                </div>
                <div>
                    <div>
                        <button type="button" class="btn btn-danger" style={buttonStyle}><span style={logStyle}><Link to="/bars">Bars</Link></span></button>
                        <button type="button" class="btn btn-light" style={buttonStyle}><span style={logStyle}><Link to="/cafes">Cafes</Link></span></button>
                        <button type="button" class="btn btn-dark" style={buttonStyle}><span style={logStyle}><Link to="/restaurants">Restaurant</Link></span></button>
                        <button type="button" class="btn btn-warning"><span><Link to="/place/add">Add Place</Link></span></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartPageComponent;