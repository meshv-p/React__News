import React, { Component } from 'react'

export class NewsItem extends Component {
    static defaultProps = {
       bgcolor : 'bg-light'
    }

    render() {
        let { title, description, imgageurl, newsurl, newstime, author,source } = this.props;

        return (
            <>
                <div className={`card ${this.props.bgcolor} ` } style={{ width: '18rem',style: "--bs-bg-opacity: .5;" }}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left : '96%'}}>
                       {source}
                        
                    </span>
                    <img src={imgageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mb-2">{description}...</p>
                        <div className="d-flex">
                            <div className="click">
                                <a href={newsurl} rel="noreferrer" target="_blank" className="my-2 btn btn-outline-primary btn-sm ">Read more</a>
                            </div>
                            <div className="row d-inline-block ms-2">
                                <small className="col pe-0"><small className="text-muted ms-4 ps-4">{newstime} : Date</small></small>
                                <small className="col pe-0 ps-0"><small className="text-muted d-flex justify-content-end ps-4">{author ? author : "Unknown"} : By</small></small>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
