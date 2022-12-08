import React, { Component } from 'react';
import ClosestService from '../services/ClosestService';

class ShowClosestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closest: []
        }
    }
    componentDidMount(){
        ClosestService.getClosest().then((res) => {
            this.setState({closest: res.data});
        });
    }
    render() {
        return (
            <div>
                
                <h2 className='text-center'>All Bars</h2>
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
                            this.state.closest.map(c => 
                                <tr key = {c.id}>
                                    <td>{c.name}</td>
                                    <td>{c.rating}</td>
                                    <td>{c.reviewCount}</td>
                                    <td>{c.address}</td>
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

export default ShowClosestComponent;