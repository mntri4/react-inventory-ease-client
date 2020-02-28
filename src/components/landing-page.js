import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './footer';

//Informational page first displayed to the user, part of main inventoryEase component
//Gives options to sign up as a new user or sign in as an existing user
//Sign in will link to sign in page, Sign up will link to sign up page
export default function LandingPage() {
    return(
        <div>
            <nav role="navigation">
                <div className="link">
                    <Link to='SignIn'>Sign-in </Link>
                    <Link to='SignUp'> Sign-up</Link>
                </div>
                <p className="title">Inventory Ease</p>
            </nav>
            
            <header role="banner">
                <h2 className="landingTitle">Streamline your auto dealerships inventory</h2>
            </header>
            
            <section className="info">
                <h2 className="landingHeader">-Sign up to get started!-</h2>
                <p>Increase sales productivity and customer experience.</p>
            </section>
            <div className="copyright" aria-live="assertive">Copyright Andrew Blake 2018</div>
            <Footer />
        </div>
    );
}