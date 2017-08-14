import React from "react"
import { render } from "react-dom";
import { browserHistory } from "react-router" ;
import { BrowserRouter as Router, Route } from 'react-router-dom' ;

import { Home } from "./components/Home" ;
import {Root} from "./components/Root" ;
import { Terms } from "./components/Terms" ;
import { Privacy } from "./components/Privacy" ;
import { Register } from "./components/Register" ;
import { Login } from "./components/Login" ;
import { Dashboard } from "./components/Dashboard" ;


class App extends React.Component {
    render(){
        return (
            <Router history={browserHistory}>
                <div>
                    <Root>
                        <switch>
                            <Route exact path = "/" component={Home} />
                            <Route path = "/terms/" component={Terms} />
                            <Route path = "/privacy/" component={Privacy} />
                            <Route path = "/auth/register/" component={Register} />
                            <Route path = "/auth/login/" component={Login} />
                            <Route path = "/dashboard/" component={Dashboard} />
                        </switch>
                    </Root>
                </div>
            </Router>

        )
    }
}

render(<App/>,window.document.getElementById("app"));