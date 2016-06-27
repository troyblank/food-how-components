import React from 'react';
import styles from './shoppingList.scss';

export default function ShoppingList({ list, checked }) {
    let i = 0;
    let listItems = [];
    const classes = [styles['shopping-list']];

    if (list) {
        for (i; i < list.length; i++) {
            listItems.push(<li key={i}>{list[i]}</li>);
        }
    }

    if (checked) {
        classes.push(styles.checked);
    }

    return (
      <ul className={classes.join(' ')}>
        {listItems}
      </ul>
    );
}
