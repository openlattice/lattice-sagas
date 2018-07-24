/*!
 * 
 * lattice-sagas - v0.3.0
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
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidAction = undefined;

var _Constants = __webpack_require__(14);

function isValidActionId(value) {

  return Object.prototype.toString.call(value) === _Constants.STRING_TAG && value.length > 0;
}

function isValidAction(action, baseType) {

  if (!action || !isValidActionId(action.id) || action.type !== baseType) {
    return false;
  }

  return true;
}

exports.isValidAction = isValidAction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ERR_INVALID_ACTION = exports.ERR_INVALID_ACTION = 'invalid parameter: action must be a valid SequenceAction';
var ERR_ACTION_VALUE_NOT_DEFINED = exports.ERR_ACTION_VALUE_NOT_DEFINED = 'invalid parameter: action.value is required and must be defined';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchEntitySetData = exports.searchEntityNeighbors = exports.SEARCH_ENTITY_SET_DATA = exports.SEARCH_ENTITY_NEIGHBORS = undefined;

var _reduxReqseq = __webpack_require__(4);

var SEARCH_ENTITY_NEIGHBORS = 'SEARCH_ENTITY_NEIGHBORS';

var searchEntityNeighbors = (0, _reduxReqseq.newRequestSequence)(SEARCH_ENTITY_NEIGHBORS);

var SEARCH_ENTITY_SET_DATA = 'SEARCH_ENTITY_SET_DATA';
var searchEntitySetData = (0, _reduxReqseq.newRequestSequence)(SEARCH_ENTITY_SET_DATA);

exports.SEARCH_ENTITY_NEIGHBORS = SEARCH_ENTITY_NEIGHBORS;
exports.SEARCH_ENTITY_SET_DATA = SEARCH_ENTITY_SET_DATA;
exports.searchEntityNeighbors = searchEntityNeighbors;
exports.searchEntitySetData = searchEntitySetData;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSchema = exports.updatePropertyTypeMetaData = exports.updateEntityTypeMetaData = exports.updateEntitySetMetaData = exports.updateAssociationTypeMetaData = exports.reorderEntityTypePropertyTypes = exports.removeSrcEntityTypeFromAssociationType = exports.removePropertyTypeFromEntityType = exports.removeDstEntityTypeFromAssociationType = exports.getPropertyType = exports.getEntityType = exports.getEntitySetId = exports.getEntitySet = exports.getEntityDataModelProjection = exports.getEntityDataModel = exports.getAllSchemas = exports.getAllPropertyTypes = exports.getAllEntityTypes = exports.getAllAssociationTypes = exports.deletePropertyType = exports.deleteEntityType = exports.deleteAssociationType = exports.createSchema = exports.createPropertyType = exports.createEntityType = exports.createAssociationType = exports.addSrcEntityTypeToAssociationType = exports.addPropertyTypeToEntityType = exports.addDstEntityTypeToAssociationType = exports.UPDATE_SCHEMA = exports.UPDATE_PROPERTY_TYPE_METADATA = exports.UPDATE_ENTITY_TYPE_METADATA = exports.UPDATE_ENTITY_SET_METADATA = exports.UPDATE_ASSOCIATION_TYPE_METADATA = exports.REORDER_ENTITY_TYPE_PROPERTY_TYPES = exports.REMOVE_SRC_ET_FROM_AT = exports.REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE = exports.REMOVE_DST_ET_FROM_AT = exports.GET_PROPERTY_TYPE = exports.GET_ENTITY_TYPE = exports.GET_ENTITY_SET_ID = exports.GET_ENTITY_SET = exports.GET_ENTITY_DATA_MODEL_PROJECTION = exports.GET_ENTITY_DATA_MODEL = exports.GET_ALL_SCHEMAS = exports.GET_ALL_PROPERTY_TYPES = exports.GET_ALL_ENTITY_TYPES = exports.GET_ALL_ASSOCIATION_TYPES = exports.DELETE_PROPERTY_TYPE = exports.DELETE_ENTITY_TYPE = exports.DELETE_ASSOCIATION_TYPE = exports.CREATE_SCHEMA = exports.CREATE_PROPERTY_TYPE = exports.CREATE_ENTITY_TYPE = exports.CREATE_ASSOCIATION_TYPE = exports.ADD_SRC_ET_TO_AT = exports.ADD_PROPERTY_TYPE_TO_ENTITY_TYPE = exports.ADD_DST_ET_TO_AT = undefined;

var _reduxReqseq = __webpack_require__(4);

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
var addDstEntityTypeToAssociationType = (0, _reduxReqseq.newRequestSequence)(ADD_DST_ET_TO_AT);

var ADD_SRC_ET_TO_AT = 'ADD_SRC_ET_TO_AT';
var addSrcEntityTypeToAssociationType = (0, _reduxReqseq.newRequestSequence)(ADD_SRC_ET_TO_AT);

var REMOVE_DST_ET_FROM_AT = 'REMOVE_DST_ET_FROM_AT';
var removeDstEntityTypeFromAssociationType = (0, _reduxReqseq.newRequestSequence)(REMOVE_DST_ET_FROM_AT);

var REMOVE_SRC_ET_FROM_AT = 'REMOVE_SRC_ET_FROM_AT';
var removeSrcEntityTypeFromAssociationType = (0, _reduxReqseq.newRequestSequence)(REMOVE_SRC_ET_FROM_AT);

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
exports.addDstEntityTypeToAssociationType = addDstEntityTypeToAssociationType;
exports.addPropertyTypeToEntityType = addPropertyTypeToEntityType;
exports.addSrcEntityTypeToAssociationType = addSrcEntityTypeToAssociationType;
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
exports.removeDstEntityTypeFromAssociationType = removeDstEntityTypeFromAssociationType;
exports.removePropertyTypeFromEntityType = removePropertyTypeFromEntityType;
exports.removeSrcEntityTypeFromAssociationType = removeSrcEntityTypeFromAssociationType;
exports.reorderEntityTypePropertyTypes = reorderEntityTypePropertyTypes;
exports.updateAssociationTypeMetaData = updateAssociationTypeMetaData;
exports.updateEntitySetMetaData = updateEntitySetMetaData;
exports.updateEntityTypeMetaData = updateEntityTypeMetaData;
exports.updatePropertyTypeMetaData = updatePropertyTypeMetaData;
exports.updateSchema = updateSchema;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEntityAndAssociationData = exports.CREATE_ENTITY_AND_ASSOCIATION_DATA = undefined;

var _reduxReqseq = __webpack_require__(4);

var CREATE_ENTITY_AND_ASSOCIATION_DATA = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';

var createEntityAndAssociationData = (0, _reduxReqseq.newRequestSequence)(CREATE_ENTITY_AND_ASSOCIATION_DATA);

exports.CREATE_ENTITY_AND_ASSOCIATION_DATA = CREATE_ENTITY_AND_ASSOCIATION_DATA;
exports.createEntityAndAssociationData = createEntityAndAssociationData;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntitySetData = exports.GET_ENTITY_SET_DATA = undefined;

var _reduxReqseq = __webpack_require__(4);

var GET_ENTITY_SET_DATA = 'GET_ENTITY_SET_DATA';

var getEntitySetData = (0, _reduxReqseq.newRequestSequence)(GET_ENTITY_SET_DATA);

exports.GET_ENTITY_SET_DATA = GET_ENTITY_SET_DATA;
exports.getEntitySetData = getEntitySetData;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAppTypes = exports.getAppConfigs = exports.getApp = exports.GET_APP_TYPES = exports.GET_APP_CONFIGS = exports.GET_APP = undefined;

var _reduxReqseq = __webpack_require__(4);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchEntitySetDataWorker = exports.searchEntitySetDataWatcher = exports.searchEntityNeighborsWorker = exports.searchEntityNeighborsWatcher = undefined;

var _lattice = __webpack_require__(3);

var _effects = __webpack_require__(2);

var _Errors = __webpack_require__(1);

var _Utils = __webpack_require__(0);

var _SearchApiActionFactory = __webpack_require__(5);

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

function searchEntityNeighborsWorker(seqAction) {
  var id, value, response, entityId, entitySetId;
  return regeneratorRuntime.wrap(function searchEntityNeighborsWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _SearchApiActionFactory.SEARCH_ENTITY_NEIGHBORS)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entityId = value.entityId, entitySetId = value.entitySetId;
          _context2.prev = 7;
          _context2.next = 10;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.request(id, value));

        case 10:
          _context2.next = 12;
          return (0, _effects.call)(_lattice.SearchApi.searchEntityNeighbors, entitySetId, entityId);

        case 12:
          response.data = _context2.sent;
          _context2.next = 15;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.success(id, response.data));

        case 15:
          _context2.next = 22;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2['catch'](7);

          response.error = _context2.t0;
          _context2.next = 22;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.failure(id, response.error));

        case 22:
          _context2.prev = 22;
          _context2.next = 25;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntityNeighbors.finally(id));

        case 25:
          return _context2.finish(22);

        case 26:
          return _context2.abrupt('return', response);

        case 27:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[7, 17, 22, 26]]);
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

function searchEntitySetDataWorker(seqAction) {
  var id, value, response, entitySetId, searchOptions;
  return regeneratorRuntime.wrap(function searchEntitySetDataWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _SearchApiActionFactory.SEARCH_ENTITY_SET_DATA)) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entitySetId = value.entitySetId, searchOptions = value.searchOptions;
          _context4.prev = 7;
          _context4.next = 10;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.request(id, value));

        case 10:
          _context4.next = 12;
          return (0, _effects.call)(_lattice.SearchApi.searchEntitySetData, entitySetId, searchOptions);

        case 12:
          response.data = _context4.sent;
          _context4.next = 15;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.success(id, response.data));

        case 15:
          _context4.next = 22;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4['catch'](7);

          response.error = _context4.t0;
          _context4.next = 22;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.failure(id, response.error));

        case 22:
          _context4.prev = 22;
          _context4.next = 25;
          return (0, _effects.put)(_SearchApiActionFactory.searchEntitySetData.finally(id));

        case 25:
          return _context4.finish(22);

        case 26:
          return _context4.abrupt('return', response);

        case 27:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[7, 17, 22, 26]]);
}

exports.searchEntityNeighborsWatcher = searchEntityNeighborsWatcher;
exports.searchEntityNeighborsWorker = searchEntityNeighborsWorker;
exports.searchEntitySetDataWatcher = searchEntitySetDataWatcher;
exports.searchEntitySetDataWorker = searchEntitySetDataWorker;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSchemaWorker = exports.updateSchemaWatcher = exports.updatePropertyTypeMetaDataWorker = exports.updatePropertyTypeMetaDataWatcher = exports.updateEntityTypeMetaDataWorker = exports.updateEntityTypeMetaDataWatcher = exports.updateEntitySetMetaDataWorker = exports.updateEntitySetMetaDataWatcher = exports.updateAssociationTypeMetaDataWorker = exports.updateAssociationTypeMetaDataWatcher = exports.reorderEntityTypePropertyTypesWorker = exports.reorderEntityTypePropertyTypesWatcher = exports.removeSrcEntityTypeFromAssociationTypeWorker = exports.removeSrcEntityTypeFromAssociationTypeWatcher = exports.removePropertyTypeFromEntityTypeWorker = exports.removePropertyTypeFromEntityTypeWatcher = exports.removeDstEntityTypeFromAssociationTypeWorker = exports.removeDstEntityTypeFromAssociationTypeWatcher = exports.getPropertyTypeWorker = exports.getPropertyTypeWatcher = exports.getEntityTypeWorker = exports.getEntityTypeWatcher = exports.getEntitySetIdWorker = exports.getEntitySetIdWatcher = exports.getEntitySetWorker = exports.getEntitySetWatcher = exports.getEntityDataModelProjectionWorker = exports.getEntityDataModelProjectionWatcher = exports.getEntityDataModelWorker = exports.getEntityDataModelWatcher = exports.getAllSchemasWorker = exports.getAllSchemasWatcher = exports.getAllPropertyTypesWorker = exports.getAllPropertyTypesWatcher = exports.getAllEntityTypesWorker = exports.getAllEntityTypesWatcher = exports.getAllAssociationTypesWorker = exports.getAllAssociationTypesWatcher = exports.deletePropertyTypeWorker = exports.deletePropertyTypeWatcher = exports.deleteEntityTypeWorker = exports.deleteEntityTypeWatcher = exports.deleteAssociationTypeWorker = exports.deleteAssociationTypeWatcher = exports.createSchemaWorker = exports.createSchemaWatcher = exports.createPropertyTypeWorker = exports.createPropertyTypeWatcher = exports.createEntityTypeWorker = exports.createEntityTypeWatcher = exports.createAssociationTypeWorker = exports.createAssociationTypeWatcher = exports.addSrcEntityTypeToAssociationTypeWorker = exports.addSrcEntityTypeToAssociationTypeWatcher = exports.addPropertyTypeToEntityTypeWorker = exports.addPropertyTypeToEntityTypeWatcher = exports.addDstEntityTypeToAssociationTypeWorker = exports.addDstEntityTypeToAssociationTypeWatcher = undefined;

var _lattice = __webpack_require__(3);

var _effects = __webpack_require__(2);

var _Errors = __webpack_require__(1);

var _Utils = __webpack_require__(0);

var _EntityDataModelApiActionFactory = __webpack_require__(6);

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
    _marked45 = /*#__PURE__*/regeneratorRuntime.mark(addDstEntityTypeToAssociationTypeWatcher),
    _marked46 = /*#__PURE__*/regeneratorRuntime.mark(addDstEntityTypeToAssociationTypeWorker),
    _marked47 = /*#__PURE__*/regeneratorRuntime.mark(addSrcEntityTypeToAssociationTypeWatcher),
    _marked48 = /*#__PURE__*/regeneratorRuntime.mark(addSrcEntityTypeToAssociationTypeWorker),
    _marked49 = /*#__PURE__*/regeneratorRuntime.mark(removeDstEntityTypeFromAssociationTypeWatcher),
    _marked50 = /*#__PURE__*/regeneratorRuntime.mark(removeDstEntityTypeFromAssociationTypeWorker),
    _marked51 = /*#__PURE__*/regeneratorRuntime.mark(removeSrcEntityTypeFromAssociationTypeWatcher),
    _marked52 = /*#__PURE__*/regeneratorRuntime.mark(removeSrcEntityTypeFromAssociationTypeWorker),
    _marked53 = /*#__PURE__*/regeneratorRuntime.mark(createSchemaWatcher),
    _marked54 = /*#__PURE__*/regeneratorRuntime.mark(createSchemaWorker),
    _marked55 = /*#__PURE__*/regeneratorRuntime.mark(getAllSchemasWatcher),
    _marked56 = /*#__PURE__*/regeneratorRuntime.mark(getAllSchemasWorker),
    _marked57 = /*#__PURE__*/regeneratorRuntime.mark(updateSchemaWatcher),
    _marked58 = /*#__PURE__*/regeneratorRuntime.mark(updateSchemaWorker);

