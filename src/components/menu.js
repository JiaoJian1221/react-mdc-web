import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {
  MDCSimpleMenu,
  MDCSimpleMenuFoundation,
} from '@material/menu';
import '@material/menu/dist/mdc.menu.min.css';

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListDivider,
} from './list';

const MENU = 'mdc-simple-menu';

export class SimpleMenuAnchor extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onSelected: PropTypes.func,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(`${MENU}-anchor`, className)} {...otherProps}>
        {children}
      </div>
    );
  }
}

export class SimpleMenu extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    onSelected: PropTypes.func,
    open: PropTypes.bool,
  }

  static defaultProps = {
    open: false,
    onSelected: (e) => {},
  }

  show() {
    this.menu_.show();
  }

  hide() {
    this.menu_.hide();
  }

  componentWillReceiveProps(props) {
    let {open} = props;
    this.menu_.open = open;
  }

  componentDidMount() {
    this.menu_ = MDCSimpleMenu.attachTo(this.root_);

    let {onSelected} = this.props;
    this.menu_.listen(MDCSimpleMenuFoundation.strings.SELECTED_EVENT, onSelected);
  }

  render() {
    return (
      <div className={classnames(MENU)} ref={ref => this.root_=ref}>
        <List className={`${MENU}__items`}>
          <ListItem role='menuitem' style={{left: '0px', width: '100%', boxSizing: 'border-box'}}>
            <ListItemText>MENU 01</ListItemText>
          </ListItem>
          <ListDivider/>
          <ListItem role='menuitem' style={{left: '0px', width: '100%', boxSizing: 'border-box'}}>
            <ListItemText>MENU 02</ListItemText>
          </ListItem>
          <ListItem role='menuitem' style={{left: '0px', width: '100%', boxSizing: 'border-box'}}>
            <ListItemText>MENU 03</ListItemText>
          </ListItem>
        </List>
      </div>
    );
  }
}
