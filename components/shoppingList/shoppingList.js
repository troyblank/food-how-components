import React from 'react';
import Ingredient from './ingredient';
import classNames from 'classnames';
import styles from './shoppingList.scss';

export default function ShoppingList({ list, checked, icon, ingredientClickHand }) {
    let i = 0;
    let listItems = [];

    if (!list || 0 === list.length) {
        return null;
    }

    for (i; i < list.length; i++) {
        const node = list[i];
        const id = node.id;
        listItems.push(<Ingredient key={id} id={id} ingredientClickHand={ingredientClickHand} icon={icon} name={node.name} />);
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
