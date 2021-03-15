import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {useContext} from 'react';
import {FitnessTrackerContext} from '../../context/context';
import {intakeCategories,workoutCategories,resetCategories} from '../../constants/category';

function CircularProgressWithLabel(props) {
    

    //circular
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} size={200} color={'secondary'}/>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={1}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" component="div" color="error" >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
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
//   const [progress, setProgress] = React.useState(10);


  return <CircularProgressWithLabel value={(total*100)/3000} />;
}

