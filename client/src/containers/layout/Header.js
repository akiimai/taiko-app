import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
class Header extends Component {
    render() {
        return(
            <header className="masthead bg-primary text-white text-center">
                <div className="container">
                    {/* <img class="img-fluid mb-5 d-block mx-auto" src="img/profile.png" alt="" />
                    <h1 class="text-uppercase mb-0">Drill Generator</h1>
                    <hr class="star-light" />
                    <h2 class="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2> */}

                </div>
            </header>
        )
    }
}

export default withRouter(Header); 