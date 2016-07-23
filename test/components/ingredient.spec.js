import React from 'react';
import Chance from 'chance';
import sinon from 'sinon';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import Ingredient from '../../components/shoppingList/ingredient';
import { IconX } from '../../components/icons';

describe('Shopping List', () => {
    const chance = new Chance();
    const id = chance.natural();
    const name = chance.word();
    const ingredientClickHand = sinon.spy();

    it('should render a shopping list', () => {
        const wrapper = shallow(<Ingredient name={name} />);

        const item = wrapper.find('li');

        assert.equal(item.length, 1);
        assert.equal(item.text(), name);
    });

    it('should handle being clicked', () => {
        const wrapper = shallow(<Ingredient id={id} ingredientClickHand={ingredientClickHand} />);

        wrapper.find('li').simulate('click');

        assert.isTrue(ingredientClickHand.calledOnce);
        assert.equal(ingredientClickHand.getCall(0).args[0], id);
    });

    it('should allow rendering of icons', () => {
        const wrapper = shallow(<Ingredient icon={<IconX />} />);
        const listItem = wrapper.find('li').at(0);

        assert.isTrue(listItem.contains(
          <IconX />
        ));
    });
});
