import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Login from "./page/login/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home from './page/home';
import api from './lib/Api';
import {Interceptor} from './lib/Networking'
import {connect} from 'react-redux'
import { ACTION } from './reducers/reducerAction';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './lib/Theme'

class App extends React.Component{
  componentDidMount(){
    Interceptor();
    api.get_user_details().then(res=>{
      this.props.currentUser(res)
    })
  }

  render(){
    return (
      <Router>
        <ThemeProvider theme={Theme}>
          <div className="App">
            <CssBaseline/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={home}/>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  user:state.users
})

export const mapDispatchToProps = (dispatch)=> {
  return {
      currentUser:(value)=>{
        dispatch({type:ACTION.SET,value:value})
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
