import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import * as MDC from '@material/toolbar';

import Icon from './icon';

import '@material/toolbar/dist/mdc.toolbar.min.css';

const ROOT = 'mdc-toolbar';
const FIXED = `${ROOT}--fixed`;
const WATER_FALL = `${ROOT}--waterfall`;
const FIX_LAST_ROW = `${FIXED}-lastrow-only`;
const ROW = `${ROOT}__row`;
const TITLE = `${ROOT}__title`;
const ICON = `${ROOT}__icon--menu`;
const SECTION = `${ROOT}__section`;
const SECTION_ALIGN_START = `${SECTION}--align-start`;
const SECTION_ALIGN_END = `${SECTION}--align-end`;
const SECTION_FIT = `${SECTION}--shrink-to-fit`;

export class Toolbar extends React.Component {
  componentDidMount() {
    this.toolbar = MDC.MDCToolbar.attachTo(this.root_);
  }

  render() {
    let {className, fixed, fixLastRow, waterfall, children, ...otherProps} = this.props;
    return (
      <header className={classnames(ROOT, {
        [FIXED]: fixed,
        [FIX_LAST_ROW]: fixLastRow,
        [WATER_FALL]: waterfall,
      }, className)} ref={ref => this.root_=ref}>
        {children}
      </header>
    )
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
      <section className={classnames(SECTION, {
        [SECTION_ALIGN_START]: start,
        [SECTION_ALIGN_END]: end,
        [SECTION_FIT]: fit,
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
      <div className={classnames(ROW, className)} {...otherProps}>
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
      <span className={classnames(TITLE, className)} {...otherProps}>
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
      <Icon tag="a" className={classnames(ICON, className)} name={icon} {...otherProps} />
    )
  }
}
