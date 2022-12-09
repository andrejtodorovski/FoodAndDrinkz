
import React, { Component } from 'react';
import PlaceService from '../services/PlaceService';

class PlaceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: window.location.pathname.substring(1),
            place: {}
        }
    }
    componentDidMount(){
        PlaceService.getPlace(this.state.id).then(res => {
            this.setState({place : res.data});
        })
    }
    
    render() {
        return (
            <div>
                <h2 className='text-center'>{this.state.place.name} {this.state.place.category}</h2>
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
                        <tbody> 
                                <tr key = {this.state.place.id}>
                                    <td>{this.state.place.name}</td>
                                    <td>{this.state.place.rating}</td>
                                    <td>{this.state.place.reviewCount}</td>
                                    <td>{this.state.place.address}</td>
                                </tr>   
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PlaceComponent;