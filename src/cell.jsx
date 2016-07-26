/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-02
 * @author Liang <liang@maichong.it>
 */

import React from 'react';

export default class IconFieldCell extends React.Component {

  shouldComponentUpdate(props) {
    return props.value != this.props.value;
  }

  render() {
    const { value } = this.props;
    if (!value) {
      return <div></div>;
    }
    return <i className={'fa fa-'+value}/>;
  }
}
