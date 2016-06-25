import React from 'react';
import styles from '../helpers/style-fakes';
import { assert } from 'chai';
import { render } from 'enzyme';
import { ShoppingList } from '../../components/index';

describe('Shopping List', () => {
    it('should render a shopping list', () => {
        const wrapper = render(<ShoppingList />);
        const list = wrapper.find('ul');

        assert.equal(list.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = render(<ShoppingList />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles['shopping-list']));
    });

    it('should apply checked styles when specified', () => {
        const wrapper = render(<ShoppingList checked={true} />);
        const list = wrapper.find('ul');

        assert.isTrue(list.hasClass(styles.checked));
    });
});
