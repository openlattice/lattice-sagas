/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { CollaborationsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  ADD_DATA_SET_TO_COLLABORATION,
  ADD_ORGANIZATIONS_TO_COLLABORATION,
  CREATE_COLLABORATION,
  DELETE_COLLABORATION,
  GET_ALL_COLLABORATIONS,
  GET_COLLABORATION,
  GET_COLLABORATIONS,
  GET_COLLABORATIONS_WITH_DATA_SETS,
  GET_COLLABORATIONS_WITH_ORGANIZATION,
  GET_COLLABORATION_DATABASE_INFO,
  GET_COLLABORATION_DATA_SETS,
  GET_ORGANIZATION_COLLABORATION_DATA_SETS,
  REMOVE_DATA_SET_FROM_COLLABORATION,
  REMOVE_ORGANIZATIONS_FROM_COLLABORATION,
  RENAME_COLLABORATION_DATABASE,
  addDataSetToCollaboration,
  addOrganizationsToCollaboration,
  createCollaboration,
  deleteCollaboration,
  getAllCollaborations,
  getCollaboration,
  getCollaborationDataSets,
  getCollaborationDatabaseInfo,
  getCollaborations,
  getCollaborationsWithDataSets,
  getCollaborationsWithOrganization,
  getOrganizationCollaborationDataSets,
  removeDataSetFromCollaboration,
  removeOrganizationsFromCollaboration,
  renameCollaborationDatabase,
} from './CollaborationsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * CollaborationsApi.addDataSetToCollaboration
 * CollaborationsApiActions.addDataSetToCollaboration
 *
 */

function* addDataSetToCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_DATA_SET_TO_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addDataSetToCollaboration.request(id, value));
    const { collaborationId, organizationId, dataSetId } = value;
    const response = yield call(
      CollaborationsApi.addDataSetToCollaboration,
      collaborationId,
      organizationId,
      dataSetId
    );
    workerResponse = { data: response };
    yield put(addDataSetToCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addDataSetToCollaboration.failure(id, error));
  }
  finally {
    yield put(addDataSetToCollaboration.finally(id));
  }

  return workerResponse;
}

function* addDataSetToCollaborationWatcher() :Saga<*> {

  yield takeEvery(ADD_DATA_SET_TO_COLLABORATION, addDataSetToCollaborationWorker);
}

/*
 *
 * CollaborationsApi.addOrganizationsToCollaboration
 * CollaborationsApiActions.addOrganizationsToCollaboration
 *
 */

function* addOrganizationsToCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_ORGANIZATIONS_TO_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addOrganizationsToCollaboration.request(id, value));
    const { collaborationId, organizationIds } = value;
    const response = yield call(
      CollaborationsApi.addOrganizationsToCollaboration,
      collaborationId,
      organizationIds,
    );
    workerResponse = { data: response };
    yield put(addOrganizationsToCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addOrganizationsToCollaboration.failure(id, error));
  }
  finally {
    yield put(addOrganizationsToCollaboration.finally(id));
  }

  return workerResponse;
}

function* addOrganizationsToCollaborationWatcher() :Saga<*> {

  yield takeEvery(ADD_ORGANIZATIONS_TO_COLLABORATION, addOrganizationsToCollaborationWorker);
}

/*
 *
 * CollaborationsApi.createCollaboration
 * CollaborationsApiActions.createCollaboration
 *
 */

function* createCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createCollaboration.request(id, value));
    const response = yield call(CollaborationsApi.createCollaboration, value);
    workerResponse = { data: response };
    yield put(createCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createCollaboration.failure(id, error));
  }
  finally {
    yield put(createCollaboration.finally(id));
  }

  return workerResponse;
}

function* createCollaborationWatcher() :Saga<*> {

  yield takeEvery(CREATE_COLLABORATION, createCollaborationWorker);
}

/*
 *
 * CollaborationsApi.deleteCollaboration
 * CollaborationsApiActions.deleteCollaboration
 *
 */

function* deleteCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteCollaboration.request(id, value));
    const response = yield call(CollaborationsApi.deleteCollaboration, value);
    workerResponse = { data: response };
    yield put(deleteCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteCollaboration.failure(id, error));
  }
  finally {
    yield put(deleteCollaboration.finally(id));
  }

  return workerResponse;
}

function* deleteCollaborationWatcher() :Saga<*> {

  yield takeEvery(DELETE_COLLABORATION, deleteCollaborationWorker);
}

/*
 *
 * CollaborationsApi.getAllCollaborations
 * CollaborationsApiActions.getAllCollaborations
 *
 */

function* getAllCollaborationsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATIONS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getAllCollaborations.request(id, value));
    const response = yield call(CollaborationsApi.getAllCollaborations);
    workerResponse = { data: response };
    yield put(getAllCollaborations.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllCollaborations.failure(id, error));
  }
  finally {
    yield put(getAllCollaborations.finally(id));
  }

  return workerResponse;
}

function* getAllCollaborationsWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_COLLABORATIONS, getAllCollaborationsWorker);
}

/*
 *
 * CollaborationsApi.getCollaboration
 * CollaborationsApiActions.getCollaboration
 *
 */

function* getCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getCollaboration.request(id, value));
    const response = yield call(CollaborationsApi.getCollaboration, value);
    workerResponse = { data: response };
    yield put(getCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCollaboration.failure(id, error));
  }
  finally {
    yield put(getCollaboration.finally(id));
  }

  return workerResponse;
}

function* getCollaborationWatcher() :Saga<*> {

  yield takeEvery(GET_COLLABORATION, getCollaborationWorker);
}

/*
 *
 * CollaborationsApi.getCollaborations
 * CollaborationsApiActions.getCollaborations
 *
 */

function* getCollaborationsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATIONS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getCollaborations.request(id, value));
    const response = yield call(CollaborationsApi.getCollaborations, value);
    workerResponse = { data: response };
    yield put(getCollaborations.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCollaborations.failure(id, error));
  }
  finally {
    yield put(getCollaborations.finally(id));
  }

  return workerResponse;
}

function* getCollaborationsWatcher() :Saga<*> {

  yield takeEvery(GET_COLLABORATIONS, getCollaborationsWorker);
}

/*
 *
 * CollaborationsApi.getCollaborationsWithDataSets
 * CollaborationsApiActions.getCollaborationsWithDataSets
 *
 */

function* getCollaborationsWithDataSetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATIONS_WITH_DATA_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getCollaborationsWithDataSets.request(id, value));
    const response = yield call(CollaborationsApi.getCollaborationsWithDataSets, value);
    workerResponse = { data: response };
    yield put(getCollaborationsWithDataSets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCollaborationsWithDataSets.failure(id, error));
  }
  finally {
    yield put(getCollaborationsWithDataSets.finally(id));
  }

  return workerResponse;
}

function* getCollaborationsWithDataSetsWatcher() :Saga<*> {

  yield takeEvery(GET_COLLABORATIONS_WITH_DATA_SETS, getCollaborationsWithDataSetsWorker);
}

/*
 *
 * CollaborationsApi.getCollaborationsWithOrganization
 * CollaborationsApiActions.getCollaborationsWithOrganization
 *
 */

function* getCollaborationsWithOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATIONS_WITH_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getCollaborationsWithOrganization.request(id, value));
    const response = yield call(CollaborationsApi.getCollaborationsWithOrganization, value);
    workerResponse = { data: response };
    yield put(getCollaborationsWithOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCollaborationsWithOrganization.failure(id, error));
  }
  finally {
    yield put(getCollaborationsWithOrganization.finally(id));
  }

  return workerResponse;
}

function* getCollaborationsWithOrganizationWatcher() :Saga<*> {

  yield takeEvery(GET_COLLABORATIONS_WITH_ORGANIZATION, getCollaborationsWithOrganizationWorker);
}

/*
 *
 * CollaborationsApi.getCollaborationDataSets
 * CollaborationsApiActions.getCollaborationDataSets
 *
 */

function* getCollaborationDataSetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATION_DATA_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getCollaborationDataSets.request(id, value));
    const response = yield call(CollaborationsApi.getCollaborationDataSets, value);
    workerResponse = { data: response };
    yield put(getCollaborationDataSets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCollaborationDataSets.failure(id, error));
  }
  finally {
    yield put(getCollaborationDataSets.finally(id));
  }

  return workerResponse;
}

function* getCollaborationDataSetsWatcher() :Saga<*> {

  yield takeEvery(GET_COLLABORATION_DATA_SETS, getCollaborationDataSetsWorker);
}

/*
 *
 * CollaborationsApi.getCollaborationDatabaseInfo
 * CollaborationsApiActions.getCollaborationDatabaseInfo
 *
 */

function* getCollaborationDatabaseInfoWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_COLLABORATION_DATABASE_INFO)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getCollaborationDatabaseInfo.request(id, value));
    const response = yield call(CollaborationsApi.getCollaborationDatabaseInfo, value);
    workerResponse = { data: response };
    yield put(getCollaborationDatabaseInfo.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getCollaborationDatabaseInfo.failure(id, error));
  }
  finally {
    yield put(getCollaborationDatabaseInfo.finally(id));
  }

  return workerResponse;
}

function* getCollaborationDatabaseInfoWatcher() :Saga<*> {

  yield takeEvery(GET_COLLABORATION_DATABASE_INFO, getCollaborationDatabaseInfoWorker);
}

/*
 *
 * CollaborationsApi.getOrganizationCollaborationDataSets
 * CollaborationsApiActions.getOrganizationCollaborationDataSets
 *
 */

function* getOrganizationCollaborationDataSetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_COLLABORATION_DATA_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationCollaborationDataSets.request(id, value));
    const response = yield call(CollaborationsApi.getOrganizationCollaborationDataSets, value);
    workerResponse = { data: response };
    yield put(getOrganizationCollaborationDataSets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationCollaborationDataSets.failure(id, error));
  }
  finally {
    yield put(getOrganizationCollaborationDataSets.finally(id));
  }

  return workerResponse;
}

function* getOrganizationCollaborationDataSetsWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_COLLABORATION_DATA_SETS, getOrganizationCollaborationDataSetsWorker);
}

/*
 *
 * CollaborationsApi.removeDataSetFromCollaboration
 * CollaborationsApiActions.removeDataSetFromCollaboration
 *
 */

function* removeDataSetFromCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_DATA_SET_FROM_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeDataSetFromCollaboration.request(id, value));
    const { collaborationId, organizationId, dataSetId } = value;
    const response = yield call(
      CollaborationsApi.removeDataSetFromCollaboration,
      collaborationId,
      organizationId,
      dataSetId
    );
    workerResponse = { data: response };
    yield put(removeDataSetFromCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeDataSetFromCollaboration.failure(id, error));
  }
  finally {
    yield put(removeDataSetFromCollaboration.finally(id));
  }

  return workerResponse;
}

function* removeDataSetFromCollaborationWatcher() :Saga<*> {

  yield takeEvery(REMOVE_DATA_SET_FROM_COLLABORATION, removeDataSetFromCollaborationWorker);
}

/*
 *
 * CollaborationsApi.removeOrganizationsFromCollaboration
 * CollaborationsApiActions.removeOrganizationsFromCollaboration
 *
 */

function* removeOrganizationsFromCollaborationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_ORGANIZATIONS_FROM_COLLABORATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeOrganizationsFromCollaboration.request(id, value));
    const { collaborationId, organizationIds } = value;
    const response = yield call(
      CollaborationsApi.removeOrganizationsFromCollaboration,
      collaborationId,
      organizationIds
    );
    workerResponse = { data: response };
    yield put(removeOrganizationsFromCollaboration.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeOrganizationsFromCollaboration.failure(id, error));
  }
  finally {
    yield put(removeOrganizationsFromCollaboration.finally(id));
  }

  return workerResponse;
}

function* removeOrganizationsFromCollaborationWatcher() :Saga<*> {

  yield takeEvery(REMOVE_ORGANIZATIONS_FROM_COLLABORATION, removeOrganizationsFromCollaborationWorker);
}

/*
 *
 * CollaborationsApi.renameCollaborationDatabase
 * CollaborationsApiActions.renameCollaborationDatabase
 *
 */

function* renameCollaborationDatabaseWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, RENAME_COLLABORATION_DATABASE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(renameCollaborationDatabase.request(id, value));
    const { collaborationId, name } = value;
    const response = yield call(
      CollaborationsApi.renameCollaborationDatabase,
      collaborationId,
      name
    );
    workerResponse = { data: response };
    yield put(renameCollaborationDatabase.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(renameCollaborationDatabase.failure(id, error));
  }
  finally {
    yield put(renameCollaborationDatabase.finally(id));
  }

  return workerResponse;
}

function* renameCollaborationDatabaseWatcher() :Saga<*> {

  yield takeEvery(RENAME_COLLABORATION_DATABASE, renameCollaborationDatabaseWorker);
}

export {
  addDataSetToCollaborationWatcher,
  addDataSetToCollaborationWorker,
  addOrganizationsToCollaborationWatcher,
  addOrganizationsToCollaborationWorker,
  createCollaborationWatcher,
  createCollaborationWorker,
  deleteCollaborationWatcher,
  deleteCollaborationWorker,
  getAllCollaborationsWatcher,
  getAllCollaborationsWorker,
  getCollaborationDataSetsWatcher,
  getCollaborationDataSetsWorker,
  getCollaborationDatabaseInfoWatcher,
  getCollaborationDatabaseInfoWorker,
  getCollaborationWatcher,
  getCollaborationWorker,
  getCollaborationsWatcher,
  getCollaborationsWithDataSetsWatcher,
  getCollaborationsWithDataSetsWorker,
  getCollaborationsWithOrganizationWatcher,
  getCollaborationsWithOrganizationWorker,
  getCollaborationsWorker,
  getOrganizationCollaborationDataSetsWatcher,
  getOrganizationCollaborationDataSetsWorker,
  removeDataSetFromCollaborationWatcher,
  removeDataSetFromCollaborationWorker,
  removeOrganizationsFromCollaborationWatcher,
  removeOrganizationsFromCollaborationWorker,
  renameCollaborationDatabaseWatcher,
  renameCollaborationDatabaseWorker,
};
