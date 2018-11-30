import React from 'react';
import Select from 'react-select';
import { Modal, FormControl, FormGroup, HelpBlock, ControlLabel } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as validation from '../utils/validation';
import * as drillsGeneratorServices from '../services/drillsGenerator.services';
import { levelData, equipmentData, typeData } from './data';

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
            equipmentValue: [],
            type: {
                touched: true,
                value: this.props.itemData.TypeId
            },
            typeValue: [],
            drillLength: {
                touched: true,
                value: this.props.itemData.Length
            },
            id: this.props.itemData.Id
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
        this.props.readAll()
    }

    handleShow(e, id) {
        drillsGeneratorServices.readByDrillId(id) 
            .then(() => {
                this.setState({ show: true })
            })
            .catch(console.log)
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

    handleSelect(event) {
        let value = []; 
        if (event[0] && event[0].name === 'equipment') {
            for (let i = 0; i < event.length; i++) {
                value.push(event[i].value)
            }
            this.setState({
                equipmentValue: value
            })
        } else if (event[0] && event[0].name === 'type') {
            for (let i = 0; i < event.length; i++) {
                value.push(event[i].value)
            }
            this.setState({
                typeValue: value
            })
        }

        if (event.name === 'level') {
            const newObj = {
                touched: true,
                value: event.label
            }
            this.setState({
                level: newObj
            })
        } else if (event.name === 'drillLength') {
            const newObj = {
                touched: true,
                value: event.value
            }
            this.setState({
                drillLength: newObj
            })
        }
    }

    checkValidation() {
        return validation.getCharValidation(this.state.name) &&
            validation.getCharValidation(this.state.description) &&
            validation.getNumValidation(this.state.level) &&
            // validation.getNumValidation(this.state.equipment) &&
            // validation.getNumValidation(this.state.type) &&
            validation.getNumValidation(this.state.drillLength)
    }

    onUpdate(e) {
        e.preventDefault();
        const data = {
            name: this.state.name.value,
            description: this.state.description.value,
            level: this.state.level.value,
            // level: "Beginner", 
            equipment: this.state.equipmentValue,
            type: this.state.typeValue,
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
                <button className="btn btn-sm btn-outline-light" onClick={e => this.handleShow(e, this.state.id)}>Edit</button>
                
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
                                    componentClass="textarea"
                                    rows="3"
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
                                <ControlLabel>Level</ControlLabel>
                                <Select
                                    closeMenuOnSelect={true}
                                    options={levelData}
                                    defaultValue={levelData[0]}
                                    onChange={this.handleSelect}
                                />
                                {/* {validation.getNumValidation(this.state.level) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please select a drill level</HelpBlock> : null} */}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Equipment</ControlLabel>
                                <Select
                                    closeMenuOnSelect={false}
                                    isMulti
                                    defaultValue={[equipmentData[0], equipmentData[1]]}
                                    options={equipmentData}
                                    onChange={this.handleSelect}
                                />
                                {/* {validation.getNumValidation(this.state.equipment) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-4</HelpBlock> : null} */}
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Type</ControlLabel>
                                <Select
                                    closeMenuOnSelect={false}
                                    isMulti
                                    defaultValue={typeData[0]}
                                    options={typeData}
                                    onChange={this.handleSelect}
                                />
                                {/* {validation.getNumValidation(this.state.type) === "invalid" ? <HelpBlock style={{ color: "red" }}>* Please enter a number between 1-4</HelpBlock> : null} */}
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