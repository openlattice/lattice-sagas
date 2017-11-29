/*!
 * 
 * lattice-sagas - v0.0.9
 * 
 * https://github.com/openlattice/lattice-sagas
 * 
 * Copyright (c) 2014-2016, OpenLattice, Inc. All rights reserved.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux-reqseq"), require("lattice"), require("redux-saga/effects"));
	else if(typeof define === 'function' && define.amd)
		define(["redux-reqseq", "lattice", "redux-saga/effects"], factory);
	else if(typeof exports === 'object')
		exports["LatticeSagas"] = factory(require("redux-reqseq"), require("lattice"), require("redux-saga/effects"));
	else
		root["LatticeSagas"] = factory(root["redux-reqseq"], root["lattice"], root["redux-saga/effects"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropertyType = exports.getEntityType = exports.getEntitySetId = exports.getEntitySet = exports.getEntityDataModelProjection = exports.getEntityDataModel = exports.getAllPropertyTypes = exports.getAllEntityTypes = exports.getAllAssociationTypes = exports.deletePropertyType = exports.deleteEntityType = exports.deleteAssociationType = exports.createPropertyType = exports.createEntityType = exports.createAssociationType = exports.GET_PROPERTY_TYPE = exports.GET_ENTITY_TYPE = exports.GET_ENTITY_SET_ID = exports.GET_ENTITY_SET = exports.GET_ENTITY_DATA_MODEL_PROJECTION = exports.GET_ENTITY_DATA_MODEL = exports.GET_ALL_PROPERTY_TYPES = exports.GET_ALL_ENTITY_TYPES = exports.GET_ALL_ASSOCIATION_TYPES = exports.DELETE_PROPERTY_TYPE = exports.DELETE_ENTITY_TYPE = exports.DELETE_ASSOCIATION_TYPE = exports.CREATE_PROPERTY_TYPE = exports.CREATE_ENTITY_TYPE = exports.CREATE_ASSOCIATION_TYPE = undefined;

var _reduxReqseq = __webpack_require__(3);

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

/*
 *
 * exports
 *
 */

exports.CREATE_ASSOCIATION_TYPE = CREATE_ASSOCIATION_TYPE;
exports.CREATE_ENTITY_TYPE = CREATE_ENTITY_TYPE;
exports.CREATE_PROPERTY_TYPE = CREATE_PROPERTY_TYPE;
exports.DELETE_ASSOCIATION_TYPE = DELETE_ASSOCIATION_TYPE;
exports.DELETE_ENTITY_TYPE = DELETE_ENTITY_TYPE;
exports.DELETE_PROPERTY_TYPE = DELETE_PROPERTY_TYPE;
exports.GET_ALL_ASSOCIATION_TYPES = GET_ALL_ASSOCIATION_TYPES;
exports.GET_ALL_ENTITY_TYPES = GET_ALL_ENTITY_TYPES;
exports.GET_ALL_PROPERTY_TYPES = GET_ALL_PROPERTY_TYPES;
exports.GET_ENTITY_DATA_MODEL = GET_ENTITY_DATA_MODEL;
exports.GET_ENTITY_DATA_MODEL_PROJECTION = GET_ENTITY_DATA_MODEL_PROJECTION;
exports.GET_ENTITY_SET = GET_ENTITY_SET;
exports.GET_ENTITY_SET_ID = GET_ENTITY_SET_ID;
exports.GET_ENTITY_TYPE = GET_ENTITY_TYPE;
exports.GET_PROPERTY_TYPE = GET_PROPERTY_TYPE;
exports.createAssociationType = createAssociationType;
exports.createEntityType = createEntityType;
exports.createPropertyType = createPropertyType;
exports.deleteAssociationType = deleteAssociationType;
exports.deleteEntityType = deleteEntityType;
exports.deletePropertyType = deletePropertyType;
exports.getAllAssociationTypes = getAllAssociationTypes;
exports.getAllEntityTypes = getAllEntityTypes;
exports.getAllPropertyTypes = getAllPropertyTypes;
exports.getEntityDataModel = getEntityDataModel;
exports.getEntityDataModelProjection = getEntityDataModelProjection;
exports.getEntitySet = getEntitySet;
exports.getEntitySetId = getEntitySetId;
exports.getEntityType = getEntityType;
exports.getPropertyType = getPropertyType;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.EntityDataModelApiSagas = exports.EntityDataModelApiActionFactory = undefined;

var _EntityDataModelApiActionFactory = __webpack_require__(0);

var EntityDataModelApiActionFactory = _interopRequireWildcard(_EntityDataModelApiActionFactory);

