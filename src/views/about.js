import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import data from '../db.json'

const styles = {
        root : {
            margin : '5%'
        }
    }


const About = ({classes}) => {
    
    return (
         <div className={classes.root}>
            <Typography variant='h3' children='About page' gutterBottom />
            
        </div>
    )   
}
 
export default withStyles(styles)(About)