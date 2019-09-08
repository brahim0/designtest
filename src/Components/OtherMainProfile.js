import React, { Component } from 'react'
import PhotoProfile from './PhotoProfile';
import { Spring } from 'react-spring/renderprops';

export default class OtherMainProfile extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-md-4">
                        <div className="my-5">
                            <Spring
                                reset
                                from={{ opacity: 0, marginTop: -5000 }}
                                to={{ opacity: 1, marginTop: 0 }}
                                config={{
                                    delay: 400,
                                    duration: 400
                                }}
                            >
                                {props => <div style={props}><PhotoProfile /></div>}
                            </Spring>


                        </div>

                    </div>
                    <div className="col-xs-12 col-md-8">
                        <div className="my-5">
                            <div>
                                <Spring
                                    reset
                                    from={{ opacity: 0, marginLeft: -5000 }}
                                    to={{ opacity: 1, marginLeft: 0 }}
                                    config={{
                                        delay: 700,
                                        duration: 700
                                    }}
                                >
                                    {props => <div style={props}>
                                        <div className="mx-auto d-block my-2 text-center name text-capitalize float-left">
                                            <span className="first-name">brahim</span>  <span className="last-name-second-color">hmida</span>
                                        </div>

                                    </div>}
                                </Spring>
                            </div>
                            <div className="my-5">
                               <div>
                               <Spring
                                    reset
                                    from={{ opacity: 0, marginLeft: -5000 }}
                                    to={{ opacity: 1, marginLeft: 0 }}
                                    config={{
                                        delay: 1000,
                                        duration: 1000
                                    }}
                                >
                                    {props => <div style={props}>
                                        <div className="mx-auto d-block my-2 text-center first-title text-capitalize float-left">
                                            <span className="first-name">Diplomé de la </span>  <span className="last-name-second-color">faculté des sciences de bizerte</span>
                                        </div>

                                    </div>}
                                </Spring>
                               </div>
                            </div>
                            <div className="my-5">
                            <div>
                               <Spring
                                    reset
                                    from={{ opacity: 0, marginLeft: -5000 }}
                                    to={{ opacity: 1, marginLeft: 0 }}
                                    config={{
                                        delay: 1000,
                                        duration: 1000
                                    }}
                                >
                                    {props => <div style={props}>
                                        <div className="mx-auto d-block my-2 text-center first-title text-capitalize float-left">
                                            <span className="first-name text-moin-grand">Obtenue Bac </span>  <span className="last-name-second-color text-moin-grand">en 2013</span>
                                        </div>

                                    </div>}
                                </Spring>
                               </div>

                            </div>
                            <div className="my-5">
                            <div>
                               <Spring
                                    reset
                                    from={{ opacity: 0, marginLeft: -5000 }}
                                    to={{ opacity: 1, marginLeft: 0 }}
                                    config={{
                                        delay: 1200,
                                        duration: 1200
                                    }}
                                >
                                    {props => <div style={props}>
                                        <div className="mx-auto d-block my-2 text-center first-title text-capitalize float-left">
                                            <span className="first-name">actuellement etudiant à </span>  <span className="last-name-second-color text-grand">L'esprit</span>
                                        </div>

                                    </div>}
                                </Spring>
                               </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
