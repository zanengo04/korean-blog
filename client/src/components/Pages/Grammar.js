import React from 'react';
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
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <main>
        <div className ="grammarCard">
            <Card className={classes.root}>
                <Link to={'/to-be'}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Grammar 1: 이다"
                        height="140"
                        image={require("./content/grammar1.png")}
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
        <div className ="grammarCard">
            <Card className={classes.root}>
            <Link to={'./as-well'}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Grammar 2: 도"
                    height="140"
                    image={require("./content/grammar2.png")}
                    title="Grammar 2: 도"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        As well
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Learn how to agree to an expression or somebody's opinion.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" href="/as-well">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className ="grammarCard">
            <Card className={classes.root}>
            <Link to={'/like'}> 
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Grammar 3: 좋다"
                    height="140"
                    image={require("./content/grammar3.png")}
                    title="Grammar 3: 좋다"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        To like
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Learn how to express your affection towards an object or someone.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" href='/like'>
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className ="grammarCard">
            <Card className={classes.root}>
            <Link to={'/to-have'}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Grammar 4: 있다"
                    height="140"
                    image={require("./content/grammar4.png")}
                    title="Grammar 4: 있다"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        To have
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Learn how to say you have something, or to express an existence of something.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary" href={'/to-have'}>
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>

    </main>
  );
}