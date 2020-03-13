import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';
import {signUp} from '../actions';

//Connected component that recieves user info from form and dispatches
//signUp function with recieved user info
//Part of main component inventoryEase, signUp link routes to this page
export class SignUpFormPage extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const username = this.userName.value;
        const password = this.password.value;
        const user = {
            firstName,
            lastName,
            username,
            password
        };
        this.props.dispatch(signUp(user));
        this.firstName.value = '';
        this.lastName.value = '';
        this.userName.value = '';
        this.password.value = '';
    }
    render() {
        return (
           <div>
                <nav role='navigation'>
                    <div className="link">
                        <Link to='/' >Back</Link>
                    </div>
                    <p className="title">Inventory Ease</p>
                </nav>
                <header role="banner">
                    <h2>Sign Up</h2>
                    <h3 className="inUpDescription">Get access to all your inventory needs</h3>
                </header>
                <section>    
                    <form onSubmit = {(e) => this.onSubmit(e)}>
                        <div>
                            <label htmlFor="first-name">First name</label>
                            <input placeholder='First Name' type="text" name='first-name' id='first-name' 
                               ref={input => (this.firstName = input)} />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last name</label>
                            <input type="text" name='last-name' id='last-name' placeholder='Last Name' 
                                ref={input => (this.lastName = input)} />
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' 
                                ref={input => (this.userName = input)} required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password'  
                                ref={input => (this.password = input)} required />
                        </div>
                        <button type='submit'>Sign Up</button>
                    </form>
                    <h3 aria-live="assertive">{this.props.signUpError}</h3>
                </section>
                
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signUpError: state.signUpError || '',
        validUser: state.validUser,
        user: state.user
    }
};

export default connect(mapStateToProps)(SignUpFormPage);