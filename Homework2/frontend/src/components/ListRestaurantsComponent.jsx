import React, { Component } from 'react';
import RestaurantsService from '../services/RestaurantsService';

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
            <div>
                <h2 className='text-center'>All Restaurants</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Reviews</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>{
                            this.state.restaurants.map(restaurant => 
                                <tr key = {restaurant.id}>
                                    <td>{restaurant.name}</td>
                                    <td>{restaurant.rating}</td>
                                    <td>{restaurant.reviewCount}</td>
                                    <td>{restaurant.address}</td>
                                </tr>
                                )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}           

export default ListRestaurantsComponent;