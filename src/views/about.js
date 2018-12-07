import React from 'react'
import { translate } from 'react-i18next'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
// import data from '../db.json'

const styles = {
        root : {
            margin : '5%'
        }
    }


const About = ({classes,t}) => {
    
    return (
         <div className={classes.root}>
            <Typography variant='h3' children={t('About page')} gutterBottom />
            
        </div>
    )   
}
 
export default withStyles(styles)(translate('translations')(About))