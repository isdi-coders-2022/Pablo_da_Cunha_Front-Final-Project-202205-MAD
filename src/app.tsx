/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './app.css';
import { Layout } from './components/layout';
import { PageUpdate } from './components/page.update';
import { iRouterItem } from './interfaces/iRouterItem';
import { Bar } from './pages/bar';
import { loadBarAction } from './reducers/bar/bar.action.creator';
import { loadBrewAction } from './reducers/brew/brew.action.creator';
import { loadUserAction } from './reducers/user/user.action.creator';
import { BarHttpStore } from './services/bar.store';
import { BrewHttpStore } from './services/brew.store';
import { UserHttpStore } from './services/user.store';
import { iStore } from './store/store';

function App() {
    const dispatcher = useDispatch();
    const apiBars = useMemo(() => new BarHttpStore(), []);
    const apiBrews = useMemo(() => new BrewHttpStore(), []);
    const apiUser = useMemo(() => new UserHttpStore(), []);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            apiUser
                .getUserByToken()
                .then((data) => dispatcher(loadUserAction(data)));
        }
        apiBars.getAllBars().then((bars) => dispatcher(loadBarAction(bars)));
        apiBrews
            .getAllBrews()
            .then((brews) => dispatcher(loadBrewAction(brews)));
    }, [apiBars, apiBrews, dispatcher]);

    const HomePage = React.lazy(() => import('./pages/home'));
    const BarsPage = React.lazy(() => import('./pages/bars'));
    const BrewsPage = React.lazy(() => import('./pages/brews'));
    const MyBrewsPage = React.lazy(() => import('./pages/mybrews'));
    const BarPage = React.lazy(() => import('./pages/bar'));
    const BrewPage = React.lazy(() => import('./pages/brew'));
    const LoginPage = React.lazy(() => import('./pages/login'));
    const RegisterPage = React.lazy(() => import('./pages/register'));
    const UpdatePage = React.lazy(() => import('./pages/update'));

    const routerOptions: Array<iRouterItem> = [
        {
            path: '/',
            label: 'Home',
            page: <HomePage></HomePage>,
        },
        {
            path: '/bars',
            label: 'Bars',
            page: <BarsPage></BarsPage>,
        },
        {
            path: '/brews',
            label: 'Brews',
            page: <BrewsPage></BrewsPage>,
        },
        {
            path: '/mybrews',
            label: 'MyBrews',
            page: <MyBrewsPage></MyBrewsPage>,
        },
        {
            path: '/bar/:id',
            label: 'Bar',
            page: <BarPage></BarPage>,
        },
        {
            path: '/brew/:id',
            label: 'Brew',
            page: <BrewPage></BrewPage>,
        },
        {
            path: '/login',
            label: 'Login',
            page: <LoginPage></LoginPage>,
        },
        {
            path: '/register',
            label: 'Register',
            page: <RegisterPage></RegisterPage>,
        },
        {
            path: '/update',
            label: 'Update',
            page: <UpdatePage></UpdatePage>,
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
