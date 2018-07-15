/*
 * @flow
 */

/* eslint-disable no-use-before-define */

import { DataApi } from 'lattice';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  ACQUIRE_SYNC_TICKET,
  GET_ENTITY_SET_DATA,
  acquireSyncTicket,
  getEntitySetData
} from './DataApiActionFactory';

declare type Response = {
  data ? :any;
  error ? :any;
};

/*
 * DataApi.acquireSyncTicket
 */

function* acquireSyncTicketWatcher() :Generator<*, void, *> {

  yield takeEvery(ACQUIRE_SYNC_TICKET, acquireSyncTicketWorker);
}

function* acquireSyncTicketWorker(action :SequenceAction) :Generator<*, Response, *> {

  const response :Response = {};

  try {
    yield put(acquireSyncTicket.request(action.id, action.value));
    const { entitySetId, syncId } = action.value;
    response.data = yield call(DataApi.acquireSyncTicket, entitySetId, syncId);
    yield put(acquireSyncTicket.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(acquireSyncTicket.failure(action.id, response.error));
  }
  finally {
    yield put(acquireSyncTicket.finally(action.id));
  }

  return response;
}

/*
 * DataApi.getEntitySetData
 */

function* getEntitySetDataWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ENTITY_SET_DATA, getEntitySetDataWorker);
}

function* getEntitySetDataWorker(action :SequenceAction) :Generator<*, *, *> {

  const response :Response = {};

  try {
    yield put(getEntitySetData.request(action.id, action.value));
    const { entitySetId, syncId, propertyTypeIds } = action.value;
    response.data = yield call(DataApi.getEntitySetData, entitySetId, syncId, propertyTypeIds);
    yield put(getEntitySetData.success(action.id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getEntitySetData.failure(action.id, response.error));
  }
  finally {
    yield put(getEntitySetData.finally(action.id));
  }

  return response;
}

export {
  acquireSyncTicketWatcher,
  acquireSyncTicketWorker,
  getEntitySetDataWatcher,
  getEntitySetDataWorker
};
