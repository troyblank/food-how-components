import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/global.scss';

import {
    Button,
    GetShoppingList,
    GotShoppingList,
    NoResultMessage }
    from '../../components/index';
import { IconX } from '../../components/icons';

ReactDOM.render(
  <section>
    <h1>Food How Components</h1>
    <h2>Button</h2>
    <hr />
    <Button text={'I am button'} />
    <h2>Shopping List</h2>
    <hr />
    <GetShoppingList list={['stuff', 'and']} />
    <GotShoppingList list={['things']} />
    <h2>No Result Message</h2>
    <hr />
    <NoResultMessage headline={'This list is empty'} message={'There is no ingredients on your list, add some to make a shopping list.'} />
    <h2>Icons</h2>
    <hr />
    <IconX />
  </section>,
    document.querySelector('#main'));
