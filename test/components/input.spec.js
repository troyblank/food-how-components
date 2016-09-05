import React from 'react';
import styles from '../helpers/style-fakes';
import Chance from 'chance';
import { assert } from 'chai';
import { shallow, mount } from 'enzyme';
import { Input } from '../../components/index';

describe('Input', () => {
    const chance = new Chance();
    const defaultValue = chance.word();
    const label = chance.word();
    const id = chance.word();

    it('should render', () => {
        const wrapper = shallow(
          <Input label={label} id={id} />
        );

        const changeHand = wrapper.instance().changeHand;
        const value = wrapper.instance().state.value;

        assert.isTrue(wrapper.contains(
          <div className={styles.input}>
            <input
              className=""
              onChange={changeHand}
              value={value}
              id={id}
            />
            <label htmlFor={id}>
              {label}
            </label>
          </div>
        ));
    });

    it('should set the value of the input if a term is given in props', () => {
        const wrapper = shallow(
          <Input label={label} defaultValue={defaultValue} />
        );

        assert.equal(wrapper.find('input').props().value, defaultValue);
    });

    it('should update the value of the input if props change', () => {
        const wrapper = mount(
          <Input label={label} id={id} defaultValue={defaultValue} />
        );

        const newValue = chance.word();
        wrapper.setProps({ defaultValue: newValue });

        assert.equal(wrapper.find('input').props().value, newValue);
    });

    it('should add the `used` class to the input if value is set', () => {
        const wrapper = shallow(
          <Input label={label} defaultValue={defaultValue} />
        );

        const input = wrapper.find('input');
        assert.equal(input.props().className, `${styles.used}`);
    });

    it('should remove the `used` class to the input if the value is removed', () => {
        const wrapper = mount(
          <Input label={label} defaultValue={defaultValue} />
        );

        const input = wrapper.find('input');

        input.simulate('change', {
            target: {
                value: ''
            }
        });

        assert.equal(input.props().className, '');
    });

    it('should render a label for the input', () => {
        const wrapper = shallow(
          <Input label={label} id={id} />
        );

        const labelEle = wrapper.find('label');
        assert.equal(labelEle.props().htmlFor, id);
        assert.equal(labelEle.text(), label);
    });
});
