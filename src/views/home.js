import React from 'react'
import { translate, Trans } from 'react-i18next'
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


const Home = ({classes,t,i18n}) => {
    
    return (
         <div className={classes.root}>
           
                <div className={classes.container}>
                    <Typography align='center' variant='h3' children={t('Declarative')} gutterBottom />
                    <Typography variant='body1' gutterBottom >
                        <Trans>
                            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        </Trans>
                    </Typography>
                     <Typography variant='body1' gutterBottom >
                        <Trans>
                            Declarative views make your code more predictable and easier to debug.
                        </Trans>
                    </Typography>

                    {/* {
                        data.map((item,index) => {
                            return <Typography variant="overline" key={index} children={item.id} gutterBottom /> 
                        })
                    } */}
                </div>            
        </div>
    )   
}
 
export default withStyles(styles)(translate('translations')(Home))