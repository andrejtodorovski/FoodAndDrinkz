import React, { Component } from 'react';
import FavoritesService from '../services/FavoritesService';

class ListFavoritePlacesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        }
    }
    componentDidMount(){
        FavoritesService.getFavoritePlaces().then((res) => {
            this.setState({favorites: res.data});
        });
    }
    render() {
        return (
            <div>      
                <h2 className='text-center'>Favorite Places</h2>
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
                            this.state.favorites.map(favorite => 
                                <tr key = {favorite.id}>
                                    <td>{favorite.name}</td>
                                    <td>{favorite.rating}</td>
                                    <td>{favorite.reviewCount}</td>
                                    <td>{favorite.address}</td>
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

export default ListFavoritePlacesComponent;