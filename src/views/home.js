import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import data from '../db.json'

const styles = {
        root : {
            flexGrow: 1,
        },
        container : {
            margin : '64px auto',
            maxWidth : '1280px',
            padding : '2%'            
        }
    }


const Home = ({classes}) => {
    
    return (
         <div className={classes.root}>
           
                <div className={classes.container}>
                    <Typography align='center' variant='h3' children='Material React Starter' gutterBottom />
                    {
                        data.map((item,index) => {
                            return <Typography variant="overline" key={index} children={item.id} gutterBottom /> 
                        })
                    }
                </div>            
        </div>
    )   
}
 
export default withStyles(styles)(Home)