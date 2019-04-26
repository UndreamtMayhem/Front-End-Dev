import React from 'react';
//import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Footer extends React.Component {

    render() {

        return (
            <footer id="main-footer">
                <div class="container">
                    <div class="left-footer">
                        <h3>Social Networks</h3>
                        <ul class="social-ul w3-hoverable">
                            <li class="w3-padding-16">
                                <img
                                    src="img/icons/facebook.png"
                                    class="w3-left w3-margin-right footer-img"
                                    alt="social icon"
                                  />
                                <span class="w3-large">Facebook</span>
                                <br/></li>
                            <li class="w3-padding-16">
                                <img
                                    src="img/icons/googleplus.png"
                                    class="w3-left w3-margin-right footer-img"
                                    alt="social icon"
                                   />
                                <span class="w3-large">GooglePlus</span>
                                <br/></li>
                            <li class="w3-padding-16">
                                <img
                                    src="img/icons/linkedin.png"
                                    class="w3-left w3-margin-right footer-img"
                                    alt="social icon"
                                   />
                                <span class="w3-large">Linkedin</span>
                                <br/></li>
                            <li class="w3-padding-16">
                                <img
                                    src="img/icons/instagram.png"
                                    class="w3-left w3-margin-right footer-img"
                                    alt="social icon"
                                    />
                                <span class="w3-large">Instgram</span>
                                <br/></li>
                        </ul>
                    </div>
                    <div class="third">
                        <h3>POPULAR TAGS</h3>
                        <p>
                            <span class="tag">Web Development</span>
                            <span class="tag">Design</span>
                            <span class="tag">Cloud & Hosting</span>
                            <span class="tag ">Gadgets</span>
                            <span class="tag ">Software</span>
                            <span class="tag ">SEO & Marketing</span>
                            <span class="tag ">Front-End-Developement</span>
                            <span class="tag">JS</span>
                            <span class="tag ">HTML</span>
                            <span class="tag ">CSS</span>
                            <span class="tag ">Server-Side</span>
                            <span class="tag ">MongoDb</span>
                            <span class="tag ">Django</span>
                            <span class="tag ">Flask</span>
                        </p>
                    </div>
                </div>
                <div class="container">
                    <div class="footer-right">
                        <h3>SiteMap</h3>
                        <nav class="footer-nav">
                            <ul>
                                <li>
                                    <a href="/" class="active">Home</a>
                                </li>
                                <li>
                                    <a href="/">About Us</a>
                                </li>
                                <li>
                                    <a href="/">Contact Us</a>
                                </li>
                                <li>
                                    <a href="/">Resources</a>
                                </li>
                                <li>
                                    <a href="/">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="/">Privacy Policy</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>)

        }
    }

    export default Footer;
