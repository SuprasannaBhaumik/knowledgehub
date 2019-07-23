import React from 'react';
import ReactDOM from 'react-dom';
import App from './application/view/App';
import './App.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './application/reducers/RootReducer';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { LoginContainer } from './login/view/LoginContainer';
import { RegisterContainer } from './register/view/RegisterContainer';
import { HomeContainer } from './home/view/HomeContainer';
import { HeaderContainer } from './application/view/HeaderContainer';
import Footer from './application/view/Footer';
//import the provider from the redux library

//declare the store variable using the create store method that takes rootreducer and middleware
// middleware examples are thunk, createlogger
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(createLogger(), thunk)));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<div style={{display:'flex', minHeight: '100vh', flexDirection: 'column'}}>
				<div style={{}}>
					<HeaderContainer/>
				</div>
				<div style={{display:'flex', flex:'1'}}>
					<Route path="/" exact component={App} />
					<Route path="/login" exact component={LoginContainer} />
					<Route path="/register" exact component={RegisterContainer} />
					<Route path="/home" exact component={HomeContainer}/>
				</div>
				<div style={{}}>
					<Footer/>
				</div>
			</div>
			
			
			
		</Provider>
	</BrowserRouter>, 
	document.getElementById('root'));