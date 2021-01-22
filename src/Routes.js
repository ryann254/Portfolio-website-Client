import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'



//Own Components
import RouteWithLayout from './RouteWithLayout'
import Homepage from './components/pages/Homepage'
import HeaderAndFooter from './components/layout/HeaderAndFooter'
import {GlobalStyles} from './styles/global'
import {lightTheme} from './styles/theme'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider theme={lightTheme}>
                    <GlobalStyles />
                    <RouteWithLayout path="/" exact component={Homepage} layout={HeaderAndFooter}/>
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;