import React from 'react';
import Navbar from '../components/genericComponents/NavBar';
import Jumbotron from '../components/genericComponents/Jumbotron';
import Footer from '../components/genericComponents/Footer';
import '../styles/pages.css';

class Login extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                email: '',
                password: '',
                error: false,
                errorMessage: ''
            }
            this.onChange = this.onChange.bind(this)
    }
    authUser = (e) => {
        e.preventDefault()
        const {email, password} = this.state;
        // call API Services.
        // save token, update AUTH

    }
    onChange(e){
        e.preventDefault()
        const {name, value} = e.target
        this.setState({[name] : value})
    }

    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title={'Login'} subtitle={'Insert Your Credentials'} />
                <div classNameName="container someMargins">
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                      id="password"
                                      name="password"
                                      type="password"
                                      className="validate"
                                      value={this.state.email}
                                      onChange={this.onChange}
                                      />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                      id="email"
                                      name="email"
                                      type="email"
                                      className="validate"
                                      value={this.state.password}
                                      onChange={this.onChange}
                                      />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <button
                                      className="waves-effect waves-light btn"
                                      onClick={this.authUser}
                                    >Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;