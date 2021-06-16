import React from 'react';
import './UserProfile.css'
import displayPic from '../../images/displayPic.jpg'

export default function UserProfile() {

    return (
        <>
     
            <div className = 'mainpic'>
                <img className = 'dp' src={displayPic} alt='me'/>
            </div>

             <h1 className = 'title' >@actioncastro</h1> 
       
            
        </>
    )
}
