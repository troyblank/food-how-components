import React from 'react';
import styles from './noResultMessage.scss';

export default function Button({ headline, message }) {
    return (
      <div className={styles['no-result-message']}>
        <h1>{headline}</h1>
        <p>{message}</p>
      </div>
    );
}
