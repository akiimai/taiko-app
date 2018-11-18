import React from 'react'; 
import * as drillsGeneratorServices from '../services/drillsGenerator.services'; 
import { Table } from 'react-bootstrap'; 
import { withRouter } from 'react-router-dom'; 
import DrillEditModal from './DrillEditModal'; 
import swal from 'sweetalert2'; 
class DrillList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
            data: null
        }

        this.readAll = this.readAll.bind(this); 
        this.onDelete = this.onDelete.bind(this); 
    }

    componentDidMount() {
        this.readAll()
    }

    readAll() {
        drillsGeneratorServices.readAll()
            .then(response => {
                this.setState({
                    data: response
                })
            })
            .catch(console.log)
    }

    onDelete(e, id) {
        swal({
            title: 'Are you sure you want to delete?',
            type: 'warning',
            showCancelButton: true, 
            confirmButtonColor: '#4286f4',
            cancelButtonColor: '#d83e3e',  
            closeOnConfirm: false, 
        }).then((result) => {
            if (result.value) {
                swal({
                    title: "Deleted!", 
                    type: "success", 
                    
                })
                drillsGeneratorServices.deleteById(id) 
                            .then(() => {
                                this.readAll()
                            })
                            .catch(console.log)
            }
        })   
    }

    render() {
        const list = this.state.data ? this.state.data.map(item => {
            return (
                <tbody key={item.Id}>
                    <tr>
                        <td>{item.Name}</td>
                        <td>{item.Description}</td>
                        <td>{item.Length}</td>
                        <td><button className="btn btn-sm btn-outline-light" onClick={e => this.onDelete(e, item.Id)}>Delete</button></td>
                        <td><DrillEditModal itemData={item} readAll={this.readAll}/></td>
                    </tr>
                </tbody>
            )
        })
        : 'is loading'

        return(
        <React.Fragment>
            <section class="bg-primary" id="drill">
                <div class="container">
                    <br /><br /><br /><br />
                    <div class="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h4 className="section-heading text-white"></h4>
                            <Table hover>
                                <thead key>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Length</th>
                                    <th></th>
                                    <th></th>
                                </thead>
                                {list}
                            </Table>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>
        </React.Fragment>
        )
    }

}

export default withRouter(DrillList); 