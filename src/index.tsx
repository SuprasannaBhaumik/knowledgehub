import React from 'react';
import ReactDOM from 'react-dom';
import App from './application/view/App';
import './App.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './application/reducers/RootReducer';

//import the provider from the redux library

//declare the store variable using the create store method that takes rootreducer and middleware
// middleware examples are thunk, createlogger
const store = createStore( rootReducer, applyMiddleware(createLogger()))

ReactDOM.render(
	
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));