import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Flights extends Component {
  render () {
    return (
      <div>
        <h1>Такой страницы не существует. Вернуться на <Link to='/'>главную.</Link></h1>
      </div>
    )
  }
}
