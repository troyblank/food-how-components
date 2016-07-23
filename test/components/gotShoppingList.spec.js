import React from 'react';
import Chance from 'chance';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { GotShoppingList } from '../../components/index';
import { IconX } from '../../components/icons';
import ShoppingList from '../../components/shoppingList/shoppingList';

describe('Got Shopping List', () => {
    const chance = new Chance();
    const listItem0 = { name: chance.word(), id: chance.natural() };
    const listItem1 = { name: chance.word(), id: chance.natural() };
    const ingredientClickHand = sinon.spy();

    it('should render a got shopping list', () => {
        const list = [listItem0, listItem1];
        const wrapper = shallow(<GotShoppingList list={list} ingredientClickHand={ingredientClickHand} />);

        assert.isTrue(wrapper.contains(
          <ShoppingList list={list} checked={true} icon={<IconX />} ingredientClickHand={ingredientClickHand} />
        ));
    });

    it('should not render a got shopping list with no data', () => {
        const wrapper = shallow(<GotShoppingList list={[]} />);
        const list = wrapper.find('ul');

        assert.equal(list.length, 0);
    });
});
