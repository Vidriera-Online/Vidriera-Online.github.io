import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import Store from './Store';
import NotFound from './NotFound';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store/:id" component={Store} />
            <Route path="/" component={NotFound} />
        </Switch>
    )
}

export default Router;