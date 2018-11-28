import React, { Component } from 'react'; 
import { withRouter, Link } from 'react-router-dom'; 

class Nav extends Component {
    constructor(props) {
        super(props) 

    this.toList = this.toList.bind(this); 
    }

    toList() {
        this.props.history.push("/drill-list")
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand js-scroll-trigger" to='/'>
                    <i className="fas fa-circle-notch text-primary mb-3" style={{fontSize: "30px", color:"F7882F"}} /> Drill Generator
                    </Link>
                    
                    <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3" href='/#about'>About</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/drill-list'>List</Link></li>
                            <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to='/drill-form'>Add A Drill</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav); 