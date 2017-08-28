import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flights from './Flights/Flights'
import Login from './Login/Login'
import PageNotFound from './PageNotFound/PageNotFound'
import { Switch, Route} from 'react-router-dom'

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <main>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/flights' component={Flights}/>
            <Route path='*' component={PageNotFound}/>
          </Switch>
        </main>
      </MuiThemeProvider>
    )
  }
}