import React,{useContext} from 'react'
import {List as MUList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction, Slide, IconButton} from '@material-ui/core'
import {Delete, FitnessCenter} from '@material-ui/icons'
import useStyles from './Style'
import {FitnessTrackerContext} from '../../../../context/context';
const List = () => {
 
    const classes = useStyles();
 
   const {actions,deleteAction} = useContext(FitnessTrackerContext);
    
    // const {actions,deleteAction} = useContext(FitnessTrackerContext);
 
 
 
    return (
        <MUList dense={false} className={classes.list}> 
            {actions.map((action)=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={action.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={action.type === 'Intake' ? classes.avatarIntake:classes.avatarWorkout}>
                                <FitnessCenter/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={action.category} secondary={`${action.amount}- ${action.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => deleteAction(action.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUList>
    )
}
 
export default List