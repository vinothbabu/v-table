function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js ***!
    \**********************************************************************/

  /*! exports provided: ɵngrx_modules_store_devtools_store_devtools_f, ɵngrx_modules_store_devtools_store_devtools_e, ɵngrx_modules_store_devtools_store_devtools_h, ɵngrx_modules_store_devtools_store_devtools_g, ɵngrx_modules_store_devtools_store_devtools_k, ɵngrx_modules_store_devtools_store_devtools_j, ɵngrx_modules_store_devtools_store_devtools_i, ɵngrx_modules_store_devtools_store_devtools_a, ɵngrx_modules_store_devtools_store_devtools_b, ɵngrx_modules_store_devtools_store_devtools_c, ɵngrx_modules_store_devtools_store_devtools_d, StoreDevtoolsModule, RECOMPUTE, StoreDevtools, StoreDevtoolsConfig */

  /***/
  function node_modulesNgrxStoreDevtoolsFesm2015StoreDevtoolsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_f", function () {
      return INITIAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_e", function () {
      return STORE_DEVTOOLS_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_h", function () {
      return createConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_g", function () {
      return noMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_k", function () {
      return DevtoolsDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_j", function () {
      return DevtoolsExtension;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_i", function () {
      return REDUX_DEVTOOLS_EXTENSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_a", function () {
      return IS_EXTENSION_OR_MONITOR_PRESENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_b", function () {
      return createIsExtensionOrMonitorPresent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_c", function () {
      return createReduxDevtoolsExtension;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵngrx_modules_store_devtools_store_devtools_d", function () {
      return createStateObservable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreDevtoolsModule", function () {
      return StoreDevtoolsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECOMPUTE", function () {
      return RECOMPUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreDevtools", function () {
      return StoreDevtools;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreDevtoolsConfig", function () {
      return StoreDevtoolsConfig;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license NgRx 8.6.0
     * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StoreDevtoolsConfig = function StoreDevtoolsConfig() {
      _classCallCheck(this, StoreDevtoolsConfig);
    };
    /** @type {?} */


    var STORE_DEVTOOLS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/devtools Options');
    /** @type {?} */

    var INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('@ngrx/devtools Initial Config');
    /**
     * @return {?}
     */

    function noMonitor() {
      return null;
    }
    /** @type {?} */


    var DEFAULT_NAME = 'NgRx Store DevTools';
    /**
     * @param {?} _options
     * @return {?}
     */

    function createConfig(_options) {
      /** @type {?} */
      var DEFAULT_OPTIONS = {
        maxAge: false,
        monitor: noMonitor,
        actionSanitizer: undefined,
        stateSanitizer: undefined,
        name: DEFAULT_NAME,
        serialize: false,
        logOnly: false,
        // Add all features explicitly. This prevent buggy behavior for
        // options like "lock" which might otherwise not show up.
        features: {
          pause: true,
          // start/pause recording of dispatched actions
          lock: true,
          // lock/unlock dispatching actions and side effects
          persist: true,
          // persist states on page reloading
          export: true,
          // export history of actions in a file
          import: 'custom',
          // import history of actions from a file
          jump: true,
          // jump back and forth (time travelling)
          skip: true,
          // skip (cancel) actions
          reorder: true,
          // drag and drop actions in the history list
          dispatch: true,
          // dispatch custom actions or action creators
          test: true
        }
      };
      /** @type {?} */

      var options = typeof _options === 'function' ? _options() : _options;
      /** @type {?} */

      var logOnly = options.logOnly ? {
        pause: true,
        export: true,
        test: true
      } : false;
      /** @type {?} */

      var features = options.features || logOnly || DEFAULT_OPTIONS.features;
      /** @type {?} */

      var config = Object.assign({}, DEFAULT_OPTIONS, {
        features: features
      }, options);

      if (config.maxAge && config.maxAge < 2) {
        throw new Error("Devtools 'maxAge' cannot be less than 2, got ".concat(config.maxAge));
      }

      return config;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var PERFORM_ACTION = 'PERFORM_ACTION';
    /** @type {?} */

    var REFRESH = 'REFRESH';
    /** @type {?} */

    var RESET = 'RESET';
    /** @type {?} */

    var ROLLBACK = 'ROLLBACK';
    /** @type {?} */

    var COMMIT = 'COMMIT';
    /** @type {?} */

    var SWEEP = 'SWEEP';
    /** @type {?} */

    var TOGGLE_ACTION = 'TOGGLE_ACTION';
    /** @type {?} */

    var SET_ACTIONS_ACTIVE = 'SET_ACTIONS_ACTIVE';
    /** @type {?} */

    var JUMP_TO_STATE = 'JUMP_TO_STATE';
    /** @type {?} */

    var JUMP_TO_ACTION = 'JUMP_TO_ACTION';
    /** @type {?} */

    var IMPORT_STATE = 'IMPORT_STATE';
    /** @type {?} */

    var LOCK_CHANGES = 'LOCK_CHANGES';
    /** @type {?} */

    var PAUSE_RECORDING = 'PAUSE_RECORDING';

    var PerformAction =
    /**
     * @param {?} action
     * @param {?} timestamp
     */
    function PerformAction(action, timestamp) {
      _classCallCheck(this, PerformAction);

      this.action = action;
      this.timestamp = timestamp;
      this.type = PERFORM_ACTION;

      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }
    };

    var Refresh = function Refresh() {
      _classCallCheck(this, Refresh);

      this.type = REFRESH;
    };

    var Reset =
    /**
     * @param {?} timestamp
     */
    function Reset(timestamp) {
      _classCallCheck(this, Reset);

      this.timestamp = timestamp;
      this.type = RESET;
    };

    var Rollback =
    /**
     * @param {?} timestamp
     */
    function Rollback(timestamp) {
      _classCallCheck(this, Rollback);

      this.timestamp = timestamp;
      this.type = ROLLBACK;
    };

    var Commit =
    /**
     * @param {?} timestamp
     */
    function Commit(timestamp) {
      _classCallCheck(this, Commit);

      this.timestamp = timestamp;
      this.type = COMMIT;
    };

    var Sweep = function Sweep() {
      _classCallCheck(this, Sweep);

      this.type = SWEEP;
    };

    var ToggleAction =
    /**
     * @param {?} id
     */
    function ToggleAction(id) {
      _classCallCheck(this, ToggleAction);

      this.id = id;
      this.type = TOGGLE_ACTION;
    };

    var JumpToState =
    /**
     * @param {?} index
     */
    function JumpToState(index) {
      _classCallCheck(this, JumpToState);

      this.index = index;
      this.type = JUMP_TO_STATE;
    };

    var JumpToAction =
    /**
     * @param {?} actionId
     */
    function JumpToAction(actionId) {
      _classCallCheck(this, JumpToAction);

      this.actionId = actionId;
      this.type = JUMP_TO_ACTION;
    };

    var ImportState =
    /**
     * @param {?} nextLiftedState
     */
    function ImportState(nextLiftedState) {
      _classCallCheck(this, ImportState);

      this.nextLiftedState = nextLiftedState;
      this.type = IMPORT_STATE;
    };

    var LockChanges =
    /**
     * @param {?} status
     */
    function LockChanges(status) {
      _classCallCheck(this, LockChanges);

      this.status = status;
      this.type = LOCK_CHANGES;
    };

    var PauseRecording =
    /**
     * @param {?} status
     */
    function PauseRecording(status) {
      _classCallCheck(this, PauseRecording);

      this.status = status;
      this.type = PAUSE_RECORDING;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DevtoolsDispatcher =
    /*#__PURE__*/
    function (_ngrx_store__WEBPACK_) {
      _inherits(DevtoolsDispatcher, _ngrx_store__WEBPACK_);

      function DevtoolsDispatcher() {
        _classCallCheck(this, DevtoolsDispatcher);

        return _possibleConstructorReturn(this, _getPrototypeOf(DevtoolsDispatcher).apply(this, arguments));
      }

      return DevtoolsDispatcher;
    }(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"]);

    DevtoolsDispatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */

    function difference(first, second) {
      return first.filter(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return second.indexOf(item) < 0;
      });
    }
    /**
     * Provides an app's view into the state of the lifted store.
     * @param {?} liftedState
     * @return {?}
     */


    function unliftState(liftedState) {
      var computedStates = liftedState.computedStates,
          currentStateIndex = liftedState.currentStateIndex; // At start up NgRx dispatches init actions,
      // When these init actions are being filtered out by the predicate or safe/block list options
      // we don't have a complete computed states yet.
      // At this point it could happen that we're out of bounds, when this happens we fall back to the last known state

      if (currentStateIndex >= computedStates.length) {
        var _state = computedStates[computedStates.length - 1].state;
        return _state;
      }

      var state = computedStates[currentStateIndex].state;
      return state;
    }
    /**
     * Lifts an app's action into an action on the lifted store.
     * @param {?} action
     * @return {?}
     */


    function liftAction(action) {
      return new PerformAction(action, +Date.now());
    }
    /**
     * Sanitizes given actions with given function.
     * @param {?} actionSanitizer
     * @param {?} actions
     * @return {?}
     */


    function sanitizeActions(actionSanitizer, actions) {
      return Object.keys(actions).reduce(
      /**
      * @param {?} sanitizedActions
      * @param {?} actionIdx
      * @return {?}
      */
      function (sanitizedActions, actionIdx) {
        /** @type {?} */
        var idx = Number(actionIdx);
        sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
        return sanitizedActions;
      },
      /** @type {?} */
      {});
    }
    /**
     * Sanitizes given action with given function.
     * @param {?} actionSanitizer
     * @param {?} action
     * @param {?} actionIdx
     * @return {?}
     */


    function sanitizeAction(actionSanitizer, action, actionIdx) {
      return Object.assign({}, action, {
        action: actionSanitizer(action.action, actionIdx)
      });
    }
    /**
     * Sanitizes given states with given function.
     * @param {?} stateSanitizer
     * @param {?} states
     * @return {?}
     */


    function sanitizeStates(stateSanitizer, states) {
      return states.map(
      /**
      * @param {?} computedState
      * @param {?} idx
      * @return {?}
      */
      function (computedState, idx) {
        return {
          state: sanitizeState(stateSanitizer, computedState.state, idx),
          error: computedState.error
        };
      });
    }
    /**
     * Sanitizes given state with given function.
     * @param {?} stateSanitizer
     * @param {?} state
     * @param {?} stateIdx
     * @return {?}
     */


    function sanitizeState(stateSanitizer, state, stateIdx) {
      return stateSanitizer(state, stateIdx);
    }
    /**
     * Read the config and tell if actions should be filtered
     * @param {?} config
     * @return {?}
     */


    function shouldFilterActions(config) {
      return config.predicate || config.actionsSafelist || config.actionsBlocklist;
    }
    /**
     * Return a full filtered lifted state
     * @param {?} liftedState
     * @param {?=} predicate
     * @param {?=} safelist
     * @param {?=} blocklist
     * @return {?}
     */


    function filterLiftedState(liftedState, predicate, safelist, blocklist) {
      /** @type {?} */
      var filteredStagedActionIds = [];
      /** @type {?} */

      var filteredActionsById = {};
      /** @type {?} */

      var filteredComputedStates = [];
      liftedState.stagedActionIds.forEach(
      /**
      * @param {?} id
      * @param {?} idx
      * @return {?}
      */
      function (id, idx) {
        /** @type {?} */
        var liftedAction = liftedState.actionsById[id];
        if (!liftedAction) return;

        if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
          return;
        }

        filteredActionsById[id] = liftedAction;
        filteredStagedActionIds.push(id);
        filteredComputedStates.push(liftedState.computedStates[idx]);
      });
      return Object.assign({}, liftedState, {
        stagedActionIds: filteredStagedActionIds,
        actionsById: filteredActionsById,
        computedStates: filteredComputedStates
      });
    }
    /**
     * Return true is the action should be ignored
     * @param {?} state
     * @param {?} action
     * @param {?=} predicate
     * @param {?=} safelist
     * @param {?=} blockedlist
     * @return {?}
     */


    function isActionFiltered(state, action, predicate, safelist, blockedlist) {
      /** @type {?} */
      var predicateMatch = predicate && !predicate(state, action.action);
      /** @type {?} */

      var safelistMatch = safelist && !action.action.type.match(safelist.map(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return escapeRegExp(s);
      }).join('|'));
      /** @type {?} */

      var blocklistMatch = blockedlist && action.action.type.match(blockedlist.map(
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        return escapeRegExp(s);
      }).join('|'));
      return predicateMatch || safelistMatch || blocklistMatch;
    }
    /**
     * Return string with escaped RegExp special characters
     * https://stackoverflow.com/a/6969486/1337347
     * @param {?} s
     * @return {?}
     */


    function escapeRegExp(s) {
      return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ExtensionActionTypes = {
      START: 'START',
      DISPATCH: 'DISPATCH',
      STOP: 'STOP',
      ACTION: 'ACTION'
    };
    /** @type {?} */

    var REDUX_DEVTOOLS_EXTENSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Redux Devtools Extension');

    var DevtoolsExtension =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} devtoolsExtension
       * @param {?} config
       * @param {?} dispatcher
       */
      function DevtoolsExtension(devtoolsExtension, config, dispatcher) {
        _classCallCheck(this, DevtoolsExtension);

        this.config = config;
        this.dispatcher = dispatcher;
        this.devtoolsExtension = devtoolsExtension;
        this.createActionStreams();
      }
      /**
       * @param {?} action
       * @param {?} state
       * @return {?}
       */


      _createClass(DevtoolsExtension, [{
        key: "notify",
        value: function notify(action, state) {
          var _this = this;

          if (!this.devtoolsExtension) {
            return;
          } // Check to see if the action requires a full update of the liftedState.
          // If it is a simple action generated by the user's app and the recording
          // is not locked/paused, only send the action and the current state (fast).
          //
          // A full liftedState update (slow: serializes the entire liftedState) is
          // only required when:
          //   a) redux-devtools-extension fires the @@Init action (ignored by
          //      @ngrx/store-devtools)
          //   b) an action is generated by an @ngrx module (e.g. @ngrx/effects/init
          //      or @ngrx/store/update-reducers)
          //   c) the state has been recomputed due to time-traveling
          //   d) any action that is not a PerformAction to err on the side of
          //      caution.


          if (action.type === PERFORM_ACTION) {
            if (state.isLocked || state.isPaused) {
              return;
            }
            /** @type {?} */


            var currentState = unliftState(state);

            if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
              return;
            }
            /** @type {?} */


            var sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
            /** @type {?} */

            var sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
            this.sendToReduxDevtools(
            /**
            * @return {?}
            */
            function () {
              return _this.extensionConnection.send(sanitizedAction, sanitizedState);
            });
          } else {
            // Requires full state update

            /** @type {?} */
            var sanitizedLiftedState = Object.assign({}, state, {
              stagedActionIds: state.stagedActionIds,
              actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
              computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
            });
            this.sendToReduxDevtools(
            /**
            * @return {?}
            */
            function () {
              return _this.devtoolsExtension.send(null, sanitizedLiftedState, _this.getExtensionConfig(_this.config));
            });
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "createChangesObservable",
        value: function createChangesObservable() {
          var _this2 = this;

          if (!this.devtoolsExtension) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} subscriber
          * @return {?}
          */
          function (subscriber) {
            /** @type {?} */
            var connection = _this2.devtoolsExtension.connect(_this2.getExtensionConfig(_this2.config));

            _this2.extensionConnection = connection;
            connection.init();
            connection.subscribe(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return subscriber.next(change);
            });
            return connection.unsubscribe;
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "createActionStreams",
        value: function createActionStreams() {
          var _this3 = this;

          // Listens to all changes

          /** @type {?} */
          var changes$ = this.createChangesObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])()); // Listen for the start action

          /** @type {?} */

          var start$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return change.type === ExtensionActionTypes.START;
          })); // Listen for the stop action

          /** @type {?} */

          var stop$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return change.type === ExtensionActionTypes.STOP;
          })); // Listen for lifted actions

          /** @type {?} */

          var liftedActions$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return change.type === ExtensionActionTypes.DISPATCH;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return _this3.unwrapAction(change.payload);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(
          /**
          * @param {?} action
          * @return {?}
          */
          function (action) {
            if (action.type === IMPORT_STATE) {
              // State imports may happen in two situations:
              // 1. Explicitly by user
              // 2. User activated the "persist state accross reloads" option
              //    and now the state is imported during reload.
              // Because of option 2, we need to give possible
              // lazy loaded reducers time to instantiate.
              // As soon as there is no UPDATE action within 1 second,
              // it is assumed that all reducers are loaded.
              return _this3.dispatcher.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
              /**
              * @param {?} action
              * @return {?}
              */
              function (action) {
                return action.type === _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["UPDATE"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
              /**
              * @return {?}
              */
              function () {
                return action;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(
              /**
              * @return {?}
              */
              function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(action);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(action);
            }
          })); // Listen for unlifted actions

          /** @type {?} */

          var actions$ = changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return change.type === ExtensionActionTypes.ACTION;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return _this3.unwrapAction(change.payload);
          }));
          /** @type {?} */

          var actionsUntilStop$ = actions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(stop$));
          /** @type {?} */

          var liftedUntilStop$ = liftedActions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(stop$));
          this.start$ = start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(stop$)); // Only take the action sources between the start/stop events

          this.actions$ = this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return actionsUntilStop$;
          }));
          this.liftedActions$ = this.start$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return liftedUntilStop$;
          }));
        }
        /**
         * @private
         * @param {?} action
         * @return {?}
         */

      }, {
        key: "unwrapAction",
        value: function unwrapAction(action) {
          return typeof action === 'string' ? eval("(".concat(action, ")")) : action;
        }
        /**
         * @private
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "getExtensionConfig",
        value: function getExtensionConfig(config) {
          /** @type {?} */
          var extensionOptions = {
            name: config.name,
            features: config.features,
            serialize: config.serialize
          };

          if (config.maxAge !== false
          /* support === 0 */
          ) {
              extensionOptions.maxAge = config.maxAge;
            }

          return extensionOptions;
        }
        /**
         * @private
         * @param {?} send
         * @return {?}
         */

      }, {
        key: "sendToReduxDevtools",
        value: function sendToReduxDevtools(send) {
          try {
            send();
          } catch (err) {
            console.warn('@ngrx/store-devtools: something went wrong inside the redux devtools', err);
          }
        }
      }]);

      return DevtoolsExtension;
    }();

    DevtoolsExtension.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    DevtoolsExtension.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [REDUX_DEVTOOLS_EXTENSION]
        }]
      }, {
        type: StoreDevtoolsConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [STORE_DEVTOOLS_CONFIG]
        }]
      }, {
        type: DevtoolsDispatcher
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var INIT_ACTION = {
      type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["INIT"]
    };
    /** @type {?} */

    var RECOMPUTE =
    /** @type {?} */
    '@ngrx/store-devtools/recompute';
    /** @type {?} */

    var RECOMPUTE_ACTION = {
      type: RECOMPUTE
    };
    /**
     * Computes the next entry in the log by applying an action.
     * @param {?} reducer
     * @param {?} action
     * @param {?} state
     * @param {?} error
     * @param {?} errorHandler
     * @return {?}
     */

    function computeNextEntry(reducer, action, state, error, errorHandler) {
      if (error) {
        return {
          state: state,
          error: 'Interrupted by an error up the chain'
        };
      }
      /** @type {?} */


      var nextState = state;
      /** @type {?} */

      var nextError;

      try {
        nextState = reducer(state, action);
      } catch (err) {
        nextError = err.toString();
        errorHandler.handleError(err.stack || err);
      }

      return {
        state: nextState,
        error: nextError
      };
    }
    /**
     * Runs the reducer on invalidated actions to get a fresh computation log.
     * @param {?} computedStates
     * @param {?} minInvalidatedStateIndex
     * @param {?} reducer
     * @param {?} committedState
     * @param {?} actionsById
     * @param {?} stagedActionIds
     * @param {?} skippedActionIds
     * @param {?} errorHandler
     * @param {?} isPaused
     * @return {?}
     */


    function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
      // Optimization: exit early and return the same reference
      // if we know nothing could have changed.
      if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
        return computedStates;
      }
      /** @type {?} */


      var nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex); // If the recording is paused, recompute all states up until the pause state,
      // else recompute all states.

      /** @type {?} */

      var lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);

      for (var i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
        /** @type {?} */
        var actionId = stagedActionIds[i];
        /** @type {?} */

        var action = actionsById[actionId].action;
        /** @type {?} */

        var previousEntry = nextComputedStates[i - 1];
        /** @type {?} */

        var previousState = previousEntry ? previousEntry.state : committedState;
        /** @type {?} */

        var previousError = previousEntry ? previousEntry.error : undefined;
        /** @type {?} */

        var shouldSkip = skippedActionIds.indexOf(actionId) > -1;
        /** @type {?} */

        var entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
        nextComputedStates.push(entry);
      } // If the recording is paused, the last state will not be recomputed,
      // because it's essentially not part of the state history.


      if (isPaused) {
        nextComputedStates.push(computedStates[computedStates.length - 1]);
      }

      return nextComputedStates;
    }
    /**
     * @param {?=} initialCommittedState
     * @param {?=} monitorReducer
     * @return {?}
     */


    function liftInitialState(initialCommittedState, monitorReducer) {
      return {
        monitorState: monitorReducer(undefined, {}),
        nextActionId: 1,
        actionsById: {
          0: liftAction(INIT_ACTION)
        },
        stagedActionIds: [0],
        skippedActionIds: [],
        committedState: initialCommittedState,
        currentStateIndex: 0,
        computedStates: [],
        isLocked: false,
        isPaused: false
      };
    }
    /**
     * Creates a history state reducer from an app's reducer.
     * @param {?} initialCommittedState
     * @param {?} initialLiftedState
     * @param {?} errorHandler
     * @param {?=} monitorReducer
     * @param {?=} options
     * @return {?}
     */


    function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      /**
       * Manages how the history actions modify the history state.
       */
      return (
        /**
        * @param {?} reducer
        * @return {?}
        */
        function (reducer) {
          return (
            /**
            * @param {?} liftedState
            * @param {?} liftedAction
            * @return {?}
            */
            function (liftedState, liftedAction) {
              var _ref = liftedState || initialLiftedState,
                  monitorState = _ref.monitorState,
                  actionsById = _ref.actionsById,
                  nextActionId = _ref.nextActionId,
                  stagedActionIds = _ref.stagedActionIds,
                  skippedActionIds = _ref.skippedActionIds,
                  committedState = _ref.committedState,
                  currentStateIndex = _ref.currentStateIndex,
                  computedStates = _ref.computedStates,
                  isLocked = _ref.isLocked,
                  isPaused = _ref.isPaused;

              if (!liftedState) {
                // Prevent mutating initialLiftedState
                actionsById = Object.create(actionsById);
              }
              /**
               * @param {?} n
               * @return {?}
               */


              function commitExcessActions(n) {
                // Auto-commits n-number of excess actions.

                /** @type {?} */
                var excess = n;
                /** @type {?} */

                var idsToDelete = stagedActionIds.slice(1, excess + 1);

                for (var i = 0; i < idsToDelete.length; i++) {
                  if (computedStates[i + 1].error) {
                    // Stop if error is found. Commit actions up to error.
                    excess = i;
                    idsToDelete = stagedActionIds.slice(1, excess + 1);
                    break;
                  } else {
                    delete actionsById[idsToDelete[i]];
                  }
                }

                skippedActionIds = skippedActionIds.filter(
                /**
                * @param {?} id
                * @return {?}
                */
                function (id) {
                  return idsToDelete.indexOf(id) === -1;
                });
                stagedActionIds = [0].concat(_toConsumableArray(stagedActionIds.slice(excess + 1)));
                committedState = computedStates[excess].state;
                computedStates = computedStates.slice(excess);
                currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
              }
              /**
               * @return {?}
               */


              function commitChanges() {
                // Consider the last committed state the new starting point.
                // Squash any staged actions into a single committed state.
                actionsById = {
                  0: liftAction(INIT_ACTION)
                };
                nextActionId = 1;
                stagedActionIds = [0];
                skippedActionIds = [];
                committedState = computedStates[currentStateIndex].state;
                currentStateIndex = 0;
                computedStates = [];
              } // By default, aggressively recompute every state whatever happens.
              // This has O(n) performance, so we'll override this to a sensible
              // value whenever we feel like we don't have to recompute the states.

              /** @type {?} */


              var minInvalidatedStateIndex = 0;

              switch (liftedAction.type) {
                case LOCK_CHANGES:
                  {
                    isLocked = liftedAction.status;
                    minInvalidatedStateIndex = Infinity;
                    break;
                  }

                case PAUSE_RECORDING:
                  {
                    isPaused = liftedAction.status;

                    if (isPaused) {
                      // Add a pause action to signal the devtools-user the recording is paused.
                      // The corresponding state will be overwritten on each update to always contain
                      // the latest state (see Actions.PERFORM_ACTION).
                      stagedActionIds = [].concat(_toConsumableArray(stagedActionIds), [nextActionId]);
                      actionsById[nextActionId] = new PerformAction({
                        type: '@ngrx/devtools/pause'
                      }, +Date.now());
                      nextActionId++;
                      minInvalidatedStateIndex = stagedActionIds.length - 1;
                      computedStates = computedStates.concat(computedStates[computedStates.length - 1]);

                      if (currentStateIndex === stagedActionIds.length - 2) {
                        currentStateIndex++;
                      }

                      minInvalidatedStateIndex = Infinity;
                    } else {
                      commitChanges();
                    }

                    break;
                  }

                case RESET:
                  {
                    // Get back to the state the store was created with.
                    actionsById = {
                      0: liftAction(INIT_ACTION)
                    };
                    nextActionId = 1;
                    stagedActionIds = [0];
                    skippedActionIds = [];
                    committedState = initialCommittedState;
                    currentStateIndex = 0;
                    computedStates = [];
                    break;
                  }

                case COMMIT:
                  {
                    commitChanges();
                    break;
                  }

                case ROLLBACK:
                  {
                    // Forget about any staged actions.
                    // Start again from the last committed state.
                    actionsById = {
                      0: liftAction(INIT_ACTION)
                    };
                    nextActionId = 1;
                    stagedActionIds = [0];
                    skippedActionIds = [];
                    currentStateIndex = 0;
                    computedStates = [];
                    break;
                  }

                case TOGGLE_ACTION:
                  {
                    // Toggle whether an action with given ID is skipped.
                    // Being skipped means it is a no-op during the computation.
                    var actionId = liftedAction.id;
                    /** @type {?} */

                    var index = skippedActionIds.indexOf(actionId);

                    if (index === -1) {
                      skippedActionIds = [actionId].concat(_toConsumableArray(skippedActionIds));
                    } else {
                      skippedActionIds = skippedActionIds.filter(
                      /**
                      * @param {?} id
                      * @return {?}
                      */
                      function (id) {
                        return id !== actionId;
                      });
                    } // Optimization: we know history before this action hasn't changed


                    minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
                    break;
                  }

                case SET_ACTIONS_ACTIVE:
                  {
                    // Toggle whether an action with given ID is skipped.
                    // Being skipped means it is a no-op during the computation.
                    var start = liftedAction.start,
                        end = liftedAction.end,
                        active = liftedAction.active;
                    /** @type {?} */

                    var actionIds = [];

                    for (var i = start; i < end; i++) {
                      actionIds.push(i);
                    }

                    if (active) {
                      skippedActionIds = difference(skippedActionIds, actionIds);
                    } else {
                      skippedActionIds = [].concat(_toConsumableArray(skippedActionIds), actionIds);
                    } // Optimization: we know history before this action hasn't changed


                    minInvalidatedStateIndex = stagedActionIds.indexOf(start);
                    break;
                  }

                case JUMP_TO_STATE:
                  {
                    // Without recomputing anything, move the pointer that tell us
                    // which state is considered the current one. Useful for sliders.
                    currentStateIndex = liftedAction.index; // Optimization: we know the history has not changed.

                    minInvalidatedStateIndex = Infinity;
                    break;
                  }

                case JUMP_TO_ACTION:
                  {
                    // Jumps to a corresponding state to a specific action.
                    // Useful when filtering actions.

                    /** @type {?} */
                    var _index = stagedActionIds.indexOf(liftedAction.actionId);

                    if (_index !== -1) currentStateIndex = _index;
                    minInvalidatedStateIndex = Infinity;
                    break;
                  }

                case SWEEP:
                  {
                    // Forget any actions that are currently being skipped.
                    stagedActionIds = difference(stagedActionIds, skippedActionIds);
                    skippedActionIds = [];
                    currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
                    break;
                  }

                case PERFORM_ACTION:
                  {
                    // Ignore action and return state as is if recording is locked
                    if (isLocked) {
                      return liftedState || initialLiftedState;
                    }

                    if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
                      // If recording is paused or if the action should be ignored, overwrite the last state
                      // (corresponds to the pause action) and keep everything else as is.
                      // This way, the app gets the new current state while the devtools
                      // do not record another action.

                      /** @type {?} */
                      var lastState = computedStates[computedStates.length - 1];
                      computedStates = [].concat(_toConsumableArray(computedStates.slice(0, -1)), [computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)]);
                      minInvalidatedStateIndex = Infinity;
                      break;
                    } // Auto-commit as new actions come in.


                    if (options.maxAge && stagedActionIds.length === options.maxAge) {
                      commitExcessActions(1);
                    }

                    if (currentStateIndex === stagedActionIds.length - 1) {
                      currentStateIndex++;
                    }
                    /** @type {?} */


                    var _actionId = nextActionId++; // Mutation! This is the hottest path, and we optimize on purpose.
                    // It is safe because we set a new key in a cache dictionary.


                    actionsById[_actionId] = liftedAction;
                    stagedActionIds = [].concat(_toConsumableArray(stagedActionIds), [_actionId]); // Optimization: we know that only the new action needs computing.

                    minInvalidatedStateIndex = stagedActionIds.length - 1;
                    break;
                  }

                case IMPORT_STATE:
                  {
                    // Completely replace everything.
                    var _liftedAction$nextLif = liftedAction.nextLiftedState;
                    monitorState = _liftedAction$nextLif.monitorState;
                    actionsById = _liftedAction$nextLif.actionsById;
                    nextActionId = _liftedAction$nextLif.nextActionId;
                    stagedActionIds = _liftedAction$nextLif.stagedActionIds;
                    skippedActionIds = _liftedAction$nextLif.skippedActionIds;
                    committedState = _liftedAction$nextLif.committedState;
                    currentStateIndex = _liftedAction$nextLif.currentStateIndex;
                    computedStates = _liftedAction$nextLif.computedStates;
                    isLocked = _liftedAction$nextLif.isLocked;
                    isPaused = _liftedAction$nextLif.isPaused;
                    break;
                  }

                case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["INIT"]:
                  {
                    // Always recompute states on hot reload and init.
                    minInvalidatedStateIndex = 0;

                    if (options.maxAge && stagedActionIds.length > options.maxAge) {
                      // States must be recomputed before committing excess.
                      computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
                      commitExcessActions(stagedActionIds.length - options.maxAge); // Avoid double computation.

                      minInvalidatedStateIndex = Infinity;
                    }

                    break;
                  }

                case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]:
                  {
                    /** @type {?} */
                    var stateHasErrors = computedStates.filter(
                    /**
                    * @param {?} state
                    * @return {?}
                    */
                    function (state) {
                      return state.error;
                    }).length > 0;

                    if (stateHasErrors) {
                      // Recompute all states
                      minInvalidatedStateIndex = 0;

                      if (options.maxAge && stagedActionIds.length > options.maxAge) {
                        // States must be recomputed before committing excess.
                        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
                        commitExcessActions(stagedActionIds.length - options.maxAge); // Avoid double computation.

                        minInvalidatedStateIndex = Infinity;
                      }
                    } else {
                      // If not paused/locked, add a new action to signal devtools-user
                      // that there was a reducer update.
                      if (!isPaused && !isLocked) {
                        if (currentStateIndex === stagedActionIds.length - 1) {
                          currentStateIndex++;
                        } // Add a new action to only recompute state

                        /** @type {?} */


                        var _actionId2 = nextActionId++;

                        actionsById[_actionId2] = new PerformAction(liftedAction, +Date.now());
                        stagedActionIds = [].concat(_toConsumableArray(stagedActionIds), [_actionId2]);
                        minInvalidatedStateIndex = stagedActionIds.length - 1;
                        computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
                      } // Recompute state history with latest reducer and update action


                      computedStates = computedStates.map(
                      /**
                      * @param {?} cmp
                      * @return {?}
                      */
                      function (cmp) {
                        return Object.assign({}, cmp, {
                          state: reducer(cmp.state, RECOMPUTE_ACTION)
                        });
                      });
                      currentStateIndex = stagedActionIds.length - 1;

                      if (options.maxAge && stagedActionIds.length > options.maxAge) {
                        commitExcessActions(stagedActionIds.length - options.maxAge);
                      } // Avoid double computation.


                      minInvalidatedStateIndex = Infinity;
                    }

                    break;
                  }

                default:
                  {
                    // If the action is not recognized, it's a monitor action.
                    // Optimization: a monitor action can't change history.
                    minInvalidatedStateIndex = Infinity;
                    break;
                  }
              }

              computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
              monitorState = monitorReducer(monitorState, liftedAction);
              return {
                monitorState: monitorState,
                actionsById: actionsById,
                nextActionId: nextActionId,
                stagedActionIds: stagedActionIds,
                skippedActionIds: skippedActionIds,
                committedState: committedState,
                currentStateIndex: currentStateIndex,
                computedStates: computedStates,
                isLocked: isLocked,
                isPaused: isPaused
              };
            }
          );
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StoreDevtools =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} dispatcher
       * @param {?} actions$
       * @param {?} reducers$
       * @param {?} extension
       * @param {?} scannedActions
       * @param {?} errorHandler
       * @param {?} initialState
       * @param {?} config
       */
      function StoreDevtools(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState, config) {
        var _this4 = this;

        _classCallCheck(this, StoreDevtools);

        /** @type {?} */
        var liftedInitialState = liftInitialState(initialState, config.monitor);
        /** @type {?} */

        var liftReducer = liftReducerWith(initialState, liftedInitialState, errorHandler, config.monitor, config);
        /** @type {?} */

        var liftedAction$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(actions$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1)), extension.actions$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(liftAction)), dispatcher, extension.liftedActions$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_2__["queueScheduler"]));
        /** @type {?} */

        var liftedReducer$ = reducers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(liftReducer));
        /** @type {?} */

        var liftedStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        /** @type {?} */

        var liftedStateSubscription = liftedAction$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(liftedReducer$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(
        /**
        * @param {?} __0
        * @param {?} __1
        * @return {?}
        */
        function (_ref2, _ref3) {
          var liftedState = _ref2.state;

          var _ref4 = _slicedToArray(_ref3, 2),
              action = _ref4[0],
              reducer = _ref4[1];

          /** @type {?} */
          var reducedLiftedState = reducer(liftedState, action); // On full state update
          // If we have actions filters, we must filter completely our lifted state to be sync with the extension

          if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
            reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
          } // Extension should be sent the sanitized lifted state


          extension.notify(action, reducedLiftedState);
          return {
            state: reducedLiftedState,
            action: action
          };
        }, {
          state: liftedInitialState,
          action:
          /** @type {?} */
          null
        })).subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref5) {
          var state = _ref5.state,
              action = _ref5.action;
          liftedStateSubject.next(state);

          if (action.type === PERFORM_ACTION) {
            /** @type {?} */
            var unliftedAction =
            /** @type {?} */
            action.action;
            scannedActions.next(unliftedAction);
          }
        });
        /** @type {?} */

        var extensionStartSubscription = extension.start$.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this4.refresh();
        });
        /** @type {?} */

        var liftedState$ =
        /** @type {?} */
        liftedStateSubject.asObservable();
        /** @type {?} */

        var state$ = liftedState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(unliftState));
        this.extensionStartSubscription = extensionStartSubscription;
        this.stateSubscription = liftedStateSubscription;
        this.dispatcher = dispatcher;
        this.liftedState = liftedState$;
        this.state = state$;
      }
      /**
       * @param {?} action
       * @return {?}
       */


      _createClass(StoreDevtools, [{
        key: "dispatch",
        value: function dispatch(action) {
          this.dispatcher.next(action);
        }
        /**
         * @param {?} action
         * @return {?}
         */

      }, {
        key: "next",
        value: function next(action) {
          this.dispatcher.next(action);
        }
        /**
         * @param {?} error
         * @return {?}
         */

      }, {
        key: "error",
        value: function error(_error) {}
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {}
        /**
         * @param {?} action
         * @return {?}
         */

      }, {
        key: "performAction",
        value: function performAction(action) {
          this.dispatch(new PerformAction(action, +Date.now()));
        }
        /**
         * @return {?}
         */

      }, {
        key: "refresh",
        value: function refresh() {
          this.dispatch(new Refresh());
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.dispatch(new Reset(+Date.now()));
        }
        /**
         * @return {?}
         */

      }, {
        key: "rollback",
        value: function rollback() {
          this.dispatch(new Rollback(+Date.now()));
        }
        /**
         * @return {?}
         */

      }, {
        key: "commit",
        value: function commit() {
          this.dispatch(new Commit(+Date.now()));
        }
        /**
         * @return {?}
         */

      }, {
        key: "sweep",
        value: function sweep() {
          this.dispatch(new Sweep());
        }
        /**
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "toggleAction",
        value: function toggleAction(id) {
          this.dispatch(new ToggleAction(id));
        }
        /**
         * @param {?} actionId
         * @return {?}
         */

      }, {
        key: "jumpToAction",
        value: function jumpToAction(actionId) {
          this.dispatch(new JumpToAction(actionId));
        }
        /**
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "jumpToState",
        value: function jumpToState(index) {
          this.dispatch(new JumpToState(index));
        }
        /**
         * @param {?} nextLiftedState
         * @return {?}
         */

      }, {
        key: "importState",
        value: function importState(nextLiftedState) {
          this.dispatch(new ImportState(nextLiftedState));
        }
        /**
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "lockChanges",
        value: function lockChanges(status) {
          this.dispatch(new LockChanges(status));
        }
        /**
         * @param {?} status
         * @return {?}
         */

      }, {
        key: "pauseRecording",
        value: function pauseRecording(status) {
          this.dispatch(new PauseRecording(status));
        }
      }]);

      return StoreDevtools;
    }();

    StoreDevtools.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    StoreDevtools.ctorParameters = function () {
      return [{
        type: DevtoolsDispatcher
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ActionsSubject"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ReducerObservable"]
      }, {
        type: DevtoolsExtension
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ScannedActionsSubject"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATE"]]
        }]
      }, {
        type: StoreDevtoolsConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [STORE_DEVTOOLS_CONFIG]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var IS_EXTENSION_OR_MONITOR_PRESENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Is Devtools Extension or Monitor Present');
    /**
     * @param {?} extension
     * @param {?} config
     * @return {?}
     */

    function createIsExtensionOrMonitorPresent(extension, config) {
      return Boolean(extension) || config.monitor !== noMonitor;
    }
    /**
     * @return {?}
     */


    function createReduxDevtoolsExtension() {
      /** @type {?} */
      var extensionKey = '__REDUX_DEVTOOLS_EXTENSION__';

      if (typeof window === 'object' && typeof
      /** @type {?} */
      window[extensionKey] !== 'undefined') {
        return (
          /** @type {?} */
          window[extensionKey]
        );
      } else {
        return null;
      }
    }
    /**
     * @param {?} devtools
     * @return {?}
     */


    function createStateObservable(devtools) {
      return devtools.state;
    }

    var StoreDevtoolsModule =
    /*#__PURE__*/
    function () {
      function StoreDevtoolsModule() {
        _classCallCheck(this, StoreDevtoolsModule);
      }

      _createClass(StoreDevtoolsModule, null, [{
        key: "instrument",

        /**
         * @param {?=} options
         * @return {?}
         */
        value: function instrument() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: StoreDevtoolsModule,
            providers: [DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
              provide: INITIAL_OPTIONS,
              useValue: options
            }, {
              provide: IS_EXTENSION_OR_MONITOR_PRESENT,
              deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
              useFactory: createIsExtensionOrMonitorPresent
            }, {
              provide: REDUX_DEVTOOLS_EXTENSION,
              useFactory: createReduxDevtoolsExtension
            }, {
              provide: STORE_DEVTOOLS_CONFIG,
              deps: [INITIAL_OPTIONS],
              useFactory: createConfig
            }, {
              provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StateObservable"],
              deps: [StoreDevtools],
              useFactory: createStateObservable
            }, {
              provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["ReducerManagerDispatcher"],
              useExisting: DevtoolsDispatcher
            }]
          };
        }
      }]);

      return StoreDevtoolsModule;
    }();

    StoreDevtoolsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{}]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=store-devtools.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account/account.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account/account.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container table-responsive\">\n    \n    <v-table [options]=\"tableOptions\"></v-table>\n\n    <button type=\"button\" class=\"btn btn-primary float-right\" [disabled]=\"!hasMore\" (click)=\"loadMore()\">Load\n        More</button>\n\n    <div class=\"alert alert-dark\" *ngIf=\"loading$ | async\">\n        Fetching account info\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common/v-table/v-table.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common/v-table/v-table.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonVTableVTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <table class=\"table-striped table-hover custom-table\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let column of options.columns\" (click)=\"sortHeader(column.value)\"\n                    [ngClass]=\"{ 'sorting': isSorting(column.value), 'sorting_asc': isSortAsc(column.value), 'sorting_desc': isSortDesc(column.value) }\">\n                    <span [innerHTML]=\"column.name\"></span>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of (options.records | async)\">\n                <td *ngFor=\"let column of options.columns\">{{getValue(row, column)}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>";
    /***/
  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account/account.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
    /* harmony import */


    var _state_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./state/reducer */
    "./src/app/account/state/reducer.ts");
    /* harmony import */


    var _common_v_table_v_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../common/v-table/v-table.component */
    "./src/app/common/v-table/v-table.component.ts");

    var routes = [{
      path: '',
      component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
    }];

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], _common_v_table_v_table_component__WEBPACK_IMPORTED_MODULE_8__["VTableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('accountFeature', _state_reducer__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
        metaReducers: _state_reducer__WEBPACK_IMPORTED_MODULE_7__["metaReducers"]
      }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument()]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/account/account/account.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/account/account/account.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountAccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/account/account.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/account/account/account.component.ts ***!
    \******************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppAccountAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _state_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../state/account.service */
    "./src/app/account/state/account.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _state_account_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state/account.reducers */
    "./src/app/account/state/account.reducers.ts");

    var AccountComponent =
    /*#__PURE__*/
    function () {
      function AccountComponent(accountService, store) {
        _classCallCheck(this, AccountComponent);

        this.accountService = accountService;
        this.store = store;
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.account$ = this.store.select(_state_account_reducers__WEBPACK_IMPORTED_MODULE_4__["getAccountData"]);
          this.loading$ = this.store.select(_state_account_reducers__WEBPACK_IMPORTED_MODULE_4__["getLoading"]);
          this.store.select(_state_account_reducers__WEBPACK_IMPORTED_MODULE_4__["getHasMore"]).subscribe(function (data) {
            return _this5.hasMore = data;
          });
          this.store.select(_state_account_reducers__WEBPACK_IMPORTED_MODULE_4__["getPage"]).subscribe(function (data) {
            return _this5.page = data;
          });
          this.fetchAccountInfo();
          this.initTableOptions();
        }
      }, {
        key: "loadMore",
        value: function loadMore() {
          this.fetchAccountInfo();
        }
      }, {
        key: "fetchAccountInfo",
        value: function fetchAccountInfo() {
          if (this.hasMore) {
            this.accountService.get(this.page);
          }
        }
      }, {
        key: "initTableOptions",
        value: function initTableOptions() {
          var columns = [{
            name: 'Account',
            value: 'account'
          }, {
            name: 'Change',
            value: 'change'
          }];
          this.tableOptions = {
            records: this.account$,
            columns: columns,
            config: {
              sortDirection: "asc"
            }
          };
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ctorParameters = function () {
      return [{
        type: _state_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account/account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.css */
      "./src/app/account/account/account.component.css")).default]
    })], AccountComponent);
    /***/
  },

  /***/
  "./src/app/account/state/account.reducers.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/state/account.reducers.ts ***!
    \***************************************************/

  /*! exports provided: AccountReducer, getAccountState, getLoading, getAccountData, getHasMore, getPage */

  /***/
  function srcAppAccountStateAccountReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountReducer", function () {
      return AccountReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccountState", function () {
      return getAccountState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLoading", function () {
      return getLoading;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccountData", function () {
      return getAccountData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getHasMore", function () {
      return getHasMore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPage", function () {
      return getPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _account_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./account.actions */
    "./src/app/account/state/account.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var accountInitialState = {
      loading: false,
      data: [],
      hasMore: true,
      page: 1
    };

    function AccountReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : accountInitialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case _account_actions__WEBPACK_IMPORTED_MODULE_1__["SET_LOADING"]:
          return Object.assign({}, state, {
            loading: action.payload
          });

        case _account_actions__WEBPACK_IMPORTED_MODULE_1__["ADD"]:
          return Object.assign({}, state, {
            loading: false,
            data: [].concat(_toConsumableArray(state.data), _toConsumableArray(action.payload))
          });

        case _account_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_NEXT_PAGE"]:
          return Object.assign({}, state, {
            loading: false,
            page: action.payload.page,
            hasMore: action.payload.hasMore
          });

        default:
          return state;
      }
    }

    var getAccountState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('accountFeature');
    var getLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAccountState, function (state) {
      return state.accountInitialState.loading;
    });
    var getAccountData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAccountState, function (state) {
      return state.accountInitialState.data;
    });
    var getHasMore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAccountState, function (state) {
      return state.accountInitialState.hasMore;
    });
    var getPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getAccountState, function (state) {
      return state.accountInitialState.page;
    });
    /***/
  },

  /***/
  "./src/app/account/state/reducer.ts":
  /*!******************************************!*\
    !*** ./src/app/account/state/reducer.ts ***!
    \******************************************/

  /*! exports provided: reducers, logger, metaReducers */

  /***/
  function srcAppAccountStateReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducers", function () {
      return reducers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "logger", function () {
      return logger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
      return metaReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _account_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./account.reducers */
    "./src/app/account/state/account.reducers.ts");

    var reducers = {
      accountInitialState: _account_reducers__WEBPACK_IMPORTED_MODULE_1__["AccountReducer"]
    };

    function logger(reducer) {
      return function (state, action) {
        if (action.type === 'clear state') {
          state = undefined;
        }

        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
      };
    }

    var metaReducers = [logger];
    /***/
  },

  /***/
  "./src/app/common/v-table/v-table.component.css":
  /*!******************************************************!*\
    !*** ./src/app/common/v-table/v-table.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCommonVTableVTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi92LXRhYmxlL3YtdGFibGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/common/v-table/v-table.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/common/v-table/v-table.component.ts ***!
    \*****************************************************/

  /*! exports provided: VTableComponent */

  /***/
  function srcAppCommonVTableVTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VTableComponent", function () {
      return VTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VTableComponent =
    /*#__PURE__*/
    function () {
      function VTableComponent() {
        _classCallCheck(this, VTableComponent);

        this.sort = function (arr, field, reverse, primer) {
          var key = primer ? function (x) {
            return primer(x[field]);
          } : function (x) {
            return x[field];
          };
          console.log("key", key);
          reverse = !reverse ? 1 : -1;
          return arr.sort(function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
          });
        };
      }

      _createClass(VTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.options.records.subscribe(function (val) {
            // deal with asynchronous Observable result
            _this6.sortedData = val;
          });
        }
      }, {
        key: "isSorting",
        value: function isSorting(name) {
          return this.options.config.sortBy !== name && name !== '';
        }
      }, {
        key: "isSortAsc",
        value: function isSortAsc(name) {
          var isSortAsc = this.options.config.sortBy === name && this.options.config.sortDirection === 'asc';
          return isSortAsc;
        }
      }, {
        key: "isSortDesc",
        value: function isSortDesc(name) {
          var isSortDesc = this.options.config.sortBy === name && this.options.config.sortDirection === 'desc';
          return isSortDesc;
        }
      }, {
        key: "getValue",
        value: function getValue(row, column) {
          return column.value.split('.').reduce(function (prev, curr) {
            return prev[curr];
          }, row);
        }
      }, {
        key: "sortHeader",
        value: function sortHeader(headerName) {
          if (headerName) {
            var sortDirection = false;

            if (this.options.config.sortBy === headerName) {
              this.options.config.sortDirection = this.options.config.sortDirection === 'asc' ? 'desc' : 'asc';
              sortDirection = this.options.config.sortDirection === 'asc' ? true : false;
            }

            this.options.config.sortBy = headerName;
            this.sort(this.sortedData, this.options.config.sortBy, sortDirection, false);
          }
        }
      }]);

      return VTableComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VTableComponent.prototype, "options", void 0);
    VTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'v-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./v-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common/v-table/v-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./v-table.component.css */
      "./src/app/common/v-table/v-table.component.css")).default]
    })], VTableComponent);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map