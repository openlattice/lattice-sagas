/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PrincipalsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  SEARCH_ALL_USERS,
  getCurrentRoles,
  getSecurablePrincipal,
  searchAllUsers,
} from './PrincipalsApiActions';

/*
 *
 * PrincipalsApi.getSecurablePrincipal()
 * PrincipalsApiActions.getSecurablePrincipal()
 *
 */

function* getSecurablePrincipalWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_SECURABLE_PRINCIPAL)) {
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
    yield put(getSecurablePrincipal.request(id, value));
    response.data = yield call(PrincipalsApi.getSecurablePrincipal, value);
    yield put(getSecurablePrincipal.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getSecurablePrincipal.failure(id, response.error));
  }
  finally {
    yield put(getSecurablePrincipal.finally(id));
  }

  return response;
}

function* getSecurablePrincipalWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_SECURABLE_PRINCIPAL, getSecurablePrincipalWorker);
}

/*
 *
 * PrincipalsApi.getCurrentRoles()
 * PrincipalsApiActions.getCurrentRoles()
 *
 */

function* getCurrentRolesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_CURRENT_ROLES)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id } = seqAction;
  const response = {};

  try {
    yield put(getCurrentRoles.request(id));
    response.data = yield call(PrincipalsApi.getCurrentRoles);
    yield put(getCurrentRoles.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getCurrentRoles.failure(id, response.error));
  }
  finally {
    yield put(getCurrentRoles.finally(id));
  }

  return response;
}

function* getCurrentRolesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_CURRENT_ROLES, getCurrentRolesWorker);
}


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
  getCurrentRolesWatcher,
  getCurrentRolesWorker,
  getSecurablePrincipalWatcher,
  getSecurablePrincipalWorker,
  searchAllUsersWatcher,
  searchAllUsersWorker,
};
