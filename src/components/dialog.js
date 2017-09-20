import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import {
  MDCDialog
} from '@material/dialog';
import * as MDCConstants from '@material/dialog/constants';
import '@material/dialog/dist/mdc.dialog.min.css';

import Button from './button';

const DIALOG = 'mdc-dialog';

export class DialogFooter extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        key: index,
        className: classnames(child.className, `${DIALOG}__footer__button`, {
          [`${DIALOG}__footer__button--cancel`]: child.props['data-cancel'],
          [`${DIALOG}__footer__button--accept`]: child.props['data-accept'],
        }),
      });
    });
    return <footer className={classnames(className, `${DIALOG}__footer`)} {...otherProps}>{nodes}</footer>;
  }
}

export class DialogHeader extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <header className={classnames(`${DIALOG}__header`, className)} {...otherProps}>
        <h2 className={`${DIALOG}__header__title`}>{children}</h2>
      </header>
    );
  }
}

export class DialogBody extends React.Component {
  render() {
    let {children, scrollable} = this.props;
    return (
      <section className={classnames(`${DIALOG}__body`, {
        [`${DIALOG}__body--scrollable`]: scrollable
      })}>{children}</section>
    );
  }
}

export class Dialog extends React.Component {
  static propTypes = {
    scrollable: PropTypes.bool,
    children: PropTypes.node,
  }

  componentDidMount() {
    this.dialog_ = MDCDialog.attachTo(this.root_);
    this.dialog_.listen(MDCConstants.strings.ACCEPT_EVENT, evt => {
      console.log(evt);
    });
    this.dialog_.listen(MDCConstants.strings.CANCEL_EVENT, evt => {
      console.log(evt);
    });
  }

  componentWillUnmount() {
    this.dialog_.destroy();
  }

  componentWillReceiveProps(props) {
    let {open} = props;
    this.dialog_.open = open;
  }

  get open() {
    return this.dialog_.open;
  }

  show() {
    this.dialog_.show();
  }

  close() {
    this.dialog_.close();
  }

  render() {
    let {children, ...otherProps} = this.props;
    return (
      <aside className={DIALOG} {...otherProps} ref={ref => this.root_=ref}>
        <div className={`${DIALOG}__surface`}>{children}</div>
        <div className={`${DIALOG}__backdrop`}></div>
      </aside>
    );
  }
}
