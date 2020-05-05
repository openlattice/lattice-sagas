/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { CodexApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  SEND_OUTGOING_TEXT,
  sendOutgoingText,
} from './CodexApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * CodexApi.sendOutgoingText
 * CodexApiActions.sendOutgoingText
 *
 */

function* sendOutgoingTextWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEND_OUTGOING_TEXT)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(sendOutgoingText.request(id, value));
    const response = yield call(CodexApi.sendOutgoingText, value);
    workerResponse = { data: response };
    yield put(sendOutgoingText.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(sendOutgoingText.failure(id, error));
  }
  finally {
    yield put(sendOutgoingText.finally(id));
  }

  return workerResponse;
}

function* sendOutgoingTextWatcher() :Saga<*> {

  yield takeEvery(SEND_OUTGOING_TEXT, sendOutgoingTextWorker);
}

export {
  sendOutgoingTextWatcher,
  sendOutgoingTextWorker,
};
