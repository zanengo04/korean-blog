import React from 'react'

import FlipCard from './FlipCard'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Main() {
    const classes = useStyles();
    return (
        <main>
            <h1>New to Korean?</h1>

            <div className="startHere">
                <a href="/alphabet">Start here</a>
            </div>
            <div className ="introCard">
                <Card className={classes.root}>
                    <Link to={'/alphabet'}>
                        <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Korean Alphabet"
                            height="140"
                            image={require("./Pages/content/grammar1.png")}
                            title="Korean Alphabet"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                To be
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Jump start your Korean by learning how to read and write
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary" href="/to-be">
                    Learn More
                    </Button>
                </CardActions>
                </Card>
            </div>
            <div className ="introCard">
            <Card className={classes.root}>
                <Link to={'/to-be'}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Grammar 1: 이다"
                        height="140"
                        image={require("./Pages/content/grammar1.png")}
                        title="Grammar 1: 이다"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            To be
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Want to travel to Korea? Learn these words and phrases
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" href="/to-be">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
            <div className ="introCard">
            <Card className={classes.root}>
                <Link to={'/to-be'}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Grammar 1: 이다"
                        height="140"
                        image={require("./Pages/content/grammar1.png")}
                        title="Grammar 1: 이다"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            To be
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            After this lesson you will learn how to say: "I am", "It is", "She is", "They are", etc.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" href="/to-be">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
        </main>
    
    )
}
