import React from 'react';
import styles from './button.scss';

export default function Button({ text, buttonClickHand }) {
    function onClick() {
        buttonClickHand();
    }

    return (
      <button className={styles.button} onClick={onClick}>{text}</button>
    );
}
