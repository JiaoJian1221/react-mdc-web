import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import '@material/elevation/dist/mdc.elevation.min.css';

const ROOT = 'mdc-elevation';

export class Elevation extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    transition: PropTypes.bool,
    z: PropTypes.number,
  }

  render() {
    let {className, children, z, transition, ...otherProps} = this.props;
    return (
      <div className={classnames(className, {
        [`${ROOT}--z${z}`]: typeof z !== 'undefined',
        [`${ROOT}-transition`]: transition,
      })} {...otherProps}>{children}</div>
    );
  }
}
