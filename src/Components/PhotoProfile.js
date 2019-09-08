import React from 'react'
import photo from '../photoprofile.JPG';

export default function PhotoProfile() {
    return (

       <div className="text-left">
           <img src={photo} alt="photo" className="img-photo-reverse reverse img-thumbnail" />
       </div>
    )
      
}
