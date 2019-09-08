import React from 'react'
import photo from '../photoabout.JPG'
export default function Photoabout() {
    return (
        <div className="text-left">
        <img src={photo} alt="photo" className="img-photo-reverse reverse img-thumbnail" />
    </div>
    )
}
