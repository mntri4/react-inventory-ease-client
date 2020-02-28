import {CHECK_LOGIN_SUCCESS, LOG_OUT_PENDING, LOG_OUT_SUCCESS, 
	GET_ALL_VEHICLES_SUCCESS, GET_VEHICLE_ID_SUCCESS,
	SHOW_ERROR, CHECK_LOGIN_ERROR, CHECK_LOGIN_PENDING, 
	GET_VEHICLE_ID_ERROR, ADD_SUCCESS_MESSAGE, ADD_VEHICLE_MESSAGE, 
	SIGN_UP_SUCCESS} from './actions';

const initialState = {
	show: false,
	signUpError: '',
	errorMessage: '',
	message: '',
	successMessage: '',
	validUser: false,
	vehicles: [],
	singleVehicle: {},
	validVehicleId: false,
	isShow: false,
	authToken: null
};

export default (state = initialState, action) => {
	
	if (action.type === CHECK_LOGIN_PENDING) {
		return Object.assign({}, state, {
			show: true
		});
	}

	if (action.type === CHECK_LOGIN_SUCCESS) {
			return Object.assign({}, state, {
				validUser: true,
				errorMessage: '',
				signUpError: '',
				message: '',
				show: false,
				authToken: action.authToken
			});
	}

	if (action.type === CHECK_LOGIN_ERROR) {
		return Object.assign({}, state, {
			message: action.message,
			show: false
		});
	}

	if (action.type === SHOW_ERROR) {
		return Object.assign({}, state, {
			signUpError: action.error
		});
	}

	if (action.type === SIGN_UP_SUCCESS) {
		return Object.assign({}, state, {
			signUpError: 'Sign Up Successful! Return to home page to sign in.',
			errorMessage: ''
		});
	}


	if (action.type === ADD_VEHICLE_MESSAGE) {
		return Object.assign({}, state, {
			message: action.message,
			successMessage: ''
		});
	}

	if (action.type === ADD_SUCCESS_MESSAGE) {
		return Object.assign({}, state, {
			successMessage: action.message,
			message: ''
		});
	}

	if (action.type === LOG_OUT_PENDING) {
		return Object.assign({}, state, {
				show: true
			});
	}

	if (action.type === LOG_OUT_SUCCESS) {
		return Object.assign({}, state, {
				show: false,
				isShow: false,
				validUser: false,
				validVehicleId: false,
				signUpError: '',
				errorMessage: '',
				message: '',
				successMessage: '',
				authToken: null
			});
	}


	if (action.type === GET_ALL_VEHICLES_SUCCESS) {
		return Object.assign({}, state, {
			vehicles: action.vehicles,
			validVehicleId: false,
			errorMessage: '',
			//message: '',
			isShow: true
		});
	}

	if (action.type === GET_VEHICLE_ID_SUCCESS) {
		return Object.assign({}, state, {
			singleVehicle: action.vehicle,
			validVehicleId: true,
			errorMessage: '',
			signUpError: '',
			message: ''
		});
	}

	if (action.type === GET_VEHICLE_ID_ERROR) {
		return Object.assign({}, state, {
			validVehicleId: false,
			errorMessage: action.message,
			message: ''
		});
	}


	return state;
		
};
