import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '@material/card/dist/mdc.card.min.css';

const CARD = 'mdc-card';

export class Card extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }
  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(CARD, className)} {...otherProps}>{children}</div>
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
        [`${CARD}__action`]: true,
      });
      return React.cloneElement(action, {key: index, className: classes});
    });
    return (
      <section className={classnames({
        [`${CARD}__actions`]: true,
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
        [`${CARD}__horizontal-block`]: true,
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
        [`${CARD}__primary`]: true
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
        [`${CARD}__supporting-text`]: true
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
        [`${CARD}__media`]: true
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
        [`${CARD}__title`]: true,
        [`${CARD}__title--large`]: large,
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
        [`${CARD}__subtitle`]: true,
      }, className)} {...otherProps}>{children}</h2>
    )
  }
}

export default Card;
