/*!
 * 
 * lattice-sagas - v0.0.23
 * 
 * https://github.com/openlattice/lattice-sagas
 * 
 * Copyright (c) 2017-2018, OpenLattice, Inc. All rights reserved.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux-saga/effects"), require("lattice"), require("redux-reqseq"));
	else if(typeof define === 'function' && define.amd)
		define(["redux-saga/effects", "lattice", "redux-reqseq"], factory);
	else if(typeof exports === 'object')
		exports["LatticeSagas"] = factory(require("redux-saga/effects"), require("lattice"), require("redux-reqseq"));
	else
		root["LatticeSagas"] = factory(root["redux-saga/effects"], root["lattice"], root["redux-reqseq"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentSyncId = exports.GET_CURRENT_SYNC_ID = undefined;

var _reduxReqseq = __webpack_require__(2);

var GET_CURRENT_SYNC_ID = 'GET_CURRENT_SYNC_ID';

var getCurrentSyncId = (0, _reduxReqseq.newRequestSequence)(GET_CURRENT_SYNC_ID);

exports.GET_CURRENT_SYNC_ID = GET_CURRENT_SYNC_ID;
exports.getCurrentSyncId = getCurrentSyncId;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchEntitySetData = exports.searchEntityNeighbors = exports.SEARCH_ENTITY_SET_DATA = exports.SEARCH_ENTITY_NEIGHBORS = undefined;

var _reduxReqseq = __webpack_require__(2);

var SEARCH_ENTITY_NEIGHBORS = 'SEARCH_ENTITY_NEIGHBORS';

var searchEntityNeighbors = (0, _reduxReqseq.newRequestSequence)(SEARCH_ENTITY_NEIGHBORS);

var SEARCH_ENTITY_SET_DATA = 'SEARCH_ENTITY_SET_DATA';
var searchEntitySetData = (0, _reduxReqseq.newRequestSequence)(SEARCH_ENTITY_SET_DATA);

exports.SEARCH_ENTITY_NEIGHBORS = SEARCH_ENTITY_NEIGHBORS;
exports.SEARCH_ENTITY_SET_DATA = SEARCH_ENTITY_SET_DATA;
exports.searchEntityNeighbors = searchEntityNeighbors;
exports.searchEntitySetData = searchEntitySetData;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSchema = exports.updatePropertyTypeMetaData = exports.updateEntityTypeMetaData = exports.updateEntitySetMetaData = exports.updateAssociationTypeMetaData = exports.reorderEntityTypePropertyTypes = exports.removeSourceEntityTypeFromAssociationType = exports.removePropertyTypeFromEntityType = exports.removeDestinationEntityTypeFromAssociationType = exports.getPropertyType = exports.getEntityType = exports.getEntitySetId = exports.getEntitySet = exports.getEntityDataModelProjection = exports.getEntityDataModel = exports.getAllSchemas = exports.getAllPropertyTypes = exports.getAllEntityTypes = exports.getAllAssociationTypes = exports.deletePropertyType = exports.deleteEntityType = exports.deleteAssociationType = exports.createSchema = exports.createPropertyType = exports.createEntityType = exports.createAssociationType = exports.addSourceEntityTypeToAssociationType = exports.addPropertyTypeToEntityType = exports.addDestinationEntityTypeToAssociationType = exports.UPDATE_SCHEMA = exports.UPDATE_PROPERTY_TYPE_METADATA = exports.UPDATE_ENTITY_TYPE_METADATA = exports.UPDATE_ENTITY_SET_METADATA = exports.UPDATE_ASSOCIATION_TYPE_METADATA = exports.REORDER_ENTITY_TYPE_PROPERTY_TYPES = exports.REMOVE_SRC_ET_FROM_AT = exports.REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE = exports.REMOVE_DST_ET_FROM_AT = exports.GET_PROPERTY_TYPE = exports.GET_ENTITY_TYPE = exports.GET_ENTITY_SET_ID = exports.GET_ENTITY_SET = exports.GET_ENTITY_DATA_MODEL_PROJECTION = exports.GET_ENTITY_DATA_MODEL = exports.GET_ALL_SCHEMAS = exports.GET_ALL_PROPERTY_TYPES = exports.GET_ALL_ENTITY_TYPES = exports.GET_ALL_ASSOCIATION_TYPES = exports.DELETE_PROPERTY_TYPE = exports.DELETE_ENTITY_TYPE = exports.DELETE_ASSOCIATION_TYPE = exports.CREATE_SCHEMA = exports.CREATE_PROPERTY_TYPE = exports.CREATE_ENTITY_TYPE = exports.CREATE_ASSOCIATION_TYPE = exports.ADD_SRC_ET_TO_AT = exports.ADD_PROPERTY_TYPE_TO_ENTITY_TYPE = exports.ADD_DST_ET_TO_AT = undefined;

var _reduxReqseq = __webpack_require__(2);

/*
 *
 * Entity Data Model APIs
 *
 */

var GET_ENTITY_DATA_MODEL = 'GET_ENTITY_DATA_MODEL';

var getEntityDataModel = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_DATA_MODEL);

var GET_ENTITY_DATA_MODEL_PROJECTION = 'GET_ENTITY_DATA_MODEL_PROJECTION';
var getEntityDataModelProjection = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_DATA_MODEL_PROJECTION);

/*
 *
 * EntitySet APIs
 *
 */

var GET_ENTITY_SET = 'GET_ENTITY_SET';
var getEntitySet = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_SET);

var GET_ENTITY_SET_ID = 'GET_ENTITY_SET_ID';
var getEntitySetId = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_SET_ID);

var UPDATE_ENTITY_SET_METADATA = 'UPDATE_ENTITY_SET_METADATA';
var updateEntitySetMetaData = (0, _reduxReqseq.newRequestSequence)(UPDATE_ENTITY_SET_METADATA);

/*
 *
 * EntityType APIs
 *
 */

var CREATE_ENTITY_TYPE = 'CREATE_ENTITY_TYPE';
var createEntityType = (0, _reduxReqseq.newRequestSequence)(CREATE_ENTITY_TYPE);

var DELETE_ENTITY_TYPE = 'DELETE_ENTITY_TYPE';
var deleteEntityType = (0, _reduxReqseq.newRequestSequence)(DELETE_ENTITY_TYPE);

var GET_ALL_ENTITY_TYPES = 'GET_ALL_ENTITY_TYPES';
var getAllEntityTypes = (0, _reduxReqseq.newRequestSequence)(GET_ALL_ENTITY_TYPES);

var GET_ENTITY_TYPE = 'GET_ENTITY_TYPE';
var getEntityType = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_TYPE);

var UPDATE_ENTITY_TYPE_METADATA = 'UPDATE_ENTITY_TYPE_METADATA';
var updateEntityTypeMetaData = (0, _reduxReqseq.newRequestSequence)(UPDATE_ENTITY_TYPE_METADATA);

var ADD_PROPERTY_TYPE_TO_ENTITY_TYPE = 'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE';
var addPropertyTypeToEntityType = (0, _reduxReqseq.newRequestSequence)(ADD_PROPERTY_TYPE_TO_ENTITY_TYPE);

// eslint-disable-next-line max-len
var REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE = 'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE';
var removePropertyTypeFromEntityType = (0, _reduxReqseq.newRequestSequence)(REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE);

var REORDER_ENTITY_TYPE_PROPERTY_TYPES = 'REORDER_ENTITY_TYPE_PROPERTY_TYPES';
var reorderEntityTypePropertyTypes = (0, _reduxReqseq.newRequestSequence)(REORDER_ENTITY_TYPE_PROPERTY_TYPES);

/*
 *
 * PropertyType APIs
 *
 */

var CREATE_PROPERTY_TYPE = 'CREATE_PROPERTY_TYPE';
var createPropertyType = (0, _reduxReqseq.newRequestSequence)(CREATE_PROPERTY_TYPE);

var DELETE_PROPERTY_TYPE = 'DELETE_PROPERTY_TYPE';
var deletePropertyType = (0, _reduxReqseq.newRequestSequence)(DELETE_PROPERTY_TYPE);

var GET_ALL_PROPERTY_TYPES = 'GET_ALL_PROPERTY_TYPES';
var getAllPropertyTypes = (0, _reduxReqseq.newRequestSequence)(GET_ALL_PROPERTY_TYPES);

var GET_PROPERTY_TYPE = 'GET_PROPERTY_TYPE';
var getPropertyType = (0, _reduxReqseq.newRequestSequence)(GET_PROPERTY_TYPE);

var UPDATE_PROPERTY_TYPE_METADATA = 'UPDATE_PROPERTY_TYPE_METADATA';
var updatePropertyTypeMetaData = (0, _reduxReqseq.newRequestSequence)(UPDATE_PROPERTY_TYPE_METADATA);

/*
 *
 * AssociationType APIs
 *
 */

var CREATE_ASSOCIATION_TYPE = 'CREATE_ASSOCIATION_TYPE';
var createAssociationType = (0, _reduxReqseq.newRequestSequence)(CREATE_ASSOCIATION_TYPE);

var DELETE_ASSOCIATION_TYPE = 'DELETE_ASSOCIATION_TYPE';
var deleteAssociationType = (0, _reduxReqseq.newRequestSequence)(DELETE_ASSOCIATION_TYPE);

var GET_ALL_ASSOCIATION_TYPES = 'GET_ALL_ASSOCIATION_TYPES';
var getAllAssociationTypes = (0, _reduxReqseq.newRequestSequence)(GET_ALL_ASSOCIATION_TYPES);

var UPDATE_ASSOCIATION_TYPE_METADATA = 'UPDATE_ASSOCIATION_TYPE_METADATA';
var updateAssociationTypeMetaData = (0, _reduxReqseq.newRequestSequence)(UPDATE_ASSOCIATION_TYPE_METADATA);

var ADD_DST_ET_TO_AT = 'ADD_DST_ET_TO_AT';
var addDestinationEntityTypeToAssociationType = (0, _reduxReqseq.newRequestSequence)(ADD_DST_ET_TO_AT);

var ADD_SRC_ET_TO_AT = 'ADD_SRC_ET_TO_AT';
var addSourceEntityTypeToAssociationType = (0, _reduxReqseq.newRequestSequence)(ADD_SRC_ET_TO_AT);

var REMOVE_DST_ET_FROM_AT = 'REMOVE_DST_ET_FROM_AT';
var removeDestinationEntityTypeFromAssociationType = (0, _reduxReqseq.newRequestSequence)(REMOVE_DST_ET_FROM_AT);

var REMOVE_SRC_ET_FROM_AT = 'REMOVE_SRC_ET_FROM_AT';
var removeSourceEntityTypeFromAssociationType = (0, _reduxReqseq.newRequestSequence)(REMOVE_SRC_ET_FROM_AT);

/*
 *
 * Schema APIs
 *
 */

var CREATE_SCHEMA = 'CREATE_SCHEMA';
var createSchema = (0, _reduxReqseq.newRequestSequence)(CREATE_SCHEMA);

