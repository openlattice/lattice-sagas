/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PrincipalsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  SEARCH_ALL_USERS,
  searchAllUsers,
} from './PrincipalsApiActions';

/*
 *
 * PrincipalsApi.searchAllUsers()
 * PrincipalsApiActions.searchAllUsers()
 *
 */

function* searchAllUsersWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SEARCH_ALL_USERS)) {
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
    yield put(searchAllUsers.request(id, value));
    response.data = yield call(PrincipalsApi.searchAllUsers, value);
    yield put(searchAllUsers.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(searchAllUsers.failure(id, response.error));
  }
  finally {
    yield put(searchAllUsers.finally(id));
  }

  return response;
}

function* searchAllUsersWatcher() :Generator<*, void, *> {

  yield takeEvery(SEARCH_ALL_USERS, searchAllUsersWorker);
}

export {
  searchAllUsersWatcher,
  searchAllUsersWorker,
};
