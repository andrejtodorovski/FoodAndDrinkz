import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/TopNavBarComponent.css'
import { useState, useEffect} from 'react'

function TopNavBarDarkComponent() {
    const [isLogged, setLogged] = useState()
    const [isFetched, setFetched] = useState(false)
    useEffect(() => {
        if(isFetched===false){
            fetch("https://bekend.azurewebsites.net/user/check",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        }).then((response)=>
        response.json()
        ).then((user)=>{
        if(user.status!==406){
            setLogged(false)
        }
        else{
            setLogged(true)
        }
        })
        }
    });
    const handleLogout=(e)=>{
        e.preventDefault()
        fetch("https://bekend.azurewebsites.net/user/logout",{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        }).then(
            window.location.href="/",
            setFetched(true),
            setLogged(false)
        )
    }
    return ( 
        <div className='topNavBarContainerDark pl-5'>
            {isLogged &&
            <>
            <div className='btn1'>
                <button type="button" className="btn ml-5 mt-2 buttonStyle topNavBarContainerDark"><span className="logoStyle"><Link to="/" className='text-white'>
                    <img src='https://i.ibb.co/X20ttwm/Pin-Point-Dark.jpg' alt='logo-dark'></img>
                    </Link></span></button>
            </div>
            <div className='btn2'>
                <button type="button" className="btn blueBackground m-2 buttonStyle"><span className="logStyle"><Link to="/login" className='text-white'>Login</Link></span></button>
                <button type="button" className="btn orangeBackground m-2 buttonStyle"><span className="logStyle"><Link to="/register" className='text-white'>Register</Link></span></button>
            </div>
            </>
            }
            {!isLogged && 
            <>
            <div className='btn1'>
                <button type="button" className="btn ml-5 mt-2 buttonStyle topNavBarContainerDark"><span className="logoStyle"><Link to="/" className='text-white'>
                    <img src='https://i.ibb.co/X20ttwm/Pin-Point-Dark.jpg' alt='logo-dark'></img>
                    </Link></span></button>
            </div>
            <div className='btn2 mr-5'>
                <button type="button" className="btn blueBackground m-2 buttonStyle"><span className="logStyle"><Link to="/favorites" className='text-white'>Favorites</Link></span></button>
                <button type="button" className="btn orangeBackground m-2 buttonStyle"><span className="logStyle"><Link to="/profile" className='text-white'>Profile</Link></span></button>
                <button type="button" className="btn whiteBut m-2 buttonStyle" onClick={handleLogout}><span className="logStyle text-dark">Sign out</span></button>

            </div>
            </>
            }
        </div>    
        
    );
    
}

export default TopNavBarDarkComponent;