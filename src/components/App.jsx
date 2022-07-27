import PhonebookForm from './Phonebook/PhonebookForm';
import React, { Component } from 'react';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const contact = {
      name,
      number,
    };
    contacts.push(contact);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <PhonebookForm
          handleChange={this.handleChange}
          onSubmitForm={this.onSubmitForm}
        />
      </div>
    );
  }
}
