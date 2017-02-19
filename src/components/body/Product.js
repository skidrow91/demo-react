import React, {Component} from 'react';

class Product extends Component{
    render(){
        return (
            <div id="body">
    			<div class="header">
    				<div>
    					<h1>Products</h1>
    				</div>
    			</div>
    			<div>
    				<ul>
    					<li>
    						<h1>All Time Classic</h1>
    						<p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
    					</li>
    					<li>
    						<img src={require("../../assets/images/kiwi.jpg")} alt=""/>
    						<h2>Kiwi</h2>
    					</li>
    					<li>
    						<img src={require("../../assets/images/mango.jpg")} alt=""/>
    						<h2>Mango</h2>
    					</li>
    					<li>
    						<img src={require("../../assets/images/cantaloupe.jpg")} alt=""/>
    						<h2>Cantaloupe</h2>
    					</li>
    				</ul>
    				<ul>
    					<li>
    						<h1>Berry Special</h1>
    						<p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
    					</li>
    					<li>
    						<img src={require("../../assets/images/blackberry.jpg")} alt=""/>
    						<h2>blackberry</h2>
    					</li>
    					<li>
    						<img src={require("../../assets/images/strawberry.jpg")} alt=""/>
    						<h2>Strawberry</h2>
    					</li>
    					<li>
    						<img src={require("../../assets/images/blueberry.jpg")} alt=""/>
    						<h2>BLUEBERRY</h2>
    					</li>
    				</ul>
    				<ul>
    					<li>
    						<h1>Fruit Blast</h1>
    						<p>This website template has been designed by freewebsitetemplates.com for you, for free.</p>
    					</li>
    					<li>
    						<img src={require("../../assets/images/grapes.jpg")} alt=""/>
    						<h2>Grapes</h2>
    					</li>
    					<li>
    						<img src={require("../../assets/images/green-apple.jpg")} alt=""/>
    						<h2>Green Apple</h2>
    					</li>
    					<li>
    						<img src={require("../../assets/images/pineapple.jpg")} alt=""/>
    						<h2>Pineapple</h2>
    					</li>
    				</ul>
    			</div>
    		</div>
        )
    }
}

export default Product;
