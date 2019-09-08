import React, { Component } from 'react'
import photo from "../photo_of_me.jpg";

export default class MainProfile extends Component {
    render() {
        return (
            <div className="home container-fluid">


            <div className="row">
                <div className="col-12">

                    <div className="text-center">
                        <img src={photo} alt="mon photo" className="my-5  img-fluid img-thumbnail rounded-circle img-photo" />

                    </div>



                    <div className="mx-auto d-block my-2 text-center name text-capitalize">
                        <span className="first-name">brahim</span>  <span className="last-name">hmida</span>
                    </div>
                    <div className="mx-auto d-block text-center title-of-me">
                        I'm a Student
    </div>
                </div>

            </div>




        </div>
        )
    }
}
