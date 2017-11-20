/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { EntityDataModelApi } from 'lattice';
import { call, takeEvery } from 'redux-saga/effects';

import type { SequenceAction } from 'redux-reqseq';

import { latticeApiSaga } from '../utils/ReqSeqUtils';

import {
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
} from './EntityDataModelApiActionFactory';

/*
 *
 * Entity Data Model APIs
 *
 */

/*
 * EntityDataModelApi.getEntityDataModel
 */

function* getEntityDataModelWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL, getEntityDataModelWorker);
}

function* getEntityDataModelWorker() :Generator<*, *, *> {

  return yield call(
    latticeApiSaga,
    getEntityDataModel,
    EntityDataModelApi.getEntityDataModel
  );
}

/*
 * EntityDataModelApi.getEntityDataModelProjection
 */

function* getEntityDataModelProjectionWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_DATA_MODEL_PROJECTION, getEntityDataModelProjectionWorker);
}

function* getEntityDataModelProjectionWorker(action :SequenceAction) :Generator<*, *, *> {

  return yield call(
    latticeApiSaga,
    getEntityDataModelProjection,
    EntityDataModelApi.getEntityDataModelProjection,
    action.data.projection
  );
}

/*
 *
 * EntitySet APIs
 *
 */

/*
 * EntityDataModelApi.getEntitySet
 */

function* getEntitySetWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_SET, getEntitySetWorker);
}

function* getEntitySetWorker(action :SequenceAction) :Generator<*, *, *> {

  return yield call(
    latticeApiSaga,
    getEntitySet,
    EntityDataModelApi.getEntitySet,
    action.data.entitySetId
  );
}

/*
 * EntityDataModelApi.getEntitySetId
 */

function* getEntitySetIdWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_SET_ID, getEntitySetIdWorker);
}

function* getEntitySetIdWorker(action :SequenceAction) :Generator<*, *, *> {

  return yield call(
    latticeApiSaga,
    getEntitySetId,
    EntityDataModelApi.getEntitySetId,
    action.data.entitySetName
  );
}

/*
 *
 * EntityType APIs
 *
 */

/*
 * EntityDataModelApi.getEntityType
 */

function* getEntityTypeWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_TYPE, getEntityTypeWorker);
}

function* getEntityTypeWorker(action :SequenceAction) :Generator<*, *, *> {

  return yield call(
    latticeApiSaga,
    getEntityType,
    EntityDataModelApi.getEntityType,
    action.data.entityTypeId
  );
}

/*
 *
 * PropertyType APIs
 *
 */

/*
 * EntityDataModelApi.getPropertyType
 */

function* getPropertyTypeWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_PROPERTY_TYPE, getPropertyTypeWorker);
}

function* getPropertyTypeWorker(action :SequenceAction) :Generator<*, *, *> {

  return yield call(
    latticeApiSaga,
    getPropertyType,
    EntityDataModelApi.getPropertyType,
    action.data.propertyTypeId
  );
}

/*
 *
 * exports
 *
 */

export {
  getEntityDataModelWatcher,
  getEntityDataModelWorker,
  getEntityDataModelProjectionWatcher,
  getEntityDataModelProjectionWorker,
  getEntitySetWatcher,
  getEntitySetWorker,
  getEntitySetIdWatcher,
  getEntitySetIdWorker,
  getEntityTypeWatcher,
  getEntityTypeWorker,
  getPropertyTypeWatcher,
  getPropertyTypeWorker
};
