import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from './footer';
import {checkLogIn} from '../actions';

//Form used to login in to app, dispatches checkLogIn to check user
export class SignInForm extends React.Component {
    
    onSubmit(event) {
        event.preventDefault();
        const username = this.username.value;
        const password = this.password.value;
        const user = {
            username,
            password
        };
        
        this.props.dispatch(checkLogIn(user));
        this.username.value = '';
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
                <section>
                    <header role="banner">
                        <h2>Sign In</h2>
                        {!(this.props.show)&&
                        <div  className="inUpDescription">
                            <h3>Start your search or inventory update.</h3>
                            <p>Username: 'User' and Password: 'password123'</p>
                        </div>}
                    </header>
                </section>
                { this.props.show&&
                <div>
                    <p>Logging In...</p>
                    <img className="waitIcon" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt='logging in'/>
                </div> }
                {!(this.props.show)&&
                <section className="signInSection">                            
                    <form onSubmit={e => this.onSubmit(e)}>   
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' 
                            ref={input => this.username = input} required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password' 
                            ref={input => this.password = input}required />
                        </div>   
                        <button type='submit'>Sign In</button>                
                    </form>
                    <h3 aria-live="assertive">{this.props.message}</h3>
                </section>}
                   
                <Footer />   
            </div>       
        );
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.show,
        message: state.message || '',
        validUser: state.validUser,
        user: state.user
    }
};

export default connect(mapStateToProps)(SignInForm);
