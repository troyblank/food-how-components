import React from 'react';
import styles from '../helpers/style-fakes';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { Button } from '../../components/index';

describe('Button', () => {
    const chance = new Chance();
    const buttonText = chance.word();

    it('should render a button', () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find('button');

        assert.equal(button.length, 1);
    });

    it('should apply styles', () => {
        const wrapper = shallow(<Button />);
        const button = wrapper.find('button');

        assert.isTrue(button.hasClass(styles.button));
    });

    it('should render text', () => {
        const wrapper = shallow(<Button text={buttonText} />);
        const button = wrapper.find('button');

        assert.equal(button.text(), buttonText);
    });
});
