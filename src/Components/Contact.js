import React, { Component } from 'react'
import Formemail from './Formemail';
import Socialmedia from './Socialmedia';
export default class Contact extends Component {
    render() {
        return (
            <div className="resume">
                <Formemail />
                <Socialmedia />
            </div>
        )
    }
}
