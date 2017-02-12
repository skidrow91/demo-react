import React, { Component } from 'react';
import Header from './components/head/Header';
import Content from './components/body/Content';
import Footer from './components/footer/Footer';
import '././assets/css/style.css';

class Main extends Component {
  render() {
    return (
        <div id="page">
            <Header />
            <Content />
            <Footer />
    	</div>
    );
  }
}

export default Main;