var GET_ALL_SCHEMAS = 'GET_ALL_SCHEMAS';
var getAllSchemas = (0, _reduxReqseq.newRequestSequence)(GET_ALL_SCHEMAS);

var UPDATE_SCHEMA = 'UPDATE_SCHEMA';
var updateSchema = (0, _reduxReqseq.newRequestSequence)(UPDATE_SCHEMA);

/*
 *
 * exports
 *
 */

exports.ADD_DST_ET_TO_AT = ADD_DST_ET_TO_AT;
exports.ADD_PROPERTY_TYPE_TO_ENTITY_TYPE = ADD_PROPERTY_TYPE_TO_ENTITY_TYPE;
exports.ADD_SRC_ET_TO_AT = ADD_SRC_ET_TO_AT;
exports.CREATE_ASSOCIATION_TYPE = CREATE_ASSOCIATION_TYPE;
exports.CREATE_ENTITY_TYPE = CREATE_ENTITY_TYPE;
exports.CREATE_PROPERTY_TYPE = CREATE_PROPERTY_TYPE;
exports.CREATE_SCHEMA = CREATE_SCHEMA;
exports.DELETE_ASSOCIATION_TYPE = DELETE_ASSOCIATION_TYPE;
exports.DELETE_ENTITY_TYPE = DELETE_ENTITY_TYPE;
exports.DELETE_PROPERTY_TYPE = DELETE_PROPERTY_TYPE;
exports.GET_ALL_ASSOCIATION_TYPES = GET_ALL_ASSOCIATION_TYPES;
exports.GET_ALL_ENTITY_TYPES = GET_ALL_ENTITY_TYPES;
exports.GET_ALL_PROPERTY_TYPES = GET_ALL_PROPERTY_TYPES;
exports.GET_ALL_SCHEMAS = GET_ALL_SCHEMAS;
exports.GET_ENTITY_DATA_MODEL = GET_ENTITY_DATA_MODEL;
exports.GET_ENTITY_DATA_MODEL_PROJECTION = GET_ENTITY_DATA_MODEL_PROJECTION;
exports.GET_ENTITY_SET = GET_ENTITY_SET;
exports.GET_ENTITY_SET_ID = GET_ENTITY_SET_ID;
exports.GET_ENTITY_TYPE = GET_ENTITY_TYPE;
exports.GET_PROPERTY_TYPE = GET_PROPERTY_TYPE;
exports.REMOVE_DST_ET_FROM_AT = REMOVE_DST_ET_FROM_AT;
exports.REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE = REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE;
exports.REMOVE_SRC_ET_FROM_AT = REMOVE_SRC_ET_FROM_AT;
exports.REORDER_ENTITY_TYPE_PROPERTY_TYPES = REORDER_ENTITY_TYPE_PROPERTY_TYPES;
exports.UPDATE_ASSOCIATION_TYPE_METADATA = UPDATE_ASSOCIATION_TYPE_METADATA;
exports.UPDATE_ENTITY_SET_METADATA = UPDATE_ENTITY_SET_METADATA;
exports.UPDATE_ENTITY_TYPE_METADATA = UPDATE_ENTITY_TYPE_METADATA;
exports.UPDATE_PROPERTY_TYPE_METADATA = UPDATE_PROPERTY_TYPE_METADATA;
exports.UPDATE_SCHEMA = UPDATE_SCHEMA;
exports.addDestinationEntityTypeToAssociationType = addDestinationEntityTypeToAssociationType;
exports.addPropertyTypeToEntityType = addPropertyTypeToEntityType;
exports.addSourceEntityTypeToAssociationType = addSourceEntityTypeToAssociationType;
exports.createAssociationType = createAssociationType;
exports.createEntityType = createEntityType;
exports.createPropertyType = createPropertyType;
exports.createSchema = createSchema;
exports.deleteAssociationType = deleteAssociationType;
exports.deleteEntityType = deleteEntityType;
exports.deletePropertyType = deletePropertyType;
exports.getAllAssociationTypes = getAllAssociationTypes;
exports.getAllEntityTypes = getAllEntityTypes;
exports.getAllPropertyTypes = getAllPropertyTypes;
exports.getAllSchemas = getAllSchemas;
exports.getEntityDataModel = getEntityDataModel;
exports.getEntityDataModelProjection = getEntityDataModelProjection;
exports.getEntitySet = getEntitySet;
exports.getEntitySetId = getEntitySetId;
exports.getEntityType = getEntityType;
exports.getPropertyType = getPropertyType;
exports.removeDestinationEntityTypeFromAssociationType = removeDestinationEntityTypeFromAssociationType;
exports.removePropertyTypeFromEntityType = removePropertyTypeFromEntityType;
exports.removeSourceEntityTypeFromAssociationType = removeSourceEntityTypeFromAssociationType;
exports.reorderEntityTypePropertyTypes = reorderEntityTypePropertyTypes;
exports.updateAssociationTypeMetaData = updateAssociationTypeMetaData;
exports.updateEntitySetMetaData = updateEntitySetMetaData;
exports.updateEntityTypeMetaData = updateEntityTypeMetaData;
exports.updatePropertyTypeMetaData = updatePropertyTypeMetaData;
exports.updateSchema = updateSchema;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntitySetData = exports.createEntityAndAssociationData = exports.acquireSyncTicket = exports.GET_ENTITY_SET_DATA = exports.CREATE_ENTITY_AND_ASSOCIATION_DATA = exports.ACQUIRE_SYNC_TICKET = undefined;

var _reduxReqseq = __webpack_require__(2);

var ACQUIRE_SYNC_TICKET = 'ACQUIRE_SYNC_TICKET';

var acquireSyncTicket = (0, _reduxReqseq.newRequestSequence)(ACQUIRE_SYNC_TICKET);

var CREATE_ENTITY_AND_ASSOCIATION_DATA = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';
var createEntityAndAssociationData = (0, _reduxReqseq.newRequestSequence)(CREATE_ENTITY_AND_ASSOCIATION_DATA);

var GET_ENTITY_SET_DATA = 'GET_ENTITY_SET_DATA';
var getEntitySetData = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_SET_DATA);

exports.ACQUIRE_SYNC_TICKET = ACQUIRE_SYNC_TICKET;
exports.CREATE_ENTITY_AND_ASSOCIATION_DATA = CREATE_ENTITY_AND_ASSOCIATION_DATA;
exports.GET_ENTITY_SET_DATA = GET_ENTITY_SET_DATA;
exports.acquireSyncTicket = acquireSyncTicket;
exports.createEntityAndAssociationData = createEntityAndAssociationData;
exports.getEntitySetData = getEntitySetData;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAppTypes = exports.getAppConfigs = exports.getApp = exports.GET_APP_TYPES = exports.GET_APP_CONFIGS = exports.GET_APP = undefined;

var _reduxReqseq = __webpack_require__(2);

var GET_APP = 'GET_APP';

var getApp = (0, _reduxReqseq.newRequestSequence)(GET_APP);

var GET_APP_CONFIGS = 'GET_APP_CONFIGS';
var getAppConfigs = (0, _reduxReqseq.newRequestSequence)(GET_APP_CONFIGS);

var GET_APP_TYPES = 'GET_APP_TYPES';
var getAppTypes = (0, _reduxReqseq.newRequestSequence)(GET_APP_TYPES);

exports.GET_APP = GET_APP;
exports.GET_APP_CONFIGS = GET_APP_CONFIGS;
exports.GET_APP_TYPES = GET_APP_TYPES;
exports.getApp = getApp;
exports.getAppConfigs = getAppConfigs;
exports.getAppTypes = getAppTypes;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentSyncIdWorker = exports.getCurrentSyncIdWatcher = undefined;

var _lattice = __webpack_require__(1);

var _effects = __webpack_require__(0);

var _SyncApiActionFactory = __webpack_require__(3);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getCurrentSyncIdWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getCurrentSyncIdWorker);

/* eslint-disable no-use-before-define */

/*
 * SyncApi.getCurrentSyncId
 */

function getCurrentSyncIdWatcher() {
  return regeneratorRuntime.wrap(function getCurrentSyncIdWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_SyncApiActionFactory.GET_CURRENT_SYNC_ID, getCurrentSyncIdWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getCurrentSyncIdWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getCurrentSyncIdWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          response = {};
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.put)(_SyncApiActionFactory.getCurrentSyncId.request(action.id, action.value));

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_lattice.SyncApi.getCurrentSyncId, action.value);

        case 6:
          response.data = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)(_SyncApiActionFactory.getCurrentSyncId.success(action.id, response.data));

        case 9:
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2['catch'](1);

          response.error = _context2.t0;
          _context2.next = 16;
          return (0, _effects.put)(_SyncApiActionFactory.getCurrentSyncId.failure(action.id, response.error));

        case 16:
          _context2.prev = 16;
          _context2.next = 19;
          return (0, _effects.put)(_SyncApiActionFactory.getCurrentSyncId.finally(action.id));

        case 19:
          return _context2.finish(16);

        case 20:
          return _context2.abrupt('return', response);

        case 21:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 11, 16, 20]]);
}

exports.getCurrentSyncIdWatcher = getCurrentSyncIdWatcher;
exports.getCurrentSyncIdWorker = getCurrentSyncIdWorker;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchEntitySetDataWorker = exports.searchEntitySetDataWatcher = exports.searchEntityNeighborsWorker = exports.searchEntityNeighborsWatcher = undefined;

var _lattice = __webpack_require__(1);

var _effects = __webpack_require__(0);

var _SearchApiActionFactory = __webpack_require__(4);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(searchEntityNeighborsWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(searchEntityNeighborsWorker),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(searchEntitySetDataWatcher),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(searchEntitySetDataWorker);

/* eslint-disable no-use-before-define */

/*
 * SearchApi.searchEntityNeighbors
 */

function searchEntityNeighborsWatcher() {
  return regeneratorRuntime.wrap(function searchEntityNeighborsWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_SearchApiActionFactory.SEARCH_ENTITY_NEIGHBORS, searchEntityNeighborsWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function searchEntityNeighborsWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function searchEntityNeighborsWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          response = {};
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.request(action.id, action.value));

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_lattice.SearchApi.searchEntityNeighbors, action.value.entitySetId, action.value.entityId);

        case 6:
          response.data = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.success(action.id, response.data));

        case 9:
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2['catch'](1);

          response.error = _context2.t0;
          _context2.next = 16;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.failure(action.id, response.error));

        case 16:
          _context2.prev = 16;
          _context2.next = 19;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.finally(action.id));

        case 19:
          return _context2.finish(16);

        case 20:
          return _context2.abrupt('return', response);

        case 21:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 11, 16, 20]]);
}

/*
 * SearchApi.searchEntitySetData
 */

