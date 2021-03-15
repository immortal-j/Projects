import React from 'react'
import{ Grid} from '@material-ui/core';
import Demo from '../MainPage/demo';
import useStyles from './style';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
        
            
            <Demo/>
              <Grid className={classes.grid} container spacing={3} alignItems = 'bottom' justify = 'center'>
                <Grid item xs={12} sm={3}>
                       <Ex1/>
                </Grid>
                <Grid item xs={12} sm={3}>
                       <Ex2/>
                </Grid>
                <Grid item xs={12} sm={3}>
                       <Ex3/>
                </Grid>
               
              </Grid>
        </div>
    )
}

export default MainPage
