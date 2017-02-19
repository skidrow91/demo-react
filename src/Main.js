import React, { Component } from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Header from './components/head/Header';
import Content from './components/body/Content';
import Footer from './components/footer/Footer';
import Home from './components/body/Home';
import About from './components/body/About';
import Product from './components/body/Product';
import Single from './components/body/Single';
import Blog from './components/body/Blog';
import Contact from './components/body/Contact';
import '././assets/css/style.css';

class Main extends Component {
  render() {
    return (
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Content}>
                    <IndexRoute component={Home}/>
                    <Route path="about" component={About}/>
                    <Route path="product" component={Product}/>
                    <Route path="singlepost" component={Single}/>
                    <Route path="blog" component={Blog}/>
                    <Route path="contact" component={Contact}/>
                </Route>
            </Router>
        </div>
    );
  }
}

export default Main;
