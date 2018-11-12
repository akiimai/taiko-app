import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 

class Header extends Component {
    render() {
        return (
            <header class="masthead text-center text-white d-flex">
                <div class="container my-auto">
                    <div class="row">
                        {/* <div class="col-lg-10 mx-auto"> */}
                        <div class="col-lg-10">
                            <h1 class="text-uppercase">
                                {/* <strong>Taiko App</strong> */}
                            </h1>
                        </div>
                        <div class="col-lg-8 mx-auto">
                            {/* <p class="text-faded mb-5">Your source for taiko-related resources</p> */}
                            {/* <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
}

export default withRouter(Header); 
