/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { DataIntegrationApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  createEntityAndAssociationData
} from './DataIntegrationApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 * DataIntegrationApi.createEntityAndAssociationData
 */

function* createEntityAndAssociationDataWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_ENTITY_AND_ASSOCIATION_DATA, createEntityAndAssociationDataWorker);
}

function* createEntityAndAssociationDataWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Response = {};

  try {
    yield put(createEntityAndAssociationData.request(action.id, action.value));
    response.data = yield call(DataIntegrationApi.createEntityAndAssociationData, action.value);
    yield put(createEntityAndAssociationData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createEntityAndAssociationData.failure(action.id, response.error));
  }
  finally {
    yield put(createEntityAndAssociationData.finally(action.id));
  }

  return response;
}

export {
  createEntityAndAssociationDataWatcher,
  createEntityAndAssociationDataWorker
};
