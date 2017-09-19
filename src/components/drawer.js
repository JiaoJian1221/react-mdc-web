import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import * as MDC from '@material/drawer';
import * as MDCTemporaryConstants from '@material/drawer/temporary/constants';
import * as MDCPersistentConstants from '@material/drawer/persistent/constants';

import '@material/drawer/dist/mdc.drawer.min.css';


const PERMANENT = 'mdc-permanent-drawer';
const PERMANENT_TOOLBAR_SPACER = 'mdc-permanent-drawer__toolbar-spacer';
const PERMANENT_DRAWER = 'mdc-permanent-drawer__drawer';
const PERMANENT_HEADER = 'mdc-permanent-drawer__header';
const PERMANENT_HEADER_CONTENT = 'mdc-permanent-drawer__header-content';
const PERMANENT_DRAWER_CONTENT = 'mdc-permanent-drawer__drawer__content';

const TEMPORARY = 'mdc-temporary-drawer';
const TEMPORARY_DRAWER = 'mdc-temporary-drawer__drawer';
const TEMPORARY_HEADER = 'mdc-temporary-drawer__header';
const TEMPORARY_HEADER_CONTENT = 'mdc-temporary-drawer__header-content';
const TEMPORARY_DRAWER_CONTENT = 'mdc-temporary-drawer__drawer__content';

const PERSISTENT = 'mdc-persistent-drawer';
const PERSISTENT_DRAWER = 'mdc-persistent-drawer__drawer';
const PERSISTENT_HEADER = 'mdc-persistent-drawer__header';
const PERSISTENT_HEADER_CONTENT = 'mdc-persistent-drawer__header-content';
const PERSISTENT_DRAWER_CONTENT = 'mdc-persistent-drawer__drawer__content';

export class DrawerHeader extends React.Component {
  static propTypes = {
    type: PropTypes.string,
  }

  render() {
    let {children, className, contentClassName, type, ...otherProps} = this.props;
    return (
      <header className={classnames(className, {
        [TEMPORARY_HEADER]: type === 'temporary',
        [PERMANENT_HEADER]: type === 'permanent',
        [PERSISTENT_HEADER]: type === 'persistent',
      })} {...otherProps}>
        <div className={classnames(contentClassName, {
          [TEMPORARY_HEADER_CONTENT]: type === 'temporary',
          [PERMANENT_HEADER_CONTENT]: type === 'permanent',
          [PERSISTENT_HEADER_CONTENT]: type === 'persistent',
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
        [TEMPORARY_DRAWER_CONTENT]: type === 'temporary',
        [PERMANENT_DRAWER_CONTENT]: type === 'permanent',
        [PERSISTENT_DRAWER_CONTENT]: type === 'persistent',
      })} {...otherProps}>
        {children}
      </div>
    );
  }
}

export class PermanentDrawer extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    above: PropTypes.bool,
  }

  render() {
    let {children, className, above, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {type: 'permanent'});
    })
    return (
      <aside className={classnames(PERMANENT, className)} {...otherProps}>
        {above?<div className={PERMANENT_TOOLBAR_SPACER}></div>:null}
        {nodes}
      </aside>
    );
  }
}

export class TemporaryDrawer extends React.Component {
  componentDidMount() {
    this.drawer = MDC.MDCTemporaryDrawer.attachTo(this.root_);
    this.drawer.listen(MDCTemporaryConstants.strings.OPEN_EVENT, evt => {
      console.log(evt);
    });
    this.drawer.listen(MDCTemporaryConstants.strings.CLOSE_EVENT, evt => {
      console.log(evt);
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
    let {children, className, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      console.log(child);
      return React.cloneElement(child, {type: 'temporary'});
    })
    return (
      <aside className={className, TEMPORARY} ref={ref => this.root_=ref} {...otherProps}>
        <div className={TEMPORARY_DRAWER}>{nodes}</div>
      </aside>
    );
  }
}

export class PersistentDrawer extends React.Component {
  componentDidMount() {
    this.drawer = MDC.MDCPersistentDrawer.attachTo(this.root_);
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
        <div className={PERSISTENT_DRAWER}>{nodes}</div>
      </aside>
    );
  }
}
