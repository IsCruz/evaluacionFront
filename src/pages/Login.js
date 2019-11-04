import React from 'react';
import Navbar from '../components/genericComponents/NavBar';
import Jumbotron from '../components/genericComponents/Jumbotron';
import Footer from '../components/genericComponents/Footer';
import '../styles/pages.css';

const Login = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron  title={'Login'} subtitle={'Insert Your Credentials'} />
            <div classNameName="container someMargins">
                <div className="row">
                    <form className="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" />
                                    <label for="password">Password</label>
                            </div>
                        </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" />
                                        <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                <button className="waves-effect waves-light btn">Login</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;