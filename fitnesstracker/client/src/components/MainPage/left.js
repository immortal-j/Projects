import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

import {useContext} from 'react';
import {FitnessTrackerContext} from '../../context/context';
import {intakeCategories,workoutCategories,resetCategories} from '../../constants/category';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  resetCategories();
    const{actions} = useContext(FitnessTrackerContext)
    const actionType= actions.filter((t) => t.type ==='Intake');
   
    const categories = 'Intake' ==='Intake' ? intakeCategories : workoutCategories;
 
    actionType.forEach((t) =>{
        const category = categories.find((c) => c.type===t.category)
 
        if(category) {
            category.amount += t.amount
        };
    });
 
    const filteredCategories = categories.filter((c) => c.amount > 0);
    const total = filteredCategories.reduce((acc,currVal) => acc+= currVal.amount*currVal.cal,0);
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBot>
        <h2><FontAwesomeIcon icon={faAppleAlt} size="lg" color="red"/>Intake</h2>
        </Typography>
        <Typography variant="h5" component="h2">
          Consume 3000 Calories
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <divider/>
        <Typography variant="body2" component="p">
          Eating proper diet is very Important
          <br />
          {'"The groundwork of all happiness is health."'}<br/><br/><br/><br/><h1>Consumed</h1>
          <h1 align='center'>{total}/3000</h1>
        </Typography>
      </CardContent>
      {/* <CardActions >
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

