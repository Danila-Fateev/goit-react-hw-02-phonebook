import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import PhonebookForm from './Phonebook/PhonebookForm';
import PhonebookList from './Phonebook/PhonebookList';
import PhonebookFilter from './Phonebook/PhonebookFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { contacts } = this.state;

    const submitContactName = e.currentTarget.elements.name.value;
    const submitContactNumber = e.currentTarget.elements.number.value;

    const contact = {
      name: submitContactName,
      number: submitContactNumber,
      id: nanoid(),
    };

    if (
      !contacts.find(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      e.target.reset();
      this.setState({
        contacts: [contact, ...contacts],
      });
      return;
    }
    e.target.reset();
    alert(
      `You already have contact with name '${contact.name}' or number '${contact.number}'`
    );
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterListByName = e => {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  deleteContact = e => {
    const itemID = e.target.parentNode.id;
    const itemFiltered = this.state.contacts.filter(el => el.id === itemID);
    const contactIndex = this.state.contacts.indexOf(...itemFiltered);
    const listContacts = this.state.contacts;
    listContacts.splice(contactIndex, 1);

    this.setState({
      contacts: listContacts,
    });
  };

  render() {
    const filteredItems = this.filterListByName();

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <PhonebookForm onSubmitForm={this.onSubmitForm} />
        <h2>Contacts</h2>
        <PhonebookFilter
          changeFilter={this.changeFilter}
          value={this.state.filter}
        />

        <PhonebookList
          filteredItems={filteredItems}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
