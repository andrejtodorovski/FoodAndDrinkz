import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class RestaurantsNavBarComponent extends Component {
    render() {
        return (
            <div className='d-flex flex-row grayBackground pl-5 pt-5 pb-5'>
                <div className='firstLink orangeBackground firstLinkBorderRadius'>
                    <Link to="/restaurants" className='textDarkColor d-flex fixHover'>
                        <img className='icon mt-2' src='https://cdn-icons-png.flaticon.com/512/5370/5370139.png'></img>
                        <h2 className='ml-2 text-white'>Restaurants</h2>
                    </Link></div>
                <div className='secondLink blueBackground'>
                    <Link to="/bars">
                        <img className='icon mt-2' src='https://cdn-icons-png.flaticon.com/512/38/38706.png'></img>
                    </Link></div>
                <div className='secondLink redBackground'>
                    <Link to="/cafes">
                        <img className='icon mt-2' src='https://cdn-icons-png.flaticon.com/512/751/751621.png'></img>
                    </Link></div>
            </div>
        );
    }
}

export default RestaurantsNavBarComponent;