import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Form from './Form'
import Table from './Table'

export default class Flights extends Component {

  state = {
    data: []
  };

  handleSubmit(newData) {
    this.setState({
    data: [...this.state.data, newData]
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}/>
        <Table
          data={this.state.data}
          header={[
          {
            name: 'From',
            prop: 'from'
          }, {
            name: 'To',
            prop: 'to'
          }, {
            name: 'Departure Time',
            prop: 'departureTime'
          }, {
            name: 'Landing Time',
            prop: 'landingTime'
          }, {
            name: 'Price',
            prop: 'price'
          }
        ]}/>
      </div>
    )
  }
}
