import React, { Component } from 'react';
import DisplayContainer from './components/DisplayContainer';
import MarkDownEditor from './components/MarkDownEditor';
var marked = require('marked');

class MarkdownPreviewer extends Component {
  constructor(){
    super();
    this.state = {
      convertedMarkdownText: "* apples \n * banana",
      title: 'Blog Title'
    }
     this.changeMarkup = this.changeMarkup.bind(this);
     this.changeTitle = this.changeTitle.bind(this);
  }
  changeMarkup(modifiedText){
    this.setState({
      convertedMarkdownText: modifiedText
    })
  }
  changeTitle(newTitle){
    this.setState({
      title: newTitle
    })
  }

  render() {
    return (
      <div className="App">
        <MarkDownEditor text={this.state.convertedMarkdownText} changeMarkup={this.changeMarkup} changeTitle={this.changeTitle}/>
        <DisplayContainer newText={this.state.convertedMarkdownText} title={this.state.title}/>

      </div>
    );
  }
}

export default MarkdownPreviewer;
//<span dangerouslySetInnerHTML={this.rawMarkup(this.state.convertedMarkdownText)} />
/*
rawMarkup(value){
  var rawMarkup = marked(value, {sanitize: true});
  return{__html: rawMarkup };
}


*/
