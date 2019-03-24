import React, { Component } from 'react';
import SubBar1 from "./SubBar1"
import SubBar2 from "./SubBar2"
import Content from "./Content"
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div id="home">
                <img src="http://evasbakeryslc.com/images/slide1.jpg" className="logo" alt=""/>
                <SubBar1 />
                <Content />
                <SubBar2 />

            </div>
        );
    }
}

export default Home;