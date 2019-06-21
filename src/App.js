import React from 'react';
import {CssBaseline, Box, AppBar, Toolbar, Button, withStyles} from "@material-ui/core";
import Login from "./page/login/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import api from './lib/Api';
import {connect} from 'react-redux'
import { ACTION } from './reducers/reducerAction';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './lib/Theme'
import Routes from './Routes'
import {styles} from "./shell.style"
import logo from "./resources/logo.png"

class App extends React.Component{
  componentDidMount(){
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
            <AppBar position="fixed" color="default" className={styles.appBar}>
                <Toolbar>
                    <div className={styles.toolbarTitle}>
                        <img src={logo} alt="" style={{maxHeight:"25px"}}/>
                    </div>
                    {/* <Button color="primary" >{props.user && props.user.name}</Button> */}
                </Toolbar>
            </AppBar>
            <Box mt={10}>
              <Route exact path="/login" component={Login}/>
              {Routes.map((val)=>(
                <Route {...val} />  
              ))}
            </Box>
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

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(App));
