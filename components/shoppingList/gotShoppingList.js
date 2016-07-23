import React from 'react';
import ShoppingList from './shoppingList';
import { IconX } from '../icons';

export default function GotShoppingList({ list, ingredientClickHand }) {
    return (
      <ShoppingList list={list} checked={true} icon={<IconX />} ingredientClickHand={ingredientClickHand} />
    );
}
