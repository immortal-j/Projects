import React from 'react'
import{ Grid} from '@material-ui/core';
import Demo from '../MainPage/demo';
import useStyles from './style';
import Footer1 from './footer1';
import Footer2 from './footer2';
import Footer3 from './footer3';
const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
        
            
            <Demo/>
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
