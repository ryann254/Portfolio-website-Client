import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'



//Own Components
import RouteWithLayout from './RouteWithLayout'
import Homepage from './components/pages/Homepage/Homepage'
import HeaderAndFooter from './components/layout/HeaderAndFooter'
import {GlobalStyles} from './styles/global'
import {lightTheme} from './styles/theme'
import Status from './components/pages/Status/Status'
import FAQ from './components/pages/FAQ/FAQ'
import ContactForm from './components/pages/Contact/ContactForm'
import About from './components/pages/About/About'
import EventsPage from './components/pages/EventsPage'
import SingleEventPage from './components/pages/EventsPage/SingleEventPage'
import NewsPage from './components/pages/NewsPage'
import JobsPage from './components/pages/JobsPage'
import Donation from './components/pages/Donation'
import SuccessPage from './components/pages/Donation/success'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <ThemeProvider theme={lightTheme}>
                    <GlobalStyles />
                    {/* Setting the default route to '/home' */}
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>

                    <RouteWithLayout path="/home" exact component={Homepage} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/status" exact component={Status} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/events." exact component={EventsPage} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/news-page" exact component={NewsPage} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/events-page" exact component={SingleEventPage} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/jobs-page" exact component={JobsPage} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/faq" exact component={FAQ} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/contact" exact component={ContactForm} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/about" exact component={About} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/donation" exact component={Donation} layout={HeaderAndFooter}/>
                    <RouteWithLayout path="/success" exact component={SuccessPage} layout={HeaderAndFooter}/>
                </ThemeProvider>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;