/* eslint-disable no-use-before-define */

/*
 * types
 */

/*
 *
 * Entity Data Model APIs
 *
 */

/*
 * EntityDataModelApi.getEntityDataModel
 */

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

function getEntityDataModelWorker(seqAction) {
  var response, id;
  return regeneratorRuntime.wrap(function getEntityDataModelWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ENTITY_DATA_MODEL)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          response = {};
          id = seqAction.id;
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.request(id));

        case 7:
          _context2.next = 9;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityDataModel);

        case 9:
          response.data = _context2.sent;
          _context2.next = 12;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.success(id, response.data));

        case 12:
          _context2.next = 19;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2['catch'](4);

          response.error = _context2.t0;
          _context2.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.failure(id, response.error));

        case 19:
          _context2.prev = 19;
          _context2.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.finally(id));

        case 22:
          return _context2.finish(19);

        case 23:
          return _context2.abrupt('return', response);

        case 24:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[4, 14, 19, 23]]);
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

function getEntityDataModelProjectionWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getEntityDataModelProjectionWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ENTITY_DATA_MODEL_PROJECTION)) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context4.prev = 6;
          _context4.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.request(id, value));

        case 9:
          _context4.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityDataModelProjection, value);

        case 11:
          response.data = _context4.sent;
          _context4.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.success(id, response.data));

        case 14:
          _context4.next = 21;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4['catch'](6);

          response.error = _context4.t0;
          _context4.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.failure(id, response.error));

        case 21:
          _context4.prev = 21;
          _context4.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.finally(id));

        case 24:
          return _context4.finish(21);

        case 25:
          return _context4.abrupt('return', response);

        case 26:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[6, 16, 21, 25]]);
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

function getEntitySetWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getEntitySetWorker$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ENTITY_SET)) {
            _context6.next = 2;
            break;
          }

          return _context6.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context6.next = 5;
            break;
          }

          return _context6.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context6.prev = 6;
          _context6.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.request(id, value));

        case 9:
          _context6.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntitySet, value);

        case 11:
          response.data = _context6.sent;
          _context6.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.success(id, response.data));

        case 14:
          _context6.next = 21;
          break;

        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6['catch'](6);

          response.error = _context6.t0;
          _context6.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.failure(id, response.error));

        case 21:
          _context6.prev = 21;
          _context6.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.finally(id));

        case 24:
          return _context6.finish(21);

        case 25:
          return _context6.abrupt('return', response);

        case 26:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[6, 16, 21, 25]]);
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

function getEntitySetIdWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getEntitySetIdWorker$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ENTITY_SET_ID)) {
            _context8.next = 2;
            break;
          }

          return _context8.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context8.next = 5;
            break;
          }

          return _context8.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context8.prev = 6;
          _context8.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.request(id, value));

        case 9:
          _context8.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntitySetId, value);

        case 11:
          response.data = _context8.sent;
          _context8.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.success(id, response.data));

        case 14:
          _context8.next = 21;
          break;

        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8['catch'](6);

          response.error = _context8.t0;
          _context8.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.failure(id, response.error));

        case 21:
          _context8.prev = 21;
          _context8.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.finally(id));

        case 24:
          return _context8.finish(21);

        case 25:
          return _context8.abrupt('return', response);

        case 26:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this, [[6, 16, 21, 25]]);
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

function updateEntitySetMetaDataWorker(seqAction) {
  var id, value, response, entitySetId, metadata;
  return regeneratorRuntime.wrap(function updateEntitySetMetaDataWorker$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.UPDATE_ENTITY_SET_METADATA)) {
            _context10.next = 2;
            break;
          }

          return _context10.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context10.next = 5;
            break;
          }

          return _context10.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entitySetId = value.entitySetId, metadata = value.metadata;
          _context10.prev = 7;
          _context10.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.request(id, value));

        case 10:
          _context10.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateEntitySetMetaData, entitySetId, metadata);

        case 12:
          response.data = _context10.sent;
          _context10.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.success(id, response.data));

        case 15:
          _context10.next = 22;
          break;

        case 17:
          _context10.prev = 17;
          _context10.t0 = _context10['catch'](7);

          response.error = _context10.t0;
          _context10.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.failure(id, response.error));

        case 22:
          _context10.prev = 22;
          _context10.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntitySetMetaData.finally(id));

        case 25:
          return _context10.finish(22);

        case 26:
          return _context10.abrupt('return', response);

        case 27:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked10, this, [[7, 17, 22, 26]]);
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

function createEntityTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function createEntityTypeWorker$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.CREATE_ENTITY_TYPE)) {
            _context12.next = 2;
            break;
          }

          return _context12.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context12.next = 5;
            break;
          }

          return _context12.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context12.prev = 6;
          _context12.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.request(id, value));

        case 9:
          _context12.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createEntityType, value);

        case 11:
          response.data = _context12.sent;
          _context12.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.success(id, response.data));

        case 14:
          _context12.next = 21;
          break;

        case 16:
          _context12.prev = 16;
          _context12.t0 = _context12['catch'](6);

          response.error = _context12.t0;
          _context12.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.failure(id, response.error));

        case 21:
          _context12.prev = 21;
          _context12.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.finally(id));

        case 24:
          return _context12.finish(21);

        case 25:
          return _context12.abrupt('return', response);

        case 26:
        case 'end':
          return _context12.stop();
      }
    }
  }, _marked12, this, [[6, 16, 21, 25]]);
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

function deleteEntityTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function deleteEntityTypeWorker$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.DELETE_ENTITY_TYPE)) {
            _context14.next = 2;
            break;
          }

          return _context14.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context14.next = 5;
            break;
          }

          return _context14.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context14.prev = 6;
          _context14.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.request(id, value));

        case 9:
          _context14.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deleteEntityType, value);

        case 11:
          response.data = _context14.sent;
          _context14.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.success(id, response.data));

        case 14:
          _context14.next = 21;
          break;

        case 16:
          _context14.prev = 16;
          _context14.t0 = _context14['catch'](6);

          response.error = _context14.t0;
          _context14.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.failure(id, response.error));

        case 21:
          _context14.prev = 21;
          _context14.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.finally(id));

        case 24:
          return _context14.finish(21);

        case 25:
          return _context14.abrupt('return', response);

        case 26:
        case 'end':
          return _context14.stop();
      }
    }
  }, _marked14, this, [[6, 16, 21, 25]]);
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

function getAllEntityTypesWorker(seqAction) {
  var response, id;
  return regeneratorRuntime.wrap(function getAllEntityTypesWorker$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ALL_ENTITY_TYPES)) {
            _context16.next = 2;
            break;
          }

          return _context16.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          response = {};
          id = seqAction.id;
          _context16.prev = 4;
          _context16.next = 7;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.request(id));

        case 7:
          _context16.next = 9;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllEntityTypes);

        case 9:
          response.data = _context16.sent;
          _context16.next = 12;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.success(id, response.data));

        case 12:
          _context16.next = 19;
          break;

        case 14:
          _context16.prev = 14;
          _context16.t0 = _context16['catch'](4);

          response.error = _context16.t0;
          _context16.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.failure(id, response.error));

        case 19:
          _context16.prev = 19;
          _context16.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.finally(id));

        case 22:
          return _context16.finish(19);

        case 23:
          return _context16.abrupt('return', response);

        case 24:
        case 'end':
          return _context16.stop();
      }
    }
  }, _marked16, this, [[4, 14, 19, 23]]);
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

function getEntityTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getEntityTypeWorker$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ENTITY_TYPE)) {
            _context18.next = 2;
            break;
          }

          return _context18.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context18.next = 5;
            break;
          }

          return _context18.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context18.prev = 6;
          _context18.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.request(id, value));

        case 9:
          _context18.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityType, value);

        case 11:
          response.data = _context18.sent;
          _context18.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.success(id, response.data));

        case 14:
          _context18.next = 21;
          break;

        case 16:
          _context18.prev = 16;
          _context18.t0 = _context18['catch'](6);

          response.error = _context18.t0;
          _context18.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.failure(id, response.error));

        case 21:
          _context18.prev = 21;
          _context18.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.finally(id));

        case 24:
          return _context18.finish(21);

        case 25:
          return _context18.abrupt('return', response);

        case 26:
        case 'end':
          return _context18.stop();
      }
    }
  }, _marked18, this, [[6, 16, 21, 25]]);
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

