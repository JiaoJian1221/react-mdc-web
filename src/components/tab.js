import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import * as MDC from '@material/tabs';

import '@material/tabs/dist/mdc.tabs.min.css';

import Icon from './icon';

const ROOT_TAB = 'mdc-tab';
const ROOT_TAB_WITH_ICON_TEXT = `${ROOT_TAB}--with-icon-and-text`;
const ROOT_TAB_ICON = `${ROOT_TAB}__icon`;
const ROOT_TAB_ICON_TEXT = `${ROOT_TAB_ICON}-text`;
const ROOT_TAB_BAR = 'mdc-tab-bar';
const ROOT_TAB_BAR_INDICATOR = `${ROOT_TAB_BAR}__indicator`;
const ROOT_TAB_BAR_SCROLLER = `${ROOT_TAB_BAR}-scroller`;
const ROOT_TAB_BAR_SCROLLER_INDICATOR = `${ROOT_TAB_BAR_SCROLLER}__indicator`;
const ROOT_TAB_BAR_SCROLLER_INDICATOR_INNER = `${ROOT_TAB_BAR_SCROLLER_INDICATOR}__inner`;
const ROOT_TAB_BAR_SCROLLER_INDICATOR_BACK = `${ROOT_TAB_BAR_SCROLLER_INDICATOR}--back`;
const ROOT_TAB_BAR_SCROLLER_INDICATOR_FORWARD = `${ROOT_TAB_BAR_SCROLLER_INDICATOR}--forward`;
const ROOT_TAB_BAR_SCROLLER_INDICATOR_ENABLED = `${ROOT_TAB_BAR_SCROLLER_INDICATOR}--enabled`;
const ROOT_TAB_BAR_SCROLLER_FRAME = `${ROOT_TAB_BAR_SCROLLER}__scroll-frame`;
const ROOT_TAB_BAR_SCROLLER_FRAME_TABS = `${ROOT_TAB_BAR_SCROLLER_FRAME}__tabs`;

export class TabBarScroller extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  componentDidMount() {
    MDC.MDCTabBarScroller.attachTo(this.root_);
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(ROOT_TAB_BAR_SCROLLER, className)} {...otherProps} ref={ref => this.root_=ref}>
        <div className={classnames(
          ROOT_TAB_BAR_SCROLLER_INDICATOR,
          ROOT_TAB_BAR_SCROLLER_INDICATOR_BACK,)
        }><Icon tag="a" className={ROOT_TAB_BAR_SCROLLER_INDICATOR_INNER} name="navigate_before"/>
        </div>
        <div className={classnames(
          ROOT_TAB_BAR_SCROLLER_FRAME
        )}>{children}</div>
        <div className={classnames(
          ROOT_TAB_BAR_SCROLLER_INDICATOR,
          ROOT_TAB_BAR_SCROLLER_INDICATOR_FORWARD,)
        }><Icon tag="a" className={ROOT_TAB_BAR_SCROLLER_INDICATOR_INNER} name="navigate_next"/>
        </div>
      </div>
    );
  }

}

export class TabBar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    scrollable: PropTypes.bool,
  }

  componentDidMount() {
    if(!this.props.scrollable) {
      MDC.MDCTabBar.attachTo(this.root_);
    }
  }

  render() {
    let {className, children, scrollable, ...otherProps} = this.props;
    return (
      <nav className={classnames(ROOT_TAB_BAR, {
        [ROOT_TAB_BAR_SCROLLER_FRAME_TABS]: scrollable,
      }, className)} {...otherProps} ref={ref => this.root_=ref}>
        {children}
        <span className={ROOT_TAB_BAR_INDICATOR}></span>
      </nav>
    )
  }
}

export class TabIcon extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    let {className, icon, ...otherProps} = this.props;
    return <Icon className={classnames(ROOT_TAB_ICON, className)} name={icon} />
  }
}

export class TabText extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return <span className={classnames(ROOT_TAB_ICON_TEXT, className)}>{children}</span>
  }
}

export class Tab extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    let hasIcon = false;
    let hasText = false;

    React.Children.forEach(children, (child) => {
      if(React.isValidElement(child) && child.type === TabIcon) {
        hasIcon = true;
      }
      if(React.isValidElement(child) && child.type === TabText) {
        hasText = true;
      }
    });
    return (
      <a className={classnames(ROOT_TAB, {
        [ROOT_TAB_WITH_ICON_TEXT]: hasIcon && hasText
      }, className)} ref={ref => this.root_=ref}>
        {children}
      </a>
    )
  }
}
