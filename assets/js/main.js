import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/global.scss';

import { Button, ShoppingList } from '../../components/index';

ReactDOM.render(
  <section>
    <h1>Food How Components</h1>
    <h2>Button</h2>
    <hr />
    <Button text={'I am button'} />
    <h2>Shopping List</h2>
    <hr />
    <ShoppingList list={['stuff', 'and']} />
    <ShoppingList list={['things']} checked={true} />
  </section>,
    document.querySelector('#main'));