function updateEntityTypeMetaDataWorker(seqAction) {
  var id, value, response, entityTypeId, metadata;
  return regeneratorRuntime.wrap(function updateEntityTypeMetaDataWorker$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.UPDATE_ENTITY_TYPE_METADATA)) {
            _context20.next = 2;
            break;
          }

          return _context20.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context20.next = 5;
            break;
          }

          return _context20.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entityTypeId = value.entityTypeId, metadata = value.metadata;
          _context20.prev = 7;
          _context20.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.request(id, value));

        case 10:
          _context20.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateEntityTypeMetaData, entityTypeId, metadata);

        case 12:
          response.data = _context20.sent;
          _context20.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.success(id, response.data));

        case 15:
          _context20.next = 22;
          break;

        case 17:
          _context20.prev = 17;
          _context20.t0 = _context20['catch'](7);

          response.error = _context20.t0;
          _context20.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.failure(id, response.error));

        case 22:
          _context20.prev = 22;
          _context20.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateEntityTypeMetaData.finally(id));

        case 25:
          return _context20.finish(22);

        case 26:
          return _context20.abrupt('return', response);

        case 27:
        case 'end':
          return _context20.stop();
      }
    }
  }, _marked20, this, [[7, 17, 22, 26]]);
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

function addPropertyTypeToEntityTypeWorker(seqAction) {
  var id, value, response, entityTypeId, propertyTypeId;
  return regeneratorRuntime.wrap(function addPropertyTypeToEntityTypeWorker$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.ADD_PROPERTY_TYPE_TO_ENTITY_TYPE)) {
            _context22.next = 2;
            break;
          }

          return _context22.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context22.next = 5;
            break;
          }

          return _context22.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entityTypeId = value.entityTypeId, propertyTypeId = value.propertyTypeId;
          _context22.prev = 7;
          _context22.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.request(id, value));

        case 10:
          _context22.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.addPropertyTypeToEntityType, entityTypeId, propertyTypeId);

        case 12:
          response.data = _context22.sent;
          _context22.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.success(id, response.data));

        case 15:
          _context22.next = 22;
          break;

        case 17:
          _context22.prev = 17;
          _context22.t0 = _context22['catch'](7);

          response.error = _context22.t0;
          _context22.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.failure(id, response.error));

        case 22:
          _context22.prev = 22;
          _context22.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addPropertyTypeToEntityType.finally(id));

        case 25:
          return _context22.finish(22);

        case 26:
          return _context22.abrupt('return', response);

        case 27:
        case 'end':
          return _context22.stop();
      }
    }
  }, _marked22, this, [[7, 17, 22, 26]]);
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
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE, removePropertyTypeFromEntityTypeWorker);

        case 2:
        case 'end':
          return _context23.stop();
      }
    }
  }, _marked23, this);
}

function removePropertyTypeFromEntityTypeWorker(seqAction) {
  var id, value, response, entityTypeId, propertyTypeId;
  return regeneratorRuntime.wrap(function removePropertyTypeFromEntityTypeWorker$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE)) {
            _context24.next = 2;
            break;
          }

          return _context24.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context24.next = 5;
            break;
          }

          return _context24.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entityTypeId = value.entityTypeId, propertyTypeId = value.propertyTypeId;
          _context24.prev = 7;
          _context24.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.request(id, value));

        case 10:
          _context24.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.removePropertyTypeFromEntityType, entityTypeId, propertyTypeId);

        case 12:
          response.data = _context24.sent;
          _context24.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.success(id, response.data));

        case 15:
          _context24.next = 22;
          break;

        case 17:
          _context24.prev = 17;
          _context24.t0 = _context24['catch'](7);

          response.error = _context24.t0;
          _context24.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.failure(id, response.error));

        case 22:
          _context24.prev = 22;
          _context24.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removePropertyTypeFromEntityType.finally(id));

        case 25:
          return _context24.finish(22);

        case 26:
          return _context24.abrupt('return', response);

        case 27:
        case 'end':
          return _context24.stop();
      }
    }
  }, _marked24, this, [[7, 17, 22, 26]]);
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

function reorderEntityTypePropertyTypesWorker(seqAction) {
  var id, value, response, entityTypeId, propertyTypeIds;
  return regeneratorRuntime.wrap(function reorderEntityTypePropertyTypesWorker$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.REORDER_ENTITY_TYPE_PROPERTY_TYPES)) {
            _context26.next = 2;
            break;
          }

          return _context26.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context26.next = 5;
            break;
          }

          return _context26.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entityTypeId = value.entityTypeId, propertyTypeIds = value.propertyTypeIds;
          _context26.prev = 7;
          _context26.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.request(id, value));

        case 10:
          _context26.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.reorderPropertyTypesInEntityType, entityTypeId, propertyTypeIds);

        case 12:
          response.data = _context26.sent;
          _context26.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.success(id, response.data));

        case 15:
          _context26.next = 22;
          break;

        case 17:
          _context26.prev = 17;
          _context26.t0 = _context26['catch'](7);

          response.error = _context26.t0;
          _context26.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.failure(id, response.error));

        case 22:
          _context26.prev = 22;
          _context26.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.reorderEntityTypePropertyTypes.finally(id));

        case 25:
          return _context26.finish(22);

        case 26:
          return _context26.abrupt('return', response);

        case 27:
        case 'end':
          return _context26.stop();
      }
    }
  }, _marked26, this, [[7, 17, 22, 26]]);
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

function createPropertyTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function createPropertyTypeWorker$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.CREATE_PROPERTY_TYPE)) {
            _context28.next = 2;
            break;
          }

          return _context28.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context28.next = 5;
            break;
          }

          return _context28.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context28.prev = 6;
          _context28.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.request(id, value));

        case 9:
          _context28.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createPropertyType, value);

        case 11:
          response.data = _context28.sent;
          _context28.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.success(id, response.data));

        case 14:
          _context28.next = 21;
          break;

        case 16:
          _context28.prev = 16;
          _context28.t0 = _context28['catch'](6);

          response.error = _context28.t0;
          _context28.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.failure(id, response.error));

        case 21:
          _context28.prev = 21;
          _context28.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.finally(id));

        case 24:
          return _context28.finish(21);

        case 25:
          return _context28.abrupt('return', response);

        case 26:
        case 'end':
          return _context28.stop();
      }
    }
  }, _marked28, this, [[6, 16, 21, 25]]);
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

function deletePropertyTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function deletePropertyTypeWorker$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.DELETE_PROPERTY_TYPE)) {
            _context30.next = 2;
            break;
          }

          return _context30.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context30.next = 5;
            break;
          }

          return _context30.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context30.prev = 6;
          _context30.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.request(id, value));

        case 9:
          _context30.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deletePropertyType, value);

        case 11:
          response.data = _context30.sent;
          _context30.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.success(id, response.data));

        case 14:
          _context30.next = 21;
          break;

        case 16:
          _context30.prev = 16;
          _context30.t0 = _context30['catch'](6);

          response.error = _context30.t0;
          _context30.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.failure(id, response.error));

        case 21:
          _context30.prev = 21;
          _context30.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.finally(id));

        case 24:
          return _context30.finish(21);

        case 25:
          return _context30.abrupt('return', response);

        case 26:
        case 'end':
          return _context30.stop();
      }
    }
  }, _marked30, this, [[6, 16, 21, 25]]);
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

function getAllPropertyTypesWorker(seqAction) {
  var response, id;
  return regeneratorRuntime.wrap(function getAllPropertyTypesWorker$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ALL_PROPERTY_TYPES)) {
            _context32.next = 2;
            break;
          }

          return _context32.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          response = {};
          id = seqAction.id;
          _context32.prev = 4;
          _context32.next = 7;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.request(id));

        case 7:
          _context32.next = 9;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllPropertyTypes);

        case 9:
          response.data = _context32.sent;
          _context32.next = 12;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.success(id, response.data));

        case 12:
          _context32.next = 19;
          break;

        case 14:
          _context32.prev = 14;
          _context32.t0 = _context32['catch'](4);

          response.error = _context32.t0;
          _context32.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.failure(id, response.error));

        case 19:
          _context32.prev = 19;
          _context32.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.finally(id));

        case 22:
          return _context32.finish(19);

        case 23:
          return _context32.abrupt('return', response);

        case 24:
        case 'end':
          return _context32.stop();
      }
    }
  }, _marked32, this, [[4, 14, 19, 23]]);
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

function getPropertyTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getPropertyTypeWorker$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_PROPERTY_TYPE)) {
            _context34.next = 2;
            break;
          }

          return _context34.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context34.next = 5;
            break;
          }

          return _context34.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context34.prev = 6;
          _context34.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.request(id, value));

        case 9:
          _context34.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getPropertyType, value);

        case 11:
          response.data = _context34.sent;
          _context34.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.success(id, response.data));

        case 14:
          _context34.next = 21;
          break;

        case 16:
          _context34.prev = 16;
          _context34.t0 = _context34['catch'](6);

          response.error = _context34.t0;
          _context34.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.failure(id, response.error));

        case 21:
          _context34.prev = 21;
          _context34.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.finally(id));

        case 24:
          return _context34.finish(21);

        case 25:
          return _context34.abrupt('return', response);

        case 26:
        case 'end':
          return _context34.stop();
      }
    }
  }, _marked34, this, [[6, 16, 21, 25]]);
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

function updatePropertyTypeMetaDataWorker(seqAction) {
  var id, value, response, propertyTypeId, metadata;
  return regeneratorRuntime.wrap(function updatePropertyTypeMetaDataWorker$(_context36) {
    while (1) {
      switch (_context36.prev = _context36.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.UPDATE_PROPERTY_TYPE_METADATA)) {
            _context36.next = 2;
            break;
          }

          return _context36.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context36.next = 5;
            break;
          }

          return _context36.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          propertyTypeId = value.propertyTypeId, metadata = value.metadata;
          _context36.prev = 7;
          _context36.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.request(id, value));

        case 10:
          _context36.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updatePropertyTypeMetaData, propertyTypeId, metadata);

        case 12:
          response.data = _context36.sent;
          _context36.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.success(id, response.data));

        case 15:
          _context36.next = 22;
          break;

        case 17:
          _context36.prev = 17;
          _context36.t0 = _context36['catch'](7);

          response.error = _context36.t0;
          _context36.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.failure(id, response.error));

        case 22:
          _context36.prev = 22;
          _context36.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updatePropertyTypeMetaData.finally(id));

        case 25:
          return _context36.finish(22);

        case 26:
          return _context36.abrupt('return', response);

        case 27:
        case 'end':
          return _context36.stop();
      }
    }
  }, _marked36, this, [[7, 17, 22, 26]]);
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

function createAssociationTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function createAssociationTypeWorker$(_context38) {
    while (1) {
      switch (_context38.prev = _context38.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.CREATE_ASSOCIATION_TYPE)) {
            _context38.next = 2;
            break;
          }

          return _context38.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context38.next = 5;
            break;
          }

          return _context38.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context38.prev = 6;
          _context38.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.request(id, value));

        case 9:
          _context38.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createAssociationType, value);

        case 11:
          response.data = _context38.sent;
          _context38.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.success(id, response.data));

        case 14:
          _context38.next = 21;
          break;

        case 16:
          _context38.prev = 16;
          _context38.t0 = _context38['catch'](6);

          response.error = _context38.t0;
          _context38.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.failure(id, response.error));

        case 21:
          _context38.prev = 21;
          _context38.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.finally(id));

        case 24:
          return _context38.finish(21);

        case 25:
          return _context38.abrupt('return', response);

        case 26:
        case 'end':
          return _context38.stop();
      }
    }
  }, _marked38, this, [[6, 16, 21, 25]]);
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

function deleteAssociationTypeWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function deleteAssociationTypeWorker$(_context40) {
    while (1) {
      switch (_context40.prev = _context40.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.DELETE_ASSOCIATION_TYPE)) {
            _context40.next = 2;
            break;
          }

          return _context40.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context40.next = 5;
            break;
          }

          return _context40.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context40.prev = 6;
          _context40.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.request(id, value));

        case 9:
          _context40.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deleteAssociationType, value);

        case 11:
          response.data = _context40.sent;
          _context40.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.success(id, response.data));

        case 14:
          _context40.next = 21;
          break;

        case 16:
          _context40.prev = 16;
          _context40.t0 = _context40['catch'](6);

          response.error = _context40.t0;
          _context40.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.failure(id, response.error));

        case 21:
          _context40.prev = 21;
          _context40.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.finally(id));

        case 24:
          return _context40.finish(21);

        case 25:
          return _context40.abrupt('return', response);

        case 26:
        case 'end':
          return _context40.stop();
      }
    }
  }, _marked40, this, [[6, 16, 21, 25]]);
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

function getAllAssociationTypesWorker(seqAction) {
  var response, id;
  return regeneratorRuntime.wrap(function getAllAssociationTypesWorker$(_context42) {
    while (1) {
      switch (_context42.prev = _context42.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ALL_ASSOCIATION_TYPES)) {
            _context42.next = 2;
            break;
          }

          return _context42.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          response = {};
          id = seqAction.id;
          _context42.prev = 4;
          _context42.next = 7;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.request(id));

        case 7:
          _context42.next = 9;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllAssociationTypes);

        case 9:
          response.data = _context42.sent;
          _context42.next = 12;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.success(id, response.data));

        case 12:
          _context42.next = 19;
          break;

        case 14:
          _context42.prev = 14;
          _context42.t0 = _context42['catch'](4);

          response.error = _context42.t0;
          _context42.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.failure(id, response.error));

        case 19:
          _context42.prev = 19;
          _context42.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.finally(id));

        case 22:
          return _context42.finish(19);

        case 23:
          return _context42.abrupt('return', response);

        case 24:
        case 'end':
          return _context42.stop();
      }
    }
  }, _marked42, this, [[4, 14, 19, 23]]);
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

function updateAssociationTypeMetaDataWorker(seqAction) {
  var id, value, response, associationTypeId, metadata;
  return regeneratorRuntime.wrap(function updateAssociationTypeMetaDataWorker$(_context44) {
    while (1) {
      switch (_context44.prev = _context44.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.UPDATE_ASSOCIATION_TYPE_METADATA)) {
            _context44.next = 2;
            break;
          }

          return _context44.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context44.next = 5;
            break;
          }

          return _context44.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          associationTypeId = value.associationTypeId, metadata = value.metadata;
          _context44.prev = 7;
          _context44.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.request(id, value));

        case 10:
          _context44.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateEntityTypeMetaData, associationTypeId, metadata);

        case 12:
          response.data = _context44.sent;
          _context44.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.success(id, response.data));

        case 15:
          _context44.next = 22;
          break;

        case 17:
          _context44.prev = 17;
          _context44.t0 = _context44['catch'](7);

          response.error = _context44.t0;
          _context44.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.failure(id, response.error));

        case 22:
          _context44.prev = 22;
          _context44.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateAssociationTypeMetaData.finally(id));

        case 25:
          return _context44.finish(22);

        case 26:
          return _context44.abrupt('return', response);

        case 27:
        case 'end':
          return _context44.stop();
      }
    }
  }, _marked44, this, [[7, 17, 22, 26]]);
}

/*
 * EntityDataModelApi.addDstEntityTypeToAssociationType
 */

function addDstEntityTypeToAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function addDstEntityTypeToAssociationTypeWatcher$(_context45) {
    while (1) {
      switch (_context45.prev = _context45.next) {
        case 0:
          _context45.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.ADD_DST_ET_TO_AT, addDstEntityTypeToAssociationTypeWorker);

        case 2:
        case 'end':
          return _context45.stop();
      }
    }
  }, _marked45, this);
}

