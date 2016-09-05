import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './input.scss';

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = { value: this.props.defaultValue };

        this.changeHand = this.changeHand.bind(this);
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            value: newProps.defaultValue
        });
    }

    changeHand(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const { label, id } = this.props;

        return (
          <div className={styles.input}>
            <input
              className={classNames({ [styles.used]: this.state.value })}
              onChange={this.changeHand}
              value={this.state.value}
              id={id}
            />
            <label htmlFor={id}>
              {label}
            </label>
          </div>
        );
    }
}
