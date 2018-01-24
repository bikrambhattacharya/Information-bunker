import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/notfoundpage';
import Addpost from '../components/Addpost';
import Dashboardpage from '../components/dashboardpage';
import IndividualPage from '../components/IndividualPage';
import DisplayPost from '../components/DisplayPost';
import Footer from '../components/footer';
const Test = () => (
    <div>
        This website is under construction</div>
);
const Routes = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Test} exact={true} />
                <Route path='/create' component={Addpost} />
                <Route path='/dashboard' component={Dashboardpage} />
                <Route path='/display/:id' component={DisplayPost} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);
export default Routes;