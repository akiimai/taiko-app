import React, { Component } from 'react'; 
import { Route, Switch } from 'react-router-dom'; 
import DrillGenerator from '../DrillGenerator'; 

export default class ContentRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" component={ DrillGenerator } />
                </Switch>
            </React.Fragment>
        ); 
    }
}