import React from 'react';
import ReactDOM from 'react-dom';
import App from './application/view/App';
import './App.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './application/reducers/RootReducer';
import thunk from 'redux-thunk';

//import the provider from the redux library

//declare the store variable using the create store method that takes rootreducer and middleware
// middleware examples are thunk, createlogger
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(createLogger(), thunk)));

ReactDOM.render(
	
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));