import React from 'react';
import styles from '../helpers/style-fakes';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import ShoppingList from '../../components/shoppingList/shoppingList';
import { IconX } from '../../components/icons';

describe('Shopping List', () => {
    const chance = new Chance();
    const listItem0 = chance.word();
    const listItem1 = chance.word();
    const data = [listItem0, listItem1];

    it('should render a shopping list', () => {
        const wrapper = shallow(<ShoppingList list={data} />);

        const list = wrapper.find('ul');

        assert.equal(list.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = shallow(<ShoppingList list={data} />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles['shopping-list']));
    });

    it('should not render if there is no data', () => {
        const wrapper = shallow(<ShoppingList list={[]} />);
        const list = wrapper.find('ul');

        assert.equal(list.length, 0);
    });

    it('should apply checked styles when specified', () => {
        const wrapper = shallow(<ShoppingList list={data} checked={true} />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles.checked));
    });

    it('should render list elements', () => {
        const wrapper = shallow(<ShoppingList list={data} />);
        const listItems = wrapper.find('li');

        assert.equal(listItems.at(0).text(), listItem0);
        assert.equal(listItems.at(1).text(), listItem1);
    });

    it('should allow rendering of icons', () => {
        const wrapper = shallow(<ShoppingList list={data} icon={<IconX />} />);
        const listItem = wrapper.find('li').at(0);

        assert.isTrue(listItem.contains(
          <IconX />
        ));
    });
});
