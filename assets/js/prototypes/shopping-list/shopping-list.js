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
    <form className={styles.form} >
      <Input label={'Add something'} id={'addIngredient'} />
    </form>
    <GetShoppingList list={[{ text: 'stuff', id: 1234 }, { text: 'and', id: 1235 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
    <Button text={'Clear checked'} buttonClickHand={() => print('Button clicked.')} />
    <GotShoppingList list={[{ text: 'things', id: 2223 }]} ingredientClickHand={(id) => { print(`Ingredient clicked: ${id}`); }} />
  </section>,
    '#shoppingList'
);
