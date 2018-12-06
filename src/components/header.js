import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'

import { theme } from '../assets/theme'

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    button : {
        margin : theme.spacing.unit
    }

})

const Header = ({classes}) => {
    return (
        <AppBar position='static'>
            <Toolbar>
            <IconButton component={Link} to='/' className={classes.menuButton} color='inherit' aria-label='Menu'>
                <HomeIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.grow}>
                
            </Typography>
            <Button component={Link} to='/about' color='inherit'>About</Button>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Header)