import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import autocompleteApi from '../../services/autocompleteApi';

class AutoForm extends Component {
  state = {
    textField: ''
  };

  handleSubmit(e) { 
    e.preventDefault();
    // Add location once selected from drop down (post to /locations)
  }
  
  handleChange({ target }) {
    // Put in fetch request here: https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
    this.setState({ textField: target.value });
    autocompleteApi.getPlace(target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <TextField onChange={this.handleChange.bind(this)} hintText="Search Teashops"/>
        <RaisedButton type="submit" label="Add"/>
      </form>
    );
  }

}

export default AutoForm;