function addDstEntityTypeToAssociationTypeWorker(seqAction) {
  var id, value, response, associationTypeId, entityTypeId;
  return regeneratorRuntime.wrap(function addDstEntityTypeToAssociationTypeWorker$(_context46) {
    while (1) {
      switch (_context46.prev = _context46.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.ADD_DST_ET_TO_AT)) {
            _context46.next = 2;
            break;
          }

          return _context46.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context46.next = 5;
            break;
          }

          return _context46.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          associationTypeId = value.associationTypeId, entityTypeId = value.entityTypeId;
          _context46.prev = 7;
          _context46.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDstEntityTypeToAssociationType.request(id, value));

        case 10:
          _context46.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.addDstEntityTypeToAssociationType, associationTypeId, entityTypeId);

        case 12:
          response.data = _context46.sent;
          _context46.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDstEntityTypeToAssociationType.success(id, response.data));

        case 15:
          _context46.next = 22;
          break;

        case 17:
          _context46.prev = 17;
          _context46.t0 = _context46['catch'](7);

          response.error = _context46.t0;
          _context46.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDstEntityTypeToAssociationType.failure(id, response.error));

        case 22:
          _context46.prev = 22;
          _context46.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addDstEntityTypeToAssociationType.finally(id));

        case 25:
          return _context46.finish(22);

        case 26:
          return _context46.abrupt('return', response);

        case 27:
        case 'end':
          return _context46.stop();
      }
    }
  }, _marked46, this, [[7, 17, 22, 26]]);
}

/*
 * EntityDataModelApi.addSrcEntityTypeToAssociationType
 */

function addSrcEntityTypeToAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function addSrcEntityTypeToAssociationTypeWatcher$(_context47) {
    while (1) {
      switch (_context47.prev = _context47.next) {
        case 0:
          _context47.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.ADD_SRC_ET_TO_AT, addSrcEntityTypeToAssociationTypeWorker);

        case 2:
        case 'end':
          return _context47.stop();
      }
    }
  }, _marked47, this);
}

function addSrcEntityTypeToAssociationTypeWorker(seqAction) {
  var id, value, response, associationTypeId, entityTypeId;
  return regeneratorRuntime.wrap(function addSrcEntityTypeToAssociationTypeWorker$(_context48) {
    while (1) {
      switch (_context48.prev = _context48.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.ADD_SRC_ET_TO_AT)) {
            _context48.next = 2;
            break;
          }

          return _context48.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context48.next = 5;
            break;
          }

          return _context48.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          associationTypeId = value.associationTypeId, entityTypeId = value.entityTypeId;
          _context48.prev = 7;
          _context48.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSrcEntityTypeToAssociationType.request(id, value));

        case 10:
          _context48.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.addSrcEntityTypeToAssociationType, associationTypeId, entityTypeId);

        case 12:
          response.data = _context48.sent;
          _context48.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSrcEntityTypeToAssociationType.success(id, response.data));

        case 15:
          _context48.next = 22;
          break;

        case 17:
          _context48.prev = 17;
          _context48.t0 = _context48['catch'](7);

          response.error = _context48.t0;
          _context48.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSrcEntityTypeToAssociationType.failure(id, response.error));

        case 22:
          _context48.prev = 22;
          _context48.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.addSrcEntityTypeToAssociationType.finally(id));

        case 25:
          return _context48.finish(22);

        case 26:
          return _context48.abrupt('return', response);

        case 27:
        case 'end':
          return _context48.stop();
      }
    }
  }, _marked48, this, [[7, 17, 22, 26]]);
}

/*
 * EntityDataModelApi.removeDstEntityTypeFromAssociationType
 */

function removeDstEntityTypeFromAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function removeDstEntityTypeFromAssociationTypeWatcher$(_context49) {
    while (1) {
      switch (_context49.prev = _context49.next) {
        case 0:
          _context49.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.REMOVE_DST_ET_FROM_AT, removeDstEntityTypeFromAssociationTypeWorker);

        case 2:
        case 'end':
          return _context49.stop();
      }
    }
  }, _marked49, this);
}

function removeDstEntityTypeFromAssociationTypeWorker(seqAction) {
  var id, value, response, associationTypeId, entityTypeId;
  return regeneratorRuntime.wrap(function removeDstEntityTypeFromAssociationTypeWorker$(_context50) {
    while (1) {
      switch (_context50.prev = _context50.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.REMOVE_DST_ET_FROM_AT)) {
            _context50.next = 2;
            break;
          }

          return _context50.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context50.next = 5;
            break;
          }

          return _context50.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          associationTypeId = value.associationTypeId, entityTypeId = value.entityTypeId;
          _context50.prev = 7;
          _context50.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDstEntityTypeFromAssociationType.request(id, value));

        case 10:
          _context50.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.removeDstEntityTypeFromAssociationType, associationTypeId, entityTypeId);

        case 12:
          response.data = _context50.sent;
          _context50.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDstEntityTypeFromAssociationType.success(id, response.data));

        case 15:
          _context50.next = 22;
          break;

        case 17:
          _context50.prev = 17;
          _context50.t0 = _context50['catch'](7);

          response.error = _context50.t0;
          _context50.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDstEntityTypeFromAssociationType.failure(id, response.error));

        case 22:
          _context50.prev = 22;
          _context50.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeDstEntityTypeFromAssociationType.finally(id));

        case 25:
          return _context50.finish(22);

        case 26:
          return _context50.abrupt('return', response);

        case 27:
        case 'end':
          return _context50.stop();
      }
    }
  }, _marked50, this, [[7, 17, 22, 26]]);
}

/*
 * EntityDataModelApi.removeSrcEntityTypeFromAssociationType
 */

function removeSrcEntityTypeFromAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function removeSrcEntityTypeFromAssociationTypeWatcher$(_context51) {
    while (1) {
      switch (_context51.prev = _context51.next) {
        case 0:
          _context51.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.REMOVE_SRC_ET_FROM_AT, removeSrcEntityTypeFromAssociationTypeWorker);

        case 2:
        case 'end':
          return _context51.stop();
      }
    }
  }, _marked51, this);
}

function removeSrcEntityTypeFromAssociationTypeWorker(seqAction) {
  var id, value, response, associationTypeId, entityTypeId;
  return regeneratorRuntime.wrap(function removeSrcEntityTypeFromAssociationTypeWorker$(_context52) {
    while (1) {
      switch (_context52.prev = _context52.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.REMOVE_SRC_ET_FROM_AT)) {
            _context52.next = 2;
            break;
          }

          return _context52.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context52.next = 5;
            break;
          }

          return _context52.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          associationTypeId = value.associationTypeId, entityTypeId = value.entityTypeId;
          _context52.prev = 7;
          _context52.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSrcEntityTypeFromAssociationType.request(id, value));

        case 10:
          _context52.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.removeSrcEntityTypeFromAssociationType, associationTypeId, entityTypeId);

        case 12:
          response.data = _context52.sent;
          _context52.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSrcEntityTypeFromAssociationType.success(id, response.data));

        case 15:
          _context52.next = 22;
          break;

        case 17:
          _context52.prev = 17;
          _context52.t0 = _context52['catch'](7);

          response.error = _context52.t0;
          _context52.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSrcEntityTypeFromAssociationType.failure(id, response.error));

        case 22:
          _context52.prev = 22;
          _context52.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.removeSrcEntityTypeFromAssociationType.finally(id));

        case 25:
          return _context52.finish(22);

        case 26:
          return _context52.abrupt('return', response);

        case 27:
        case 'end':
          return _context52.stop();
      }
    }
  }, _marked52, this, [[7, 17, 22, 26]]);
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

function createSchemaWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function createSchemaWorker$(_context54) {
    while (1) {
      switch (_context54.prev = _context54.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.CREATE_SCHEMA)) {
            _context54.next = 2;
            break;
          }

          return _context54.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context54.next = 5;
            break;
          }

          return _context54.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context54.prev = 6;
          _context54.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.request(id, value));

        case 9:
          _context54.next = 11;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createSchema, value);

        case 11:
          response.data = _context54.sent;
          _context54.next = 14;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.success(id, response.data));

        case 14:
          _context54.next = 21;
          break;

        case 16:
          _context54.prev = 16;
          _context54.t0 = _context54['catch'](6);

          response.error = _context54.t0;
          _context54.next = 21;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.failure(id, response.error));

        case 21:
          _context54.prev = 21;
          _context54.next = 24;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createSchema.finally(id));

        case 24:
          return _context54.finish(21);

        case 25:
          return _context54.abrupt('return', response);

        case 26:
        case 'end':
          return _context54.stop();
      }
    }
  }, _marked54, this, [[6, 16, 21, 25]]);
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

