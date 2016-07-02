import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/global.scss';

import { Button, GetShoppingList, GotShoppingList } from '../../components/index';

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
  </section>,
    document.querySelector('#main'));
