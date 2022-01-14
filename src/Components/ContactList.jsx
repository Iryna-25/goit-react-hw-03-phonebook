import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className={styles.ul}>
        {this.props.contacts.map(item => (
          <li key={item.id} className={styles.li}>
            {item.name}: {item.number}
            <button
              className={styles.button}
              type="button"
              onClick={() => this.props.onDeleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};