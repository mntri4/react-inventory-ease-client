import React from 'react';
import {connect} from 'react-redux';

export function Footer(props) {
    
    return (
        <footer role="contentinfo">
        	Contact us at: dealerInfo@email.com (777)-777-7777
        </footer>
    );
}

export default connect()(Footer);