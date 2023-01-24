class ModelAction {
  /**
   * 
   * @param {string} id 
   * @param {() => void} actionFn 
   */
  constructor(id, actionFn) {
    this.id = id;

    if (!(actionFn instanceof Function)) {
      throw new TypeError('Expected actionFn to be Function.');
    }

    this.actionFn = actionFn;
  }
}

export class Model {
  constructor(id, name, initialValue) {
    this.id = id;
    this.name = name;
    this.value = initialValue;

    this.valueGetterFn = _ => this.value;
    this.validatorFn = _ => true;
    this.updateFn = value => value;

    /**
     * @type {((oldValue: any, newValue: any) => void)[]}
     */
    this.updateListeners = [];

    /**
     * @type {(() => void)[]}
     */
    this.invalidListeners = [];

    /**
     * @type {ModelAction[]}
     */
    this.actions = [];
  }

  /**
   * 
   * @param {"update" | "invalid"} event 
   * @param {(oldValue: any, newValue: any) => void | () => void} eventListenerFn 
   */
  addEventListener(event, eventListenerFn) {
    if (event === 'update') {
      this.updateListeners.push(eventListenerFn);
      eventListenerFn(this.value, this.value);
    } else if (event === 'invalid') {
      this.invalidListeners.push(eventListenerFn);
    } else {
      throw new Error(`Unknown event ${event}.`);
    }
  }

  /**
   * 
   * @param {"update"} event 
   * @param {(oldValue: any, newValue: any) => void} eventListenerFn 
   */
  removeEventListener(event, eventListenerFn) {
    let targetListenersArr = null;
    if (event === 'update') {
      targetListenersArr = this.updateListeners;
    } else {
      throw new Error(`Unknown event ${event}.`);
    }

    if (!Array.isArray(targetListenersArr)) {
      throw new Error('Unexpected error. No listeners matched.');
    }

    const id = targetListenersArr.indexOf(eventListenerFn);

    if (id === -1) {
      throw new Error('Model does not have provided eventListenerFn attached.');
    }

    targetListenersArr.splice(id, 1);
  }

  validate() {
    if (!(this.validatorFn instanceof Function)) {
      throw new Error('Expected validatorFn to be Function.');
    }

    const validationResult = this.validatorFn(this.value);

    if (!validationResult) {
      this.invalidListeners.forEach(fn => {
        fn();
      });
    }

    return validationResult;
  }

  getValue() {
    if (!(this.valueGetterFn instanceof Function)) {
      throw new Error('Expected valueGetterFn to be Function.');
    }

    return this.valueGetterFn(this.value);
  }

  /**
   * 
   * @param {Model} anotherModel 
   * @param {(oldValue: any, newValue: any) => void} anotherModelUpdateListenerFn
   */
  bind(anotherModel, anotherModelUpdateListenerFn) {
    anotherModel.addEventListener('update', anotherModelUpdateListenerFn);
  }

  updateModel(newValue) {
    if (!(this.updateFn instanceof Function)) {
      throw new TypeError('Expected updateFn to be Function.');
    }

    const oldValue = this.value;
    this.value = this.updateFn(newValue);

    this.updateListeners.forEach(fn => {
      fn(oldValue, this.value);
    });
  }

  /**
   * 
   * @param {string} id 
   * @param {() => void} actionFn 
   */
  addAction(id, actionFn) {
    if (this.actions.some(action => action.id === id)) {
      throw new Error(`Action with id ${id} already exists in model ${this.id}`);
    }

    this.actions.push(new ModelAction(id, actionFn));
  }

  /**
   * 
   * @param {string} id 
   */
  removeAction(id) {
    const targetActionId = this.actions.indexOf(action => action.id === id);

    if (targetActionId < 0) {
      throw new Error(`Action with id ${id} not found in model ${this.id}.`);
    }

    this.actions.splice(targetActionId, 1);
  }

  /**
   * 
   * @param {string} id 
   */
  doAction(id) {
    const targetAction = this.actions.find(action => action.id === id);

    if (targetAction === null) {
      throw new Error(`Action with id ${id} not found in model ${this.id}.`);
    }

    targetAction.actionFn();
  }
}

export class ModelRepository {
  constructor() {
    /**
     * @type {Model[]}
     */
    this.models = [];
  }

  /**
   * 
   * @param  {...Model} models
   */
  addModels(...models) {
    if (!(
      Array.isArray(models) &&
      models.length > 0 &&
      models.every(m => m instanceof Model))) {
        throw new TypeError('Expected models parameter to be Array of Model.');
      }

    this.models.push(...models);
  }

  forEach(callbackFn) {
    this.models.forEach(callbackFn);
  }

  /**
   * 
   * @param {string} id 
   * @returns {Model}
   */
  find(id) {
    if (!(typeof id === 'string' || id instanceof String)) {
      throw new TypeError('Expected id to be string.');
    }

    const found = this.models.find(m => m.id === id);

    if (!found) {
      throw new Error(`Model with id ${id} not found in ModelRepository.`);
    }

    return found;
  }

  /**
   * 
   * @param {string} partialId
   * @returns {Model[]}
   */
  findByPartial(partialId) {
    if (!(typeof partialId === 'string' || partialId instanceof String)) {
      throw new TypeError('Expected partialId to be string.');
    }

    const found = this.models.filter(m => m.id.includes(partialId));

    if (found.length < 1) {
      throw new Error(`No models matched with partial id ${partialId}`);
    }

    return found;
  }
}
