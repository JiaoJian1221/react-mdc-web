import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import "@material/layout-grid/dist/mdc.layout-grid.min.css";

const LAYOUT_GRID = 'mdc-layout-grid';

export class Grid extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    let {className, children, ...otherProps} = this.props;
    return (
      <div className={classnames(LAYOUT_GRID, className)} {...otherProps}>
        <div className={`${LAYOUT_GRID}__inner`}> {children} </div>
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
      <div className={classnames(`${LAYOUT_GRID}__cell`, {
          [`${LAYOUT_GRID}__cell--span-${col}`]: col,
          [`${LAYOUT_GRID}__cell--span-${tablet}-tablet`]: tablet,
          [`${LAYOUT_GRID}__cell--span-${phone}-phone`]: phone,
          [`${LAYOUT_GRID}__cell--order-${order}`]: order,
          [`${LAYOUT_GRID}__cell--align-${align}`]: align,
        }, className)} {...otherProps}>{children}</div>
    );
  }
}
