import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
 
        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {
        var rightDrawer = document.getElementById("rightDrawer");
            rightDrawer
                .classList
                .remove("open");

    }

    render() {

        return (

            <div class="sidebar c3" id="rightDrawer">
                <div className="sidebar-top">
                    <div className="search">
                        <form>
                            <input type="search" placeholder="Search Our Blogs..." id='search-text-input'/>
                            <div id='button-holder'>
                                <img src='./img/search.png' alt="search icon"/>
                            </div>
                        </form>
                    </div>
                    <a
                        href="#"
                        onClick={this.handleClick}
                        className="right close-btn "
                        title="close menu"
                        id="close-btn">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
                <div class="bar-block">
                    <a href="#portfolio" onClick={this.handleClick} class="bar-item">
                        <i className="link-font"></i>Web Development</a>
                    <a href="#about" onClick={this.handleClick} class="bar-item ">
                        <i className="link-font"></i>Design</a>
                    <a href="#contact" onClick={this.handleClick} class="bar-item ">
                        <i className="link-font"></i>SEO & Marketing</a>
                    <a href="#contact" onClick={this.handleClick} class="bar-item ">
                        <i className="link-font"></i>Cloud & Hosting</a>
                    <a href="#contact" onClick={this.handleClick} class="bar-item ">
                        <i className="link-font"></i>Gadgets</a>
                    <a href="#contact" onClick={this.handleClick} class="bar-item ">
                        <i className="link-font"></i>Software</a>
                </div>
                <div class="w3-panel w3-large">
                    <img src="./img/icons/facebook.png" alt=""/>
                    <img src="./img/icons/instagram.png" alt=""/>
                    <img src="./img/icons/googleplus.png" alt=""/>
                    <img src="./img/icons/kik.png" alt=""/>
                    <img src="./img/icons/linkedin.png" alt=""/>
                    <img src="./img/icons/pinterest.png" alt=""/>
                    <img src="./img/icons/snapchat.png" alt=""/>
                </div>
            </div>

        )

    }

}
export default Sidebar;