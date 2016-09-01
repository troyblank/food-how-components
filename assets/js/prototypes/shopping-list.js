import React from 'react';
import { renderHtml, print } from '../helpers';

import {
    Button,
    GetShoppingList,
    GotShoppingList }
    from '../../../components/index';

renderHtml(
  <section>
    <GetShoppingList list={[{ name: 'stuff', id: 1234 }, { name: 'and', id: 1235 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
    <Button text={'I am button'} buttonClickHand={() => print('Button clicked.')} />
    <GotShoppingList list={[{ name: 'things', id: 2223 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
  </section>,
    '#shoppingList'
);
