import React from 'react';

class Nav extends React.Component {

    render() {

        return (

            <div className="col s12 l12 joined-nav">
                <div className="navbar-fixed">
                    <nav className="blue">
                        <a
                            href="#"
                            data-activates="mobile-demo"
                            className="button-collapse show-on-large">
                            <i className="material-icons">menu</i>
                        </a>
                        <i className="material-icons">fullscreen</i>
                        <a href="#">messenger</a>
                        <i className="large material-icons">call</i>
                        <i className="large material-icons">video_call</i>
                    </nav>
                </div>
            </div>

        )
    }
}

export default Nav;