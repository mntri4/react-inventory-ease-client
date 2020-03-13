import {API_BASE_URL} from './config';

//used to handle different error types
export const normalizeResponseErrors = res => {
    if (!res.ok) {
        if (
            res.headers.has('content-type') &&
            res.headers.get('content-type').startsWith('application/json')
        ) {
            // It's a nice JSON error returned by us, so decode it
            return res.json().then(err => Promise.reject(err));
        }
        // It's a less informative error returned by express
        return Promise.reject({
            code: res.status,
            message: res.statusText
        });
    }
    return res;
};

//Dispatched by signUp function when signUp throws an error
export const SHOW_ERROR = 'SHOW_ERROR';
export const showError = (error) => ({
	type: SHOW_ERROR,
	error
});

//Dispatched by signUp when signUp is successful
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const signUpSuccess = () => ({
	type: SIGN_UP_SUCCESS
});

//Function used to POST	user info to database when registering a new user
export const signUp = (user) => (dispatch) => {
	return fetch(`${API_BASE_URL}/users`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)

	})
	.then(res => normalizeResponseErrors(res))
	.then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return dispatch(signUpSuccess());
	}).catch((error) => {
		const {message} = error;
		dispatch(showError(message));
	});
};

//Dispatched by checkLogin function when a valid user is identified
//Sets authToken value to the state  
export const CHECK_LOGIN_SUCCESS = 'CHECK_LOGIN_SUCCESS';
export const checkLogInSuccess = (authToken) => ({
	type: CHECK_LOGIN_SUCCESS,
	authToken
});

//Dispatched by ckeckLogin when error is returned
//Sets error message in state that will be displayed to the user
export const CHECK_LOGIN_ERROR = 'CHECK_LOGIN_ERROR';
export const checkLogInError = (message) => ({
	type: CHECK_LOGIN_ERROR,
	message
});

export const CHECK_LOGIN_PENDING = 'CHECK_LOGIN_PENDING';
export const checkLoginPending = () => ({
	type: CHECK_LOGIN_PENDING,
});

//Function that checks for valid user and returns authToken if successful
//Dispatches checkLoginError if invalid user
export const checkLogIn = (user) => (dispatch) => {
	dispatch(checkLoginPending());

    return fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	.then(res => res.json())	
	.then(res => {		
		dispatch(checkLogInSuccess(res.authToken));
	})
	.catch((error) => {
		const message = 'Incorrect Username or Password';
		dispatch(checkLogInError(message));
	});
    
};

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const logOutSuccess = () => ({
	type: LOG_OUT_SUCCESS
});


export const LOG_OUT_PENDING = 'LOG_OUT_PENDING';
export const logOutPending = () => ({
	type: LOG_OUT_PENDING
});

//Sets validUser to false and authToken to null in the state
//Will route user back to landing page
//export const LOG_OUT = 'LOG_OUT';
export const logOut = () => (dispatch) => {
	dispatch(logOutPending());
	setTimeout(function() {
		dispatch(logOutSuccess()); 
	},100);	
};

//Removes selected vehicle found by getVehicleId function
//Delete button option only displayed after successful getVehicleId call
//Dispatches getAllVehicles function to show updated vehicle list after delete
export const deleteVehicle = (id) => (dispatch, getState) => {
	const authToken = getState().authToken;
	fetch(`${API_BASE_URL}/vehicles/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${authToken}`
		}
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		const message1 = 'Vehicle deleted successfully!'
		dispatch(checkLogInError(message1));
	}).then(() => {
		dispatch(getAllVehicles())
	
	});
};


//Function that allows mileage and parking space to be updated for vehicle
//Makes PUT request to server.  Dispatches showError if unsuccessful
//Dispatches getAllVehicles to show updated info on vehicle
export const updateVehicle = (updateInfo) => (dispatch, getState) => {
	const authToken = getState().authToken;
	return fetch(`${API_BASE_URL}/vehicles/${updateInfo.id}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'content-type': 'application/json'
		},
		body: JSON.stringify(updateInfo)
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		const message1 = 'Vehicle updated successfully!'
		dispatch(checkLogInError(message1));
	}).then(() => {
		dispatch(getAllVehicles())
	}).catch((error) => {
		const message = 'Parking space taken! Check vehicle location.';
		dispatch(showError(message));
	});
};

//Dispatched when addVehicle throws an error 
//Changes message in state to error message
export const ADD_VEHICLE_MESSAGE = 'ADD_VEHICLE_SUCCESS';
export const addVehicleMessage = (message) => ({
	type: ADD_VEHICLE_MESSAGE,
	message
});

//Dispatched when addVehicle function is successful
//Changes message in state to success message
export const ADD_SUCCESS_MESSAGE = 'ADD_SUCCESS_MESSAGE';
export const addSuccessMessage = (message) => ({
	type: ADD_SUCCESS_MESSAGE,
	message
});

//POST method function to add a new vehicle to database
export const addVehicle = (vehicle) => (dispatch, getState) => {
	const authToken = getState().authToken;
	return fetch(`${API_BASE_URL}/vehicles`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'content-type': 'application/json'
		},
		body: JSON.stringify(vehicle)
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		const message1 = 'Vehicle added successfully!';
		dispatch(addSuccessMessage(message1));
	}).then(() => {
		dispatch(getAllVehicles());	
	}).catch((error) => {
		const message = 'Parking space taken, choose another space.';
		dispatch(addVehicleMessage(message));
	});
};

//Dispatched when getAllVehicles throws an error
export const GET_ALL_VEHICLES_ERROR = 'GET_ALL_VEHICLES_ERROR';
export const getAllVehiclesError = (error) => ({
	type: GET_ALL_VEHICLES_ERROR,
	error
});

//Dispatched when getAllVehicles is successful
//Sets state to vehicles returned from database
export const GET_ALL_VEHICLES_SUCCESS = 'GET_ALL_VEHICLES_SUCCESS';
export const getAllVehiclesSuccess = (vehicles) => ({
	type: GET_ALL_VEHICLES_SUCCESS,
	vehicles
});

//Function that makes a GET request to database
export const getAllVehicles = () => (dispatch, getState) => {
	const authToken = getState().authToken;
	fetch(`${API_BASE_URL}/vehicles`, {
		method: 'GET',
		headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }	
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then((vehicles) => {
		dispatch(getAllVehiclesSuccess(vehicles));
	}).catch((error) => {
		dispatch(getAllVehiclesError(error));
	});

};

//Dispatched when getVehicleId throws an error
//Sets message to error message in the state
export const GET_VEHICLE_ID_ERROR = 'GET_VEHICLE_ID_ERROR';
export const getVehicleIdError = (message) => ({
	type: GET_VEHICLE_ID_ERROR,
	message
});

//Dispatched when getVehicleId is successful
//Sets singleVehicle in state to vehicle returned by getVehicleId
export const GET_VEHICLE_ID_SUCCESS = 'GET_VEHICLE_ID_SUCCESS';
export const getVehicleIdSuccess = (vehicle) => ({ 
	type: GET_VEHICLE_ID_SUCCESS,
	vehicle
});

//Function that makes a GET by id request to database
export const getVehicleId = (id) => (dispatch, getState) => {
	const authToken = getState().authToken; 
	fetch(`${API_BASE_URL}/vehicles/${id}`, {
		method: 'GET',
		headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }	
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	}).then((vehicle) => {
		dispatch(getVehicleIdSuccess(vehicle));
	}).catch((error) => {
		const message = 'Enter valid Id'
		dispatch(getVehicleIdError(message));
	});
};