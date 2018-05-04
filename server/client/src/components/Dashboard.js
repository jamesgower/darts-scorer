import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello {this.props.auth.name}</h1>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	return {
		auth,
	};
};

export default connect(mapStateToProps, actions)(Dashboard);
