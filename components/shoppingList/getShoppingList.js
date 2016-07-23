import React from 'react';
import ShoppingList from './shoppingList';

export default function GetShoppingList({ list, ingredientClickHand }) {
    return (
      <ShoppingList list={list} ingredientClickHand={ingredientClickHand} />
    );
}
