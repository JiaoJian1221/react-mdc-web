import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import {
  MDCCheckbox
} from '@material/checkbox';
import * as MDCConstants from '@material/checkbox/constants';
import '@material/checkbox/dist/mdc.checkbox.min.css';

const CHECKBOX = 'mdc-checkbox';

export class Checkbox extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    labelId: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    onChange: () => {}
  }


  componentDidMount() {
    this.checkbox = MDCCheckbox.attachTo(this.root_);
  }

  componentWillUnmount() {
    this.checkbox.destroy();
  }

  render() {
    let {className, indeterminate, ...otherProps} = this.props;
    return (
      <div className={classnames(CHECKBOX, className)}
        ref={ref => this.root_ = ref} {...otherProps}>
        <input type="checkbox"
          ref={ref => {
            this.checkbox_ = ref
            if(ref) {
              ref.indeterminate=indeterminate;
            }
          }}
          className={classnames(`${CHECKBOX}__native-control`, className)} {...otherProps}/>

        <div className={`${CHECKBOX}__background`}>
          <svg version="1.1" className={`${CHECKBOX}__checkmark`} viewBox="0 0 24 24">
            <path className={`${CHECKBOX}__checkmark__path`} fill='none' stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div className={`${CHECKBOX}__mixedmark`} />
        </div>
      </div>
    );
  }
}
