import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-xs-6 col-md-4 mauve text-moin-grand font-lexend-deca"  >
            {this.props.domaine}
            </div>
            <div className="col-xs-12 col-md-8 font-lexend-deca"  >
            {this.props.sousdomaine}
            </div>
          </div>
        )
    }
}
