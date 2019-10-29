/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DataIntegrationApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  GET_ENTITY_KEY_IDS,
  createEntityAndAssociationData,
  getEntityKeyIds,
} from './DataIntegrationApiActions';

/*
 *
 * DataIntegrationApi.createEntityAndAssociationData
 *
 */

function* createEntityAndAssociationDataWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_ENTITY_AND_ASSOCIATION_DATA, createEntityAndAssociationDataWorker);
}

function* createEntityAndAssociationDataWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, CREATE_ENTITY_AND_ASSOCIATION_DATA)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id, value } = seqAction;
  if (value === null || value === undefined) {
    return {
      error: ERR_ACTION_VALUE_NOT_DEFINED
    };
  }

  const response :Object = {};

  try {
    yield put(createEntityAndAssociationData.request(id, value));
    response.data = yield call(DataIntegrationApi.createEntityAndAssociationData, value);
    yield put(createEntityAndAssociationData.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createEntityAndAssociationData.failure(id, response.error));
  }
  finally {
    yield put(createEntityAndAssociationData.finally(id));
  }

  return response;
}

/*
 *
 * DataIntegrationApi.getEntityKeyIds
 *
 */

function* getEntityKeyIdsWorker(seqAction :SequenceAction) :Generator<any, any, any> {
  if (!isValidAction(seqAction, GET_ENTITY_KEY_IDS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id, value } = seqAction;
  if (value === null || value === undefined) {
    return {
      error: ERR_ACTION_VALUE_NOT_DEFINED
    };
  }

  const response :Object = {};

  try {
    yield put(getEntityKeyIds.request(id, value));
    response.data = yield call(DataIntegrationApi.getEntityKeyIds, value);
    yield put(getEntityKeyIds.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntityKeyIds.failure(id, response.error));
  }
  finally {
    yield put(getEntityKeyIds.finally(id));
  }

  return response;
}

function* getEntityKeyIdsWatcher() :Generator<any, any, any> {
  yield takeEvery(GET_ENTITY_KEY_IDS, getEntityKeyIdsWorker);
}

export {
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker,
  getEntityKeyIdsWatcher,
  getEntityKeyIdsWorker,
};
