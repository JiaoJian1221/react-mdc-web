import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  MDCTemporaryDrawer,
  MDCPersistentDrawer,
} from '@material/drawer';
import * as MDCTemporaryConstants from '@material/drawer/temporary/constants';
import * as MDCPersistentConstants from '@material/drawer/persistent/constants';
import '@material/drawer/dist/mdc.drawer.min.css';

const PERMANENT = `mdc-permanent-drawer`;
const TEMPORARY = `mdc-temporary-drawer`;
const PERSISTENT = `mdc-persistent-drawer`;

export class DrawerHeader extends React.Component {
  static propTypes = {
    type: PropTypes.string,
  }

  render() {
    let {children, className, contentClassName, type, ...otherProps} = this.props;
    return (
      <header className={classnames(className, {
        [ `${TEMPORARY}__header`]: type === 'temporary',
        [ `${PERMANENT}__header`]: type === 'permanent',
        [`${PERSISTENT}__header`]: type === 'persistent',
      })} {...otherProps}>
        <div className={classnames(contentClassName, {
          [ `${TEMPORARY}__header-content`]: type === 'temporary',
          [ `${PERMANENT}__header-content`]: type === 'permanent',
          [`${PERSISTENT}__header-content`]: type === 'persistent',
        })}>{children}</div>
      </header>
    );
  }
}

export class DrawerContent extends React.Component {
  render() {
    let {children, className, type, ...otherProps} = this.props;
    return (
      <div className={classnames(className, {
        [ `${TEMPORARY}__drawer__content`]: type === 'temporary',
        [ `${PERMANENT}__drawer__content`]: type === 'permanent',
        [`${PERSISTENT}__drawer__content`]: type === 'persistent',
      })} {...otherProps}>
        {children}
      </div>
    );
  }
}

const PositionStyles = {
  right: {

  },
  left: {

  },
  top: {

  },
  bottom: {

  }
}

export class PermanentDrawer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    above: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  }

  static defaultProps = {
    position: 'left',
  }

  get positionStyle() {
    let {position, style} = this.props;
    return {
      ...style,
      ...PositionStyles[position]
    };
  }

  render() {
    let {children, className, above, position, style, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {type: 'permanent'});
    })
    return (
      <aside className={classnames(PERMANENT, className)} style={this.positionStyle} {...otherProps}>
        {above?<div className={`${PERMANENT}__toolbar-spacer`}></div>:null}
        <div className={`${PERMANENT}__drawer`}>{nodes}</div>
      </aside>
    );
  }
}

export class TemporaryDrawer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    onOpen: () => {},
    onClose: () => {},
  }

  componentDidMount() {
    let {onOpen, onClose} = this.props;

    this.drawer = MDCTemporaryDrawer.attachTo(this.root_);
    this.drawer.listen(MDCTemporaryConstants.strings.OPEN_EVENT, evt => {
      onOpen();
    });
    this.drawer.listen(MDCTemporaryConstants.strings.CLOSE_EVENT, evt => {
      onClose();
    });
  }

  open() {
    this.drawer.open = true;
  }

  close() {
    this.drawer.open = false;
  }

  componentWillUnmount() {
    this.drawer.destroy();
  }

  render() {
    let {children, className, onOpen, onClose, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {type: 'temporary'});
    })
    return (
      <aside className={className, TEMPORARY} ref={ref => this.root_=ref} {...otherProps}>
        <div className={`${TEMPORARY}__drawer`}>{nodes}</div>
      </aside>
    );
  }
}

export class PersistentDrawer extends React.Component {

  componentDidMount() {
    this.drawer = MDCPersistentDrawer.attachTo(this.root_);
    this.drawer.listen(MDCPersistentConstants.strings.OPEN_EVENT, evt => {
      console.log(evt);
    });
    this.drawer.listen(MDCPersistentConstants.strings.CLOSE_EVENT, evt => {
      console.log(evt);
    });
  }

  open() {
    this.drawer.open = true;
  }

  close() {
    this.drawer.open = false;
  }

  toggle() {
    this.drawer.open = !this.drawer.open;
  }

  componentWillUnmount() {
    this.drawer.destroy();
  }

  render() {
    let {children, className, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {type: 'persistent'});
    })
    return (
      <aside className={className, PERSISTENT} ref={ref => this.root_=ref} {...otherProps}>
        <div className={`${PERSISTENT}__drawer`}>{nodes}</div>
      </aside>
    );
  }
}
