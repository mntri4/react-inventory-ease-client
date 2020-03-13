import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export function NavBar(props) {
    let locationTitle = 'Home';
    let location = '/home';
    let navLinks = <Link to={location}>{locationTitle}</Link>;
    return (
        <nav role='navigation'>
            {navLinks}
        </nav>
    );
}

export default connect()(NavBar);