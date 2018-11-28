import React, { Component } from 'react'; 
import './Layout.css'; 
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <footer className="footer text-center">
                    <div className="container-fluid"> */}
                        {/* <div className="row" id="about-body">
                            <div className="col-md-4"></div>
                            <div className="col-md-4 about">
                                <i className="fas fa-circle-notch" style={{fontSize: "30px", color:"#F7CE3E"}} />
                                <div className="footer-head">
                                    <h2>About</h2>
                                </div>
                                <p>Drill Generator is an open source app created for taiko drummers.
                                    Not sure what to practice or need a new drill idea? Use the random generator to pick a drill for you!
                                    You can also build your own drills or view all existing drills. </p>
                            </div>
                        </div> */}

                        {/* <div class="row">
                            <div class="col-md-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Location</h4>
                                <p class="lead mb-0">123 Main Street
                                <br />Los Angeles, CA 90020</p>
                            </div>
                            <div class="col-md-4 mb-5 mb-lg-0">
                                <h4 class="text-uppercase mb-4">Around the Web</h4>
                                <ul class="list-inline mb-0">
                                    <li class="list-inline-item">
                                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i class="fab fa-fw fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i class="fab fa-fw fa-google-plus-g"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i class="fab fa-fw fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i class="fab fa-fw fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                                            <i class="fab fa-fw fa-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h4 class="text-uppercase mb-4">About Drill Generator</h4>
                                <p class="lead mb-0">Drill Generator is an application for drummers created by <a href="https://linkedin.com/in/aki-imai/">Aki Imai</a>.</p>
                            </div>
                        </div> */}
                    {/* </div>
                </footer> */}

                <div class="copyright py-4 text-center text-white">
                    <div class="container">
                        <small>Copyright &copy; Drill Generator 2018</small>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}