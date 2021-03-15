import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="/yoga.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Workout Videos
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Workout videos and lessons by best Instructors and Trainers
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
        <NavLink to='/meal' style={{color:'black', textDecoration: 'none'}}>
                  <h4>Best Videos</h4>
        </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
}
