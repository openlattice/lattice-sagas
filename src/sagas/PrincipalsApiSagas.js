/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { PrincipalsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
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

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * PrincipalsApi.getAllRoles
 * PrincipalsApiActions.getAllRoles
 *
 */

function* getAllRolesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_ROLES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllRoles.request(id));
    const response = yield call(PrincipalsApi.getAllRoles);
    workerResponse = { data: response };
    yield put(getAllRoles.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllRoles.failure(id, error));
  }
  finally {
    yield put(getAllRoles.finally(id));
  }

  return workerResponse;
}

function* getAllRolesWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_ROLES, getAllRolesWorker);
}

/*
 *
 * PrincipalsApi.getAllUsers
 * PrincipalsApiActions.getAllUsers
 *
 */

function* getAllUsersWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_USERS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllUsers.request(id));
    const response = yield call(PrincipalsApi.getAllUsers);
    workerResponse = { data: response };
    yield put(getAllUsers.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllUsers.failure(id, error));
  }
  finally {
    yield put(getAllUsers.finally(id));
  }

  return workerResponse;
}

function* getAllUsersWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_USERS, getAllUsersWorker);
}

/*
 *
 * PrincipalsApi.getCurrentRoles
 * PrincipalsApiActions.getCurrentRoles
 *
 */

function* getCurrentRolesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_CURRENT_ROLES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getCurrentRoles.request(id));
    const response = yield call(PrincipalsApi.getCurrentRoles);
    workerResponse = { data: response };
    yield put(getCurrentRoles.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCurrentRoles.failure(id, error));
  }
  finally {
    yield put(getCurrentRoles.finally(id));
  }

  return workerResponse;
}

function* getCurrentRolesWatcher() :Saga<*> {

  yield takeEvery(GET_CURRENT_ROLES, getCurrentRolesWorker);
}

/*
 *
 * PrincipalsApi.getSecurablePrincipal
 * PrincipalsApiActions.getSecurablePrincipal
 *
 */

function* getSecurablePrincipalWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_SECURABLE_PRINCIPAL)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getSecurablePrincipal.request(id, value));
    const response = yield call(PrincipalsApi.getSecurablePrincipal, value);
    workerResponse = { data: response };
    yield put(getSecurablePrincipal.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getSecurablePrincipal.failure(id, error));
  }
  finally {
    yield put(getSecurablePrincipal.finally(id));
  }

  return workerResponse;
}

function* getSecurablePrincipalWatcher() :Saga<*> {

  yield takeEvery(GET_SECURABLE_PRINCIPAL, getSecurablePrincipalWorker);
}

/*
 *
 * PrincipalsApi.getUser
 * PrincipalsApiActions.getUser
 *
 */

function* getUserWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_USER)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getUser.request(id, value));
    const response = yield call(PrincipalsApi.getUser, value);
    workerResponse = { data: response };
    yield put(getUser.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getUser.failure(id, error));
  }
  finally {
    yield put(getUser.finally(id));
  }

  return workerResponse;
}

function* getUserWatcher() :Saga<*> {

  yield takeEvery(GET_USER, getUserWorker);
}

/*
 *
 * PrincipalsApi.searchAllUsers
 * PrincipalsApiActions.searchAllUsers
 *
 */

function* searchAllUsersWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SEARCH_ALL_USERS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(searchAllUsers.request(id, value));
    const response = yield call(PrincipalsApi.searchAllUsers, value);
    workerResponse = { data: response };
    yield put(searchAllUsers.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(searchAllUsers.failure(id, error));
  }
  finally {
    yield put(searchAllUsers.finally(id));
  }

  return workerResponse;
}

function* searchAllUsersWatcher() :Saga<*> {

  yield takeEvery(SEARCH_ALL_USERS, searchAllUsersWorker);
}

/*
 *
 * PrincipalsApi.syncUser
 * PrincipalsApiActions.syncUser
 *
 */

function* syncUserWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, SYNC_USER)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(syncUser.request(id));
    const response = yield call(PrincipalsApi.syncUser);
    workerResponse = { data: response };
    yield put(syncUser.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(syncUser.failure(id, error));
  }
  finally {
    yield put(syncUser.finally(id));
  }

  return workerResponse;
}

function* syncUserWatcher() :Saga<*> {

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
