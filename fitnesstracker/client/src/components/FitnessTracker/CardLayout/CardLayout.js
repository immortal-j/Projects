import React,{useContext} from 'react'
import{Card,CardHeader,CardContent,Typography,Dialog,DialogContent,DialogTitle,TableContainer,Table,TableBody,Paper, TableHead,TableRow,TableCell} from '@material-ui/core';
import useStyles from './style';
import {Doughnut,Line,Bar} from 'react-chartjs-2'
import {FitnessTrackerContext} from '../../../context/context';
import {intakeCategories,workoutCategories,resetCategories} from '../../../constants/category';
import Passval from '../../MainPage/progress'
const CardLayout = ({title}) => {
 
    const classes =useStyles();
    resetCategories();
    const{actions} = useContext(FitnessTrackerContext)
    const actionType= actions.filter((t) => t.type ===title);
   
    const categories = title ==='Intake' ? intakeCategories : workoutCategories;
 
    actionType.forEach((t) =>{
        const category = categories.find((c) => c.type===t.category)
 
        if(category) {
            category.amount += t.amount
        };
    });
 
    const filteredCategories = categories.filter((c) => c.amount > 0);
 
    const charData ={
        datasets:[
            {
                data:filteredCategories.map((c) =>c.amount*c.cal),
                backgroundColor:filteredCategories.map((c) =>c.color),
            }
        ],
        labels:filteredCategories.map((c) =>c.type),
    };
    
    const charData1 ={
        datasets:[
            {
                label:'Calorie Data',
                data:filteredCategories.map((c) =>c.amount*c.cal),
                borderColor : ['rgba(255,206,86,0.2)'],
                backgroundColor : ['rgba(255,204,0)'],
                pointBackgroundColor : ['rgba(0,206,86,0.2)'],
                pointBorderColor : ['rgba(255,206,86,0.2)'],
                
            }
        ],
        labels:actions.map((c) =>c.date),
 
    };
 
    const charData2 ={
        datasets:[
            {
                label:filteredCategories.map((c) =>c.type),
                data:filteredCategories.map((c) =>c.amount*c.cal),
                backgroundColor:filteredCategories.map((c) =>c.color),
            }
        ],
        labels:actions.map((c) =>c.date),
 
    }
 
    const total = filteredCategories.reduce((acc,currVal) => acc+= currVal.amount*currVal.cal,0);
 
    const [open, setOpen] = React.useState(false);
 
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };
    return (
        <div>
            { <Dialog maxWidth={'sm'} fullWidth={true} style={{width:'1500',height:'1500'}} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Complete {title} Details
                </DialogTitle>
                <DialogContent dividers>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Type of {title}</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Total Calories</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {filteredCategories.map((c) => (
                            <TableRow key={c.color}>
                            <TableCell component="th" scope="row">
                                {c.type}
                            </TableCell>
                            <TableCell align="right">{c.cal}</TableCell>
                            <TableCell align="right">{c.amount}</TableCell>
                            <TableCell align="right">{c.amount*c.cal}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                            <Line data={charData1}/>
                            <Bar data={charData2}/>
                </DialogContent>
            </Dialog> }
            <Card className={title==='Intake'?classes.intake:classes.workout}>
                <CardHeader title={title} onClick={handleClickOpen} />
                <CardContent>
                    <Typography>{title} Count : {total} Calorie</Typography>
                    {/* Doughnut Chart */}
                    <Doughnut data={charData}/>
                </CardContent>
            </Card>
        </div>
    )
}
 
export default CardLayout

