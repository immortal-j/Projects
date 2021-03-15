import React from 'react'
import{ Grid,Button} from '@material-ui/core';
import Profile from './profile1';
import useStyles from './style';

import {NavLink} from 'react-router-dom';
import { Opacity } from '@material-ui/icons';
import Demo from '../MainPage/demo';
import Profile1 from './profile1';
const FitnessTracker = () => {
    const classes = useStyles();
    return (
        <div>
            <Demo />
             <Grid className={classes.grid} container spacing={0} alignItems = 'center' justify = 'center' style={{height:'100vh'}}>
                <Grid item xs={12} sm={4} style={{color:'white',opacity:0.95}}>
                        <Profile1 title="Intake"/>
                </Grid>
                <Grid item xs={12} sm={4} style={{color:'white',opacity:0.95}}>
                        <Profile1 title="Workout"/>
                </Grid>
             </Grid>
        </div>
    )
}
 
export default FitnessTracker

