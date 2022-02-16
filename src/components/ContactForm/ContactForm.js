import React from 'react';

import styles from './ContactForm.module.css';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const target = e.currentTarget;
    if (target.name === 'name') {
      this.setState({
        name: target.value,
      });
    } else {
      this.setState({
        number: target.value,
      });
    }
  };

  formHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={styles.ContactForm}>
        <form onSubmit={this.formHandler}>
          <p>
            <label htmlFor="nameField">Name</label>
            <input
              id="nameField"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </p>
          <p>
            <label htmlFor="numderField">Number</label>
            <input
              id="numderField"
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.changeHandler}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </p>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
