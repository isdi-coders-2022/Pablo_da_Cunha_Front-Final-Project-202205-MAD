/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Layout } from './components/layout';
import { iRouterItem } from './interfaces/iRouterItem';
import { loadBarAction } from './reducers/bar/bar.action.creator';
import { loadBeerAction } from './reducers/beer/beer.action.creator';
import { BarHttpStore } from './services/bar.store';
import { BeerHttpStore } from './services/beer.store';

function App() {
    const dispatcher = useDispatch();
    const apiArtsits = useMemo(() => new BarHttpStore(), []);
    const apiBeers = useMemo(() => new BeerHttpStore(), []);

    useEffect(() => {
        apiArtsits
            .getAllBars()
            .then((bars) => dispatcher(loadBarAction(bars)));
        apiBeers
            .getAllBeers()
            .then((beers) => dispatcher(loadBeerAction(beers)));
    }, [apiArtsits, apiBeers, dispatcher]);


    const HomePage = React.lazy(() => import('./pages/home'));
    const BarsPage = React.lazy(() => import('./pages/bars'));
    const BrewsPage = React.lazy(() => import('./pages/brews'));
    const MyBrews = React.lazy(() => import('./pages/mybrews'));
    const Spot = React.lazy(() => import('./pages/spot'));
    const Brew = React.lazy(() => import('./pages/brew'));
    const LoginPage = React.lazy(() => import('./pages/login'));
    const RegisterPage = React.lazy(() => import('./pages/register'));

    const routerOptions: Array<iRouterItem> = [
        { 
            path: '/', 
            label: 'Home', 
            page: <HomePage></HomePage> 
        },
        {
            path: '/bars',
            label: 'Bars',
            page: <BarsPage></BarsPage>,
        },
        {
            path: '/beers',
            label: 'Beers',
            page: <BrewsPage></BrewsPage>,
        },
        {
            path: '/mybrews',
            label: 'MyBrews',
            page: <MyBrews></MyBrews>,
        },
        {
            path: '/spot',
            label: 'Spot',
            page: <Spot></Spot>,
        },
        {
            path: '/brew',
            label: 'Brew',
            page: <Brew></Brew>,
        },
        { 
            path: '/login', 
            label: 'Login', 
            page: <LoginPage></LoginPage> 
        },
        {
            path: '/register',
            label: 'Register',
            page: <RegisterPage></RegisterPage>,
        },
    ];
    return (
        <Layout menuOptions={routerOptions}>
            <React.Suspense>
                <Routes>
                    {routerOptions.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={item.page}
                        ></Route>
                    ))}
                </Routes>
            </React.Suspense>
        </Layout>
    );
}

export default App;
