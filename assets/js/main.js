import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/global.scss';

import { Button, GetShoppingList, GotShoppingList } from '../../components/index';
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
    <h2>Icons</h2>
    <hr />
    <IconX />
  </section>,
    document.querySelector('#main'));
