import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

//Connected component, checks for valid user and gives access to home page if valid
export function HandleLogIn(props) {
	if (props.validUser) {
		return <Redirect to='/home' />;	
	}
	return null;
}

const mapStateToProps = state => ({
	validUser: state.validUser
});

export default connect(mapStateToProps)(HandleLogIn);