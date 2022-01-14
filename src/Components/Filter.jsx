import styles from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter}>
    <h3 className={styles.title}> Find contact by name</h3>
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;