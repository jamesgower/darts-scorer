import React from 'react';
import { connect } from 'react-redux';
import '../styles/Landing.css';

class Landing extends React.Component {
	render() {
		return (
			<div className="background">
				<div className="welcomeBox">
					<h3>Dart Scorer</h3>
					<a href="/auth/google" className="btn btn-success">
						Login with Google
					</a>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ auth }) => {
	return { auth };
};

export default connect(mapStateToProps)(Landing);
