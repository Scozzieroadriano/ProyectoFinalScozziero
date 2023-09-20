import React from 'react';
import styles from './Field.module.css';

const Field = ({ label, name, onChange }) => {
  return (
    <div className={`form-group ${styles.formControl}`}>
      <label className={styles.label}>{label}</label>
      <input name={name} type="text" onChange={onChange} />
    </div>
  );
};

export default Field;