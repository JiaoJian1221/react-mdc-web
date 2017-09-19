import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as MDC from '@material/ripple';
import "@material/button/dist/mdc.button.min.css";

import * as Utils from './utils';

const ROOT = 'mdc-button';
const ACCENT = `${ROOT}--accent`;
const COMPACT = `${ROOT}--compact`;
const DENSE = `${ROOT}--dense`;
const PRIMARY = `${ROOT}--primary`;
const RAISED = `${ROOT}--raised`;

export class Button extends React.Component {
  static propTypes = {
    accent: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    dense: PropTypes.bool,
    primary: PropTypes.bool,
    raised: PropTypes.bool,
  }

  componentDidMount() {
    this.ripple = MDC.MDCRipple.attachTo(this.button, {isUnbounded: false});
  }

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    let {accent, children, className, compact, dense, primary, raised, tag, href, ...otherProps} = this.props;
    return React.createElement(tag ? tag : href ? 'a' : 'button', {
      className: classnames(ROOT, {
        [ACCENT] : accent,
        [COMPACT] : compact,
        [DENSE] : dense,
        [PRIMARY] : primary,
        [RAISED] : raised,
      }, className),
      ref: ref => this.button = ref,
      ...otherProps,
    }, children);
  }
}

export default Button;
