import React from 'react';
import styles from '../helpers/style-fakes';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { NoResultMessage } from '../../components/index';

describe('No Result Message', () => {
    const chance = new Chance();
    const headline = chance.word();
    const message = chance.word();

    it('should render a shopping list', () => {
        const wrapper = shallow(<NoResultMessage headline={headline} message={message} />);
        const divWrapper = wrapper.find('div');
        const header = wrapper.find('h1');
        const paragraph = wrapper.find('p');

        assert.isTrue(divWrapper.hasClass(styles['no-result-message']));
        assert.equal(header.text(), headline);
        assert.equal(paragraph.text(), message);
    });

    it('should not render if there is no text', () => {
        const wrapper = shallow(<NoResultMessage headline={''} message={''} />);
        const divWrapper = wrapper.find('div');

        assert.equal(divWrapper.length, 0);
    });
});
