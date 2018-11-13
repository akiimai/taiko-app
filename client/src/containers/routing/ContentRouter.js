import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'; 
import DrillGenerator from '../DrillGenerator'; 
import DrillList from '../DrillList'; 
import DrillForm from '../DrillForm'; 
export default class ContentRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={ DrillGenerator } />
                    <Route path="/drill-list" component={ DrillList } />
                    <Route path="/drill-form" component={ DrillForm } />
                </Switch>
            </React.Fragment>
        ); 
    }
}