function searchEntitySetDataWatcher() {
  return regeneratorRuntime.wrap(function searchEntitySetDataWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_SearchApiActionFactory.SEARCH_ENTITY_SET_DATA, searchEntitySetDataWorker);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function searchEntitySetDataWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function searchEntitySetDataWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          response = {};
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.request(action.id, action.value));

        case 4:
          _context4.next = 6;
          return (0, _effects.call)(_lattice.SearchApi.searchEntitySetData, action.value.entitySetId, action.value.searchOptions);

        case 6:
          response.data = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.success(action.id, response.data));

        case 9:
          _context4.next = 16;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4['catch'](1);

          response.error = _context4.t0;
          _context4.next = 16;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.failure(action.id, response.error));

        case 16:
          _context4.prev = 16;
          _context4.next = 19;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.finally(action.id));

        case 19:
          return _context4.finish(16);

        case 20:
          return _context4.abrupt('return', response);

        case 21:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[1, 11, 16, 20]]);
}

exports.searchEntityNeighborsWatcher = searchEntityNeighborsWatcher;
exports.searchEntityNeighborsWorker = searchEntityNeighborsWorker;
exports.searchEntitySetDataWatcher = searchEntitySetDataWatcher;
exports.searchEntitySetDataWorker = searchEntitySetDataWorker;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSchemaWorker = exports.updateSchemaWatcher = exports.updatePropertyTypeMetaDataWorker = exports.updatePropertyTypeMetaDataWatcher = exports.updateEntityTypeMetaDataWorker = exports.updateEntityTypeMetaDataWatcher = exports.updateEntitySetMetaDataWorker = exports.updateEntitySetMetaDataWatcher = exports.updateAssociationTypeMetaDataWorker = exports.updateAssociationTypeMetaDataWatcher = exports.reorderEntityTypePropertyTypesWorker = exports.reorderEntityTypePropertyTypesWatcher = exports.removeSourceEntityTypeFromAssociationTypeWorker = exports.removeSourceEntityTypeFromAssociationTypeWatcher = exports.removePropertyTypeFromEntityTypeWorker = exports.removePropertyTypeFromEntityTypeWatcher = exports.removeDestinationEntityTypeFromAssociationTypeWorker = exports.removeDestinationEntityTypeFromAssociationTypeWatcher = exports.getPropertyTypeWorker = exports.getPropertyTypeWatcher = exports.getEntityTypeWorker = exports.getEntityTypeWatcher = exports.getEntitySetIdWorker = exports.getEntitySetIdWatcher = exports.getEntitySetWorker = exports.getEntitySetWatcher = exports.getEntityDataModelProjectionWorker = exports.getEntityDataModelProjectionWatcher = exports.getEntityDataModelWorker = exports.getEntityDataModelWatcher = exports.getAllSchemasWorker = exports.getAllSchemasWatcher = exports.getAllPropertyTypesWorker = exports.getAllPropertyTypesWatcher = exports.getAllEntityTypesWorker = exports.getAllEntityTypesWatcher = exports.getAllAssociationTypesWorker = exports.getAllAssociationTypesWatcher = exports.deletePropertyTypeWorker = exports.deletePropertyTypeWatcher = exports.deleteEntityTypeWorker = exports.deleteEntityTypeWatcher = exports.deleteAssociationTypeWorker = exports.deleteAssociationTypeWatcher = exports.createSchemaWorker = exports.createSchemaWatcher = exports.createPropertyTypeWorker = exports.createPropertyTypeWatcher = exports.createEntityTypeWorker = exports.createEntityTypeWatcher = exports.createAssociationTypeWorker = exports.createAssociationTypeWatcher = exports.addSourceEntityTypeToAssociationTypeWorker = exports.addSourceEntityTypeToAssociationTypeWatcher = exports.addPropertyTypeToEntityTypeWorker = exports.addPropertyTypeToEntityTypeWatcher = exports.addDestinationEntityTypeToAssociationTypeWorker = exports.addDestinationEntityTypeToAssociationTypeWatcher = undefined;

var _lattice = __webpack_require__(1);

var _effects = __webpack_require__(0);

var _EntityDataModelApiActionFactory = __webpack_require__(5);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelWorker),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelProjectionWatcher),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelProjectionWorker),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetWatcher),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetWorker),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetIdWatcher),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetIdWorker),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(updateEntitySetMetaDataWatcher),
    _marked10 = /*#__PURE__*/regeneratorRuntime.mark(updateEntitySetMetaDataWorker),
    _marked11 = /*#__PURE__*/regeneratorRuntime.mark(createEntityTypeWatcher),
    _marked12 = /*#__PURE__*/regeneratorRuntime.mark(createEntityTypeWorker),
    _marked13 = /*#__PURE__*/regeneratorRuntime.mark(deleteEntityTypeWatcher),
    _marked14 = /*#__PURE__*/regeneratorRuntime.mark(deleteEntityTypeWorker),
    _marked15 = /*#__PURE__*/regeneratorRuntime.mark(getAllEntityTypesWatcher),
    _marked16 = /*#__PURE__*/regeneratorRuntime.mark(getAllEntityTypesWorker),
    _marked17 = /*#__PURE__*/regeneratorRuntime.mark(getEntityTypeWatcher),
    _marked18 = /*#__PURE__*/regeneratorRuntime.mark(getEntityTypeWorker),
    _marked19 = /*#__PURE__*/regeneratorRuntime.mark(updateEntityTypeMetaDataWatcher),
    _marked20 = /*#__PURE__*/regeneratorRuntime.mark(updateEntityTypeMetaDataWorker),
    _marked21 = /*#__PURE__*/regeneratorRuntime.mark(addPropertyTypeToEntityTypeWatcher),
    _marked22 = /*#__PURE__*/regeneratorRuntime.mark(addPropertyTypeToEntityTypeWorker),
    _marked23 = /*#__PURE__*/regeneratorRuntime.mark(removePropertyTypeFromEntityTypeWatcher),
    _marked24 = /*#__PURE__*/regeneratorRuntime.mark(removePropertyTypeFromEntityTypeWorker),
    _marked25 = /*#__PURE__*/regeneratorRuntime.mark(reorderEntityTypePropertyTypesWatcher),
    _marked26 = /*#__PURE__*/regeneratorRuntime.mark(reorderEntityTypePropertyTypesWorker),
    _marked27 = /*#__PURE__*/regeneratorRuntime.mark(createPropertyTypeWatcher),
    _marked28 = /*#__PURE__*/regeneratorRuntime.mark(createPropertyTypeWorker),
    _marked29 = /*#__PURE__*/regeneratorRuntime.mark(deletePropertyTypeWatcher),
    _marked30 = /*#__PURE__*/regeneratorRuntime.mark(deletePropertyTypeWorker),
    _marked31 = /*#__PURE__*/regeneratorRuntime.mark(getAllPropertyTypesWatcher),
    _marked32 = /*#__PURE__*/regeneratorRuntime.mark(getAllPropertyTypesWorker),
    _marked33 = /*#__PURE__*/regeneratorRuntime.mark(getPropertyTypeWatcher),
    _marked34 = /*#__PURE__*/regeneratorRuntime.mark(getPropertyTypeWorker),
    _marked35 = /*#__PURE__*/regeneratorRuntime.mark(updatePropertyTypeMetaDataWatcher),
    _marked36 = /*#__PURE__*/regeneratorRuntime.mark(updatePropertyTypeMetaDataWorker),
    _marked37 = /*#__PURE__*/regeneratorRuntime.mark(createAssociationTypeWatcher),
    _marked38 = /*#__PURE__*/regeneratorRuntime.mark(createAssociationTypeWorker),
    _marked39 = /*#__PURE__*/regeneratorRuntime.mark(deleteAssociationTypeWatcher),
    _marked40 = /*#__PURE__*/regeneratorRuntime.mark(deleteAssociationTypeWorker),
    _marked41 = /*#__PURE__*/regeneratorRuntime.mark(getAllAssociationTypesWatcher),
    _marked42 = /*#__PURE__*/regeneratorRuntime.mark(getAllAssociationTypesWorker),
    _marked43 = /*#__PURE__*/regeneratorRuntime.mark(updateAssociationTypeMetaDataWatcher),
    _marked44 = /*#__PURE__*/regeneratorRuntime.mark(updateAssociationTypeMetaDataWorker),
    _marked45 = /*#__PURE__*/regeneratorRuntime.mark(addDestinationEntityTypeToAssociationTypeWatcher),
    _marked46 = /*#__PURE__*/regeneratorRuntime.mark(addDestinationEntityTypeToAssociationTypeWorker),
    _marked47 = /*#__PURE__*/regeneratorRuntime.mark(addSourceEntityTypeToAssociationTypeWatcher),
    _marked48 = /*#__PURE__*/regeneratorRuntime.mark(addSourceEntityTypeToAssociationTypeWorker),
    _marked49 = /*#__PURE__*/regeneratorRuntime.mark(removeDestinationEntityTypeFromAssociationTypeWatcher),
    _marked50 = /*#__PURE__*/regeneratorRuntime.mark(removeDestinationEntityTypeFromAssociationTypeWorker),
    _marked51 = /*#__PURE__*/regeneratorRuntime.mark(removeSourceEntityTypeFromAssociationTypeWatcher),
    _marked52 = /*#__PURE__*/regeneratorRuntime.mark(removeSourceEntityTypeFromAssociationTypeWorker),
    _marked53 = /*#__PURE__*/regeneratorRuntime.mark(createSchemaWatcher),
    _marked54 = /*#__PURE__*/regeneratorRuntime.mark(createSchemaWorker),
    _marked55 = /*#__PURE__*/regeneratorRuntime.mark(getAllSchemasWatcher),
    _marked56 = /*#__PURE__*/regeneratorRuntime.mark(getAllSchemasWorker),
    _marked57 = /*#__PURE__*/regeneratorRuntime.mark(updateSchemaWatcher),
    _marked58 = /*#__PURE__*/regeneratorRuntime.mark(updateSchemaWorker);

/* eslint-disable no-use-before-define */

/*
 *
 * Entity Data Model APIs
 *
 */

/*
 * EntityDataModelApi.getEntityDataModel
 */

/*
 * types
 */

// TODO: move out to global Flow definition for the library
function getEntityDataModelWatcher() {
  return regeneratorRuntime.wrap(function getEntityDataModelWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ENTITY_DATA_MODEL, getEntityDataModelWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getEntityDataModelWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getEntityDataModelWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          response = {};
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.request(action.id, action.value));

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityDataModel);

        case 6:
          response.data = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.success(action.id, response.data));

        case 9:
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2['catch'](1);

          response.error = _context2.t0;
          _context2.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.failure(action.id, response.error));

        case 16:
          _context2.prev = 16;
          _context2.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.finally(action.id));

        case 19:
          return _context2.finish(16);

        case 20:
          return _context2.abrupt('return', response);

        case 21:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getEntityDataModelProjection
 */

function getEntityDataModelProjectionWatcher() {
  return regeneratorRuntime.wrap(function getEntityDataModelProjectionWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ENTITY_DATA_MODEL_PROJECTION, getEntityDataModelProjectionWorker);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function getEntityDataModelProjectionWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getEntityDataModelProjectionWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          response = {};
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.request(action.id, action.value));

        case 4:
          _context4.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityDataModelProjection, action.value);

        case 6:
          response.data = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.success(action.id, response.data));

        case 9:
          _context4.next = 16;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4['catch'](1);

          response.error = _context4.t0;
          _context4.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.failure(action.id, response.error));

        case 16:
          _context4.prev = 16;
          _context4.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.finally(action.id));

        case 19:
          return _context4.finish(16);

        case 20:
          return _context4.abrupt('return', response);

        case 21:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[1, 11, 16, 20]]);
}

