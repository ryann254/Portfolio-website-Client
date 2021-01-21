import React from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'



//Own Components
import RouteWithLayout from './RouteWithLayout'
import Homepage from './components/pages/Homepage'
import HeaderAndFooter from './components/layout/HeaderAndFooter'
import {GlobalStyles} from './styles/global'
import {useThemeContext} from './context/themeContext'
import {lightTheme, darkTheme} from './styles/theme'


function Routes() {
  const theme = useThemeContext()

    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                    <GlobalStyles />
                    <RouteWithLayout path="/" exact component={Homepage} layout={HeaderAndFooter}/>
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;