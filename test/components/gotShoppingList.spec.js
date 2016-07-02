import React from 'react';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { GotShoppingList } from '../../components/index';
import { IconX } from '../../components/icons';
import ShoppingList from '../../components/shoppingList/shoppingList';

describe('Got Shopping List', () => {
    const chance = new Chance();
    const listItem0 = chance.word();
    const listItem1 = chance.word();

    it('should render a got shopping list', () => {
        const list = [listItem0, listItem1];
        const wrapper = shallow(<GotShoppingList list={list} />);

        assert.isTrue(wrapper.contains(
          <ShoppingList list={list} checked={true} icon={<IconX />} />
        ));
    });
});
