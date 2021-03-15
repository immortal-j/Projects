import React from 'react'
import{ Grid} from '@material-ui/core';
import Demo from './demo';
import Left from './left';
import useStyles from './style';
import Progress from './progress';
import Progress1 from './progress1';
import Right from './right';
import Footer1 from './footer1';
import Footer2 from './footer2';
import Footer3 from './footer3';
const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
        
            
            <Demo/>
            <Grid className={classes.grid} container spacing={0} alignItems = 'top' justify = 'center' >
                <Grid item xs={12} sm={4}>
                       <Left/>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                    <Right/>
                </Grid>
               
              </Grid>
              <Grid className={classes.grid} container spacing={4} alignItems = 'top' justify = 'center' style={{height:'50vh'}}>
              <Grid item xs={12} sm={3}>
                    <Progress/>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Progress1/>
                </Grid>
              </Grid>
              <Grid className={classes.grid} container spacing={3} alignItems = 'bottom' justify = 'center'>
                <Grid item xs={12} sm={3}>
                       <Footer1/>
                </Grid>
                <Grid item xs={12} sm={3}>
                       <Footer2/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Footer3/>
                </Grid>
               
              </Grid>
        </div>
    )
}

export default MainPage
