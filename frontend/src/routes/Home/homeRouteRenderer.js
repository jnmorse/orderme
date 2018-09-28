import React from 'react';
import {HomeContainer} from './HomeContainer';
import {store} from '../../modules/store';
import {push} from 'connected-react-router';

const loadListOfRestaurants = async () => {
    const url = 'http://localhost:3000/v0/restaurants';
    const restaurants = await ((await fetch(url)).json());

    store.dispatch({type: 'restaurantsData', data: restaurants});
};

const homeRouteRenderer = () => {

    const auth_token = localStorage.getItem('auth_token');
    console.log('token in local storage:', auth_token);
    if (!auth_token) {
        store.dispatch(push('/'));
    }

    loadListOfRestaurants();
    
    return <HomeContainer />;
};

export {homeRouteRenderer};