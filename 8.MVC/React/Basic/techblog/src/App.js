import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import AddPost from './Components/AddPost';
import Post from './Components/Post';
import Footer from './Components/Footer';
import './App.css';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// footer broken styles

class App extends React.Component {

  render() {

    return (
      <div>

        <Sidebar/>

        <Router>
          <header id="main-header">
            <div className="container">
              <div id="branding">
                <img src="../img/log.png" alt="The DailiesTech"/>
                <h1 className="title">DailiesTech</h1>
              </div>
              <nav id="main-nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add/">Add</Link>
                  </li>
                  <li>
                    <Link to="/post/">Post</Link>
                  </li>
                </ul>
                <i
                  onClick={this.handleClick}
                  styles="color: white;"
                  className="fa fa-bars"
                  aria-hidden="true"
                  id="hamburger-btn"></i>
              </nav>
            </div>
          </header>

          <main class="container">
            <aside id="sidebar" class="">
              <div class="search">
                <form>
                  <input type="search" placeholder="Search Our Blog..."/><input type="image" src="./img/search.png" alt="Search"/>
                </form>
              </div>
              <div class="clearfix"></div>
              <nav id="sub-nav">
                <ul>
                  <li>
                    <a href="/">Web Development</a>
                  </li>
                  <li>
                    <a href="/">Design</a>
                  </li>
                  <li>
                    <a href="/">SEO & Marketing</a>
                  </li>
                  <li>
                    <a href="/">Cloud & Hosting</a>
                  </li>
                  <li>
                    <a href="/">Gadgets</a>
                  </li>
                  <li>
                    <a href="/">Software</a>
                  </li>
                </ul>
              </nav>
              <div class="ad">
                <img src="./img/ad.jpg" alt="Advertisement"/>
              </div>
            </aside>

            <Route path="/" exact component={Home}/>
            <Route path="/add/" component={AddPost}/>
            <Route path="/post/" component={Post}/>

          </main>

        </Router>

        <Footer/>
      </div>

    )
  }

}

export default App;
