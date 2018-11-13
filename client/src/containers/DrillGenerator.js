import React from 'react';
import * as drillsGeneratorServices from '../services/drillsGenerator.services'; 

class DrillGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            select: false,
            data: null
        }
        this.onFind = this.onFind.bind(this);
    }

    onFind() {
        drillsGeneratorServices.readRandom()
            .then(response => {
                this.setState({
                    select: true, 
                    data: response
                })
            })
            .catch(console.log)
    }

    render() {
        let select; 
        if (this.state.select) {
            select = this.state.data ? this.state.data.map(item => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6" style={{textAlign: 'left', borderStyle: 'dotted', padding: '40px'}}>
                                {/* <p>Freelancer is a free bootstrap theme created by Start Bootstrap. 
                            The download includes the complete source files including HTML, CSS, and JavaScript 
                            as well as optional LESS stylesheets for easy customization.
                            </p> */}
                                <p>Name: {item.Name}</p>
                                <p>Description: {item.Description}</p>
                                <p>Length: {item.Length} </p>
                            </div>
                            <div className="col-lg-3"></div>

                        </div>
                    </div>
                )
            })
                : "is loading"
        }

        return (
            <div className="masthead bg-primary text-white text-center">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br />
                <h4>What do you want to practice?</h4>

                <br /><br />
                <button class="btn btn-xl btn-outline-light" onClick={this.onFind}>Find Me A Drill</button>
                <br /><br />
                <br /><br />
                <br /><br />
                {select}
                <br /><br />
                <br /><br />
                <br /><br />

            </div>
        )
    }
}

export default DrillGenerator; 