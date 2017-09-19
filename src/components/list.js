import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import * as MDC from '@material/toolbar';
import * as MDCRipple from '@material/ripple';

import '@material/list/dist/mdc.list.min.css';

import Icon from './icon';

const LIST = 'mdc-list';
const DIVIDER = `${LIST}-divider`;
const GROUP = `${LIST}-group`;
const GROUP_SUBHEADER = `${GROUP}__subheader`;
const DENSE = `${LIST}--dense`;
const TWO_LINE = `${LIST}--two-line`;
const AVATAR = `${LIST}--avatar-list`;
const ITEM = `${LIST}-item`;
const ITEM_TEXT = `${ITEM}__text`;
const ITEM_TEXT_2 = `${ITEM_TEXT}__secondary`;
const ITEM_END = `${ITEM}__end-detail`;
const ITEM_START = `${ITEM}__start-detail`;

export class ListDivider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return <hr className={classnames(className, DIVIDER)} {...otherProps}/>;
  }
}

export class ListGroupSubheader extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return <h3 className={classnames(className, GROUP_SUBHEADER)} {...otherProps}>{children}</h3>;
  }
}

export class ListGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return <div className={classnames(className, GROUP)} {...otherProps}>{children}</div>;
  }
}

export class List extends React.Component {
  static propTypes = {
    avatar: PropTypes.bool,
    dense: PropTypes.bool,
    twoLine: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, dense, twoLine, avatar, children, tag, ...otherProps} = this.props;
    return React.createElement(tag || 'ul', {
      className: classnames(LIST, {
        [DENSE]: dense,
        [AVATAR]: avatar,
        [TWO_LINE]: twoLine,
      }, className),
      ...otherProps,
    }, children);
  }
}

export class ListItemText extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      if(React.isValidElement(child) && child.props.secondary) {
        return React.cloneElement(child, {
          key: index,
          className: classnames(child.props.className, ITEM_TEXT_2),
        });
      }
      return child;
    });
    return (
      <span className={classnames(ITEM_TEXT, className)} {...otherProps}>{nodes}</span>
    )
  }
}

export class ListItemIcon extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    start: PropTypes.bool,
    end: PropTypes.bool,
    icon: PropTypes.string,
  }

  render() {
    let {className, icon, start, end, children, ...otherProps} = this.props;
    return (
      <Icon name={icon} className={classnames(className, {
        [ITEM_START]: start,
        [ITEM_END]: end,
      })} {...otherProps}/>
    )
  }
}

export class ListItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  componentDidMount() {
    this.ripple = MDCRipple.MDCRipple.attachTo(this.root_, {isUnbounded: false});
    this.root_.addEventListener('click', this.props.onClick);
  }

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    let {className, children, tag, ...otherProps} = this.props;
    return React.createElement(tag || 'li', {
      className: classnames(ITEM, className),
      ref: ref => this.root_ = ref,
      style: {
        boxSizing: 'border-box'
      },
      ...otherProps,
    }, children);
  }
}
