import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './Components/Logon/Logon';
import Register from './Components/Register/Register';

export default function Routes(){
    return(
        <BrowserRouter>
            {/* Garante que somente uma rota seja executada por momento/chamada */}
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" exact component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}