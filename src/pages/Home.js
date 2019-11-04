import React from 'react';
import Navbar from '../components/genericComponents/NavBar';
import Jumbotron from '../components/genericComponents/Jumbotron';
import Footer from '../components/genericComponents/Footer';
import '../styles/pages.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron  title={'Welcome'} subtitle={'Second Evaluation'} />
            <div className="container homeHeight">
                <h2>
                    Welcome
                </h2>
                <p>
                    This is Just a demo text.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;