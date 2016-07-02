import React from 'react';
import { IconX } from '../../components/icons';
import { shallow } from 'enzyme';
import { assert } from 'chai';

function assertIcon(component, title) {
    const wrapper = shallow(component);
    const svg = wrapper.find('svg');
    const titleEle = wrapper.find('title');

    assert.equal(svg.length, 1);
    assert.equal(svg.props().xmlns, 'http://www.w3.org/2000/svg');
    assert.equal(titleEle.text(), title);
}

describe('IconX', () => {
    it('should render the x icon', () => {
        assertIcon(<IconX />, 'X Icon');
    });
});
