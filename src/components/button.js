import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  MDCRipple
} from '@material/ripple';
import {
  MDCIconToggle,
  MDCIconToggleFoundation,
} from '@material/icon-toggle'
import '@material/button/dist/mdc.button.min.css';
import '@material/fab/dist/mdc.fab.min.css';
import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';

const BUTTON = 'mdc-button';
const FA_BUTTON = 'mdc-fab';
const ICON_TOGGLE = 'mdc-icon-toggle';

export class ITButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    accent: PropTypes.bool,
    primary: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: e => {},
  }

  componentDidMount() {
    this.toggle_ = MDCIconToggle.attachTo(this.root_);

    let {onChange} = this.props;
    this.toggle_.listen(MDCIconToggleFoundation.strings.CHANGE_EVENT, onChange);
  }

  componentWillUnmount() {
    this.toggle_.destroy();
  }

  render() {
    let {className, accent, primary, toggleOnIcon, toggleOffIcon, ...otherProps} = this.props;
    return (
      <i className={classnames(ICON_TOGGLE, {
        [`${ICON_TOGGLE}--accent`] : accent,
        [`${ICON_TOGGLE}--primary`] : primary,
      }, 'material-icons', className)} {...otherProps} ref={ref => this.root_=ref}
      data-toggle-on={`{"content": "${toggleOnIcon}"}`}
      data-toggle-off={`{"content": "${toggleOffIcon}"}`}>{toggleOffIcon}</i>
    );
  }
}

export class FAButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  componentDidMount() {
    this.ripple_ = MDCRipple.attachTo(this.root_, {isUnbounded: true});
  }

  componentWillUnmount() {
    this.ripple_.destroy();
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <button className={classnames(FA_BUTTON, className)} {...otherProps} ref={
        ref => this.root_=ref
      }>
        <span className={`${FA_BUTTON}__icon`}>
          {children}
        </span>
      </button>
    );
  }
}

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
    this.ripple_ = MDCRipple.attachTo(this.root_, {isUnbounded: false});
  }

  componentWillUnmount() {
    this.ripple_.destroy();
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
      ref: ref => this.root_ = ref,
      ...otherProps,
    }, children);
  }
}
