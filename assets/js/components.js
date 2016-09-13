import React from 'react';
import { renderHtml, print } from './helpers';

import styles from '../sass/demo/styles.scss';

import {
    Button,
    GetShoppingList,
    GotShoppingList,
    NoResultMessage }
    from '../../components/index';
import { IconX, IconInputPlus } from '../../components/icons';

renderHtml(
  <section>
    <h1>Food How Components</h1>

    <hr />
    <h2>Typography</h2>
    <hr />
    <section className={styles.typography}>
      <h1>%heading-primary</h1>
      <p>
        Paragraph text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lacus et enim sagittis cursus. Maecenas ac diam in neque sollicitudin condimentum. Nullam sit amet ullamcorper quam. Donec bibendum felis odio, et accumsan sapien interdum quis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p>
        Nam elementum nulla vitae lorem interdum eleifend. Aliquam auctor a elit et bibendum. Praesent luctus euismod congue. Quisque mattis elit et eros mollis, et dignissim elit scelerisque. Suspendisse porta ornare magna a bibendum. Praesent libero nunc, egestas nec efficitur faucibus, vehicula at mauris.
      </p>
    </section>

    <hr />
    <h2>Button</h2>
    <hr />
    <Button text={'I am button'} buttonClickHand={() => print('Button clicked.')} />

    <hr />
    <h2>Shopping List</h2>
    <hr />
    <GetShoppingList list={[{ name: 'stuff', id: 1234 }, { name: 'and', id: 1235 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
    <GotShoppingList list={[{ name: 'things', id: 2223 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />

    <hr />
    <h2>No Result Message</h2>
    <hr />
    <NoResultMessage headline={'This list is empty'} message={'There is no ingredients on your list, add some to make a shopping list.'} />

    <hr />
    <h2>Icons</h2>
    <hr />
    <ul className={styles.icons}>
      <li>
        <IconX />
      </li>
      <li>
        <IconInputPlus />
      </li>
    </ul>
  </section>,
    '#components'
);
