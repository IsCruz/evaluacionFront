import React from 'react';
import Auth from '../../helpers/Auth';
import Logout from '../genericComponents/Logout';

class NavBar extends React.Component {
    verifyIfItsAuth(){
        if(Auth.isAuthenticated()) {
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">My RH Stuff</a></li>
                <li><Logout /></li>
            </ul>
        } else {
            return <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">My RH Stuff</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">2nd Evaluation</a>
                        {this.verifyIfItsAuth()}
                </div>
            </nav>
        );
    }
}

export default NavBar;