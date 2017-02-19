import React, { Component } from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Home from './Home';
import Header from '../head/Header';
import Footer from '../footer/Footer';

class Content extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div>
                        {this.props.children}
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Content;
