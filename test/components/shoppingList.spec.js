import React from 'react';
import styles from '../helpers/style-fakes';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { ShoppingList } from '../../components/index';

describe('Shopping List', () => {
    const chance = new Chance();
    const listItem0 = chance.word();
    const listItem1 = chance.word();

    it('should render a shopping list', () => {
        const wrapper = shallow(<ShoppingList />);
        const list = wrapper.find('ul');

        assert.equal(list.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = shallow(<ShoppingList />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles['shopping-list']));
    });

    it('should apply checked styles when specified', () => {
        const wrapper = shallow(<ShoppingList checked={true} />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles.checked));
    });

    it('should render list elements', () => {
        const wrapper = shallow(<ShoppingList list={[listItem0, listItem1]} />);
        const listItems = wrapper.find('li');

        assert.equal(listItems.at(0).text(), listItem0);
        assert.equal(listItems.at(1).text(), listItem1);
    });
});
