import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Footer from './components/layout/Footer'
import Routes from './components/routing/Routes'
import ScrollToTop from './components/layout/ScrollToTop'

// Import the chatbot component
import Chat from './Chat'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './App.css';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token)
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
      <Footer />
      {/* Display the chatbot component in the interface */}
      <Chat />
    </Provider >
  )
}

export default App;