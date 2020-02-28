import reducer from './reducer';
import {signUp, addVehicle, getAllVehicles} from './actions';

//Tests the reducer
describe('reducer', () => {

	it('Should set initial state when nothing is passed in', () => {
		const state = reducer(undefined, {type: '__UNKNOWN'});
		expect(state).toEqual({
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
		});
	});

	it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('addVehicle', () => {
    	it('Should add a vehicle', () => {
    		let state;
    		let vehicle = {
    			year: 2004,
    			make: 'honda',
    			model: 'civic',
    		}
    		state = reducer(state, addVehicle(vehicle));
    		expect(state).toEqual({
    			signUpError: '',
				errorMessage: '',
				message: '',
				successMessage: '',
				validUser: false,
				vehicles: [{
					year: 2004,
					make: 'honda',
					model: 'civic'
				}],
				singleVehicle: {},
				validVehicleId: false,
				isShow: false,
				authToken: null
    		});
    	});
    });

});