import React, { Component } from 'react'
import Photoabout from './Photoabout';
import { Spring } from 'react-spring/renderprops';
import Formations from './Formations';
import Informations from './Informations';

export default class About extends Component {
    render() {
        return (
            <div className="resume">
                <div className="row">
                <div className="col-xs-6 col-md-4">
                <div className="my-5">
                            <Spring
                                reset
                                from={{ opacity: 0, marginTop: -500 }}
                                to={{ opacity: 1, marginTop: 0 }}
                               
                            >
                                {props => <div style={props}><Photoabout /></div>}
                            </Spring>


                        </div>
                        <div className="my-1 ml-4">
                            <Informations />

                        </div>

                </div>
                <div className="col-xs-12 col-md-8">
                <div className="my-2">
                            <Spring
                                reset
                                from={{ opacity: 0, marginRight: -5000 }}
                                to={{ opacity: 1, marginRight: 0 }}
                               
                            >
                                {props => <div style={props}><Formations /></div>}
                            </Spring>


                        </div>

                </div>
                </div>
            </div>
        )
    }
}