/*
 *
 * EntitySet APIs
 *
 */

/*
 * EntityDataModelApi.getEntitySet
 */

function getEntitySetWatcher() {
  return regeneratorRuntime.wrap(function getEntitySetWatcher$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ENTITY_SET, getEntitySetWorker);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function getEntitySetWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getEntitySetWorker$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          response = {};
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.request(action.id, action.value));

        case 4:
          _context6.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntitySet, action.value);

        case 6:
          response.data = _context6.sent;
          _context6.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.success(action.id, response.data));

        case 9:
          _context6.next = 16;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6['catch'](1);

          response.error = _context6.t0;
          _context6.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.failure(action.id, response.error));

        case 16:
          _context6.prev = 16;
          _context6.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.finally(action.id));

        case 19:
          return _context6.finish(16);

        case 20:
          return _context6.abrupt('return', response);

        case 21:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getEntitySetId
 */

function getEntitySetIdWatcher() {
  return regeneratorRuntime.wrap(function getEntitySetIdWatcher$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ENTITY_SET_ID, getEntitySetIdWorker);

        case 2:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this);
}

function getEntitySetIdWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getEntitySetIdWorker$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          response = {};
          _context8.prev = 1;
          _context8.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.request(action.id, action.value));

        case 4:
          _context8.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntitySetId, action.value);

        case 6:
          response.data = _context8.sent;
          _context8.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.success(action.id, response.data));

        case 9:
          _context8.next = 16;
          break;

        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8['catch'](1);

          response.error = _context8.t0;
          _context8.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.failure(action.id, response.error));

        case 16:
          _context8.prev = 16;
          _context8.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.finally(action.id));

        case 19:
          return _context8.finish(16);

        case 20:
          return _context8.abrupt('return', response);

        case 21:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.updateEntitySetMetaData
 */

function updateEntitySetMetaDataWatcher() {
  return regeneratorRuntime.wrap(function updateEntitySetMetaDataWatcher$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.UPDATE_ENTITY_SET_METADATA, updateEntitySetMetaDataWorker);

        case 2:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

function updateEntitySetMetaDataWorker(action) {
  var response, _action$value, id, metadata;

  return regeneratorRuntime.wrap(function updateEntitySetMetaDataWorker$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          response = {};
          _context10.prev = 1;
          _context10.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.request(action.id, action.value));

        case 4:
          _action$value = action.value, id = _action$value.id, metadata = _action$value.metadata;
          _context10.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateEntitySetMetaData, id, metadata);

        case 7:
          response.data = _context10.sent;
          _context10.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.success(action.id, response.data));

        case 10:
          _context10.next = 17;
          break;

        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10['catch'](1);

          response.error = _context10.t0;
          _context10.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.failure(action.id, response.error));

        case 17:
          _context10.prev = 17;
          _context10.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.finally(action.id));

        case 20:
          return _context10.finish(17);

        case 21:
          return _context10.abrupt('return', response);

        case 22:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked10, this, [[1, 12, 17, 21]]);
}

/*
 *
 * EntityType APIs
 *
 */

/*
 * EntityDataModelApi.createEntityType
 */

function createEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function createEntityTypeWatcher$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_ENTITY_TYPE, createEntityTypeWorker);

        case 2:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked11, this);
}

function createEntityTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createEntityTypeWorker$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          response = {};
          _context12.prev = 1;
          _context12.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.request(action.id, action.value));

        case 4:
          _context12.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createEntityType, action.value);

        case 6:
          response.data = _context12.sent;
          _context12.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.success(action.id, response.data));

        case 9:
          _context12.next = 16;
          break;

        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12['catch'](1);

          response.error = _context12.t0;
          _context12.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.failure(action.id, response.error));

        case 16:
          _context12.prev = 16;
          _context12.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.finally(action.id));

        case 19:
          return _context12.finish(16);

        case 20:
          return _context12.abrupt('return', response);

        case 21:
        case 'end':
          return _context12.stop();
      }
    }
  }, _marked12, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.deleteEntityType
 */

function deleteEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function deleteEntityTypeWatcher$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.DELETE_ENTITY_TYPE, deleteEntityTypeWorker);

        case 2:
        case 'end':
          return _context13.stop();
      }
    }
  }, _marked13, this);
}

function deleteEntityTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function deleteEntityTypeWorker$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          response = {};
          _context14.prev = 1;
          _context14.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.request(action.id, action.value));

        case 4:
          _context14.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deleteEntityType, action.value);

        case 6:
          response.data = _context14.sent;
          _context14.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.success(action.id, response.data));

        case 9:
          _context14.next = 16;
          break;

        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14['catch'](1);

          response.error = _context14.t0;
          _context14.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.failure(action.id, response.error));

        case 16:
          _context14.prev = 16;
          _context14.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.finally(action.id));

        case 19:
          return _context14.finish(16);

        case 20:
          return _context14.abrupt('return', response);

        case 21:
        case 'end':
          return _context14.stop();
      }
    }
  }, _marked14, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getAllEntityTypes
 */

function getAllEntityTypesWatcher() {
  return regeneratorRuntime.wrap(function getAllEntityTypesWatcher$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_ENTITY_TYPES, getAllEntityTypesWorker);

        case 2:
        case 'end':
          return _context15.stop();
      }
    }
  }, _marked15, this);
}

function getAllEntityTypesWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAllEntityTypesWorker$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          response = {};
          _context16.prev = 1;
          _context16.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.request(action.id, action.value));

        case 4:
          _context16.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllEntityTypes);

        case 6:
          response.data = _context16.sent;
          _context16.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.success(action.id, response.data));

        case 9:
          _context16.next = 16;
          break;

        case 11:
          _context16.prev = 11;
          _context16.t0 = _context16['catch'](1);

          response.error = _context16.t0;
          _context16.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.failure(action.id, response.error));

        case 16:
          _context16.prev = 16;
          _context16.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.finally(action.id));

        case 19:
          return _context16.finish(16);

        case 20:
          return _context16.abrupt('return', response);

        case 21:
        case 'end':
          return _context16.stop();
      }
    }
  }, _marked16, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getEntityType
 */

function getEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function getEntityTypeWatcher$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ENTITY_TYPE, getEntityTypeWorker);

        case 2:
        case 'end':
          return _context17.stop();
      }
    }
  }, _marked17, this);
}

function getEntityTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getEntityTypeWorker$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          response = {};
          _context18.prev = 1;
          _context18.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.request(action.id, action.value));

        case 4:
          _context18.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityType, action.value);

        case 6:
          response.data = _context18.sent;
          _context18.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.success(action.id, response.data));

        case 9:
          _context18.next = 16;
          break;

        case 11:
          _context18.prev = 11;
          _context18.t0 = _context18['catch'](1);

          response.error = _context18.t0;
          _context18.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.failure(action.id, response.error));

        case 16:
          _context18.prev = 16;
          _context18.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.finally(action.id));

        case 19:
          return _context18.finish(16);

        case 20:
          return _context18.abrupt('return', response);

        case 21:
        case 'end':
          return _context18.stop();
      }
    }
  }, _marked18, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.updateEntityTypeMetaData
 */

function updateEntityTypeMetaDataWatcher() {
  return regeneratorRuntime.wrap(function updateEntityTypeMetaDataWatcher$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.UPDATE_ENTITY_TYPE_METADATA, updateEntityTypeMetaDataWorker);

        case 2:
        case 'end':
          return _context19.stop();
      }
    }
  }, _marked19, this);
}

function updateEntityTypeMetaDataWorker(action) {
  var response, _action$value2, id, metadata;

  return regeneratorRuntime.wrap(function updateEntityTypeMetaDataWorker$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          response = {};
          _context20.prev = 1;
          _context20.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.request(action.id, action.value));

        case 4:
          _action$value2 = action.value, id = _action$value2.id, metadata = _action$value2.metadata;
          _context20.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateEntityTypeMetaData, id, metadata);

        case 7:
          response.data = _context20.sent;
          _context20.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.success(action.id, response.data));

        case 10:
          _context20.next = 17;
          break;

        case 12:
          _context20.prev = 12;
          _context20.t0 = _context20['catch'](1);

          response.error = _context20.t0;
          _context20.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.failure(action.id, response.error));

        case 17:
          _context20.prev = 17;
          _context20.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.finally(action.id));

        case 20:
          return _context20.finish(17);

        case 21:
          return _context20.abrupt('return', response);

        case 22:
        case 'end':
          return _context20.stop();
      }
    }
  }, _marked20, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.addPropertyTypeToEntityType
 */

function addPropertyTypeToEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function addPropertyTypeToEntityTypeWatcher$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.ADD_PROPERTY_TYPE_TO_ENTITY_TYPE, addPropertyTypeToEntityTypeWorker);

        case 2:
        case 'end':
          return _context21.stop();
      }
    }
  }, _marked21, this);
}

function addPropertyTypeToEntityTypeWorker(action) {
  var response, _action$value3, entityTypeId, propertyTypeId;

  return regeneratorRuntime.wrap(function addPropertyTypeToEntityTypeWorker$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          response = {};
          _context22.prev = 1;
          _context22.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.request(action.id, action.value));

        case 4:
          _action$value3 = action.value, entityTypeId = _action$value3.entityTypeId, propertyTypeId = _action$value3.propertyTypeId;
          _context22.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.addPropertyTypeToEntityType, entityTypeId, propertyTypeId);

        case 7:
          response.data = _context22.sent;
          _context22.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.success(action.id, response.data));

        case 10:
          _context22.next = 17;
          break;

        case 12:
          _context22.prev = 12;
          _context22.t0 = _context22['catch'](1);

          response.error = _context22.t0;
          _context22.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.failure(action.id, response.error));

        case 17:
          _context22.prev = 17;
          _context22.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.finally(action.id));

        case 20:
          return _context22.finish(17);

        case 21:
          return _context22.abrupt('return', response);

        case 22:
        case 'end':
          return _context22.stop();
      }
    }
  }, _marked22, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.removePropertyTypeFromEntityType
 */

function removePropertyTypeFromEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function removePropertyTypeFromEntityTypeWatcher$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.RM_PROPERTY_TYPE_FROM_ENTITY_TYPE, removePropertyTypeFromEntityTypeWorker);

        case 2:
        case 'end':
          return _context23.stop();
      }
    }
  }, _marked23, this);
}

