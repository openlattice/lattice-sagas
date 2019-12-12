/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PrincipalsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import {
  GET_ALL_ROLES,
  GET_ALL_USERS,
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  GET_USER,
  SEARCH_ALL_USERS,
  SYNC_USER,
  getAllRoles,
  getAllUsers,
  getCurrentRoles,
  getSecurablePrincipal,
  getUser,
  searchAllUsers,
  syncUser,
} from './PrincipalsApiActions';

import { ERR_ACTION_VALUE_NOT_DEFINED, ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

/*
 *
 * PrincipalsApi.getAllRoles()
 * PrincipalsApiActions.getAllRoles()
 *
 */

function* getAllRolesWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_ROLES)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getAllRoles.request(id));
    response.data = yield call(PrincipalsApi.getAllRoles);
    yield put(getAllRoles.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllRoles.failure(id, response.error));
  }
  finally {
    yield put(getAllRoles.finally(id));
  }

  return response;
}

function* getAllRolesWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_ROLES, getAllRolesWorker);
}

/*
 *
 * PrincipalsApi.getAllUsers()
 * PrincipalsApiActions.getAllUsers()
 *
 */

function* getAllUsersWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_USERS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(getAllUsers.request(id));
    response.data = yield call(PrincipalsApi.getAllUsers);
    yield put(getAllUsers.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllUsers.failure(id, response.error));
  }
  finally {
    yield put(getAllUsers.finally(id));
  }

  return response;
}

function* getAllUsersWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_ALL_USERS, getAllUsersWorker);
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
 * PrincipalsApi.getUser()
 * PrincipalsApiActions.getUser()
 *
 */

function* getUserWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_USER)) {
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
    yield put(getUser.request(id, value));
    response.data = yield call(PrincipalsApi.getUser, value);
    yield put(getUser.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getUser.failure(id, response.error));
  }
  finally {
    yield put(getUser.finally(id));
  }

  return response;
}

function* getUserWatcher() :Generator<*, void, *> {

  yield takeEvery(GET_USER, getUserWorker);
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

/*
 *
 * PrincipalsApi.syncUser()
 * PrincipalsApiActions.syncUser()
 *
 */

function* syncUserWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, SYNC_USER)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const response :Object = {};
  const { id } = seqAction;

  try {
    yield put(syncUser.request(id));
    response.data = yield call(PrincipalsApi.syncUser);
    yield put(syncUser.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(syncUser.failure(id, response.error));
  }
  finally {
    yield put(syncUser.finally(id));
  }

  return response;
}

function* syncUserWatcher() :Generator<*, void, *> {

  yield takeEvery(SYNC_USER, syncUserWorker);
}

export {
  getAllRolesWatcher,
  getAllRolesWorker,
  getAllUsersWatcher,
  getAllUsersWorker,
  getCurrentRolesWatcher,
  getCurrentRolesWorker,
  getSecurablePrincipalWatcher,
  getSecurablePrincipalWorker,
  getUserWatcher,
  getUserWorker,
  searchAllUsersWatcher,
  searchAllUsersWorker,
  syncUserWatcher,
  syncUserWorker,
};
