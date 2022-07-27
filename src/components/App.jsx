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
    };

    contacts.forEach(el => {
      if (el.name === name || el.number === number) {
        alert(`${name} is already in contacts!`);
      }
    });
    contacts.push(contact);
    this.setState({
      name: '',
      number: '',
      id: nanoid(),
    });

    e.target.reset();

    console.log(contacts);
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
        {this.state.contacts.map(({ name, number }) => (
          <PhonebookList name={name} number={number} />
        ))}
      </div>
    );
  }
}