function removePropertyTypeFromEntityTypeWorker(action) {
  var response, _action$value4, entityTypeId, propertyTypeId;

  return regeneratorRuntime.wrap(function removePropertyTypeFromEntityTypeWorker$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          response = {};
          _context24.prev = 1;
          _context24.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.request(action.id, action.value));

        case 4:
          _action$value4 = action.value, entityTypeId = _action$value4.entityTypeId, propertyTypeId = _action$value4.propertyTypeId;
          _context24.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.removePropertyTypeFromEntityType, entityTypeId, propertyTypeId);

        case 7:
          response.data = _context24.sent;
          _context24.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.success(action.id, response.data));

        case 10:
          _context24.next = 17;
          break;

        case 12:
          _context24.prev = 12;
          _context24.t0 = _context24['catch'](1);

          response.error = _context24.t0;
          _context24.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.failure(action.id, response.error));

        case 17:
          _context24.prev = 17;
          _context24.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.finally(action.id));

        case 20:
          return _context24.finish(17);

        case 21:
          return _context24.abrupt('return', response);

        case 22:
        case 'end':
          return _context24.stop();
      }
    }
  }, _marked24, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.reorderPropertyTypesInEntityType
 */

function reorderEntityTypePropertyTypesWatcher() {
  return regeneratorRuntime.wrap(function reorderEntityTypePropertyTypesWatcher$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.REORDER_ENTITY_TYPE_PROPERTY_TYPES, reorderEntityTypePropertyTypesWorker);

        case 2:
        case 'end':
          return _context25.stop();
      }
    }
  }, _marked25, this);
}

function reorderEntityTypePropertyTypesWorker(action) {
  var response, _action$value5, entityTypeId, propertyTypeIds;

  return regeneratorRuntime.wrap(function reorderEntityTypePropertyTypesWorker$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          response = {};
          _context26.prev = 1;
          _context26.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.request(action.id, action.value));

        case 4:
          _action$value5 = action.value, entityTypeId = _action$value5.entityTypeId, propertyTypeIds = _action$value5.propertyTypeIds;
          _context26.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.reorderPropertyTypesInEntityType, entityTypeId, propertyTypeIds);

        case 7:
          response.data = _context26.sent;
          _context26.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.success(action.id, response.data));

        case 10:
          _context26.next = 17;
          break;

        case 12:
          _context26.prev = 12;
          _context26.t0 = _context26['catch'](1);

          response.error = _context26.t0;
          _context26.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.failure(action.id, response.error));

        case 17:
          _context26.prev = 17;
          _context26.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.finally(action.id));

        case 20:
          return _context26.finish(17);

        case 21:
          return _context26.abrupt('return', response);

        case 22:
        case 'end':
          return _context26.stop();
      }
    }
  }, _marked26, this, [[1, 12, 17, 21]]);
}

/*
 *
 * PropertyType APIs
 *
 */

/*
 * EntityDataModelApi.createPropertyType
 */

function createPropertyTypeWatcher() {
  return regeneratorRuntime.wrap(function createPropertyTypeWatcher$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_PROPERTY_TYPE, createPropertyTypeWorker);

        case 2:
        case 'end':
          return _context27.stop();
      }
    }
  }, _marked27, this);
}

function createPropertyTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createPropertyTypeWorker$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          response = {};
          _context28.prev = 1;
          _context28.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.request(action.id, action.value));

        case 4:
          _context28.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createPropertyType, action.value);

        case 6:
          response.data = _context28.sent;
          _context28.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.success(action.id, response.data));

        case 9:
          _context28.next = 16;
          break;

        case 11:
          _context28.prev = 11;
          _context28.t0 = _context28['catch'](1);

          response.error = _context28.t0;
          _context28.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.failure(action.id, response.error));

        case 16:
          _context28.prev = 16;
          _context28.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.finally(action.id));

        case 19:
          return _context28.finish(16);

        case 20:
          return _context28.abrupt('return', response);

        case 21:
        case 'end':
          return _context28.stop();
      }
    }
  }, _marked28, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.deletePropertyType
 */

function deletePropertyTypeWatcher() {
  return regeneratorRuntime.wrap(function deletePropertyTypeWatcher$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.DELETE_PROPERTY_TYPE, deletePropertyTypeWorker);

        case 2:
        case 'end':
          return _context29.stop();
      }
    }
  }, _marked29, this);
}

function deletePropertyTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function deletePropertyTypeWorker$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          response = {};
          _context30.prev = 1;
          _context30.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.request(action.id, action.value));

        case 4:
          _context30.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deletePropertyType, action.value);

        case 6:
          response.data = _context30.sent;
          _context30.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.success(action.id, response.data));

        case 9:
          _context30.next = 16;
          break;

        case 11:
          _context30.prev = 11;
          _context30.t0 = _context30['catch'](1);

          response.error = _context30.t0;
          _context30.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.failure(action.id, response.error));

        case 16:
          _context30.prev = 16;
          _context30.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.finally(action.id));

        case 19:
          return _context30.finish(16);

        case 20:
          return _context30.abrupt('return', response);

        case 21:
        case 'end':
          return _context30.stop();
      }
    }
  }, _marked30, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getAllPropertyTypes
 */

function getAllPropertyTypesWatcher() {
  return regeneratorRuntime.wrap(function getAllPropertyTypesWatcher$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_PROPERTY_TYPES, getAllPropertyTypesWorker);

        case 2:
        case 'end':
          return _context31.stop();
      }
    }
  }, _marked31, this);
}

function getAllPropertyTypesWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAllPropertyTypesWorker$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          response = {};
          _context32.prev = 1;
          _context32.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.request(action.id, action.value));

        case 4:
          _context32.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllPropertyTypes);

        case 6:
          response.data = _context32.sent;
          _context32.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.success(action.id, response.data));

        case 9:
          _context32.next = 16;
          break;

        case 11:
          _context32.prev = 11;
          _context32.t0 = _context32['catch'](1);

          response.error = _context32.t0;
          _context32.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.failure(action.id, response.error));

        case 16:
          _context32.prev = 16;
          _context32.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.finally(action.id));

        case 19:
          return _context32.finish(16);

        case 20:
          return _context32.abrupt('return', response);

        case 21:
        case 'end':
          return _context32.stop();
      }
    }
  }, _marked32, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getPropertyType
 */

function getPropertyTypeWatcher() {
  return regeneratorRuntime.wrap(function getPropertyTypeWatcher$(_context33) {
    while (1) {
      switch (_context33.prev = _context33.next) {
        case 0:
          _context33.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_PROPERTY_TYPE, getPropertyTypeWorker);

        case 2:
        case 'end':
          return _context33.stop();
      }
    }
  }, _marked33, this);
}

function getPropertyTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getPropertyTypeWorker$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          response = {};
          _context34.prev = 1;
          _context34.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.request(action.id, action.value));

        case 4:
          _context34.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getPropertyType, action.value);

        case 6:
          response.data = _context34.sent;
          _context34.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.success(action.id, response.data));

        case 9:
          _context34.next = 16;
          break;

        case 11:
          _context34.prev = 11;
          _context34.t0 = _context34['catch'](1);

          response.error = _context34.t0;
          _context34.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.failure(action.id, response.error));

        case 16:
          _context34.prev = 16;
          _context34.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.finally(action.id));

        case 19:
          return _context34.finish(16);

        case 20:
          return _context34.abrupt('return', response);

        case 21:
        case 'end':
          return _context34.stop();
      }
    }
  }, _marked34, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.updatePropertyTypeMetaData
 */

function updatePropertyTypeMetaDataWatcher() {
  return regeneratorRuntime.wrap(function updatePropertyTypeMetaDataWatcher$(_context35) {
    while (1) {
      switch (_context35.prev = _context35.next) {
        case 0:
          _context35.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.UPDATE_PROPERTY_TYPE_METADATA, updatePropertyTypeMetaDataWorker);

        case 2:
        case 'end':
          return _context35.stop();
      }
    }
  }, _marked35, this);
}

function updatePropertyTypeMetaDataWorker(action) {
  var response, _action$value6, id, metadata;

  return regeneratorRuntime.wrap(function updatePropertyTypeMetaDataWorker$(_context36) {
    while (1) {
      switch (_context36.prev = _context36.next) {
        case 0:
          response = {};
          _context36.prev = 1;
          _context36.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.request(action.id, action.value));

        case 4:
          _action$value6 = action.value, id = _action$value6.id, metadata = _action$value6.metadata;
          _context36.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updatePropertyTypeMetaData, id, metadata);

        case 7:
          response.data = _context36.sent;
          _context36.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.success(action.id, response.data));

        case 10:
          _context36.next = 17;
          break;

        case 12:
          _context36.prev = 12;
          _context36.t0 = _context36['catch'](1);

          response.error = _context36.t0;
          _context36.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.failure(action.id, response.error));

        case 17:
          _context36.prev = 17;
          _context36.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.finally(action.id));

        case 20:
          return _context36.finish(17);

        case 21:
          return _context36.abrupt('return', response);

        case 22:
        case 'end':
          return _context36.stop();
      }
    }
  }, _marked36, this, [[1, 12, 17, 21]]);
}

/*
 *
 * AssociationType APIs
 *
 */

/*
 * EntityDataModelApi.createAssociationType
 */

function createAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function createAssociationTypeWatcher$(_context37) {
    while (1) {
      switch (_context37.prev = _context37.next) {
        case 0:
          _context37.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_ASSOCIATION_TYPE, createAssociationTypeWorker);

        case 2:
        case 'end':
          return _context37.stop();
      }
    }
  }, _marked37, this);
}

function createAssociationTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createAssociationTypeWorker$(_context38) {
    while (1) {
      switch (_context38.prev = _context38.next) {
        case 0:
          response = {};
          _context38.prev = 1;
          _context38.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.request(action.id, action.value));

        case 4:
          _context38.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createAssociationType, action.value);

        case 6:
          response.data = _context38.sent;
          _context38.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.success(action.id, response.data));

        case 9:
          _context38.next = 16;
          break;

        case 11:
          _context38.prev = 11;
          _context38.t0 = _context38['catch'](1);

          response.error = _context38.t0;
          _context38.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.failure(action.id, response.error));

        case 16:
          _context38.prev = 16;
          _context38.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.finally(action.id));

        case 19:
          return _context38.finish(16);

        case 20:
          return _context38.abrupt('return', response);

        case 21:
        case 'end':
          return _context38.stop();
      }
    }
  }, _marked38, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.deleteAssociationType
 */

function deleteAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function deleteAssociationTypeWatcher$(_context39) {
    while (1) {
      switch (_context39.prev = _context39.next) {
        case 0:
          _context39.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.DELETE_ASSOCIATION_TYPE, deleteAssociationTypeWorker);

        case 2:
        case 'end':
          return _context39.stop();
      }
    }
  }, _marked39, this);
}

function deleteAssociationTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function deleteAssociationTypeWorker$(_context40) {
    while (1) {
      switch (_context40.prev = _context40.next) {
        case 0:
          response = {};
          _context40.prev = 1;
          _context40.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.request(action.id, action.value));

        case 4:
          _context40.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deleteAssociationType, action.value);

        case 6:
          response.data = _context40.sent;
          _context40.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.success(action.id, response.data));

        case 9:
          _context40.next = 16;
          break;

        case 11:
          _context40.prev = 11;
          _context40.t0 = _context40['catch'](1);

          response.error = _context40.t0;
          _context40.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.failure(action.id, response.error));

        case 16:
          _context40.prev = 16;
          _context40.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.finally(action.id));

        case 19:
          return _context40.finish(16);

        case 20:
          return _context40.abrupt('return', response);

        case 21:
        case 'end':
          return _context40.stop();
      }
    }
  }, _marked40, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getAllAssociationTypes
 */

function getAllAssociationTypesWatcher() {
  return regeneratorRuntime.wrap(function getAllAssociationTypesWatcher$(_context41) {
    while (1) {
      switch (_context41.prev = _context41.next) {
        case 0:
          _context41.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_ASSOCIATION_TYPES, getAllAssociationTypesWorker);

        case 2:
        case 'end':
          return _context41.stop();
      }
    }
  }, _marked41, this);
}

function getAllAssociationTypesWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAllAssociationTypesWorker$(_context42) {
    while (1) {
      switch (_context42.prev = _context42.next) {
        case 0:
          response = {};
          _context42.prev = 1;
          _context42.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.request(action.id, action.value));

        case 4:
          _context42.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllAssociationTypes);

        case 6:
          response.data = _context42.sent;
          _context42.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.success(action.id, response.data));

        case 9:
          _context42.next = 16;
          break;

        case 11:
          _context42.prev = 11;
          _context42.t0 = _context42['catch'](1);

          response.error = _context42.t0;
          _context42.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.failure(action.id, response.error));

        case 16:
          _context42.prev = 16;
          _context42.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.finally(action.id));

        case 19:
          return _context42.finish(16);

        case 20:
          return _context42.abrupt('return', response);

        case 21:
        case 'end':
          return _context42.stop();
      }
    }
  }, _marked42, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.updateEntityTypeMetaData
 */

function updateAssociationTypeMetaDataWatcher() {
  return regeneratorRuntime.wrap(function updateAssociationTypeMetaDataWatcher$(_context43) {
    while (1) {
      switch (_context43.prev = _context43.next) {
        case 0:
          _context43.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.UPDATE_ASSOCIATION_TYPE_METADATA, updateAssociationTypeMetaDataWorker);

        case 2:
        case 'end':
          return _context43.stop();
      }
    }
  }, _marked43, this);
}

function updateAssociationTypeMetaDataWorker(action) {
  var response, _action$value7, id, metadata;

  return regeneratorRuntime.wrap(function updateAssociationTypeMetaDataWorker$(_context44) {
    while (1) {
      switch (_context44.prev = _context44.next) {
        case 0:
          response = {};
          _context44.prev = 1;
          _context44.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.request(action.id, action.value));

        case 4:
          _action$value7 = action.value, id = _action$value7.id, metadata = _action$value7.metadata;
          // AssociationType is backed by an EntityType, so we're still calling updateEntityTypeMetaData()

          _context44.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateEntityTypeMetaData, id, metadata);

        case 7:
          response.data = _context44.sent;
          _context44.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.success(action.id, response.data));

        case 10:
          _context44.next = 17;
          break;

        case 12:
          _context44.prev = 12;
          _context44.t0 = _context44['catch'](1);

          response.error = _context44.t0;
          _context44.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.failure(action.id, response.error));

        case 17:
          _context44.prev = 17;
          _context44.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.finally(action.id));

        case 20:
          return _context44.finish(17);

        case 21:
          return _context44.abrupt('return', response);

        case 22:
        case 'end':
          return _context44.stop();
      }
    }
  }, _marked44, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.addDstEntityTypeToAssociationType
 */

function addDestinationEntityTypeToAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function addDestinationEntityTypeToAssociationTypeWatcher$(_context45) {
    while (1) {
      switch (_context45.prev = _context45.next) {
        case 0:
          _context45.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.ADD_DST_ET_TO_AT, addDestinationEntityTypeToAssociationTypeWorker);

        case 2:
        case 'end':
          return _context45.stop();
      }
    }
  }, _marked45, this);
}

function addDestinationEntityTypeToAssociationTypeWorker(action) {
  var response, _action$value8, associationTypeId, entityTypeId;

  return regeneratorRuntime.wrap(function addDestinationEntityTypeToAssociationTypeWorker$(_context46) {
    while (1) {
      switch (_context46.prev = _context46.next) {
        case 0:
          response = {};
          _context46.prev = 1;
          _context46.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDestinationEntityTypeToAssociationType.request(action.id, action.value));

        case 4:
          _action$value8 = action.value, associationTypeId = _action$value8.associationTypeId, entityTypeId = _action$value8.entityTypeId;
          _context46.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.addDstEntityTypeToAssociationType, associationTypeId, entityTypeId);

        case 7:
          response.data = _context46.sent;
          _context46.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDestinationEntityTypeToAssociationType.success(action.id, response.data));

        case 10:
          _context46.next = 17;
          break;

        case 12:
          _context46.prev = 12;
          _context46.t0 = _context46['catch'](1);

          response.error = _context46.t0;
          _context46.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDestinationEntityTypeToAssociationType.failure(action.id, response.error));

        case 17:
          _context46.prev = 17;
          _context46.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDestinationEntityTypeToAssociationType.finally(action.id));

        case 20:
          return _context46.finish(17);

        case 21:
          return _context46.abrupt('return', response);

        case 22:
        case 'end':
          return _context46.stop();
      }
    }
  }, _marked46, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.addSrcEntityTypeToAssociationType
 */

function addSourceEntityTypeToAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function addSourceEntityTypeToAssociationTypeWatcher$(_context47) {
    while (1) {
      switch (_context47.prev = _context47.next) {
        case 0:
          _context47.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.ADD_SRC_ET_TO_AT, addSourceEntityTypeToAssociationTypeWorker);

        case 2:
        case 'end':
          return _context47.stop();
      }
    }
  }, _marked47, this);
}

function addSourceEntityTypeToAssociationTypeWorker(action) {
  var response, _action$value9, associationTypeId, entityTypeId;

  return regeneratorRuntime.wrap(function addSourceEntityTypeToAssociationTypeWorker$(_context48) {
    while (1) {
      switch (_context48.prev = _context48.next) {
        case 0:
          response = {};
          _context48.prev = 1;
          _context48.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSourceEntityTypeToAssociationType.request(action.id, action.value));

        case 4:
          _action$value9 = action.value, associationTypeId = _action$value9.associationTypeId, entityTypeId = _action$value9.entityTypeId;
          _context48.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.addSrcEntityTypeToAssociationType, associationTypeId, entityTypeId);

        case 7:
          response.data = _context48.sent;
          _context48.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSourceEntityTypeToAssociationType.success(action.id, response.data));

        case 10:
          _context48.next = 17;
          break;

        case 12:
          _context48.prev = 12;
          _context48.t0 = _context48['catch'](1);

          response.error = _context48.t0;
          _context48.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSourceEntityTypeToAssociationType.failure(action.id, response.error));

        case 17:
          _context48.prev = 17;
          _context48.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSourceEntityTypeToAssociationType.finally(action.id));

        case 20:
          return _context48.finish(17);

        case 21:
          return _context48.abrupt('return', response);

        case 22:
        case 'end':
          return _context48.stop();
      }
    }
  }, _marked48, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.removeDstEntityTypeFromAssociationType
 */

function removeDestinationEntityTypeFromAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function removeDestinationEntityTypeFromAssociationTypeWatcher$(_context49) {
    while (1) {
      switch (_context49.prev = _context49.next) {
        case 0:
          _context49.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.RM_DST_ET_FROM_AT, removeDestinationEntityTypeFromAssociationTypeWorker);

        case 2:
        case 'end':
          return _context49.stop();
      }
    }
  }, _marked49, this);
}

function removeDestinationEntityTypeFromAssociationTypeWorker(action) {
  var response, _action$value10, associationTypeId, entityTypeId;

  return regeneratorRuntime.wrap(function removeDestinationEntityTypeFromAssociationTypeWorker$(_context50) {
    while (1) {
      switch (_context50.prev = _context50.next) {
        case 0:
          response = {};
          _context50.prev = 1;
          _context50.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDestinationEntityTypeFromAssociationType.request(action.id, action.value));

        case 4:
          _action$value10 = action.value, associationTypeId = _action$value10.associationTypeId, entityTypeId = _action$value10.entityTypeId;
          _context50.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.removeDstEntityTypeFromAssociationType, associationTypeId, entityTypeId);

        case 7:
          response.data = _context50.sent;
          _context50.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDestinationEntityTypeFromAssociationType.success(action.id, response.data));

        case 10:
          _context50.next = 17;
          break;

        case 12:
          _context50.prev = 12;
          _context50.t0 = _context50['catch'](1);

          response.error = _context50.t0;
          _context50.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDestinationEntityTypeFromAssociationType.failure(action.id, response.error));

        case 17:
          _context50.prev = 17;
          _context50.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDestinationEntityTypeFromAssociationType.finally(action.id));

        case 20:
          return _context50.finish(17);

        case 21:
          return _context50.abrupt('return', response);

        case 22:
        case 'end':
          return _context50.stop();
      }
    }
  }, _marked50, this, [[1, 12, 17, 21]]);
}

/*
 * EntityDataModelApi.removeSrcEntityTypeFromAssociationType
 */

function removeSourceEntityTypeFromAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function removeSourceEntityTypeFromAssociationTypeWatcher$(_context51) {
    while (1) {
      switch (_context51.prev = _context51.next) {
        case 0:
          _context51.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.RM_SRC_ET_FROM_AT, removeSourceEntityTypeFromAssociationTypeWorker);

        case 2:
        case 'end':
          return _context51.stop();
      }
    }
  }, _marked51, this);
}

function removeSourceEntityTypeFromAssociationTypeWorker(action) {
  var response, _action$value11, associationTypeId, entityTypeId;

  return regeneratorRuntime.wrap(function removeSourceEntityTypeFromAssociationTypeWorker$(_context52) {
    while (1) {
      switch (_context52.prev = _context52.next) {
        case 0:
          response = {};
          _context52.prev = 1;
          _context52.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSourceEntityTypeFromAssociationType.request(action.id, action.value));

        case 4:
          _action$value11 = action.value, associationTypeId = _action$value11.associationTypeId, entityTypeId = _action$value11.entityTypeId;
          _context52.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.removeSrcEntityTypeFromAssociationType, associationTypeId, entityTypeId);

        case 7:
          response.data = _context52.sent;
          _context52.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSourceEntityTypeFromAssociationType.success(action.id, response.data));

        case 10:
          _context52.next = 17;
          break;

        case 12:
          _context52.prev = 12;
          _context52.t0 = _context52['catch'](1);

          response.error = _context52.t0;
          _context52.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSourceEntityTypeFromAssociationType.failure(action.id, response.error));

        case 17:
          _context52.prev = 17;
          _context52.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSourceEntityTypeFromAssociationType.finally(action.id));

        case 20:
          return _context52.finish(17);

        case 21:
          return _context52.abrupt('return', response);

        case 22:
        case 'end':
          return _context52.stop();
      }
    }
  }, _marked52, this, [[1, 12, 17, 21]]);
}