function getAllSchemasWorker(seqAction) {
  var response, id;
  return regeneratorRuntime.wrap(function getAllSchemasWorker$(_context56) {
    while (1) {
      switch (_context56.prev = _context56.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.GET_ALL_SCHEMAS)) {
            _context56.next = 2;
            break;
          }

          return _context56.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          response = {};
          id = seqAction.id;
          _context56.prev = 4;
          _context56.next = 7;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.request(id));

        case 7:
          _context56.next = 9;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllSchemas);

        case 9:
          response.data = _context56.sent;
          _context56.next = 12;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.success(id, response.data));

        case 12:
          _context56.next = 19;
          break;

        case 14:
          _context56.prev = 14;
          _context56.t0 = _context56['catch'](4);

          response.error = _context56.t0;
          _context56.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.failure(id, response.error));

        case 19:
          _context56.prev = 19;
          _context56.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllSchemas.finally(id));

        case 22:
          return _context56.finish(19);

        case 23:
          return _context56.abrupt('return', response);

        case 24:
        case 'end':
          return _context56.stop();
      }
    }
  }, _marked56, this, [[4, 14, 19, 23]]);
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
  var id, value, response, schemaFqn, entityTypeIds, propertyTypeIds, action;
  return regeneratorRuntime.wrap(function updateSchemaWorker$(_context58) {
    while (1) {
      switch (_context58.prev = _context58.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _EntityDataModelApiActionFactory.UPDATE_SCHEMA)) {
            _context58.next = 2;
            break;
          }

          return _context58.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context58.next = 5;
            break;
          }

          return _context58.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          schemaFqn = value.schemaFqn, entityTypeIds = value.entityTypeIds, propertyTypeIds = value.propertyTypeIds, action = value.action;
          _context58.prev = 7;
          _context58.next = 10;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.request(id, value));

        case 10:
          _context58.next = 12;
          return (0, _effects.call)(_lattice.EntityDataModelApi.updateSchema, schemaFqn, action, entityTypeIds, propertyTypeIds);

        case 12:
          response.data = _context58.sent;
          _context58.next = 15;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.success(id, response.data));

        case 15:
          _context58.next = 22;
          break;

        case 17:
          _context58.prev = 17;
          _context58.t0 = _context58['catch'](7);

          response.error = _context58.t0;
          _context58.next = 22;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.failure(id, response.error));

        case 22:
          _context58.prev = 22;
          _context58.next = 25;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.updateSchema.finally(id));

        case 25:
          return _context58.finish(22);

        case 26:
          return _context58.abrupt('return', response);

        case 27:
        case 'end':
          return _context58.stop();
      }
    }
  }, _marked58, this, [[7, 17, 22, 26]]);
}

/*
 *
 * exports
 *
 */

exports.addDstEntityTypeToAssociationTypeWatcher = addDstEntityTypeToAssociationTypeWatcher;
exports.addDstEntityTypeToAssociationTypeWorker = addDstEntityTypeToAssociationTypeWorker;
exports.addPropertyTypeToEntityTypeWatcher = addPropertyTypeToEntityTypeWatcher;
exports.addPropertyTypeToEntityTypeWorker = addPropertyTypeToEntityTypeWorker;
exports.addSrcEntityTypeToAssociationTypeWatcher = addSrcEntityTypeToAssociationTypeWatcher;
exports.addSrcEntityTypeToAssociationTypeWorker = addSrcEntityTypeToAssociationTypeWorker;
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
exports.removeDstEntityTypeFromAssociationTypeWatcher = removeDstEntityTypeFromAssociationTypeWatcher;
exports.removeDstEntityTypeFromAssociationTypeWorker = removeDstEntityTypeFromAssociationTypeWorker;
exports.removePropertyTypeFromEntityTypeWatcher = removePropertyTypeFromEntityTypeWatcher;
exports.removePropertyTypeFromEntityTypeWorker = removePropertyTypeFromEntityTypeWorker;
exports.removeSrcEntityTypeFromAssociationTypeWatcher = removeSrcEntityTypeFromAssociationTypeWatcher;
exports.removeSrcEntityTypeFromAssociationTypeWorker = removeSrcEntityTypeFromAssociationTypeWorker;
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEntityAndAssociationDataWorker = exports.createEntityAndAssociationDataWatcher = undefined;

var _lattice = __webpack_require__(3);

var _effects = __webpack_require__(2);

var _Errors = __webpack_require__(1);

var _Utils = __webpack_require__(0);

var _DataIntegrationApiActionFactory = __webpack_require__(7);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(createEntityAndAssociationDataWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(createEntityAndAssociationDataWorker);

/* eslint-disable no-use-before-define */

/*
 *
 * DataIntegrationApi.createEntityAndAssociationData
 *
 */

function createEntityAndAssociationDataWatcher() {
  return regeneratorRuntime.wrap(function createEntityAndAssociationDataWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_DataIntegrationApiActionFactory.CREATE_ENTITY_AND_ASSOCIATION_DATA, createEntityAndAssociationDataWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function createEntityAndAssociationDataWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function createEntityAndAssociationDataWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _DataIntegrationApiActionFactory.CREATE_ENTITY_AND_ASSOCIATION_DATA)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context2.prev = 6;
          _context2.next = 9;
          return (0, _effects.put)(_DataIntegrationApiActionFactory.createEntityAndAssociationData.request(id, value));

        case 9:
          _context2.next = 11;
          return (0, _effects.call)(_lattice.DataIntegrationApi.createEntityAndAssociationData, value);

        case 11:
          response.data = _context2.sent;
          _context2.next = 14;
          return (0, _effects.put)(_DataIntegrationApiActionFactory.createEntityAndAssociationData.success(id, response.data));

        case 14:
          _context2.next = 21;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2['catch'](6);

          response.error = _context2.t0;
          _context2.next = 21;
          return (0, _effects.put)(_DataIntegrationApiActionFactory.createEntityAndAssociationData.failure(id, response.error));

        case 21:
          _context2.prev = 21;
          _context2.next = 24;
          return (0, _effects.put)(_DataIntegrationApiActionFactory.createEntityAndAssociationData.finally(id));

        case 24:
          return _context2.finish(21);

        case 25:
          return _context2.abrupt('return', response);

        case 26:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[6, 16, 21, 25]]);
}

exports.createEntityAndAssociationDataWatcher = createEntityAndAssociationDataWatcher;
exports.createEntityAndAssociationDataWorker = createEntityAndAssociationDataWorker;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntitySetDataWorker = exports.getEntitySetDataWatcher = undefined;

var _lattice = __webpack_require__(3);

var _effects = __webpack_require__(2);

var _Errors = __webpack_require__(1);

var _Utils = __webpack_require__(0);

var _DataApiActionFactory = __webpack_require__(8);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetDataWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetDataWorker);

/* eslint-disable no-use-before-define */

/*
 * DataApi.getEntitySetData
 */

function getEntitySetDataWatcher() {
  return regeneratorRuntime.wrap(function getEntitySetDataWatcher$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.takeEvery)(_DataApiActionFactory.GET_ENTITY_SET_DATA, getEntitySetDataWorker);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

function getEntitySetDataWorker(seqAction) {
  var id, value, response, entitySetId, propertyTypeIds, entityKeyIds;
  return regeneratorRuntime.wrap(function getEntitySetDataWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _DataApiActionFactory.GET_ENTITY_SET_DATA)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          entitySetId = value.entitySetId, propertyTypeIds = value.propertyTypeIds, entityKeyIds = value.entityKeyIds;
          _context2.prev = 7;
          _context2.next = 10;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.request(id, value));

        case 10:
          _context2.next = 12;
          return (0, _effects.call)(_lattice.DataApi.getEntitySetData, entitySetId, propertyTypeIds, entityKeyIds);

        case 12:
          response.data = _context2.sent;
          _context2.next = 15;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.success(id, response.data));

        case 15:
          _context2.next = 22;
          break;

        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2['catch'](7);

          response.error = _context2.t0;
          _context2.next = 22;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.failure(id, response.error));

        case 22:
          _context2.prev = 22;
          _context2.next = 25;
          return (0, _effects.put)(_DataApiActionFactory.getEntitySetData.finally(id));

        case 25:
          return _context2.finish(22);

        case 26:
          return _context2.abrupt('return', response);

        case 27:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[7, 17, 22, 26]]);
}

