import React, { Component } from 'react'
import PhotoProfile from './PhotoProfile';
import Langues from './Langues';
import Skills from './Skills';
import Experiences from './Experiences';
export default class Resume extends Component {
    render() {
        return (
            <div className="resume">
            <div className="row">
                <div className="col-6 col-md-4">
                    <Langues />
                </div>
                <div className="col-12 col-md-8">
                <Skills />
                <Experiences />
                </div>
                
            </div>
            </div>
        )
    }
}
