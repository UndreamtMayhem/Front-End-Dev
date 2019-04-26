import React from 'react';

import './App.css';
import Aside from './widgets/Aside';
import Nav from './widgets/Nav';
import MessageContainer from './widgets/MessageContainer';

class App extends React.Component {

  render() {
    return (
      <div className="row">
        <Aside/>
        <Nav/>
        <MessageContainer/>
        <footer className="bottom-nav blue col offset-l1">
          <div className="nav-icons">
            <i className="material-icons">home</i>
            <i className="material-icons">people</i>
            <i className="material-icons">settings</i>
          </div>
        </footer>

      </div>

    );
  }
}

export default App;
