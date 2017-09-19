import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import * as MDC from '@material/dialog';
import * as MDCConstants from '@material/dialog/constants';

import Button from './button';

import '@material/dialog/dist/mdc.dialog.min.css';

const ROOT = MDCConstants.cssClasses.ROOT;
const SURFACE = `${ROOT}__surface`;
const HEADER = `${ROOT}__header`;
const HEADER_TITLE = `${HEADER}__title`;
const BODY = `${ROOT}__body`;
const BODY_SCROLLABLE = `${BODY}--scrollable`;
const FOOTER = `${ROOT}__footer`;
const BACKDROP = `${ROOT}__backdrop`;
const FOOTER_BUTTON = `${FOOTER}__button`;
const FOOTER_BUTTON_CANCEL = `${FOOTER_BUTTON}--cancel`;
const FOOTER_BUTTON_ACCEPT = `${FOOTER_BUTTON}--accept`;

export class DialogFooter extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    let {children, ...otherProps} = this.props;
    let nodes = React.Children.map(children, (child, index) => {
      console.log(child.props);
      return React.cloneElement(child, {
        key: index,
        className: classnames(child.className, FOOTER_BUTTON, {
          [FOOTER_BUTTON_CANCEL]: child.props['data-cancel'],
          [FOOTER_BUTTON_ACCEPT]: child.props['data-accept'],
        }),
      });
    });
    return <footer className={FOOTER}>{nodes}</footer>;
  }
}

export class DialogHeader extends React.Component {
  render() {
    return (
      <header className={HEADER}>
        <h2 className={HEADER_TITLE}>{this.props.children}</h2>
      </header>
    );
  }
}

export class DialogBody extends React.Component {
  render() {
    let {children, scrollable} = this.props;
    return (
      <section className={classnames(BODY, {
        [BODY_SCROLLABLE]: scrollable
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
    this.dialog = MDC.MDCDialog.attachTo(this.root_);
    this.dialog.listen(MDCConstants.strings.ACCEPT_EVENT, evt => {
      console.log(evt);
    });
    this.dialog.listen(MDCConstants.strings.CANCEL_EVENT, evt => {
      console.log(evt);
    });
  }

  componentWillUnmount() {
    this.dialog.destroy();
  }

  get open() {
    return this.dialog.open;
  }

  show() {
    this.dialog.show();
  }

  close() {
    this.dialog.close();
  }

  render() {
    let {children, ...otherProps} = this.props;
    return (
      <aside className={ROOT} ref={ref => this.root_=ref}>
        <div className={SURFACE}>{children}</div>
        <div className={BACKDROP}></div>
      </aside>
    );
  }
}
