import React from 'react';
import ShoppingList from './shoppingList';
import { IconX } from '../icons';

export default function GotShoppingList({ list }) {
    return (
      <ShoppingList list={list} checked={true} icon={<IconX />} />
    );
}
