import React from 'react';
import styles from './button.scss';

export default function Button({ text }) {
    return (
      <button className={styles.button}>{text}</button>
    );
}