/*
 *
 * Schema APIs
 *
 */

/*
 * EntityDataModelApi.createSchema
 */

function createSchemaWatcher() {
  return regeneratorRuntime.wrap(function createSchemaWatcher$(_context53) {
    while (1) {
      switch (_context53.prev = _context53.next) {
        case 0:
          _context53.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_SCHEMA, createSchemaWorker);

        case 2:
        case 'end':
          return _context53.stop();
      }
    }
  }, _marked53, this);
}

function createSchemaWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createSchemaWorker$(_context54) {
    while (1) {
      switch (_context54.prev = _context54.next) {
        case 0:
          response = {};
          _context54.prev = 1;
          _context54.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.request(action.id, action.value));

        case 4:
          _context54.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createSchema, action.value);

        case 6:
          response.data = _context54.sent;
          _context54.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.success(action.id, response.data));

        case 9:
          _context54.next = 16;
          break;

        case 11:
          _context54.prev = 11;
          _context54.t0 = _context54['catch'](1);

          response.error = _context54.t0;
          _context54.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.failure(action.id, response.error));

        case 16:
          _context54.prev = 16;
          _context54.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.finally(action.id));

        case 19:
          return _context54.finish(16);

        case 20:
          return _context54.abrupt('return', response);

        case 21:
        case 'end':
          return _context54.stop();
      }
    }
  }, _marked54, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getAllSchemas
 */

function getAllSchemasWatcher() {
  return regeneratorRuntime.wrap(function getAllSchemasWatcher$(_context55) {
    while (1) {
      switch (_context55.prev = _context55.next) {
        case 0:
          _context55.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_SCHEMAS, getAllSchemasWorker);

        case 2:
        case 'end':
          return _context55.stop();
      }
    }
  }, _marked55, this);
}

function getAllSchemasWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAllSchemasWorker$(_context56) {
    while (1) {
      switch (_context56.prev = _context56.next) {
        case 0:
          response = {};
          _context56.prev = 1;
          _context56.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.request(action.id, action.value));

        case 4:
          _context56.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllSchemas);

        case 6:
          response.data = _context56.sent;
          _context56.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.success(action.id, response.data));

        case 9:
          _context56.next = 16;
          break;

        case 11:
          _context56.prev = 11;
          _context56.t0 = _context56['catch'](1);

          response.error = _context56.t0;
          _context56.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.failure(action.id, response.error));

        case 16:
          _context56.prev = 16;
          _context56.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.finally(action.id));

        case 19:
          return _context56.finish(16);

        case 20:
          return _context56.abrupt('return', response);

        case 21:
        case 'end':
          return _context56.stop();
      }
    }
  }, _marked56, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.updateSchema
 */

function updateSchemaWatcher() {
  return regeneratorRuntime.wrap(function updateSchemaWatcher$(_context57) {
    while (1) {
      switch (_context57.prev = _context57.next) {
        case 0:
          _context57.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.UPDATE_SCHEMA, updateSchemaWorker);

        case 2:
        case 'end':
          return _context57.stop();
      }
    }
  }, _marked57, this);
}

function updateSchemaWorker(seqAction) {
  var response, _seqAction$value, schemaFqn, entityTypeIds, propertyTypeIds, action;

  return regeneratorRuntime.wrap(function updateSchemaWorker$(_context58) {
    while (1) {
      switch (_context58.prev = _context58.next) {
        case 0:
          response = {};
          _context58.prev = 1;
          _context58.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.request(seqAction.id, seqAction.value));

        case 4:
          _seqAction$value = seqAction.value, schemaFqn = _seqAction$value.schemaFqn, entityTypeIds = _seqAction$value.entityTypeIds, propertyTypeIds = _seqAction$value.propertyTypeIds, action = _seqAction$value.action;
          _context58.next = 7;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateSchema, schemaFqn, action, entityTypeIds, propertyTypeIds);

        case 7:
          response.data = _context58.sent;
          _context58.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.success(seqAction.id, response.data));

        case 10:
          _context58.next = 17;
          break;

        case 12:
          _context58.prev = 12;
          _context58.t0 = _context58['catch'](1);

          response.error = _context58.t0;
          _context58.next = 17;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.failure(seqAction.id, response.error));

        case 17:
          _context58.prev = 17;
          _context58.next = 20;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.finally(seqAction.id));

        case 20:
          return _context58.finish(17);

        case 21:
          return _context58.abrupt('return', response);

        case 22:
        case 'end':
          return _context58.stop();
      }
    }
  }, _marked58, this, [[1, 12, 17, 21]]);
}

/*
 *
 * exports
 *
 */

exports.addDestinationEntityTypeToAssociationTypeWatcher = addDestinationEntityTypeToAssociationTypeWatcher;
exports.addDestinationEntityTypeToAssociationTypeWorker = addDestinationEntityTypeToAssociationTypeWorker;
exports.addPropertyTypeToEntityTypeWatcher = addPropertyTypeToEntityTypeWatcher;
exports.addPropertyTypeToEntityTypeWorker = addPropertyTypeToEntityTypeWorker;
exports.addSourceEntityTypeToAssociationTypeWatcher = addSourceEntityTypeToAssociationTypeWatcher;
exports.addSourceEntityTypeToAssociationTypeWorker = addSourceEntityTypeToAssociationTypeWorker;
exports.createAssociationTypeWatcher = createAssociationTypeWatcher;
exports.createAssociationTypeWorker = createAssociationTypeWorker;
exports.createEntityTypeWatcher = createEntityTypeWatcher;
exports.createEntityTypeWorker = createEntityTypeWorker;
exports.createPropertyTypeWatcher = createPropertyTypeWatcher;
exports.createPropertyTypeWorker = createPropertyTypeWorker;
exports.createSchemaWatcher = createSchemaWatcher;
exports.createSchemaWorker = createSchemaWorker;
exports.deleteAssociationTypeWatcher = deleteAssociationTypeWatcher;
exports.deleteAssociationTypeWorker = deleteAssociationTypeWorker;
exports.deleteEntityTypeWatcher = deleteEntityTypeWatcher;
exports.deleteEntityTypeWorker = deleteEntityTypeWorker;
exports.deletePropertyTypeWatcher = deletePropertyTypeWatcher;
exports.deletePropertyTypeWorker = deletePropertyTypeWorker;
exports.getAllAssociationTypesWatcher = getAllAssociationTypesWatcher;
exports.getAllAssociationTypesWorker = getAllAssociationTypesWorker;
exports.getAllEntityTypesWatcher = getAllEntityTypesWatcher;
exports.getAllEntityTypesWorker = getAllEntityTypesWorker;
exports.getAllPropertyTypesWatcher = getAllPropertyTypesWatcher;
exports.getAllPropertyTypesWorker = getAllPropertyTypesWorker;
exports.getAllSchemasWatcher = getAllSchemasWatcher;
exports.getAllSchemasWorker = getAllSchemasWorker;
exports.getEntityDataModelWatcher = getEntityDataModelWatcher;
exports.getEntityDataModelWorker = getEntityDataModelWorker;
exports.getEntityDataModelProjectionWatcher = getEntityDataModelProjectionWatcher;
exports.getEntityDataModelProjectionWorker = getEntityDataModelProjectionWorker;
exports.getEntitySetWatcher = getEntitySetWatcher;
exports.getEntitySetWorker = getEntitySetWorker;
exports.getEntitySetIdWatcher = getEntitySetIdWatcher;
exports.getEntitySetIdWorker = getEntitySetIdWorker;
exports.getEntityTypeWatcher = getEntityTypeWatcher;
exports.getEntityTypeWorker = getEntityTypeWorker;
exports.getPropertyTypeWatcher = getPropertyTypeWatcher;
exports.getPropertyTypeWorker = getPropertyTypeWorker;
exports.removeDestinationEntityTypeFromAssociationTypeWatcher = removeDestinationEntityTypeFromAssociationTypeWatcher;
exports.removeDestinationEntityTypeFromAssociationTypeWorker = removeDestinationEntityTypeFromAssociationTypeWorker;
exports.removePropertyTypeFromEntityTypeWatcher = removePropertyTypeFromEntityTypeWatcher;
exports.removePropertyTypeFromEntityTypeWorker = removePropertyTypeFromEntityTypeWorker;
exports.removeSourceEntityTypeFromAssociationTypeWatcher = removeSourceEntityTypeFromAssociationTypeWatcher;
exports.removeSourceEntityTypeFromAssociationTypeWorker = removeSourceEntityTypeFromAssociationTypeWorker;
exports.reorderEntityTypePropertyTypesWatcher = reorderEntityTypePropertyTypesWatcher;
exports.reorderEntityTypePropertyTypesWorker = reorderEntityTypePropertyTypesWorker;
exports.updateAssociationTypeMetaDataWatcher = updateAssociationTypeMetaDataWatcher;
exports.updateAssociationTypeMetaDataWorker = updateAssociationTypeMetaDataWorker;
exports.updateEntitySetMetaDataWatcher = updateEntitySetMetaDataWatcher;
exports.updateEntitySetMetaDataWorker = updateEntitySetMetaDataWorker;
exports.updateEntityTypeMetaDataWatcher = updateEntityTypeMetaDataWatcher;
exports.updateEntityTypeMetaDataWorker = updateEntityTypeMetaDataWorker;
exports.updatePropertyTypeMetaDataWatcher = updatePropertyTypeMetaDataWatcher;
exports.updatePropertyTypeMetaDataWorker = updatePropertyTypeMetaDataWorker;
exports.updateSchemaWatcher = updateSchemaWatcher;
exports.updateSchemaWorker = updateSchemaWorker;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntitySetDataWorker = exports.getEntitySetDataWatcher = exports.createEntityAndAssociationDataWorker = exports.createEntityAndAssociationDataWatcher = exports.acquireSyncTicketWorker = exports.acquireSyncTicketWatcher = undefined;

var _lattice = __webpack_require__(1);

var _effects = __webpack_require__(0);

var _DataApiActionFactory = __webpack_require__(6);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(acquireSyncTicketWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(acquireSyncTicketWorker),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(createEntityAndAssociationDataWatcher),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(createEntityAndAssociationDataWorker),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetDataWatcher),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetDataWorker);

/* eslint-disable no-use-before-define */

/*
 * DataApi.acquireSyncTicket
 */

