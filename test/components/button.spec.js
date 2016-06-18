import React from 'react';
import styles from '../helpers/style-fakes';
import { assert } from 'chai';
import { render } from 'enzyme';
import { Button } from '../../components/index';

describe('Button', () => {
    it('should render a button', () => {
        const wrapper = render(<Button />);
        const button = wrapper.find('button');

        assert.equal(button.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = render(<Button />);
        const button = wrapper.find('button');

        assert.isTrue(button.hasClass(styles.button));
    });
});
