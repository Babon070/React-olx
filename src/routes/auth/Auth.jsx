import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Create from './create/Create';
import Login from './login/Login';
import './Auth.scss'

const Auth = () => {
    return (
        <section className='auth'>
            <div className='animation__circle'>

            </div>
            <div className='auth__popup'>
                <ul>
                    <li>
                        <NavLink activeClassName='auth__link--active' className='auth__link' to='/auth/create'> Create</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='auth__link--active' className='auth__link' to='/auth/login'>Login</NavLink>
                    </li>
                </ul>
                <Switch>
                <Route path='/auth/create' component={Create}/>
                <Route path='/auth/login' component={Login}/>
            </Switch>
            </div>
        </section>
    );
}

export default Auth;
