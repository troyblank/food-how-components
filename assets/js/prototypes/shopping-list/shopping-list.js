import React from 'react';
import { renderHtml, print } from '../../helpers';
import styles from './shopping-list.scss';

import {
    Button,
    GetShoppingList,
    GotShoppingList,
    Input }
    from '../../../../components/index';

renderHtml(
  <section className={styles['shopping-list']}>
    <div className={styles.input} >
      <Input label={'Add something'} id={'addIngredient'} />
    </div>
    <GetShoppingList list={[{ name: 'stuff', id: 1234 }, { name: 'and', id: 1235 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
    <Button text={'Clear checked'} buttonClickHand={() => print('Button clicked.')} />
    <GotShoppingList list={[{ name: 'things', id: 2223 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
  </section>,
    '#shoppingList'
);
