/* eslint-disable no-console */
const {Client} = require('../src');
const {EventEmitter} = require('events');
const requestsOverride = new (require('../src/Private/requests'))();

/**
 * Coverage Client
 */
class CoverageTestClient extends Client {
  /**
     * Constructor
     * @param {string} key KEY
     */
  constructor(key) {
    super(key, {rateLimit: 'NONE'});
  }
  /**
   * Make request mock
   * @param {Controller} controller Controller
   * @param {string} url URL
   * @returns {RecursiveProxy} fake data
   * @private
   */
  async _makeRequest (controller, url) {
    if (!url) return;
    const response = await requestsOverride.request.call(this, url);
    return new RecursiveProxy(response, controller.controller);
  }
}
/**
 * Recursive Proxy
 */
class RecursiveProxy {
  /**
     * @param {Record<string,unknown>} data Data
     * @param {Controller} controller Controller
     * @param {string} [path] Path to this object i.e player.stats.bedwars.wins
     */
  constructor(data, controller, path='') {
    this.data = data;
    this.path = path;
    /**
         * @deprecated
         */
    this.accessedProps = [];
    this.propsToAccess = Array.from(Object.keys(data));
    this.childObjs = {};
    this.controller = controller;
    this.id = this.controller.registeredProxies++;
    controller.on('report', ()=>{
      controller.emit('result', this._computeResults());
    });
    return new Proxy(data, this);
  }
  /**
   * Set ( proxy )
   * @param {Record<string|symbol,unknown>} obj Object
   * @param {string|symbol} prop Property
   * @param {*} value Value
   * @returns {*}
   */
  set(obj, prop, value) {
    // Warn, because you are not supposed to change data directly!
    console.warn(`\x1b[31mSET ${this.path}.${prop} to ${value}\x1b[0m - Reminder that you shouldn't be modifying data obtained from API`);
    obj[prop] = value;
  }
  /**
   * Get ( proxy )
   * @param {Record<string|symbol,unknown>} obj Object
   * @param {string|symbol} prop Property
   * @returns {*}
   */
  get(obj, prop) {
    this.propsToAccess.splice(this.propsToAccess.indexOf(prop), 1);
    if (typeof obj[prop] === 'object' && obj[prop]) {
      if (this.childObjs[prop]) return this.childObjs[prop];
      this.childObjs[prop] = new RecursiveProxy(obj[prop], this.controller, this.path?`${this.path}.${prop.toString()}`:prop);
      return this.childObjs[prop];
    } else {
      if (!this.accessedProps.includes(prop)) this.accessedProps.push(prop);
      return obj[prop];
    }
  }
  /**
   * Computes results
   * @returns {RawCoverageData}
   */
  _computeResults() {
    const keyCount = Object.keys(this.data).length;
    return {keyCount, accessedCount: this.accessedProps.length, accessedData: this.accessedProps, toBeAccessed: this.propsToAccess, path: this.path.split('.'), data: this.data};
  }
}

/**
 * Controller - controls proxy
 */
class Controller extends EventEmitter {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.data=[];
    this.registeredProxies = 0;
    // mem leak possible but only way
    this.setMaxListeners(Infinity);
  }
  /**
     * Should be called after data is 100% parsed
     * @returns {CoverageData} Coverage data
     */
  async getResults() {
    setImmediate(()=>this.emit('report'));
    await new Promise((resolve)=>{
      this.on('result', (result)=>{
        this.data.push(result);
        if (this.data.length === this.registeredProxies) resolve();
      });
    });
    this.data.sort((a, b)=>a.path.length-b.path.length);
    const finalObj = this.data[0].data;
    let {keyCount, accessedCount, toBeAccessed} = this.data[0];
    this.data.slice(1).forEach((obj)=>{
      keyCount+=obj.keyCount;
      accessedCount+=Math.min(obj.accessedCount, obj.keyCount);
      // eslint-disable-next-line max-len
      toBeAccessed = toBeAccessed.concat(obj.toBeAccessed.map((x)=>`${obj.path.join('.')}.${x} => ${obj.path.reduce((pV, cV)=>pV[cV], finalObj) ? obj.path.reduce((pV, cV)=>pV[cV], finalObj)[x] : 'Unreachable'}`));
    });
    console.warn('\x1b[32mSuccessfully collected coverage data!');
    return {keyCount, accessedCount, toBeAccessed};
  }
  /**
     * @param {CoverageData} coverageData Coverage Data
     * @returns {string} Human readable format
     */
  static format({keyCount, accessedCount, toBeAccessed}) {
    return `Total Key Count : ${keyCount}
        Accessed : (Access Count) ${accessedCount}; (Remove Counting) ${keyCount - toBeAccessed.length}
        Coverage : (A) ${(accessedCount/keyCount*100).toFixed(2)}%; (R) ${((keyCount - toBeAccessed.length) / keyCount * 100).toFixed(2)}%
Remaining : \n\t${toBeAccessed.join('\n\t')}
---     `;
  }
}
/**
 * @typedef {Object} CoverageData
 * @property {number} keyCount Total Key Count
 * @property {number} accessedCount Key Accessed
 * @property {string[]} toBeAccessed Key/value paires to be accessed
 */
module.exports = {CoverageTestClient, Controller};
