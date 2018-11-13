import React from 'react';
import * as drillsGeneratorServices from '../services/drillsGenerator.services'; 

class DrillGenerator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            select: false
        }

        this.onFind = this.onFind.bind(this);
    }

    onFind() {
        drillsGeneratorServices.readAll()
            .then(response => {
                console.log(response)
            })
            .catch(console.log)
        
        this.setState({
            select: true
        })
    }

    render() {
        let select;
        if (this.state.select) {
            select =
                // <section className="bg-primary text-white mb-0" id="list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. 
                                The download includes the complete source files including HTML, CSS, and JavaScript 
                                as well as optional LESS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col-lg-3"></div>

                        </div>
                    </div>
                // </section>
        }

        return (
            <div className="masthead bg-primary text-white text-center">
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