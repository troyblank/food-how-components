import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/global.scss';

import { Button, ShoppingList } from '../../components/index';

ReactDOM.render(
  <section>
    <h1>Food How Components</h1>
    <h2>Button</h2>
    <hr />
    <Button />
    <h2>Shopping List</h2>
    <hr />
    <ShoppingList />
    <ShoppingList checked={true} />
  </section>,
    document.querySelector('#main'));