var _EntityDataModelApiSagas = __webpack_require__(4);

var EntityDataModelApiSagas = _interopRequireWildcard(_EntityDataModelApiSagas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// injected by Webpack.DefinePlugin
var version = "v0.0.9";

exports.EntityDataModelApiActionFactory = EntityDataModelApiActionFactory;
exports.EntityDataModelApiSagas = EntityDataModelApiSagas;
exports.version = version;
exports.default = {
  EntityDataModelApiActionFactory: EntityDataModelApiActionFactory,
  EntityDataModelApiSagas: EntityDataModelApiSagas,
  version: version
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropertyTypeWorker = exports.getPropertyTypeWatcher = exports.getEntityTypeWorker = exports.getEntityTypeWatcher = exports.getEntitySetIdWorker = exports.getEntitySetIdWatcher = exports.getEntitySetWorker = exports.getEntitySetWatcher = exports.getEntityDataModelProjectionWorker = exports.getEntityDataModelProjectionWatcher = exports.getEntityDataModelWorker = exports.getEntityDataModelWatcher = exports.getAllPropertyTypesWorker = exports.getAllPropertyTypesWatcher = exports.getAllEntityTypesWorker = exports.getAllEntityTypesWatcher = exports.getAllAssociationTypesWorker = exports.getAllAssociationTypesWatcher = exports.deletePropertyTypeWorker = exports.deletePropertyTypeWatcher = exports.deleteEntityTypeWorker = exports.deleteEntityTypeWatcher = exports.deleteAssociationTypeWorker = exports.deleteAssociationTypeWatcher = exports.createPropertyTypeWorker = exports.createPropertyTypeWatcher = exports.createEntityTypeWorker = exports.createEntityTypeWatcher = exports.createAssociationTypeWorker = exports.createAssociationTypeWatcher = undefined;

var _lattice = __webpack_require__(5);

var _effects = __webpack_require__(6);

var _EntityDataModelApiActionFactory = __webpack_require__(0);

var _marked = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelWatcher),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelWorker),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelProjectionWatcher),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(getEntityDataModelProjectionWorker),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetWatcher),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetWorker),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetIdWatcher),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(getEntitySetIdWorker),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(createEntityTypeWatcher),
    _marked10 = /*#__PURE__*/regeneratorRuntime.mark(createEntityTypeWorker),
    _marked11 = /*#__PURE__*/regeneratorRuntime.mark(deleteEntityTypeWatcher),
    _marked12 = /*#__PURE__*/regeneratorRuntime.mark(deleteEntityTypeWorker),
    _marked13 = /*#__PURE__*/regeneratorRuntime.mark(getAllEntityTypesWatcher),
    _marked14 = /*#__PURE__*/regeneratorRuntime.mark(getAllEntityTypesWorker),
    _marked15 = /*#__PURE__*/regeneratorRuntime.mark(getEntityTypeWatcher),
    _marked16 = /*#__PURE__*/regeneratorRuntime.mark(getEntityTypeWorker),
    _marked17 = /*#__PURE__*/regeneratorRuntime.mark(createPropertyTypeWatcher),
    _marked18 = /*#__PURE__*/regeneratorRuntime.mark(createPropertyTypeWorker),
    _marked19 = /*#__PURE__*/regeneratorRuntime.mark(deletePropertyTypeWatcher),
    _marked20 = /*#__PURE__*/regeneratorRuntime.mark(deletePropertyTypeWorker),
    _marked21 = /*#__PURE__*/regeneratorRuntime.mark(getAllPropertyTypesWatcher),
    _marked22 = /*#__PURE__*/regeneratorRuntime.mark(getAllPropertyTypesWorker),
    _marked23 = /*#__PURE__*/regeneratorRuntime.mark(getPropertyTypeWatcher),
    _marked24 = /*#__PURE__*/regeneratorRuntime.mark(getPropertyTypeWorker),
    _marked25 = /*#__PURE__*/regeneratorRuntime.mark(createAssociationTypeWatcher),
    _marked26 = /*#__PURE__*/regeneratorRuntime.mark(createAssociationTypeWorker),
    _marked27 = /*#__PURE__*/regeneratorRuntime.mark(deleteAssociationTypeWatcher),
    _marked28 = /*#__PURE__*/regeneratorRuntime.mark(deleteAssociationTypeWorker),
    _marked29 = /*#__PURE__*/regeneratorRuntime.mark(getAllAssociationTypesWatcher),
    _marked30 = /*#__PURE__*/regeneratorRuntime.mark(getAllAssociationTypesWorker);

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

