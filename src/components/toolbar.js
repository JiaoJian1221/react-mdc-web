import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import {
  MDCToolbar,
} from '@material/toolbar';
import '@material/toolbar/dist/mdc.toolbar.min.css';

import Icon from './icon';

const TOOLBAR = 'mdc-toolbar';

export class Toolbar extends React.Component {
  componentDidMount() {
    this.toolbar = MDCToolbar.attachTo(this.root_);
  }

  render() {
    let {className, fixed, fixLastRow, waterfall, children, ...otherProps} = this.props;
    return (
      <header className={classnames(TOOLBAR, {
        [`${TOOLBAR}--fixed`]: fixed,
        [`${TOOLBAR}--fixed-lastrow-only`]: fixLastRow,
        [`${TOOLBAR}--waterfall`]: waterfall,
      }, className)} {...otherProps} ref={ref => this.root_=ref}>
        {children}
      </header>
    );
  }
}

export class ToolbarSection extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    start: PropTypes.bool,
    end: PropTypes.bool,
    fit: PropTypes.bool,
  }

  render() {
    let {className, children, start, end, fit, ...otherProps} = this.props;
    return (
      <section className={classnames(`${TOOLBAR}__section`, {
        [`${TOOLBAR}__section--align-start`]: start,
        [`${TOOLBAR}__section--align-end`]: end,
        [`${TOOLBAR}__section--shrink-to-fit`]: fit,
      }, className)} {...otherProps}>
        {children}
      </section>
    )
  }
}

export class ToolbarRow extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(`${TOOLBAR}__row`, className)} {...otherProps}>
        {children}
      </div>
    )
  }
}

export class ToolbarTitle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <span className={classnames(`${TOOLBAR}__title`, className)} {...otherProps}>
        {children}
      </span>
    )
  }
}

export class ToolbarIcon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
  }

  render() {
    let {className, children, icon, ...otherProps} = this.props;
    return (
      <Icon tag="a" className={classnames(`${TOOLBAR}__icon--menu`, className)} name={icon} {...otherProps} />
    )
  }
}
