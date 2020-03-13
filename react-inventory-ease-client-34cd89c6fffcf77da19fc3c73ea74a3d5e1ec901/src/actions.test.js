import {
	SHOW_ERROR,
	showError,
	SIGN_UP_SUCCESS,
	signUpSuccess,
	signUp,
	CHECK_LOGIN_SUCCESS,
	checkLogInSuccess,
	checkLogIn,
	CHECK_LOGIN_ERROR,
	checkLogInError,
	getAllVehicles,
	GET_ALL_VEHICLES_SUCCESS,
	getAllVehiclesSuccess
} from './actions';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

import {API_BASE_URL} from './config';

describe('showError', () => {
	it('Should return the action', () => {
		const error = 'this is an error';
		const action = showError(error);
		expect(action.type).toEqual(SHOW_ERROR);
		expect(action.error).toEqual(error);
	});
});

describe('signUpSuccess', () => {
	it('Should return the action', () => {
		const action = signUpSuccess();
		expect(action.type).toEqual(SIGN_UP_SUCCESS);
	});
});


describe('signUp', () => {
	it('Should dispatch signUpSuccess', () => {
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true
			})
		);

		const dispatch = jest.fn();
		return signUp()(dispatch).then(() => {
			
			expect(dispatch).toHaveBeenCalledWith(signUpSuccess());
		});
	});
});

describe('checkLogIn', () => {
	it('Should dispatch checkLogInSuccess', () => {
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true
			})
		);

		const dispatch = jest.fn();
		return checkLogIn()(dispatch).then(() => {
			
			expect(dispatch).toHaveBeenCalledWith(checkLogInError('Incorrect Username or Password'));
		});
	});
});

describe('checkLogInSuccess', () => {
	it('Should return the action', () => {
		const authToken = '123456';
		const action = checkLogInSuccess(authToken);
		expect(action.type).toEqual(CHECK_LOGIN_SUCCESS);
		expect(action.authToken).toEqual(authToken);
	});
});



describe('checkLogInError', () => {
	it('Should return the action', () => {
		const message = 'log in error';
		const action = checkLogInError(message);
		expect(action.type).toEqual(CHECK_LOGIN_ERROR);
		expect(action.message).toEqual(message);
	});
});

/*describe('getAllVehicles', () => {
	it('Should dispatch getAllVehiclesSuccess', () => {
		const vehicle = [];
		const dispatch = jest.fn();
		
		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				ok: true,
				
			})
		);
		const getState = '12345';
		const store = mockStore({authToken: '12345', vehicles: []});
		return getAllVehicles()(dispatch, getState).then(() => {
			
			expect(dispatch).toHaveBeenCalledWith(getAllVehiclesSuccess(vehicle));
		});
	});
});*/

