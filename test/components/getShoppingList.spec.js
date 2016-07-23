import React from 'react';
import Chance from 'chance';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { GetShoppingList } from '../../components/index';
import ShoppingList from '../../components/shoppingList/shoppingList';

describe('Get Shopping List', () => {
    const chance = new Chance();
    const listItem0 = { name: chance.word(), id: chance.natural() };
    const listItem1 = { name: chance.word(), id: chance.natural() };
    const ingredientClickHand = sinon.spy();

    it('should render a get shopping list', () => {
        const list = [listItem0, listItem1];
        const wrapper = shallow(<GetShoppingList list={list} ingredientClickHand={ingredientClickHand} />);

        assert.isTrue(wrapper.contains(
          <ShoppingList list={list} ingredientClickHand={ingredientClickHand} />
        ));
    });

    it('should not render a get shopping list with no data', () => {
        const wrapper = shallow(<GetShoppingList list={[]} />);
        const list = wrapper.find('ul');

        assert.equal(list.length, 0);
    });
});
