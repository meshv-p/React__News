import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <>
                <div className="text-center my-3 d-flex mx-auto spinner-border text-primary " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    }
}

export default Spinner
