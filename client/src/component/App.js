import React, { Component } from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateUser from './CreateUser';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Header from './Header'


class App extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <BrowserRouter>
                <div className='bg-dark text-info p-3'>
                <Header/> 
            </div>
                <Switch>
                    <Route path='/' exact component={ListUser} />
                    <Route path='/createUser' exact component={CreateUser} />
                    <Route path='/editUser' exact component= {EditUser} />
                    <Route path='/deleteUser' exact component = {DeleteUser} />
                </Switch>    
            </BrowserRouter>
           
           
        </div>  );
    }
}
 
export default App;