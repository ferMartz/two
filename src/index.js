import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import indexRoutes from './routes'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './assets/theme'
import Header from './components/header'


const hist = createBrowserHistory()

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />            
            <Router history={hist}>
                <div>
                    <Header />
                    <Switch>
                        
                        {
                            indexRoutes.map((prop,key) => {
                                return <Route path={prop.path} key={key} component={prop.component} />
                            })
                        }
                    </Switch>
                </div>
            </Router>
        </React.Fragment>        
    </MuiThemeProvider>,
document.getElementById('root')
)


serviceWorker.unregister()
