import React from 'react';
import styles from '../helpers/style-fakes';
import Chance from 'chance';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import ShoppingList from '../../components/shoppingList/shoppingList';
import Ingredient from '../../components/shoppingList/ingredient';
import { IconX } from '../../components/icons';

describe('Shopping List', () => {
    const chance = new Chance();
    const listItem0 = { text: chance.word(), id: chance.natural() };
    const listItem1 = { text: chance.word(), id: chance.natural() };
    const data = [listItem0, listItem1];
    const ingredientClickHand = sinon.spy();

    it('should render a shopping list', () => {
        const wrapper = shallow(<ShoppingList list={data} ingredientClickHand={ingredientClickHand} icon={<IconX />} />);

        assert.isTrue(wrapper.contains(
          <ul className={styles['shopping-list']}>
            <Ingredient id={listItem0.id} ingredientClickHand={ingredientClickHand} icon={<IconX />} name={listItem0.text} />
            <Ingredient id={listItem1.id} ingredientClickHand={ingredientClickHand} icon={<IconX />} name={listItem1.text} />
          </ul>
        ));
    });

    it('should apply styles', () => {
        const wrapper = shallow(<ShoppingList list={data} ingredientClickHand={ingredientClickHand} />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles['shopping-list']));
    });

    it('should not render if there is no data', () => {
        const wrapper = shallow(<ShoppingList list={[]} />);
        const list = wrapper.find('ul');

        assert.equal(list.length, 0);
    });

    it('should apply checked styles when specified', () => {
        const wrapper = shallow(<ShoppingList list={data} checked={true} ingredientClickHand={ingredientClickHand} />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles.checked));
    });
});
