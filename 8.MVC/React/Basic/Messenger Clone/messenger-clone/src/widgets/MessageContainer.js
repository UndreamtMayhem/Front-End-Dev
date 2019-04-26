import React from 'react';

class MessageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    'profilepic': 'https://placeimg.com/640/480/any',
                    'message': 'efjeiruoewiur',
                    'timestamp': new Date().getHours()
                }, {
                    'profilepic': 'https://placeimg.com/640/480/any',
                    'message': 'efjeiruoewiur',
                    'timestamp': new Date().getHours()
                }
            ]
        };
    }

    render() {
        let messages;
        messages = this
            .state
            .messages
            .map((m, i) => {
                if (i % 2 === 0) {
                    return (
                        <div className="message-container" key={i}>
                            <img
                                src={m.profilepic}
                                alt=""
                                className="circle left"
                                width="27px"
                                height="55px"/>
                            <div className="message blue">
                                <div className="row">
                                    <p className="col s12">{m.message}</p>
                                    <p>{m.timestamp}</p>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="message-container" key={i}>
                            <div className="message green col s6">
                                <p>{m.message}</p>
                                <p>{m.timestamp}</p>
                            </div>
                        </div>
                    )
                }
            })

        return (
            <main className="col s12 l9 offset-l3">
                {messages}
            </main>
        )
    }
}

export default MessageContainer;