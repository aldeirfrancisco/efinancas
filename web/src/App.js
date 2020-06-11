import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import theme from './theme';

const browserHistory = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router history={browserHistory}>
                    <Routes />
                    <ToastContainer />
                </Router>
            </ThemeProvider>
        );
    }
}
