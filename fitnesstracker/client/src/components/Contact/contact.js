import React from 'react'
import{ Grid} from '@material-ui/core';
import Demo from '../MainPage/demo';
import Contactdet from './contactdet';
import useStyles from './style';
const MainPage = () => {
    const classes = useStyles();
    return (
        <div>
        
            
            <Demo/>
            <Grid className={classes.grid} container spacing={0} alignItems = 'top' justify = 'center' >
                <Grid item xs={12} sm={4}>
                       <Contactdet/>
                </Grid>
            </Grid>
              
        </div>
    )
}

export default MainPage