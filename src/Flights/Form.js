import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component {
  state = {
    from: '',
    fromError: '',
    to: '',
    toError: '',
    departureTime: '',
    departureTimeError: '',
    landingTime: '',
    landingTimeError: '',
    price: '',
    priceError: ''
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isValid() {
    let isError = false;
    let errors = {
      fromError: '',
      toError: '',
      departureTimeError: '',
      landingTimeError: '',
      priceError: ''
    };

    if (this.state.from.length === 0) {
      isError = true;
      errors.fromError = 'This field is required';
    }

    if (this.state.to.length === 0) {
      isError = true;
      errors.toError = 'This field is required';
    }

    if (this.state.departureTime.length === 0) {
      isError = true;
      errors.departureTimeError = 'This field is required';
    }

    if (this.state.landingTime.length === 0) {
      isError = true;
      errors.landingTimeError = 'This field is required';
    }

    if (this.state.price.length === 0) {
      isError = true;
      errors.priceError = 'This field is required';
    }

    if (this.state.price < 0) {
      isError = true;
      errors.priceError = 'Price needs to be positive';
    }

    this.setState(errors);

    return isError;
  };

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.isValid();
    if (!isValid) {
      this.props.onSubmit(this.state);
      this.setState({
        from: '',
        fromError: '',
        to: '',
        toError: '',
        departureTime: '',
        departureTimeError: '',
        landingTime: '',
        landingTimeError: '',
        price: '',
        priceError: ''
      });
    }
  };

  render() {
    return (
      <form>
        <TextField
          name="from"
          hintText="From"
          floatingLabelText="From"
          value={this.state.from}
          onChange={e => this.handleChange(e)}
          errorText={this.state.fromError}
          floatingLabelFixed={true}/><br/>
        <TextField
          name="to"
          hintText="To"
          floatingLabelText="To"
          value={this.state.to}
          onChange={e => this.handleChange(e)}
          errorText={this.state.toError}
          floatingLabelFixed={true}/><br/>
        <TextField
          name="departureTime"
          hintText="Departure Time"
          floatingLabelText="Departure Time"
          value={this.state.departureTime}
          onChange={e => this.handleChange(e)}
          errorText={this.state.departureTimeError}
          floatingLabelFixed={true}/><br/>
        <TextField
          name="landingTime"
          hintText="Landing Time"
          floatingLabelText="Landing Time"
          value={this.state.landingTime}
          onChange={e => this.handleChange(e)}
          errorText={this.state.landingTimeError}
          floatingLabelFixed={true}/><br/>
        <TextField
          name="price"
          hintText="Price"
          floatingLabelText="Price"
          value={this.state.price}
          onChange={e => this.handleChange(e)}
          errorText={this.state.priceError}
          floatingLabelFixed={true}/><br/>

        <RaisedButton label="Submit" onClick={e => this.handleSubmit(e)} primary/>
      </form>
    )
  };
}