import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/style.scss';

import {
    Button,
    GetShoppingList,
    GotShoppingList,
    NoResultMessage }
    from '../../components/index';
import { IconX } from '../../components/icons';

function print(value) {
    // For demo purposes only.
    /* eslint-disable no-console */
    console.log(value);
    /* eslint-enable no-console */
}

ReactDOM.render(
  <section>
    <h1>Food How Components</h1>
    <h2>Button</h2>
    <hr />
    <Button text={'I am button'} />
    <h2>Shopping List</h2>
    <hr />
    <GetShoppingList list={[{ name: 'stuff', id: 1234 }, { name: 'and', id: 1235 }]} ingredientClickHand={(id) => { print(id); }} />
    <GotShoppingList list={[{ name: 'things', id: 2223 }]} ingredientClickHand={(id) => { print(id); }} />
    <h2>No Result Message</h2>
    <hr />
    <NoResultMessage headline={'This list is empty'} message={'There is no ingredients on your list, add some to make a shopping list.'} />
    <h2>Icons</h2>
    <hr />
    <IconX />
  </section>,
    document.querySelector('#main'));
