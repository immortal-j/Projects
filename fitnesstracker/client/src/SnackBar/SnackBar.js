import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './style';
const CustomSnackBar = ({open,setOpen}) =>{
const classes = useStyles();
const handelClose = () =>{
setOpen(false)
}
return(
<div className={classes.root}>
<Snackbar
anchorOrigin={{vertical:'top' ,horizontal:'right'}}
open={open}
autoHideDuration={3000}
onClose={handelClose}
>
<MuiAlert onClose={handelClose} severity="success" elevation={6} variant="filled">
Transaction Succesfully Created
</MuiAlert>
</Snackbar>
</div>
)
}
export default CustomSnackBar;