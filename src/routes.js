import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import GoogleFontLoader from 'react-google-font-loader';

import Home from './home';
import MainLayout from './hoc/mainLayout'
import Header from './home/header';
import Add from './components/Add';
import Edit from './components/Edit';


const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <MainLayout>
                <Switch>
                    <Route path="/edit-binatang/:id" component={Edit}/>
                    <Route path="/add-binatang" component={Add} />
                    <Route path="/" component={Home}/>
                </Switch>
            </MainLayout>
            <GoogleFontLoader
                fonts={[
                    {font:'Roboto',weights:[300,400,900]},
                    {font:'Fredoka One'}
                ]}
            />
        </BrowserRouter>
    )
}

export default Routes