import React from 'react';
import styles from './shoppingList.scss';

export default function ShoppingList({ checked }) {
    const classes = [styles['shopping-list']];

    if (checked) {
        classes.push(styles.checked);
    }

    return (
      <ul className={classes.join(' ')}>
        <li>½ tsp cinnamon</li>
      </ul>
    );
}
