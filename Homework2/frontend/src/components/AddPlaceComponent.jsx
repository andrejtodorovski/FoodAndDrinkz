import React, { Component } from 'react';
import PlaceService from '../services/PlaceService';
import {Link} from 'react-router-dom'
class AddPlaceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            rating:'',
            reviewCount:'',
            category:'Bar',
            attributes:'',
            address:'',
            phoneNumber:'',
            monday:'',
            tuesday:'',
            wednesday:'',
            thursday:'',
            friday:'',
            saturday:'',
            sunday:'',
            imgUrl:'',
            latitude:'',
            longitude:''
        }
        this.changeAddress = this.changeAddress.bind(this);
        this.changeAttributes = this.changeAttributes.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.changeFriday = this.changeFriday.bind(this);
        this.changeImgUrl = this.changeImgUrl.bind(this);
        this.changeLatitude = this.changeLatitude.bind(this);
        this.changeLongitude = this.changeLongitude.bind(this);
        this.changeMonday = this.changeMonday.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.changeRating = this.changeRating.bind(this);
        this.changeReviewCount = this.changeReviewCount.bind(this);
        this.changeSaturday = this.changeSaturday.bind(this);
        this.changeSunday = this.changeSunday.bind(this);
        this.changeThursday = this.changeThursday.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeTuesday = this.changeTuesday.bind(this);
        this.changeWednesday = this.changeWednesday.bind(this);
        this.savePlace = this.savePlace.bind(this);
    }
    savePlace = (e) => {
        e.preventDefault();
        let place = {
        name:this.state.name,
        rating:this.state.rating,
        reviewCount:this.state.reviewCount,
        category:this.state.category,
        attributes:this.state.attributes,
        address:this.state.address,
        phoneNumber:this.state.phoneNumber,
        monday:this.state.monday,
        tuesday:this.state.tuesday,
        wednesday:this.state.wednesday,
        thursday:this.state.thursday,
        friday:this.state.friday,
        saturday:this.state.saturday,
        sunday:this.state.sunday,
        imgUrl:this.state.imgUrl,
        longitude:this.state.longitude,
        latitude:this.state.latitude
        }
        console.log('place => ' + JSON.stringify(place));
        PlaceService.addPlace(place);
        // fetch("http://localhost:8080/place/add",{
        // method:"POST",
        // headers:{"Content-Type":"application/json"},
        // body:"hhhh" })
    
    }
    changeTitle = (event) => {
        this.setState({name:event.target.value});
    }
    changeRating = (event) => {
        this.setState({rating:event.target.value});
    }
    changeReviewCount = (event) => {
        this.setState({reviewCount:event.target.value});
    }
    changeCategory = (event) => {
        this.setState({category:event.target.value});
    }
    changeAttributes = (event) => {
        this.setState({attributes:event.target.value});
    }
    changeAddress = (event) => {
        this.setState({address:event.target.value});
    }
    changePhoneNumber = (event) => {
        this.setState({phoneNumber:event.target.value});
    }
    changeMonday = (event) => {
        this.setState({monday:event.target.value});
    }
    changeTuesday = (event) => {
        this.setState({tuesday:event.target.value});
    }
    changeWednesday = (event) => {
        this.setState({wednesday:event.target.value});
    }
    changeThursday = (event) => {
        this.setState({thursday:event.target.value});
    }
    changeFriday = (event) => {
        this.setState({friday:event.target.value});
    }
    changeSaturday = (event) => {
        this.setState({saturday:event.target.value});
    }
    changeSunday = (event) => {
        this.setState({sunday:event.target.value});
    }
    changeImgUrl = (event) => {
        this.setState({imgUrl:event.target.value});
    }
    changeLongitude = (event) => {
        this.setState({longitude:event.target.value});
    }
    changeLatitude = (event) => {
        this.setState({latitude:event.target.value});
    }
    render() {
        return (
            <div className='container'>
                <div className="Auth-form-container">
                  <form className="Auth-form">
                    <div className="Auth-form-content">
                      <h3 className="Auth-form-title">Add a Place</h3>
                      <div className="form-group mt-3">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place name"
                          value={this.state.name}
                          onChange={this.changeTitle}
                          required
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Rating</label>
                        <input
                          type="number"
                          className="form-control mt-1"
                          placeholder="Enter rating"
                          min={1}
                          max={5}
                          step={0.1}
                          required
                          value={this.state.rating}
                          onChange={this.changeRating}
                        />  
                      </div>
                      <div className="form-group mt-3">
                        <label>Review Count</label>
                        <input
                          type="number"
                          className="form-control mt-1"
                          placeholder="Enter review count"
                          min={1}
                          step={1}
                          required
                          value={this.state.reviewCount}
                          onChange={this.changeReviewCount}
                        />  
                      </div>
                      <div className="form-group mt-3">
                        <label>Category</label>
                        <select className='form-control mt-1' required value={this.state.category}
                          onChange={this.changeCategory}>
                        <option value="Bar">Bar</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Restaurant">Restaurant</option>
                        </select>
                      </div>
                      <div className="form-group mt-3">
                        <label>Attributes</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place attributes"
                          required
                          value={this.state.attributes}
                          onChange={this.changeAttributes}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place address"
                          required
                          value={this.state.address}
                          onChange={this.changeAddress}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place phone number"
                          required
                          value={this.state.phoneNumber}
                          onChange={this.changePhoneNumber}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Monday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter monday hours in format 08:00AM-08:00PM"
                          required
                          value={this.state.monday}
                          onChange={this.changeMonday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Tuesday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter tuesday hours in format 08:00AM-08:00PM"
                          required
                          value={this.state.tuesday}
                          onChange={this.changeTuesday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Wednesday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter wednesday hours in format 08:00AM-08:00PM"
                          required
                          value={this.state.wednesday}
                          onChange={this.changeWednesday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Thursday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter thursday hours in format 08:00AM-08:00PM"
                          required
                          value={this.state.thursday}
                          onChange={this.changeThursday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Friday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter friday hours in format 08:00AM-08:00PM"
                          required
                          value={this.state.friday}
                          onChange={this.changeFriday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Saturday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter saturday hours in format 08:00AM-08:00PM"
                          required
                          value={this.state.saturday}
                          onChange={this.changeSaturday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Sunday hours</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter sunday hours in format 08:00AM-08:00PM"
                          required 
                          // pattern="[0-1][0-9]:[0-5][0-9]AM-[0-1][0-9]:[0-5][0-9]PM"
                          value={this.state.sunday}
                          onChange={this.changeSunday}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Image Url</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place image url"
                          required
                          value={this.state.imgUrl}
                          onChange={this.changeImgUrl}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Latitude</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place latitude"
                          required
                          value={this.state.latitude}
                          onChange={this.changeLatitude}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Longitude</label>
                        <input
                          type="text"
                          className="form-control mt-1"
                          placeholder="Enter place longitude"
                          required
                          value={this.state.longitude}
                          onChange={this.changeLongitude}
                        />
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={this.savePlace}>
                          Add
                        </button>
                        <button type="button" className="btn btn-warning"><span><Link to="/">Home</Link></span></button>
                      </div>
                    </div>
                  </form>
                </div>
                </div>
              );
    }
}

export default AddPlaceComponent;