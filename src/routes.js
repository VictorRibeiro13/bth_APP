import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './Components/Logon/Logon';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import NewIncidents from './Components/NewIncident/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            {/* Garante que somente uma rota seja executada por momento/chamada */}
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" exact component={Register}/>
                
                <Route path="/profile" exact component={Profile}/>
                <Route path="/incidents/new" exact component={NewIncidents}/>
            </Switch>
        </BrowserRouter>
    )
}