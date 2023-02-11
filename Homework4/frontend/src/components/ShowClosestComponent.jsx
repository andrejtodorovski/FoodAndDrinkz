import React, { Component } from 'react';
import ClosestService from '../services/ClosestService';
import { Link } from 'react-router-dom'
import AttributesService from '../services/AttributesService'

class ShowClosestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closest: [],
            cat:'',
            category: '',
            attributes: []
        }
    }
    componentDidMount(){
        ClosestService.getClosest().then((res) => {
            this.setState({closest: res.data});
            this.setState({cat: res.data[0].category})
            this.setState({category: res.data[0].category+"s"});
            if(res.data[0].category==="Bar"){
                AttributesService.getAttributesForBar().then((r)=>{
                this.setState({attributes: r.data});
        });
        }
            if(res.data[0].category==="Cafe"){
                AttributesService.getAttributesForCafe().then((r)=>{
                this.setState({attributes: r.data});
        });
        }
            if(res.data[0].category==="Restaurant"){
                AttributesService.getAttributesForRestaurant().then((r)=>{
                this.setState({attributes: r.data});
        });
        }
        });
        
    }
    handleChange = (event) => {
        let cred = {
            category: this.state.cat,
            attribute: event.target.value
        }
        fetch("https://bekend.azurewebsites.net/place/attribute",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(cred) 
        }).then((response)=>
            response.json()
        ).then((user)=>{
            this.setState({closest: user})
        })    
    }
    render() {
        return (
            <div className='grayBackground'>
                <div className='d-flex justify-content-between'>
                    <div><h1 className='ml-5 p-5'><span className='blueText'>{this.state.category}</span> <span>near you:</span></h1></div>
                    <div className='mr-5'>
                    <select className='form-control m-5 w-75' required 
                        onChange={this.handleChange}>
                            <option value="default">Choose attribute</option>
                    {this.state.attributes.map(at =>
                    <option value={at}>{at}</option>
                )}
                    </select>
                    </div>
                </div>
                
            <div className='listContainer pt-2'>
                {this.state.closest.map(close =>
                <div className='listItem '>
                    <img className='listImg' src={close.imgUrl} alt=''></img>
                    <div className='d-flex justify-content-center'>
                            <div><img className='icon2 mr-2' src='https://cdn-icons-png.flaticon.com/512/1828/1828961.png' alt=''></img></div>
                            <div><h6 className='textDarkGray mt-1'>{close.rating}</h6></div>
                    </div>
                    <h5 className='text-center mt-2'>{close.name}</h5>
                    <Link to={`/${close.id}`}><img className='icon' src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' alt=''></img></Link>
                </div>
                )}
            </div>
            </div>
        );
    }
}           

export default ShowClosestComponent;