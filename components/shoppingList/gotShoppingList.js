import React from 'react';
import ShoppingList from './shoppingList';

export default function GotShoppingList({ list }) {
    return (
      <ShoppingList list={list} checked={true} />
    );
}
