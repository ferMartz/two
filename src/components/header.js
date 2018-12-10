import React from 'react'
import { translate } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
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
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },

})

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            lan : 'en'
        }
    }
    render() {
        const { classes } = this.props
        const { t, i18n } = this.props
        const changeLanguage = (e) => {
            console.log(e.target.value)
        i18n.changeLanguage(e.target.value)
        this.setState({lan: e.target.value})
        }
        
        return (
            <AppBar position='static'>
                <Toolbar>
                <IconButton component={Link} to='/' className={classes.menuButton} color='inherit' aria-label='Menu'>
                    <HomeIcon />                    
                </IconButton>
                <Typography variant='h6' color='inherit' className={classes.grow}>
                    {t('Welcome to React.js')}
                </Typography>
                <Button component={Link} to='/about' color='inherit'>{t('About')}</Button>
                {/* <Button onClick={() => changeLanguage('el')} color='inherit'>el</Button>
                <Button onClick={() => changeLanguage('en')} color='inherit'>en</Button> */}
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="lgn-simple">{t('Language')}</InputLabel>
                    <Select
                        value={this.state.lan}
                        onChange={(e)=>changeLanguage(e)}
                        inputProps={{
                        name: 'language',
                        id: 'lng-simple',
                        }}
                    >
                        
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'el'}>Greek</MenuItem>
                        <MenuItem value={'es'}>Spanish</MenuItem>
                        
                    </Select>
                </FormControl>
                </Toolbar>
            </AppBar>
        )
    }
    
}

export default withStyles(styles)(translate('translations')(Header))