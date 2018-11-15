import React from 'react';
import { Modal, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'; 
import * as validation from '../utils/validation';
import * as drillsGeneratorServices from '../services/drillsGenerator.services'; 

class DrillEditModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            name: {
                touched: true,
                value: this.props.itemData.Name
            },
            description: {
                touched: true,
                value: this.props.itemData.Description
            },
            level: {
                touched: true,
                value: this.props.itemData.LevelId
            },
            equipment: {
                touched: true,
                value: this.props.itemData.EquipmentId
            },
            type: {
                touched: true,
                value: this.props.itemData.TypeId
            },
            drillLength: {
                touched: true,
                value: this.props.itemData.Length
            }, 
            id: this.props.itemData.Id
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.onUpdate = this.onUpdate.bind(this); 
    }

    handleClose() {
        this.setState({ show: false });
        this.props.readAll()
    }

    handleShow() {
        this.setState({ show: true })
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

    checkValidation() {
        return validation.getCharValidation(this.state.name) &&
            validation.getCharValidation(this.state.description) &&
            validation.getNumValidation(this.state.level) &&
            validation.getNumValidation(this.state.equipment) &&
            validation.getNumValidation(this.state.type) &&
            validation.getNumValidation(this.state.drillLength)
    }

    onUpdate(e) {
        e.preventDefault(); 
        const data = {
            name: this.state.name.value, 
            description: this.state.description.value, 
            level: parseInt(this.state.level.value), 
            equipment: parseInt(this.state.equipment.value), 
            type: parseInt(this.state.type.value), 
            drillLength: parseInt(this.state.drillLength.value), 
            id: parseInt(this.state.id)
        }
        if (this.checkValidation()) {
            drillsGeneratorServices.updateById(data)
                .then(() => {
                    // this.props.readAll()
                    this.handleClose()
                })
                .catch(console.log)
        } else {
            alert("Please check all fields")
        }
    }

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-sm btn-outline-light" onClick={this.handleShow}>Edit</button>

                <Modal show={this.state.show} onHide={this.handleClose} animation={false} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Header>
                        <Modal.Title>Edit Drill</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormGroup>
                                <ControlLabel>Name</ControlLabel>
                                <FormControl
                                    type="text"
                                    className={validation.getCharValidation(this.state.name)}
                                    name="name"
                                    value={this.state.name.value}
                                    placeholder="Enter drill name"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                {validation.getCharValidation(this.state.name) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter drill name</HelpBlock> : null}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    textarea
                                    className={"textarea-autosize" + validation.getCharValidation(this.state.description)}
                                    name="description"
                                    value={this.state.description.value}
                                    placeholder="Enter drill description"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                {validation.getCharValidation(this.state.description) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter drill description</HelpBlock> : null}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Level Id</ControlLabel>
                                <FormControl
                                    type="number"
                                    className={validation.getNumValidation(this.state.level)}
                                    name="level"
                                    value={this.state.level.value}
                                    placeholder="Enter drill level"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                {validation.getNumValidation(this.state.level) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-3</HelpBlock> : null}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Equipment Id</ControlLabel>
                                <FormControl
                                    type="number"
                                    className={validation.getNumValidation(this.state.equipment)}
                                    name="equipment"
                                    value={this.state.equipment.value}
                                    placeholder="Enter drill equipment"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                {validation.getNumValidation(this.state.equipment) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-4</HelpBlock> : null}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Type Id</ControlLabel>
                                <FormControl
                                    type="number"
                                    className={validation.getNumValidation(this.state.type)}
                                    name="type"
                                    value={this.state.type.value}
                                    placeholder="Enter drill type"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                {validation.getNumValidation(this.state.type) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-4</HelpBlock> : null}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Length</ControlLabel>
                                <FormControl
                                    type="number"
                                    className={validation.getNumValidation(this.state.drillLength)}
                                    name="drillLength"
                                    value={this.state.drillLength.value}
                                    placeholder="Enter drill length"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                {validation.getNumValidation(this.state.drillLength) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number</HelpBlock> : null}
                            </FormGroup>
                            <br />
                            <button className="btn btn-light btn-md js-scroll-trigger" style={{ width: "100%" }} onClick={this.onUpdate} value={this.state.id}>
                                Update
                            </button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default withRouter(DrillEditModal); 