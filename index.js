/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-07-26
 * @author Liang <liang@maichong.it>
 */

'use strict';

const TextField = require('alaska-field-text');

class IconField extends TextField {

}

IconField.views = {
  view: {
    name: 'IconFieldView',
    path: __dirname + '/lib/view.js'
  },
  cell: {
    name: 'IconFieldCell',
    path: __dirname + '/lib/cell.js'
  },
  filter: TextField.views.filter
};

module.exports = IconField;
