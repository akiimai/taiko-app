import React from 'react';
import { FormGroup, FormControl, HelpBlock } from 'react-bootstrap'; 
import * as validation from '../utils/validation'; 
import * as drillsGeneratorServices from '../services/drillsGenerator.services';

class DrillForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: {
                touched: false,
                value: ''
            }, 
            description: {
                touched: false, 
                value: ''
            }, 
            level: {
                touched: false, 
                value: ''
            }, 
            drillLength: {
                touched: false, 
                value: ''
            }
        }
        this.handleChange = this.handleChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
    }

    checkValidation() {
        return validation.getCharValidation(this.state.name) &&
            validation.getCharValidation(this.state.description) &&
            validation.getNumValidation(this.state.level) &&
            validation.getNumValidation(this.state.drillLength)
    }

    onSubmit() {
        debugger
        const data = {
            name: this.state.name.value, 
            description: this.state.description.value, 
            level: this.state.level.value, 
            drillLength: this.state.drillLength.value
        }
        if (this.checkValidation()) {
            drillsGeneratorServices.post(data)
                .then(response => {
                    console.log(response)
                })
                .catch(console.log)
        } else {
            alert("Invalid Information")
        }
    }

    handleChange(event) {
        const newObj = {
            touched: true, 
            value: event.target.value
        }
        this.setState({
            [event.target.name]: newObj
        })
    }

    render() {
        return (
            <React.Fragment>
                <section class="bg-primary" id="drill">
                    <div class="container">
                    <br /><br /><br /><br />
                        <div class="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <h4 className="section-heading text-white">Add A Drill</h4>
                                <form>
                                    <FormGroup>
                                        <FormControl
                                            type="text"
                                            className={validation.getCharValidation(this.state.name)}
                                            name="name"
                                            value={this.state.name.value}
                                            placeholder="Enter drill name"
                                            onChange={this.handleChange}
                                        />  
                                        <FormControl.Feedback />
                                        {validation.getCharValidation(this.state.name) === "invalid" ? <HelpBlock>Please enter drill name</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl 
                                            textarea
                                            className={"textarea-autosize" + validation.getCharValidation(this.state.description)}
                                            name="description"
                                            value={this.state.description.value}
                                            placeholder="Enter description"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getCharValidation(this.state.description) === "invalid" ? <HelpBlock>Please enter drill description</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup> 
                                        <FormControl
                                            type="text"
                                            className={validation.getNumValidation(this.state.level)}
                                            name="level"
                                            value={this.state.level.value}
                                            placeholder="Enter drill level"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getNumValidation(this.state.level) === "invalid" ? <HelpBlock>Please enter drill level</HelpBlock> : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <FormControl
                                            type="text"
                                            className={validation.getNumValidation(this.state.drillLength)}
                                            name="drillLength"
                                            value={this.state.drillLength.value}
                                            placeholder="Enter drill length"
                                            onChange={this.handleChange}
                                        />
                                        <FormControl.Feedback />
                                        {validation.getNumValidation(this.state.drillLength) === "invalid" ? <HelpBlock>Please enter drill length</HelpBlock> : null}
                                    </FormGroup>
                                    <button className="btn btn-light btn-xl js-scroll-trigger" onClick={this.onSubmit} value={this.state.id}>
                                        {/* <i className={icon}></i> {button} */} Submit
                                    </button>
                                </form>
                            </div>
                            <div className="col-md-3"></div>
                            {/* <div class="col-lg-8 mx-auto text-center">
                                <h2 class="section-heading text-white">We've got what you need!</h2>
                                <hr class="light my-4" />
                                <p class="text-faded mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                                <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section id="services">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h2 class="section-heading">At Your Service</h2>
                                <hr class="my-4" />
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="service-box mt-5 mx-auto">
                                    <i class="fas fa-4x fa-gem text-primary mb-3 sr-icon-1"></i>
                                    <h3 class="mb-3">Sturdy Templates</h3>
                                    <p class="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="service-box mt-5 mx-auto">
                                    <i class="fas fa-4x fa-paper-plane text-primary mb-3 sr-icon-2"></i>
                                    <h3 class="mb-3">Ready to Ship</h3>
                                    <p class="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="service-box mt-5 mx-auto">
                                    <i class="fas fa-4x fa-code text-primary mb-3 sr-icon-3"></i>
                                    <h3 class="mb-3">Up to Date</h3>
                                    <p class="text-muted mb-0">We update dependencies to keep things fresh.</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 text-center">
                                <div class="service-box mt-5 mx-auto">
                                    <i class="fas fa-4x fa-heart text-primary mb-3 sr-icon-4"></i>
                                    <h3 class="mb-3">Made with Love</h3>
                                    <p class="text-muted mb-0">You have to make your websites with love these days!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default DrillForm; 