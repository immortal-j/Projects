import React from 'react'
import{Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
const Middle = () => {
    return (
        <div>
            <Card>
                <CardHeader style={{textAlign:'center',fontWeight:'bold'}} variant="h1" title='Fitness Tracker' subheader="Built with React" />
                <CardContent>
                    <Divider/>
                    <Form/>
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
 
export default Middle