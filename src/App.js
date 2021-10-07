import './App.css';
import React, { Component } from 'react'
import Navabar from './components/Navabar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress : 0
  }
  setProgress= (progress) =>{
    this.setState({progress:progress})

  }
  apikey=process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <>
        <Router>
        <LoadingBar
        height = {3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Navabar />
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}  apikey={this.apikey}  heading="Top News" key="gen" pagesize={9} category="general" />
            </Route>
            <Route exact path="/science">
              <News setProgress={this.setProgress}  apikey={this.apikey}   heading="Top News" key="science" pagesize={9} category="science" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress}  apikey={this.apikey}  heading="Top News" key="sports" pagesize={9} category="sports" />
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress}  apikey={this.apikey}   heading="Top News" key="business" pagesize={9} category="business" />
            </Route>
            <Route exact path="/general">
              <News setProgress={this.setProgress}  apikey={this.apikey}   heading="Top News" key="general" pagesize={9} category="general" /> 
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress}  apikey={this.apikey}   heading="Top News" key="technology" pagesize={9} category="technology" /> 
            </Route>
            <Route exact path="/health">
              <News setProgress={this.setProgress}  apikey={this.apikey}   heading="Top News" key="health" pagesize={9} category="health" /> 
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={this.setProgress}  apikey={this.apikey}   heading="Top News" key="entertainment" pagesize={9} category="entertainment" /> 
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}


