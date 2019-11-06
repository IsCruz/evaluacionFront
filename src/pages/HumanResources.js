import React from 'react';
import Navbar from '../components/genericComponents/NavBar';
import Jumbotron from '../components/genericComponents/Jumbotron';
import Footer from '../components/genericComponents/Footer';
import ResourcesList from '../components/ResourcesList';
import '../styles/pages.css';

class HumanResources extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                firstName: '',
                lastName: '',
                birthdate: '',
                email: '',
                password: '',
                error: false,
                errorMessage: '',
                role: '',
                resources: []
            }
            this.onChange = this.onChange.bind(this)
            this.addResource = this.addResource.bind(this)
    }
    addResource(event) {
        event.preventDefault();
        const { firstName, lastName, birthdate, email, password, role, resources } = this.state;
        const resourceForAdd = {
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate,
            email: email,
            password: password,
            role: role
        };
        this.setState({
            resources: [...resources, resourceForAdd],
            firstName: '',
            lastName: '',
            birthdate: '',
            email: '',
            password: '',
            role: ''
        });

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
            <Jumbotron title={'Resources'} subtitle={'Get / Add Users Here'} />
            <div classNameName="container homeHeight">
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="firstName" name="firstName" type="text" className="validate" onChange={this.onChange} value={this.state.firstName} />
                                <label for="firstName">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="lastName" name="lastName" type="text" className="validate" onChange={this.onChange} value={this.state.lastName} />
                                <label for="lastName">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="birthdate" type="text" className="validate" name="birthdate" onChange={this.onChange} value={this.state.birthdate} />
                                <label for="birthdate">Birthdate</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="role" name="role" type="text" className="validate" onChange={this.onChange}  value={this.state.role} />
                                <label for="role">Role</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="email" type="email" className="validate" name="email" onChange={this.onChange} value={this.state.email} />
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="password" type="password" name="password" className="validate" onChange={this.onChange} value={this.state.password} />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                    <button className="waves-effect waves-light btn" onClick={this.addResource}>Add Resource</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <ResourcesList  resources={this.state.resources}/>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
};

export default HumanResources;