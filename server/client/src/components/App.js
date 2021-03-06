import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import '../styles/App.css';

class App extends Component {
	componentWillMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Landing} />
					<Route path="/dashboard" component={Dashboard} />
				</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);
