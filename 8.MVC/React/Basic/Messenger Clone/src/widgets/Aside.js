import React from 'react';

class ActiveUser extends React.Component {

    render() {
        let activeUsersLI;
        activeUsersLI = this
            .props
            .activeUsers
            .map((item, i) => {
                return (
                    <li className="collection-item avatar" key={i}>
                        <img src="https://placeimg.com/640/480/any" alt="" className="circle"/>
                        <p>
                            <i className="material-icons right">radio_button_unchecked</i>{item.firstname} {item.lastname}
                        </p>

                    </li>
                )
            })
        return (
            <ul className="collection">
                {activeUsersLI}
            </ul>
        )
    }
}

class Message extends React.Component {

    render() {

        let conversationHTML = this
            .props
            .conversations
            .map((conversation, i) => {

                console.log(conversation)

                return (
                    <li className="collection-item avatar" key={i}>
                        <img src="https://placeimg.com/640/480/any" alt="" className="circle"/>
                      
                        <span className="title">{conversation.firstname} {conversation.lastname}</span>
                        <span className="right">15:32</span>
                        <p>
                            <i className="material-icons right">radio_button_unchecked</i>Message............</p>
                    </li>

                )
            })

       
        return (
            <ul className="collection">
                {conversationHTML}
            </ul>
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
            ],
            conversations: [
                {
                    'firstname': 'Upton',
                    'lastname': 'Ignatius',
                    'currentmessage': 'sdfgsdfsdfsdf',
                    'timesent': new Date()
                }, {
                    'firstname': 'Noelle',
                    'lastname': 'Benjie',
                    'currentmessage': 'sdfgsdfsdfsdf',
                    'timesent': new Date()
                }

            ]
        };
    }
    render() {
        return (
            <aside>
                {this.props.activeUsers}
                <ul className="side-nav fixed" id="mobile-demo">
                    <div className="row">
                        <ul className="tabs">
                            <li className="tab col s6">
                                <a href="#messages">Messages</a>
                            </li>
                            <li className="tab col s6">
                                <a className="active" href="#test2">Active (12)</a>
                            </li>
                        </ul>
                    </div>

                    <div id="test2">
                        <ActiveUser activeUsers={this.state.activeUsers}/>

                    </div>
                    <div id="messages">

                        <Message conversations={this.state.conversations}/>

                    </div>
                    <footer className="aside-footer blue">
                        <div className="nav-icons">
                            <i className="material-icons">home</i>
                            <i className="material-icons">people</i>
                            <i className="material-icons">settings</i>
                        </div>
                    </footer>
                </ul>
            </aside>
        )

    }
}

export default Aside;