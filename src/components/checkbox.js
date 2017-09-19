import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import * as MDC from '@material/checkbox';
import * as Anim from '@material/animation';

import '@material/checkbox/dist/mdc.checkbox.min.css';

import * as Utils from './utils';

const ROOT = 'mdc-checkbox';
const NATIVE_CONTROL = `${ROOT}__native-control`;
const BACKGROUND = `${ROOT}__background`;
const CHECKMARK = `${ROOT}__checkmark`;
const CHECKMARK_PATH = `${CHECKMARK}__path`;
const MIXEDMARK = `${ROOT}__mixedmark`;

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
    this.checkbox = MDC.MDCCheckbox.attachTo(this.root_);
  }

  componentWillUnmount() {
    this.checkbox.destroy();
  }

  render() {
    let {className, indeterminate, ...otherProps} = this.props;
    return (
      <div className={classnames(ROOT, className)}
        ref={ref => this.root_ = ref} {...otherProps}>
        <input type="checkbox"
          ref={ref => {
            this.checkbox_ = ref
            if(ref) {
              ref.indeterminate=indeterminate;
            }
          }}
          className={classnames(NATIVE_CONTROL, className)} {...otherProps}/>

        <div className={BACKGROUND}>
          <svg version="1.1" className={CHECKMARK} viewBox="0 0 24 24">
            <path className={CHECKMARK_PATH} fill='none' stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
          </svg>
          <div className={MIXEDMARK} />
        </div>
      </div>
    );
  }
}
