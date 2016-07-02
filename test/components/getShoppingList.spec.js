import React from 'react';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { GetShoppingList } from '../../components/index';
import ShoppingList from '../../components/shoppingList/shoppingList';

describe('Get Shopping List', () => {
    const chance = new Chance();
    const listItem0 = chance.word();
    const listItem1 = chance.word();

    it('should render a get shopping list', () => {
        const list = [listItem0, listItem1];
        const wrapper = shallow(<GetShoppingList list={list} />);

        assert.isTrue(wrapper.contains(
          <ShoppingList list={list} />
        ));
    });
});
