import React from 'react';
import classNames from 'classnames';
import styles from './shoppingList.scss';

export default function ShoppingList({ list, checked, icon }) {
    let i = 0;
    let listItems = [];

    if (list) {
        for (i; i < list.length; i++) {
            listItems.push(<li key={i}>{icon}{list[i]}</li>);
        }
    }

    return (
      <ul
        className={classNames(styles['shopping-list'], {
            [styles.checked]: checked
        })}
      >
        {listItems}
      </ul>
    );
}
