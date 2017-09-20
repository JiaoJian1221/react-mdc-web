import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import {
  MDCRipple,
} from '@material/ripple';
import '@material/list/dist/mdc.list.min.css';

import Icon from './icon';

const LIST = 'mdc-list';

export class ListDivider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <hr className={classnames(className, `${LIST}-divider`)} {...otherProps}/>
    );
  }
}

export class ListGroupSubheader extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <h3 className={classnames(className, `${LIST}-group__subheader`)} {...otherProps}>{children}</h3>
    );
  }
}

export class ListGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(className, `${LIST}-group`)} {...otherProps}>{children}</div>
    );
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
        [`${LIST}--dense`]: dense,
        [`${LIST}--avatar-list`]: avatar,
        [`${LIST}--two-line`]: twoLine,
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
          className: classnames(child.props.className, `${LIST}-item__text__secondary`),
        });
      }
      return child;
    });
    return (
      <span className={classnames(`${LIST}-item__text`, className)} {...otherProps}>{nodes}</span>
    );
  }
}

export class ListItemIcon extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(['start', 'end']),
    icon: PropTypes.string,
  }

  static defaultProps = {
    position: 'start'
  }

  render() {
    let {className, icon, position, children, ...otherProps} = this.props;
    return (
      <Icon name={icon} className={classnames(className, {
        [`${LIST}-item__start-detail`]: position === 'start',
        [`${LIST}-item__end-detail`]: position === 'end',
      })} {...otherProps}/>
    );
  }
}

export class ListItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    ripple: PropTypes.bool,
  }

  static defaultProps = {
    ripple: true,
  }

  componentDidMount() {
    let {ripple} = this.props;
    if(ripple) {
      this.ripple_ = MDCRipple.attachTo(this.root_, {isUnbounded: false});
    }
    this.root_.addEventListener('click', this.props.onClick);
  }

  componentWillUnmount() {
    let {ripple} = this.props;
    if(ripple) {
      this.ripple_.destroy();
    }
  }

  render() {
    let {className, children, ripple, tag, ...otherProps} = this.props;
    return React.createElement(tag || 'li', {
      className: classnames(`${LIST}-item`, className),
      ref: ref => this.root_ = ref,
      style: {
        boxSizing: 'border-box'
      },
      ...otherProps,
    }, children);
  }
}
