import React, {Component} from 'react'; 
import { Route, Switch } from 'react-router-dom'; 
import Home from './Home'
import TaikoGlossary from '../TaikoGlossary'; 
import TaikoSearch from '../TaikoSearch'; 

export default class ContentRouter extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/taiko-glossary" exact component={TaikoGlossary} />
                    <Route path="/taiko-search" component={TaikoSearch} />
                </Switch>
            </React.Fragment>
        )
    }
}