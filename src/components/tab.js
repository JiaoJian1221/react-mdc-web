import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import {
  MDCTabBar,
  MDCTabBarFoundation,
  MDCTabBarScroller,
} from '@material/tabs';
import '@material/tabs/dist/mdc.tabs.min.css';

import Icon from './icon';

const TAB = 'mdc-tab';
const TAB_BAR = 'mdc-tab-bar';

export class TabBar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    scrollable: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    scrollable: false,
    onChange: e => {},
  }

  componentDidMount() {
    let {scrollable} = this.props;
    if(scrollable) {
      this.scroller_ = MDCTabBarScroller.attachTo(this.scrollerRoot_);
      this.tabbar_ = this.scroller_.tabBar;
    }
    else {
      this.tabbar_ = MDCTabBar.attachTo(this.root_);
    }

    let {onChange} = this.props;
    this.tabbar_.listen(MDCTabBarFoundation.strings.CHANGE_EVENT, onChange);
  }

  render() {
    let {className, children, scrollable, ...otherProps} = this.props;
    let tabbar = (
      <nav className={classnames(TAB_BAR, {
        [`${TAB_BAR}-scroller__scroll-frame__tabs`]: scrollable,
      }, className)} {...otherProps} ref={ref => this.root_=ref}>
        {children}
        <span className={`${TAB_BAR}__indicator`}></span>
      </nav>
    );

    return scrollable ? (
      <div className={`${TAB_BAR}-scroller`} ref={ref => this.scrollerRoot_=ref}>
        <div className={classnames(`${TAB_BAR}-scroller__indicator`, `${TAB_BAR}-scroller__indicator--back`)}>
          <Icon tag="a" className={`${TAB_BAR}-scroller__indicator__inner`} name="navigate_before"/>
        </div>
        <div className={`${TAB_BAR}-scroller__scroll-frame`}>{tabbar}</div>
        <div className={classnames(`${TAB_BAR}-scroller__indicator`, `${TAB_BAR}-scroller__indicator--forward`,)}>
          <Icon tag="a" className={`${TAB_BAR}-scroller__indicator__inner`} name="navigate_next"/>
        </div>
      </div>
    ) : tabbar;
  }
}

export class TabIcon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    let {className, icon, ...otherProps} = this.props;
    return (
      <Icon className={classnames(`${TAB}__icon`, className)} name={icon} {...otherProps} />
    );
  }
}

export class TabText extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <span className={classnames(`${TAB}__icon-text`, className)} {...otherProps}>{children}</span>
    );
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
      <a className={classnames(TAB, {
        [`${TAB}--with-icon-and-text`]: hasIcon && hasText
      }, className)} {...otherProps} ref={ref => this.root_=ref}>
        {children}
      </a>
    );
  }
}
