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
                            <div className="col-lg-6" style={{ color: "#1A2930", textAlign: 'left', borderStyle: 'dashed', padding: '40px' }}>
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
            <React.Fragment>
                <div className="masthead bg-primary text-white text-center">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h4 style={{color: "#1A2930"}}>What do you want to practice?</h4>

                    <br /><br />
                    <button className="btn btn-xl btn-outline-light" style={{color: "#1A2930"}} onClick={this.onFind}>Find Me A Drill</button>
                    <br /><br />
                    <br /><br />
                    <br /><br />
                    {select}
                    <br /><br />
                    <br /><br />
                    <br /><br />
                </div>
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">At Your Service</h2>
                                <hr className="my-4" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"></i>
                                    <h3 className="mb-3">Sturdy Templates</h3>
                                    <p className="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"></i>
                                    <h3 className="mb-3">Ready to Ship</h3>
                                    <p className="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fas fa-4x fa-code text-primary mb-3 sr-icon-3"></i>
                                    <h3 className="mb-3">Up to Date</h3>
                                    <p className="text-muted mb-0">We update dependencies to keep things fresh.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="service-box mt-5 mx-auto">
                                    <i className="fas fa-4x fa-heart text-primary mb-3 sr-icon-4"></i>
                                    <h3 className="mb-3">Made with Love</h3>
                                    <p className="text-muted mb-0">You have to make your websites with love these days!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default DrillGenerator; 