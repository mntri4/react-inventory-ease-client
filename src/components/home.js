import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import SearchIdForm from './searchId-form';
import AddInventoryForm from './addInventory-form';
import SearchAll from './searchAll';
import Footer from './footer';
import {logOut, getAllVehicles} from '../actions';

//Connected component, checks for valid authToken, part of main InventorEase component 
//if not redirects user to landing page
//Displays component to search all vehicles and
//Search vehicles by Id, which then allows for delete and update options
//Also displays component to add vehicle to inventory
export class HomePage extends React.Component {
    displayAll() {
        this.props.dispatch(getAllVehicles());
    }

    signOut() {
        this.props.dispatch(logOut());
    }

    render() { 
        if (this.props.authToken === null) {
            return <Redirect to='/' />;           
        } 
        return(
            <div>
                <nav role='navigation'>
                    <div className="link">
                        <button className="outButton" onClick={() => 
                        {if (window.confirm('Are you sure you want to log out?'))
                         this.signOut()}}>Log Out
                        </button>       
                    </div>
                    <p className="titleHome">Inventory Ease</p>
                </nav>
               
                { !(this.props.show)&&
                <SearchAll displayAll={()=>this.displayAll()} 
                    isShow={this.props.isShow} 
                    autos={this.props.vehicles} /> }
                { this.props.show&&
                <div className="logingOut">
                    <p>Logging Out...</p>
                    <img className="waitIcon" 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt='logging out'/>
                </div> }
                { !(this.props.show)&&
                <SearchIdForm /> }
                { !(this.props.show)&&
                <AddInventoryForm /> }
                <Footer />    
            </div>       
        );
    }
}

const mapStateToProps = (state) => {
    return {
        show: state.show,
        isShow: state.isShow,
        vehicles: state.vehicles
    }
};

export default connect(mapStateToProps)(HomePage);