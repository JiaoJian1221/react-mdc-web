import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  MDCRipple
} from '@material/ripple';
import "@material/button/dist/mdc.button.min.css";

const BUTTON = 'mdc-button';

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
    this.ripple = MDCRipple.attachTo(this.button, {isUnbounded: false});
  }

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    let {accent, children, className, compact, dense, primary, raised, tag, href, ...otherProps} = this.props;
    return React.createElement(tag ? tag : href ? 'a' : 'button', {
      className: classnames(BUTTON, {
        [`${BUTTON}--accent`] : accent,
        [`${BUTTON}--compact`] : compact,
        [`${BUTTON}--dense`] : dense,
        [`${BUTTON}--primary`] : primary,
        [`${BUTTON}--raised`] : raised,
      }, className),
      ref: ref => this.button = ref,
      ...otherProps,
    }, children);
  }
}

export default Button;
