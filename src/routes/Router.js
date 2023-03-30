import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './auth/Auth';
import Home from './home/Home';
import Products from './products/Products'
import Category from './categories/Category'
import Search from './search/Search';
import Like from './like/Like';
import Shop from './shop/Shop';
import CreatePost from './new-create-post/Createpost';



const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/like'>
              <Like/>
            </Route>
            <Route path='/auth'>
              <Auth/>
            </Route>
            <Route path='/category/:id'>
              <Category/>
            </Route>
            <Route path='/products/:id'>
              <Products/>
            </Route>
            <Route path='/search/:productName'>
              <Search/>
            </Route>
            <Route path='/shop'>
              <Shop/>
            </Route>
            <Route path='/newpost'>
              <CreatePost/>
            </Route>
       </Switch>
    );
}

export default Routes;