function acquireSyncTicketWatcher() {
  return regeneratorRuntime.wrap(function acquireSyncTicketWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_DataApiActionFactory.ACQUIRE_SYNC_TICKET, acquireSyncTicketWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function acquireSyncTicketWorker(action) {
  var response, _action$value, entitySetId, syncId;

  return regeneratorRuntime.wrap(function acquireSyncTicketWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          response = {};
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.put)(_DataApiActionFactory.acquireSyncTicket.request(action.id, action.value));

        case 4:
          _action$value = action.value, entitySetId = _action$value.entitySetId, syncId = _action$value.syncId;
          _context2.next = 7;
          return (0, _effects.call)(_lattice.DataApi.acquireSyncTicket, entitySetId, syncId);

        case 7:
          response.data = _context2.sent;
          _context2.next = 10;
          return (0, _effects.put)(_DataApiActionFactory.acquireSyncTicket.success(action.id, response.data));

        case 10:
          _context2.next = 17;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2['catch'](1);

          response.error = _context2.t0;
          _context2.next = 17;
          return (0, _effects.put)(_DataApiActionFactory.acquireSyncTicket.failure(action.id, response.error));

        case 17:
          _context2.prev = 17;
          _context2.next = 20;
          return (0, _effects.put)(_DataApiActionFactory.acquireSyncTicket.finally(action.id));

        case 20:
          return _context2.finish(17);

        case 21:
          return _context2.abrupt('return', response);

        case 22:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 12, 17, 21]]);
}

/*
 * DataApi.createEntityAndAssociationData
 */

function createEntityAndAssociationDataWatcher() {
  return regeneratorRuntime.wrap(function createEntityAndAssociationDataWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_DataApiActionFactory.CREATE_ENTITY_AND_ASSOCIATION_DATA, createEntityAndAssociationDataWorker);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function createEntityAndAssociationDataWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createEntityAndAssociationDataWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          response = {};
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.put)(_DataApiActionFactory.createEntityAndAssociationData.request(action.id, action.value));

        case 4:
          _context4.next = 6;
          return (0, _effects.call)(_lattice.DataApi.createEntityAndAssociationData, action.value);

        case 6:
          response.data = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(_DataApiActionFactory.createEntityAndAssociationData.success(action.id, response.data));

        case 9:
          _context4.next = 16;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4['catch'](1);

          response.error = _context4.t0;
          _context4.next = 16;
          return (0, _effects.put)(_DataApiActionFactory.createEntityAndAssociationData.failure(action.id, response.error));

        case 16:
          _context4.prev = 16;
          _context4.next = 19;
          return (0, _effects.put)(_DataApiActionFactory.createEntityAndAssociationData.finally(action.id));

        case 19:
          return _context4.finish(16);

        case 20:
          return _context4.abrupt('return', response);

        case 21:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[1, 11, 16, 20]]);
}

/*
 * DataApi.getEntitySetData
 */

function getEntitySetDataWatcher() {
  return regeneratorRuntime.wrap(function getEntitySetDataWatcher$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_DataApiActionFactory.GET_ENTITY_SET_DATA, getEntitySetDataWorker);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function getEntitySetDataWorker(action) {
  var response, _action$value2, entitySetId, syncId, propertyTypeIds;

  return regeneratorRuntime.wrap(function getEntitySetDataWorker$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          response = {};
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.request(action.id, action.value));

        case 4:
          _action$value2 = action.value, entitySetId = _action$value2.entitySetId, syncId = _action$value2.syncId, propertyTypeIds = _action$value2.propertyTypeIds;
          _context6.next = 7;
          return (0, _effects.call)(_lattice.DataApi.getEntitySetData, entitySetId, syncId, propertyTypeIds);

        case 7:
          response.data = _context6.sent;
          _context6.next = 10;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.success(action.id, response.data));

        case 10:
          _context6.next = 17;
          break;

        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6['catch'](1);

          response.error = _context6.t0;
          _context6.next = 17;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.failure(action.id, response.error));

        case 17:
          _context6.prev = 17;
          _context6.next = 20;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.finally(action.id));

        case 20:
          return _context6.finish(17);

        case 21:
          return _context6.abrupt('return', response);

        case 22:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[1, 12, 17, 21]]);
}

exports.acquireSyncTicketWatcher = acquireSyncTicketWatcher;
exports.acquireSyncTicketWorker = acquireSyncTicketWorker;
exports.createEntityAndAssociationDataWatcher = createEntityAndAssociationDataWatcher;
exports.createEntityAndAssociationDataWorker = createEntityAndAssociationDataWorker;
exports.getEntitySetDataWatcher = getEntitySetDataWatcher;
exports.getEntitySetDataWorker = getEntitySetDataWorker;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAppTypesWorker = exports.getAppTypesWatcher = exports.getAppConfigsWorker = exports.getAppConfigsWatcher = exports.getAppWorker = exports.getAppWatcher = undefined;

var _lattice = __webpack_require__(1);

var _effects = __webpack_require__(0);

var _AppApiActionFactory = __webpack_require__(7);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getAppWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getAppWorker),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(getAppConfigsWatcher),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(getAppConfigsWorker),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(getAppTypesWatcher),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(getAppTypesWorker);

/* eslint-disable no-use-before-define */

/*
 * AppApi.getAppByName
 */

function getAppWatcher() {
  return regeneratorRuntime.wrap(function getAppWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_AppApiActionFactory.GET_APP, getAppWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getAppWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAppWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          response = {};
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.put)(_AppApiActionFactory.getApp.request(action.id, action.value));

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_lattice.AppApi.getAppByName, action.value);

        case 6:
          response.data = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)(_AppApiActionFactory.getApp.success(action.id, response.data));

        case 9:
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2['catch'](1);

          response.error = _context2.t0;
          _context2.next = 16;
          return (0, _effects.put)(_AppApiActionFactory.getApp.failure(action.id, response.error));

        case 16:
          _context2.prev = 16;
          _context2.next = 19;
          return (0, _effects.put)(_AppApiActionFactory.getApp.finally(action.id));

        case 19:
          return _context2.finish(16);

        case 20:
          return _context2.abrupt('return', response);

        case 21:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[1, 11, 16, 20]]);
}

/*
 * AppApi.getConfigurations
 */

function getAppConfigsWatcher() {
  return regeneratorRuntime.wrap(function getAppConfigsWatcher$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeEvery)(_AppApiActionFactory.GET_APP_CONFIGS, getAppConfigsWorker);

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}

function getAppConfigsWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAppConfigsWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          response = {};
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.request(action.id, action.value));

        case 4:
          _context4.next = 6;
          return (0, _effects.call)(_lattice.AppApi.getConfigurations, action.value);

        case 6:
          response.data = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.success(action.id, response.data));

        case 9:
          _context4.next = 16;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4['catch'](1);

          response.error = _context4.t0;
          _context4.next = 16;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.failure(action.id, response.error));

        case 16:
          _context4.prev = 16;
          _context4.next = 19;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.finally(action.id));

        case 19:
          return _context4.finish(16);

        case 20:
          return _context4.abrupt('return', response);

        case 21:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[1, 11, 16, 20]]);
}

/*
 * AppApi.getAppTypesForAppTypeIds
 */

function getAppTypesWatcher() {
  return regeneratorRuntime.wrap(function getAppTypesWatcher$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.takeEvery)(_AppApiActionFactory.GET_APP_TYPES, getAppTypesWorker);

        case 2:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function getAppTypesWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getAppTypesWorker$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          response = {};
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.request(action.id, action.value));

        case 4:
          _context6.next = 6;
          return (0, _effects.call)(_lattice.AppApi.getAppTypesForAppTypeIds, action.value);

        case 6:
          response.data = _context6.sent;
          _context6.next = 9;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.success(action.id, response.data));

        case 9:
          _context6.next = 16;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6['catch'](1);

          response.error = _context6.t0;
          _context6.next = 16;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.failure(action.id, response.error));

        case 16:
          _context6.prev = 16;
          _context6.next = 19;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.finally(action.id));

        case 19:
          return _context6.finish(16);

        case 20:
          return _context6.abrupt('return', response);

        case 21:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[1, 11, 16, 20]]);
}

/*
 *
 * exports
 *
 */

exports.getAppWatcher = getAppWatcher;
exports.getAppWorker = getAppWorker;
exports.getAppConfigsWatcher = getAppConfigsWatcher;
exports.getAppConfigsWorker = getAppConfigsWorker;
exports.getAppTypesWatcher = getAppTypesWatcher;
exports.getAppTypesWorker = getAppTypesWorker;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.SyncApiSagas = exports.SyncApiActionFactory = exports.SearchApiSagas = exports.SearchApiActionFactory = exports.EntityDataModelApiSagas = exports.EntityDataModelApiActionFactory = exports.DataApiSagas = exports.DataApiActionFactory = exports.AppApiSagas = exports.AppApiActionFactory = undefined;

var _AppApiActionFactory = __webpack_require__(7);

var AppApiActionFactory = _interopRequireWildcard(_AppApiActionFactory);

var _AppApiSagas = __webpack_require__(12);

var AppApiSagas = _interopRequireWildcard(_AppApiSagas);

var _DataApiActionFactory = __webpack_require__(6);

var DataApiActionFactory = _interopRequireWildcard(_DataApiActionFactory);

var _DataApiSagas = __webpack_require__(11);

var DataApiSagas = _interopRequireWildcard(_DataApiSagas);

var _EntityDataModelApiActionFactory = __webpack_require__(5);

var EntityDataModelApiActionFactory = _interopRequireWildcard(_EntityDataModelApiActionFactory);

var _EntityDataModelApiSagas = __webpack_require__(10);

var EntityDataModelApiSagas = _interopRequireWildcard(_EntityDataModelApiSagas);

var _SearchApiActionFactory = __webpack_require__(4);

var SearchApiActionFactory = _interopRequireWildcard(_SearchApiActionFactory);

var _SearchApiSagas = __webpack_require__(9);

var SearchApiSagas = _interopRequireWildcard(_SearchApiSagas);

var _SyncApiActionFactory = __webpack_require__(3);

var SyncApiActionFactory = _interopRequireWildcard(_SyncApiActionFactory);

var _SyncApiSagas = __webpack_require__(8);

var SyncApiSagas = _interopRequireWildcard(_SyncApiSagas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// injected by Webpack.DefinePlugin
var version = "v0.0.23";

exports.AppApiActionFactory = AppApiActionFactory;
exports.AppApiSagas = AppApiSagas;
exports.DataApiActionFactory = DataApiActionFactory;
exports.DataApiSagas = DataApiSagas;
exports.EntityDataModelApiActionFactory = EntityDataModelApiActionFactory;
exports.EntityDataModelApiSagas = EntityDataModelApiSagas;
exports.SearchApiActionFactory = SearchApiActionFactory;
exports.SearchApiSagas = SearchApiSagas;
exports.SyncApiActionFactory = SyncApiActionFactory;
exports.SyncApiSagas = SyncApiSagas;
exports.version = version;
exports.default = {
  AppApiActionFactory: AppApiActionFactory,
  AppApiSagas: AppApiSagas,
  DataApiActionFactory: DataApiActionFactory,
  DataApiSagas: DataApiSagas,
  EntityDataModelApiActionFactory: EntityDataModelApiActionFactory,
  EntityDataModelApiSagas: EntityDataModelApiSagas,
  SearchApiActionFactory: SearchApiActionFactory,
  SearchApiSagas: SearchApiSagas,
  SyncApiActionFactory: SyncApiActionFactory,
  SyncApiSagas: SyncApiSagas,
  version: version
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })
/******/ ]);
});