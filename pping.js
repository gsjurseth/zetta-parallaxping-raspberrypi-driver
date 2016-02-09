var Device = require('zetta-device');
var util = require('util');

var PPing = module.exports = function(options) {
  Device.call(this);
  this._default = options['default'];
};
util.inherits(PPing, Device);

PPing.prototype.init = function(config) {
  config
  .name('PPing')
  .type('pping')
  .state('waiting')
  .when('waiting', { allow: ['do']})
  .when('doing', { allow: [] })
  .map('do', this.do, [
    { name: 'message', type: 'text'}
  ]);
};

PPing.prototype.do = function(message, cb) {
  this.state = 'doing';
  this.log(this._default + ': ' + message);
  this.state = 'waiting';
  cb();
};
