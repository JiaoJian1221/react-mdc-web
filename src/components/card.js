import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '@material/card/dist/mdc.card.min.css';

const MDC = 'mdc-card';

export class Card extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(MDC, className)} {...otherProps}>{children}</div>
    );
  }
}

export class CardActions extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    let {className, children, ...otherProps} = this.props;
    let actions = React.Children.map(children, (action, index) => {
      let classes = classnames(action.props.className, {
        [`${MDC}__action`]: true,
      });
      return React.cloneElement(action, {key: index, className: classes});
    });
    return (
      <section className={classnames({
        [`${MDC}__actions`]: true,
      }, className)} {...otherProps}>{actions}</section>
    );
  }
}

export class CardHorizontalBlock extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames({
        [`${MDC}__horizontal-block`]: true,
      }, className)} {...otherProps}>{children}</div>
    );
  }
}

export class CardHeader extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let{className, children, ...otherProps} = this.props;
    return (
      <section className={classnames({
        [`${MDC}__primary`]: true
      }, className)} {...otherProps}>{children}</section>
    )
  }
}

export class CardText extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let{className, children, ...otherProps} = this.props;
    return (
      <section className={classnames({
        [`${MDC}__supporting-text`]: true
      }, className)} {...otherProps}>{children}</section>
    )
  }
}

export class CardMedia extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let{className, children, ...otherProps} = this.props;
    return (
      <section className={classnames({
        [`${MDC}__media`]: true
      }, className)} {...otherProps}>{children}</section>
    )
  }
}

export class CardTitle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    large: PropTypes.bool,
  }

  render() {
    let{className, children, large, ...otherProps} = this.props;
    return (
      <h1 className={classnames({
        [`${MDC}__title`]: true,
        [`${MDC}__title--large`]: large,
      }, className)} {...otherProps}>{children}</h1>
    )
  }
}

export class CardSubtitle extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let{className, children, ...otherProps} = this.props;
    return (
      <h2 className={classnames({
        [`${MDC}__subtitle`]: true,
      }, className)} {...otherProps}>{children}</h2>
    )
  }
}
