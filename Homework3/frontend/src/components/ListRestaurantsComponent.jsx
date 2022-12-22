import React, { Component } from 'react';
import RestaurantsService from '../services/RestaurantsService';
import { Link } from 'react-router-dom'
class ListRestaurantsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }
    componentDidMount(){
        RestaurantsService.getRestaurants().then((res) => {
            this.setState({restaurants: res.data});
        });
    }
    render() {
        return (
            <div className='listContainer grayBackground pt-2'>
                {this.state.restaurants.map(restaurant =>
                <div className='listItem '>
                    <img className='listImg' src={restaurant.imgUrl}></img>
                    <div className='d-flex justify-content-center'>
                            <div><img className='icon2 mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png'></img></div>
                            <div><h6 className='textDarkGray mt-1'>{restaurant.rating}</h6></div>
                    </div>
                    <h5 className='text-center mt-2'>{restaurant.name}</h5>
                    <Link to={`/${restaurant.id}`}><img className='icon' src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png'></img></Link>
                </div>
                )}
            </div>
        );
    }
}           

export default ListRestaurantsComponent;