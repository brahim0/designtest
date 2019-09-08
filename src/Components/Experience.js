import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-xs-6 col-md-4 mauve font-lexend-deca"  >
            {this.props.date}
            </div>
            <div className="col-xs-12 col-md-8 font-lexend-deca"  >
            {this.props.description}
            </div>
          </div>
        )
    }
}
