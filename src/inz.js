import _ from 'lodash';
import Promise from 'bluebird';
import Util from './libs/util';

window.INZ = window.INZ || {};
window.Promise = Promise;
window.INZ._ = _;
window.INZ.Util = Util;

export default window.INZ;

