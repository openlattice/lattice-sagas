/*
 * @flow
 */

import { call, put } from 'redux-saga/effects';

import type { RequestSequence } from 'redux-reqseq';

export function* latticeApiSaga(
  reqseq :RequestSequence,
  latticeApi :Object,
  ...latticeApiParams :any[]
) :Generator<*, *, *> {

  let response :any;

  try {
    yield put(reqseq.request());
    if (latticeApiParams.length > 0) {
      response = yield call(latticeApi, ...latticeApiParams);
    }
    else {
      response = yield call(latticeApi);
    }
    yield put(reqseq.success({ response }));
  }
  catch (error) {
    yield put(reqseq.failure({ error }));
  }
  finally {
    yield put(reqseq.finally());
  }

  return response;
}
