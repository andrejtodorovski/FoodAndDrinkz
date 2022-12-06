import React, { Component } from 'react';
import CafesService from '../services/CafesService';

class ListCafesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cafes: []
        }
    }
    componentDidMount(){
        CafesService.getCafes().then((res) => {
            this.setState({cafes: res.data});
        });
    }
    render() {
        return (
            <div>      
                <h2 className='text-center'>All Cafes</h2>
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
                            this.state.cafes.map(cafe => 
                                <tr key = {cafe.id}>
                                    <td>{cafe.name}</td>
                                    <td>{cafe.rating}</td>
                                    <td>{cafe.reviewCount}</td>
                                    <td>{cafe.address}</td>
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

export default ListCafesComponent;