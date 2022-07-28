import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';

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
      id: nanoid(),
    };
    contacts.push(contact);
    e.target.reset();

    console.log(contacts);
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <PhonebookForm
          handleChange={this.handleChange}
          onSubmitForm={this.onSubmitForm}
        />
        {this.state.contacts.map(({ name, number, id }) => (
          <PhonebookList key={id} name={name} number={number} />
        ))}
      </div>
    );
  }
}
