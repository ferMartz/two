import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { unregister } from './serviceWorker'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import indexRoutes from './routes'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './assets/theme'
import Header from './components/header'
import i18n from './i18n/i18n'


const hist = createBrowserHistory()

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <React.Fragment>
            <CssBaseline />
            <I18nextProvider i18n={i18n}>
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
            </I18nextProvider>
        </React.Fragment>        
    </MuiThemeProvider>,
document.getElementById('root')
)


unregister()