function getEntityDataModelWorker() {
  var response;
  return regeneratorRuntime.wrap(function getEntityDataModelWorker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          response = {};
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.request());

        case 4:
          _context2.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityDataModel);

        case 6:
          response.data = _context2.sent;
          _context2.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.success(response.data));

        case 9:
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2['catch'](1);

          response.error = _context2.t0;
          _context2.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.failure(response.error));

        case 16:
          _context2.prev = 16;
          _context2.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModel.finally());

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
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.request(action.value));

        case 4:
          _context4.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityDataModelProjection, action.value);

        case 6:
          response.data = _context4.sent;
          _context4.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.success(response.data));

        case 9:
          _context4.next = 16;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4['catch'](1);

          response.error = _context4.t0;
          _context4.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.failure(response.error));

        case 16:
          _context4.prev = 16;
          _context4.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityDataModelProjection.finally());

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
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.request(action.value));

        case 4:
          _context6.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntitySet, action.value);

        case 6:
          response.data = _context6.sent;
          _context6.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.success(response.data));

        case 9:
          _context6.next = 16;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6['catch'](1);

          response.error = _context6.t0;
          _context6.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.failure(response.error));

        case 16:
          _context6.prev = 16;
          _context6.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySet.finally());

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
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.request(action.value));

        case 4:
          _context8.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntitySetId, action.value);

        case 6:
          response.data = _context8.sent;
          _context8.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.success(response.data));

        case 9:
          _context8.next = 16;
          break;

        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8['catch'](1);

          response.error = _context8.t0;
          _context8.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.failure(response.error));

        case 16:
          _context8.prev = 16;
          _context8.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntitySetId.finally());

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
 *
 * EntityType APIs
 *
 */

/*
 * EntityDataModelApi.createEntityType
 */

function createEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function createEntityTypeWatcher$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_ENTITY_TYPE, createEntityTypeWorker);

        case 2:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

function createEntityTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createEntityTypeWorker$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          response = {};
          _context10.prev = 1;
          _context10.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.request(action.value));

        case 4:
          _context10.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createEntityType, action.value);

        case 6:
          response.data = _context10.sent;
          _context10.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.success(response.data));

        case 9:
          _context10.next = 16;
          break;

        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10['catch'](1);

          response.error = _context10.t0;
          _context10.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.failure(response.error));

        case 16:
          _context10.prev = 16;
          _context10.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createEntityType.finally());

        case 19:
          return _context10.finish(16);

        case 20:
          return _context10.abrupt('return', response);

        case 21:
        case 'end':
          return _context10.stop();
      }
    }
  }, _marked10, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.deleteEntityType
 */

function deleteEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function deleteEntityTypeWatcher$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.DELETE_ENTITY_TYPE, deleteEntityTypeWorker);

        case 2:
        case 'end':
          return _context11.stop();
      }
    }
  }, _marked11, this);
}

function deleteEntityTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function deleteEntityTypeWorker$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          response = {};
          _context12.prev = 1;
          _context12.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.request(action.value));

        case 4:
          _context12.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deleteEntityType, action.value);

        case 6:
          response.data = _context12.sent;
          _context12.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.success(response.data));

        case 9:
          _context12.next = 16;
          break;

        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12['catch'](1);

          response.error = _context12.t0;
          _context12.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.failure(response.error));

        case 16:
          _context12.prev = 16;
          _context12.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteEntityType.finally());

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
 * EntityDataModelApi.getAllEntityTypes
 */

function getAllEntityTypesWatcher() {
  return regeneratorRuntime.wrap(function getAllEntityTypesWatcher$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_ENTITY_TYPES, getAllEntityTypesWorker);

        case 2:
        case 'end':
          return _context13.stop();
      }
    }
  }, _marked13, this);
}

function getAllEntityTypesWorker() {
  var response;
  return regeneratorRuntime.wrap(function getAllEntityTypesWorker$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          response = {};
          _context14.prev = 1;
          _context14.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.request());

        case 4:
          _context14.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllEntityTypes);

        case 6:
          response.data = _context14.sent;
          _context14.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.success(response.data));

        case 9:
          _context14.next = 16;
          break;

        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14['catch'](1);

          response.error = _context14.t0;
          _context14.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.failure(response.error));

        case 16:
          _context14.prev = 16;
          _context14.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllEntityTypes.finally());

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
 * EntityDataModelApi.getEntityType
 */

function getEntityTypeWatcher() {
  return regeneratorRuntime.wrap(function getEntityTypeWatcher$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ENTITY_TYPE, getEntityTypeWorker);

        case 2:
        case 'end':
          return _context15.stop();
      }
    }
  }, _marked15, this);
}

function getEntityTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getEntityTypeWorker$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          response = {};
          _context16.prev = 1;
          _context16.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.request(action.value));

        case 4:
          _context16.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getEntityType, action.value);

        case 6:
          response.data = _context16.sent;
          _context16.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.success(response.data));

        case 9:
          _context16.next = 16;
          break;

        case 11:
          _context16.prev = 11;
          _context16.t0 = _context16['catch'](1);

          response.error = _context16.t0;
          _context16.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.failure(response.error));

        case 16:
          _context16.prev = 16;
          _context16.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getEntityType.finally());

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
 *
 * PropertyType APIs
 *
 */

/*
 * EntityDataModelApi.createPropertyType
 */

function createPropertyTypeWatcher() {
  return regeneratorRuntime.wrap(function createPropertyTypeWatcher$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_PROPERTY_TYPE, createPropertyTypeWorker);

        case 2:
        case 'end':
          return _context17.stop();
      }
    }
  }, _marked17, this);
}

function createPropertyTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createPropertyTypeWorker$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          response = {};
          _context18.prev = 1;
          _context18.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.request(action.value));

        case 4:
          _context18.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createPropertyType, action.value);

        case 6:
          response.data = _context18.sent;
          _context18.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.success(response.data));

        case 9:
          _context18.next = 16;
          break;

        case 11:
          _context18.prev = 11;
          _context18.t0 = _context18['catch'](1);

          response.error = _context18.t0;
          _context18.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.failure(response.error));

        case 16:
          _context18.prev = 16;
          _context18.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createPropertyType.finally());

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
 * EntityDataModelApi.deletePropertyType
 */

function deletePropertyTypeWatcher() {
  return regeneratorRuntime.wrap(function deletePropertyTypeWatcher$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.DELETE_PROPERTY_TYPE, deletePropertyTypeWorker);

        case 2:
        case 'end':
          return _context19.stop();
      }
    }
  }, _marked19, this);
}

function deletePropertyTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function deletePropertyTypeWorker$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          response = {};
          _context20.prev = 1;
          _context20.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.request(action.value));

        case 4:
          _context20.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deletePropertyType, action.value);

        case 6:
          response.data = _context20.sent;
          _context20.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.success(response.data));

        case 9:
          _context20.next = 16;
          break;

        case 11:
          _context20.prev = 11;
          _context20.t0 = _context20['catch'](1);

          response.error = _context20.t0;
          _context20.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.failure(response.error));

        case 16:
          _context20.prev = 16;
          _context20.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deletePropertyType.finally());

        case 19:
          return _context20.finish(16);

        case 20:
          return _context20.abrupt('return', response);

        case 21:
        case 'end':
          return _context20.stop();
      }
    }
  }, _marked20, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getAllPropertyTypes
 */

function getAllPropertyTypesWatcher() {
  return regeneratorRuntime.wrap(function getAllPropertyTypesWatcher$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_PROPERTY_TYPES, getAllPropertyTypesWorker);

        case 2:
        case 'end':
          return _context21.stop();
      }
    }
  }, _marked21, this);
}

function getAllPropertyTypesWorker() {
  var response;
  return regeneratorRuntime.wrap(function getAllPropertyTypesWorker$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          response = {};
          _context22.prev = 1;
          _context22.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.request());

        case 4:
          _context22.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllPropertyTypes);

        case 6:
          response.data = _context22.sent;
          _context22.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.success(response.data));

        case 9:
          _context22.next = 16;
          break;

        case 11:
          _context22.prev = 11;
          _context22.t0 = _context22['catch'](1);

          response.error = _context22.t0;
          _context22.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.failure(response.error));

        case 16:
          _context22.prev = 16;
          _context22.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllPropertyTypes.finally());

        case 19:
          return _context22.finish(16);

        case 20:
          return _context22.abrupt('return', response);

        case 21:
        case 'end':
          return _context22.stop();
      }
    }
  }, _marked22, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.getPropertyType
 */

function getPropertyTypeWatcher() {
  return regeneratorRuntime.wrap(function getPropertyTypeWatcher$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_PROPERTY_TYPE, getPropertyTypeWorker);

        case 2:
        case 'end':
          return _context23.stop();
      }
    }
  }, _marked23, this);
}

function getPropertyTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function getPropertyTypeWorker$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          response = {};
          _context24.prev = 1;
          _context24.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.request(action.value));

        case 4:
          _context24.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getPropertyType, action.value);

        case 6:
          response.data = _context24.sent;
          _context24.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.success(response.data));

        case 9:
          _context24.next = 16;
          break;

        case 11:
          _context24.prev = 11;
          _context24.t0 = _context24['catch'](1);

          response.error = _context24.t0;
          _context24.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.failure(response.error));

        case 16:
          _context24.prev = 16;
          _context24.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getPropertyType.finally());

        case 19:
          return _context24.finish(16);

        case 20:
          return _context24.abrupt('return', response);

        case 21:
        case 'end':
          return _context24.stop();
      }
    }
  }, _marked24, this, [[1, 11, 16, 20]]);
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
  return regeneratorRuntime.wrap(function createAssociationTypeWatcher$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.CREATE_ASSOCIATION_TYPE, createAssociationTypeWorker);

        case 2:
        case 'end':
          return _context25.stop();
      }
    }
  }, _marked25, this);
}

function createAssociationTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function createAssociationTypeWorker$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          response = {};
          _context26.prev = 1;
          _context26.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.request(action.value));

        case 4:
          _context26.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.createAssociationType, action.value);

        case 6:
          response.data = _context26.sent;
          _context26.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.success(response.data));

        case 9:
          _context26.next = 16;
          break;

        case 11:
          _context26.prev = 11;
          _context26.t0 = _context26['catch'](1);

          response.error = _context26.t0;
          _context26.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.failure(response.error));

        case 16:
          _context26.prev = 16;
          _context26.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.createAssociationType.finally());

        case 19:
          return _context26.finish(16);

        case 20:
          return _context26.abrupt('return', response);

        case 21:
        case 'end':
          return _context26.stop();
      }
    }
  }, _marked26, this, [[1, 11, 16, 20]]);
}

/*
 * EntityDataModelApi.deleteAssociationType
 */

function deleteAssociationTypeWatcher() {
  return regeneratorRuntime.wrap(function deleteAssociationTypeWatcher$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.DELETE_ASSOCIATION_TYPE, deleteAssociationTypeWorker);

        case 2:
        case 'end':
          return _context27.stop();
      }
    }
  }, _marked27, this);
}

function deleteAssociationTypeWorker(action) {
  var response;
  return regeneratorRuntime.wrap(function deleteAssociationTypeWorker$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          response = {};
          _context28.prev = 1;
          _context28.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.request(action.value));

        case 4:
          _context28.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.deleteAssociationType, action.value);

        case 6:
          response.data = _context28.sent;
          _context28.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.success(response.data));

        case 9:
          _context28.next = 16;
          break;

        case 11:
          _context28.prev = 11;
          _context28.t0 = _context28['catch'](1);

          response.error = _context28.t0;
          _context28.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.failure(response.error));

        case 16:
          _context28.prev = 16;
          _context28.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.deleteAssociationType.finally());

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
 * EntityDataModelApi.getAllAssociationTypes
 */

function getAllAssociationTypesWatcher() {
  return regeneratorRuntime.wrap(function getAllAssociationTypesWatcher$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return (0, _effects.takeEvery)(_EntityDataModelApiActionFactory.GET_ALL_ASSOCIATION_TYPES, getAllAssociationTypesWorker);

        case 2:
        case 'end':
          return _context29.stop();
      }
    }
  }, _marked29, this);
}

function getAllAssociationTypesWorker() {
  var response;
  return regeneratorRuntime.wrap(function getAllAssociationTypesWorker$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          response = {};
          _context30.prev = 1;
          _context30.next = 4;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.request());

        case 4:
          _context30.next = 6;
          return (0, _effects.call)(_lattice.EntityDataModelApi.getAllAssociationTypes);

        case 6:
          response.data = _context30.sent;
          _context30.next = 9;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.success(response.data));

        case 9:
          _context30.next = 16;
          break;

        case 11:
          _context30.prev = 11;
          _context30.t0 = _context30['catch'](1);

          response.error = _context30.t0;
          _context30.next = 16;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.failure(response.error));

        case 16:
          _context30.prev = 16;
          _context30.next = 19;
          return (0, _effects.put)(_EntityDataModelApiActionFactory.getAllAssociationTypes.finally());

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
 *
 * exports
 *
 */

exports.createAssociationTypeWatcher = createAssociationTypeWatcher;
exports.createAssociationTypeWorker = createAssociationTypeWorker;
exports.createEntityTypeWatcher = createEntityTypeWatcher;
exports.createEntityTypeWorker = createEntityTypeWorker;
exports.createPropertyTypeWatcher = createPropertyTypeWatcher;
exports.createPropertyTypeWorker = createPropertyTypeWorker;
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })
/******/ ]);
});