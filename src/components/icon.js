import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

import 'material-design-icons/iconfont/material-icons.css';

const ICON = 'material-icons';

export class Icon extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
  }

  render() {
    let {className, name, tag, ...otherProps} = this.props;
    return React.createElement(tag || 'i', {
      className: classnames(ICON, className),
      ...otherProps
    }, name);
  }
}

export default Icon;
