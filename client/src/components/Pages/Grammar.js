import React from 'react';
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
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className ="grammarCard">
            <Card className={classes.root}>
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className ="grammarCard">
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="Grammar 1: 이다"
                height="140"
                image={require("./content/grammar3.png")}
                title="Grammar 1: 이다"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>
        <div className ="grammarCard">
            <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                component="img"
                alt="Grammar 1: 이다"
                height="140"
                image={require("./content/grammar4.png")}
                title="Grammar 1: 이다"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Gr
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
        </div>

    </main>
  );
}