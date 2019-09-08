import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 font-lexend-deca">
                {this.props.info}
                </div>
            </div>
        )
    }
}
