import React from 'react'
import{ Grid,Button} from '@material-ui/core';
import CardLayout from './CardLayout/CardLayout';
import useStyles from './style';
import Middle from './Middle/Middle'
import {NavLink} from 'react-router-dom';
import { Opacity } from '@material-ui/icons';
import Demo from '../MainPage/demo';
const FitnessTracker = () => {
    const classes = useStyles();
    return (
        <div>
            <Demo />
             <Grid className={classes.grid} container spacing={0} alignItems = 'center' justify = 'center' style={{height:'100vh'}}>
                <Grid item xs={12} sm={4} style={{color:'white',opacity:0.85}}>
                        <CardLayout title="Intake"/>
                </Grid>
                <Grid item xs={12} sm={3} style={{color:'white',opacity:0.95}}>
                        <Middle/>
                </Grid>
                <Grid item xs={12} sm={4} style={{color:'white',opacity:0.85}}>
                    <CardLayout title="Workout"/>
                </Grid>
             </Grid>
        </div>
    )
}
 
export default FitnessTracker

