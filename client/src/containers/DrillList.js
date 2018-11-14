import React from 'react'; 
import * as drillsGeneratorServices from '../services/drillsGenerator.services'; 
import { Table } from 'react-bootstrap'; 
class DrillList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state ={
            data: null
        }

        this.onDelete = this.onDelete.bind(this); 
    }

    componentDidMount() {
        drillsGeneratorServices.readAll()
            .then(response => {
                this.setState({
                    data: response
                })
            })
            .catch(console.log)
    }

    onDelete(e, id) {
        drillsGeneratorServices.deleteById(id) 
            .then(response => {
                console.log(response)
            })
            .catch(console.log)
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
                        <td><button className="btn btn-sm btn-outline-light">Edit</button></td>
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

export default DrillList; 