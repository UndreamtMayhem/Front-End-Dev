import React from 'react';

class ActiveUser extends React.Component {

    render() {
        let activeUsersLI;
        activeUsersLI = this
            .props
            .activeUsers
            .map((item, index) => {
                return (
                    <li class="collection-item avatar">
                        <img src="https://placeimg.com/640/480/any" alt="" class="circle"/>
                        <p>
                            <i class="material-icons right">radio_button_unchecked</i>{item.firstname} {item.lastname}
                        </p>

                    </li>
                )
            })
        return (
            <ul class="collection">
                {activeUsersLI}
            </ul>
        )
    }
}

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return (

            <li class="collection-item avatar">
                <img src="https://placeimg.com/640/480/any" alt="" class="circle"/>
                <span class="title">Name ......</span>
                <span class="right">15:32</span>
                <p>
                    <i class="material-icons right">radio_button_unchecked</i>Message............</p>
            </li>
        )
    }

}

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: [
                {
                    'firstname': 'Upton',
                    'lastname': 'Ignatius'
                }, {
                    'firstname': 'Noelle',
                    'lastname': 'Benjie'
                }
            ]
        };
    }
    render() {
        return (
            <aside class="">
                {this.props.activeUsers}
                <ul class="side-nav fixed" id="mobile-demo">
                    <div class="row">
                        <ul class="tabs">
                            <li class="tab col s6">
                                <a href="#messages">Messages</a>
                            </li>
                            <li class="tab col s6">
                                <a class="active" href="#test2">Active (12)</a>
                            </li>
                        </ul>
                    </div>

                    <div id="test2">
                        <ActiveUser activeUsers={this.state.activeUsers}/>

                    </div>
                    <div id="messages" class="">

                        <Message/>

                    </div>
                    <footer class="aside-footer blue">
                        <div class="nav-icons">
                            <i class="material-icons">home</i>
                            <i class="material-icons">people</i>
                            <i class="material-icons">settings</i>
                        </div>
                    </footer>
                </ul>
            </aside>
        )

    }
}

export default Aside;