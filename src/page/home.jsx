import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Button, Box} from '@material-ui/core';
import {styles} from "./home.style"
import {withStyles} from "@material-ui/core"
import {connect} from 'react-redux'
import logo from '../resources/logo.png'
import EmployeeIndex from "./employee/EmployeeIndex";


function Home(props) {
    const styles=props.classes;

    return (
        <React.Fragment>
            <AppBar position="fixed" color="default" className={styles.appBar}>
                <Toolbar>
                    <div className={styles.toolbarTitle}>
                        <img src={logo} alt="" style={{maxHeight:"25px"}}/>
                    </div>
                    <Button color="primary" >{props.user.name}</Button>
                </Toolbar>
            </AppBar>
            <Box mt={2}>
                <EmployeeIndex/>
            </Box>
        </React.Fragment>
    )
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export const mapStateToProps = state => ({
    user:state.users.user
})


export default connect(mapStateToProps)(withStyles(styles)(Home))
