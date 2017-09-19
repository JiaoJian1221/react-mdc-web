import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as utils from './utils';

import "@material/layout-grid/dist/mdc.layout-grid.min.css";

const MDC = 'mdc-layout-grid';

export class Grid extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(MDC, className)} {...otherProps}>
        <div className={`${MDC}__inner`}> {children} </div>
      </div>
    );
  }
}

export class Cell extends React.Component {
  static propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
    className: PropTypes.string,
    col: PropTypes.number,
    order: PropTypes.number,
    phone: PropTypes.number,
    tablet: PropTypes.number,
  };

  render() {
    let {className, align, col, order, phone, tablet, children, ...otherProps} = this.props;
    return (
      <div className={classnames(`${MDC}__cell`, {
          [`${MDC}__cell--span-${col}`]: utils.isDefined(col),
          [`${MDC}__cell--span-${tablet}-tablet`]: utils.isDefined(tablet),
          [`${MDC}__cell--span-${phone}-phone`]: utils.isDefined(phone),
          [`${MDC}__cell--order-${order}`]: utils.isDefined(order),
          [`${MDC}__cell--align-${align}`]: utils.isDefined(align),
        }, className)} {...otherProps}>{children}</div>
    );
  }
}
