import React, {useState} from 'react'

import { TextField, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    textStyle : {
        width: '100%',
    }
})
export default function Comment() {
    const [comment, setComment] = useState('')
    const classes = useStyles();

    const handleSubmit= (e) => {
        e.preventDefault();
        fetch('/comment', { 
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              comment: comment,
            })
          })
          .then(res =>  res.json())
          .then(body => console.log(body));
      }
    return (
        <div style={{width: '800px', height:'300px', margin:'auto', marginTop:'50px'}}>
            <TextField 
                id="filled-basic" 
                label="Comment" 
                variant="outlined"
                multiline
                rows={4}
                className={classes.textStyle}
                name="comment"
                onChange={e => setComment(e.target.value)}
            />
            <Button 
                variant="outlined"
                onClick={handleSubmit}
            >Default</Button>
        </div>
    )
}
