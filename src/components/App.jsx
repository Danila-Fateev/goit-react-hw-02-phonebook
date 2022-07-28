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
    if (!contacts.find(el => el.name === contact.name)) {
      contacts.push(contact);
      console.log(contacts);
      e.target.reset();
      return;
    }
    e.target.reset();
    alert(`${contact.name} is already in contacts`);
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
