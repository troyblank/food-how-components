import React from 'react';
import styles from './noResultMessage.scss';

export default function NoResultMessage({ headline, message }) {
    if (0 === headline.length && 0 === message.length) {
        return null;
    }

    return (
      <div className={styles['no-result-message']}>
        <h1>{headline}</h1>
        <p>{message}</p>
      </div>
    );
}
