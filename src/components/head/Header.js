import React, { Component } from 'react';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

class Header extends Component {
    render (){
        return (
            <div id="header">
    			<div>
    				<a href="index.html" className="logo"><img src={require("../../assets/images/logo.png")} alt="" /></a>
    				<ul id="navigation">
    					<li className="selected">
    						<Link to="/">Home</Link>
    					</li>
    					<li className="menu">
    						<Link to="/about">About</Link>
    						<ul className="primary">
    							<li>
    								<Link to="/product">Product</Link>
    							</li>
    						</ul>
    					</li>
    					<li className="menu">
    						<Link to="/blog">Blog</Link>
    						<ul className="secondary">
    							<li>
                                    <Link to="/singlepost">Single post</Link>
    							</li>
    						</ul>
    					</li>
    					<li>    						
                            <Link to="/contact">Contact</Link>
    					</li>
    				</ul>
    			</div>
    		</div>
        );
    }
}

export default Header;