exports.getEntitySetDataWatcher = getEntitySetDataWatcher;
exports.getEntitySetDataWorker = getEntitySetDataWorker;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GENERATOR_FUNCTION_TAG = exports.GENERATOR_FUNCTION_TAG = '[object GeneratorFunction]';
var GENERATOR_TAG = exports.GENERATOR_TAG = '[object Generator]';
var OBJECT_TAG = exports.OBJECT_TAG = '[object Object]';
var STRING_TAG = exports.STRING_TAG = '[object String]';

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAppTypesWorker = exports.getAppTypesWatcher = exports.getAppConfigsWorker = exports.getAppConfigsWatcher = exports.getAppWorker = exports.getAppWatcher = undefined;

var _lattice = __webpack_require__(3);

var _effects = __webpack_require__(2);

var _Errors = __webpack_require__(1);

var _Utils = __webpack_require__(0);

var _AppApiActionFactory = __webpack_require__(9);

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

function getAppWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getAppWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _AppApiActionFactory.GET_APP)) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context2.prev = 6;
          _context2.next = 9;
          return (0, _effects.put)(_AppApiActionFactory.getApp.request(id, value));

        case 9:
          _context2.next = 11;
          return (0, _effects.call)(_lattice.AppApi.getAppByName, value);

        case 11:
          response.data = _context2.sent;
          _context2.next = 14;
          return (0, _effects.put)(_AppApiActionFactory.getApp.success(id, response.data));

        case 14:
          _context2.next = 21;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2['catch'](6);

          response.error = _context2.t0;
          _context2.next = 21;
          return (0, _effects.put)(_AppApiActionFactory.getApp.failure(id, response.error));

        case 21:
          _context2.prev = 21;
          _context2.next = 24;
          return (0, _effects.put)(_AppApiActionFactory.getApp.finally(id));

        case 24:
          return _context2.finish(21);

        case 25:
          return _context2.abrupt('return', response);

        case 26:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this, [[6, 16, 21, 25]]);
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

function getAppConfigsWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getAppConfigsWorker$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _AppApiActionFactory.GET_APP_CONFIGS)) {
            _context4.next = 2;
            break;
          }

          return _context4.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context4.next = 5;
            break;
          }

          return _context4.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context4.prev = 6;
          _context4.next = 9;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.request(id, value));

        case 9:
          _context4.next = 11;
          return (0, _effects.call)(_lattice.AppApi.getConfigurations, value);

        case 11:
          response.data = _context4.sent;
          _context4.next = 14;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.success(id, response.data));

        case 14:
          _context4.next = 21;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4['catch'](6);

          response.error = _context4.t0;
          _context4.next = 21;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.failure(id, response.error));

        case 21:
          _context4.prev = 21;
          _context4.next = 24;
          return (0, _effects.put)(_AppApiActionFactory.getAppConfigs.finally(id));

        case 24:
          return _context4.finish(21);

        case 25:
          return _context4.abrupt('return', response);

        case 26:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[6, 16, 21, 25]]);
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

function getAppTypesWorker(seqAction) {
  var id, value, response;
  return regeneratorRuntime.wrap(function getAppTypesWorker$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if ((0, _Utils.isValidAction)(seqAction, _AppApiActionFactory.GET_APP_TYPES)) {
            _context6.next = 2;
            break;
          }

          return _context6.abrupt('return', {
            error: _Errors.ERR_INVALID_ACTION
          });

        case 2:
          id = seqAction.id, value = seqAction.value;

          if (!(value === null || value === undefined)) {
            _context6.next = 5;
            break;
          }

          return _context6.abrupt('return', {
            error: _Errors.ERR_ACTION_VALUE_NOT_DEFINED
          });

        case 5:
          response = {};
          _context6.prev = 6;
          _context6.next = 9;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.request(id, value));

        case 9:
          _context6.next = 11;
          return (0, _effects.call)(_lattice.AppApi.getAppTypesForAppTypeIds, value);

        case 11:
          response.data = _context6.sent;
          _context6.next = 14;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.success(id, response.data));

        case 14:
          _context6.next = 21;
          break;

        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6['catch'](6);

          response.error = _context6.t0;
          _context6.next = 21;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.failure(id, response.error));

        case 21:
          _context6.prev = 21;
          _context6.next = 24;
          return (0, _effects.put)(_AppApiActionFactory.getAppTypes.finally(id));

        case 24:
          return _context6.finish(21);

        case 25:
          return _context6.abrupt('return', response);

        case 26:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[6, 16, 21, 25]]);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.SearchApiSagas = exports.SearchApiActionFactory = exports.EntityDataModelApiSagas = exports.EntityDataModelApiActionFactory = exports.DataIntegrationApiSagas = exports.DataIntegrationApiActionFactory = exports.DataApiSagas = exports.DataApiActionFactory = exports.AppApiSagas = exports.AppApiActionFactory = undefined;

var _AppApiActionFactory = __webpack_require__(9);

var AppApiActionFactory = _interopRequireWildcard(_AppApiActionFactory);

var _AppApiSagas = __webpack_require__(15);

var AppApiSagas = _interopRequireWildcard(_AppApiSagas);

var _DataApiActionFactory = __webpack_require__(8);

var DataApiActionFactory = _interopRequireWildcard(_DataApiActionFactory);

var _DataApiSagas = __webpack_require__(13);

var DataApiSagas = _interopRequireWildcard(_DataApiSagas);

var _DataIntegrationApiActionFactory = __webpack_require__(7);

var DataIntegrationApiActionFactory = _interopRequireWildcard(_DataIntegrationApiActionFactory);

var _DataIntegrationApiSagas = __webpack_require__(12);

var DataIntegrationApiSagas = _interopRequireWildcard(_DataIntegrationApiSagas);

var _EntityDataModelApiActionFactory = __webpack_require__(6);

var EntityDataModelApiActionFactory = _interopRequireWildcard(_EntityDataModelApiActionFactory);

var _EntityDataModelApiSagas = __webpack_require__(11);

var EntityDataModelApiSagas = _interopRequireWildcard(_EntityDataModelApiSagas);

var _SearchApiActionFactory = __webpack_require__(5);

var SearchApiActionFactory = _interopRequireWildcard(_SearchApiActionFactory);

var _SearchApiSagas = __webpack_require__(10);

var SearchApiSagas = _interopRequireWildcard(_SearchApiSagas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// injected by Webpack.DefinePlugin
var version = "v0.3.0";

exports.AppApiActionFactory = AppApiActionFactory;
exports.AppApiSagas = AppApiSagas;
exports.DataApiActionFactory = DataApiActionFactory;
exports.DataApiSagas = DataApiSagas;
exports.DataIntegrationApiActionFactory = DataIntegrationApiActionFactory;
exports.DataIntegrationApiSagas = DataIntegrationApiSagas;
exports.EntityDataModelApiActionFactory = EntityDataModelApiActionFactory;
exports.EntityDataModelApiSagas = EntityDataModelApiSagas;
exports.SearchApiActionFactory = SearchApiActionFactory;
exports.SearchApiSagas = SearchApiSagas;
exports.version = version;
exports.default = {
  AppApiActionFactory: AppApiActionFactory,
  AppApiSagas: AppApiSagas,
  DataApiActionFactory: DataApiActionFactory,
  DataApiSagas: DataApiSagas,
  DataIntegrationApiActionFactory: DataIntegrationApiActionFactory,
  DataIntegrationApiSagas: DataIntegrationApiSagas,
  EntityDataModelApiActionFactory: EntityDataModelApiActionFactory,
  EntityDataModelApiSagas: EntityDataModelApiSagas,
  SearchApiActionFactory: SearchApiActionFactory,
  SearchApiSagas: SearchApiSagas,
  version: version
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })
/******/ ]);
});