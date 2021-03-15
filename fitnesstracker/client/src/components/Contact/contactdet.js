import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Rishikesh Joshi
        </Typography>
        <Typography variant="h5" component="h2">
         Contact Details
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Phone Number:+919172159601<br></br>Email:rishikeshjoshi59@gmail.com
        </Typography>
        <Typography variant="body2" component="p">
        <FontAwesomeIcon icon={faGithub} size="2x"/>https://github.com/immortal-j<br/><br/>
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>https://www.linkedin.com/in/rishikesh-joshi-9660931a5/ <br/><br/>
        <FontAwesomeIcon icon={faEnvelopeOpenText } size="2x"/>rishikeshjoshi59@gmail.com<br/>
        </Typography>
      </CardContent>
    </Card>
  );
}
