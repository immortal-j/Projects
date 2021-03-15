import React,{useState,useContext} from 'react'
import {TextField,Typography,Button,Grid,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'
import useStyles from './Style'
import {FitnessTrackerContext} from '../../../../context/context';
import {v4 as uuidv4 } from 'uuid'
import {intakeCategories,workoutCategories} from '../../../../constants/category';
import formatDate from '../../../../util/formatDate';
import CustomSnackBar from '../../../../SnackBar/SnackBar'
const Form = () => {
    const[open,setOpen] = useState(false);
    const classes = useStyles();
    const{addAction} = useContext(FitnessTrackerContext);
    const initialState ={
        amount:'',
        category:'',
        type:'Intake',
        date:formatDate(new Date())
    }
 
    
    const createAction = () =>{
 
        const action ={...formData, amount:Number(formData.amount),id:uuidv4()}
        setOpen(true)
        addAction(action)
        setFormData(initialState);
}
 
 
    const[formData,setFormData] = useState(initialState);
 
    console.log(formData)
 
    const selectedCategories = formData.type === 'Intake' ? intakeCategories:workoutCategories;
 
    return (
        <Grid container spacing={2}>
            <CustomSnackBar open={open} setOpen={setOpen} />
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value ={formData.type} onChange={(e) => setFormData({...formData,type:e.target.value})}>
                        <MenuItem value="Intake">Intake</MenuItem>
                        <MenuItem value="Workout">Workout</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value ={formData.category} onChange={(e) => setFormData({...formData,category:e.target.value})}>
                    {selectedCategories.map((c) => <MenuItem key ={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value ={formData.amount} onChange={(e) => setFormData({...formData,amount:e.target.value})}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value ={formData.date} onChange={(e) => setFormData({...formData,date:formatDate(e.target.value)})}></TextField>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createAction}>Create</Button>
        </Grid>
    )
}
 
export default Form