import React from 'react';
import {Provider} from 'react-redux'
import store from '../store/store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CustomizedTables from '../components/Table';

const AppRouter = () => (
    <Provider store={store}>
        <BrowserRouter>
        <div>
            <Switch>
                <Route path="/tables" component={CustomizedTables}/>
            </Switch>

        </div>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
