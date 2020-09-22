import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Todos from './pages/Todos'

import Addtodo from './pages/Addtodo';



export default function Routes() {
    return (
        <BrowserRouter>
            
            <Switch>
             <Route path='/' exact component={Todos} />
               
                <Route path='/Addtodo' component={Addtodo} />
            </Switch>
        </BrowserRouter>
    );
}