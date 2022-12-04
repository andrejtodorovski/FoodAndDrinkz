import React, { Component } from 'react';
import BarsService from '../services/BarsService';

class ListBarsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: []
        }
    }
    componentDidMount(){
        BarsService.getBars().then((res) => {
            this.setState({bars: res.data});
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
                            this.state.bars.map(bar => 
                                <tr key = {bar.id}>
                                    <td>{bar.title}</td>
                                    <td>{bar.rating}</td>
                                    <td>{bar.review}</td>
                                    <td>{bar.address}</td>
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

export default ListBarsComponent;