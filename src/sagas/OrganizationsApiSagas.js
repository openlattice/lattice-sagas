/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { OrganizationsApi } from 'lattice';
import type { Saga } from '@redux-saga/core';
import type { SequenceAction } from 'redux-reqseq';

import {
  ADD_CONNECTIONS_TO_ORGANIZATION,
  ADD_DOMAINS_TO_ORGANIZATION,
  ADD_MEMBER_TO_ORGANIZATION,
  ADD_ROLE_TO_MEMBER,
  CREATE_ORGANIZATION,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_ORGANIZATION_DATABASE_NAME,
  GET_ORGANIZATION_ENTITY_SETS,
  GET_ORGANIZATION_INTEGRATION_ACCOUNT,
  GET_ORGANIZATION_MEMBERS,
  GET_ORGANIZATION_ROLES,
  GET_ROLE,
  GET_USERS_WITH_ROLE,
  GRANT_TRUST_TO_ORGANIZATION,
  PROMOTE_STAGING_TABLE,
  REMOVE_CONNECTIONS_FROM_ORGANIZATION,
  REMOVE_DOMAINS_FROM_ORGANIZATION,
  REMOVE_MEMBER_FROM_ORGANIZATION,
  REMOVE_ROLE_FROM_MEMBER,
  RENAME_ORGANIZATION_DATABASE,
  REVOKE_TRUST_FROM_ORGANIZATION,
  TRANSPORT_ORGANIZATION_ENTITY_SET,
  UPDATE_ORGANIZATION_DESCRIPTION,
  UPDATE_ORGANIZATION_TITLE,
  UPDATE_ROLE_DESCRIPTION,
  UPDATE_ROLE_GRANT,
  UPDATE_ROLE_TITLE,
  addConnectionsToOrganization,
  addDomainsToOrganization,
  addMemberToOrganization,
  addRoleToMember,
  createOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  destroyTransportedOrganizationEntitySet,
  getAllOrganizations,
  getOrganization,
  getOrganizationDatabaseName,
  getOrganizationEntitySets,
  getOrganizationIntegrationAccount,
  getOrganizationMembers,
  getOrganizationRoles,
  getRole,
  getUsersWithRole,
  grantTrustToOrganization,
  promoteStagingTable,
  removeConnectionsFromOrganization,
  removeDomainsFromOrganization,
  removeMemberFromOrganization,
  removeRoleFromMember,
  renameOrganizationDatabase,
  revokeTrustFromOrganization,
  transportOrganizationEntitySet,
  updateOrganizationDescription,
  updateOrganizationTitle,
  updateRoleDescription,
  updateRoleGrant,
  updateRoleTitle,
} from './OrganizationsApiActions';

import { ERR_INVALID_ACTION } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';
import type { WorkerResponse } from '../types';

/*
 *
 * OrganizationsApi.addConnectionsToOrganization
 * OrganizationsApiActions.addConnectionsToOrganization
 *
 */

function* addConnectionsToOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_CONNECTIONS_TO_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addConnectionsToOrganization.request(id, value));
    const { connections, organizationId } = value;
    const response = yield call(OrganizationsApi.addConnectionsToOrganization, organizationId, connections);
    workerResponse = { data: response };
    yield put(addConnectionsToOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addConnectionsToOrganization.failure(id, error));
  }
  finally {
    yield put(addConnectionsToOrganization.finally(id));
  }

  return workerResponse;
}

function* addConnectionsToOrganizationWatcher() :Saga<*> {

  yield takeEvery(ADD_CONNECTIONS_TO_ORGANIZATION, addConnectionsToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.addDomainsToOrganization
 * OrganizationsApiActions.addDomainsToOrganization
 *
 */

function* addDomainsToOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_DOMAINS_TO_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addDomainsToOrganization.request(id, value));
    const { domains, organizationId } = value;
    const response = yield call(OrganizationsApi.addDomainsToOrganization, organizationId, domains);
    workerResponse = { data: response };
    yield put(addDomainsToOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addDomainsToOrganization.failure(id, error));
  }
  finally {
    yield put(addDomainsToOrganization.finally(id));
  }

  return workerResponse;
}

function* addDomainsToOrganizationWatcher() :Saga<*> {

  yield takeEvery(ADD_DOMAINS_TO_ORGANIZATION, addDomainsToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.addMemberToOrganization
 * OrganizationsApiActions.addMemberToOrganization
 *
 */

function* addMemberToOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_MEMBER_TO_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addMemberToOrganization.request(id, value));
    const { memberId, organizationId } = value;
    const response = yield call(OrganizationsApi.addMemberToOrganization, organizationId, memberId);
    workerResponse = { data: response };
    yield put(addMemberToOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addMemberToOrganization.failure(id, error));
  }
  finally {
    yield put(addMemberToOrganization.finally(id));
  }

  return workerResponse;
}

function* addMemberToOrganizationWatcher() :Saga<*> {

  yield takeEvery(ADD_MEMBER_TO_ORGANIZATION, addMemberToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.addRoleToMember
 * OrganizationsApiActions.addRoleToMember
 *
 */

function* addRoleToMemberWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, ADD_ROLE_TO_MEMBER)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(addRoleToMember.request(id, value));
    const { memberId, organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.addRoleToMember, organizationId, roleId, memberId);
    workerResponse = { data: response };
    yield put(addRoleToMember.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(addRoleToMember.failure(id, error));
  }
  finally {
    yield put(addRoleToMember.finally(id));
  }

  return workerResponse;
}

function* addRoleToMemberWatcher() :Saga<*> {

  yield takeEvery(ADD_ROLE_TO_MEMBER, addRoleToMemberWorker);
}

/*
 *
 * OrganizationsApi.createOrganization
 * OrganizationsApiActions.createOrganization
 *
 */

function* createOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createOrganization.request(id, value));
    const response = yield call(OrganizationsApi.createOrganization, value);
    workerResponse = { data: response };
    yield put(createOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createOrganization.failure(id, error));
  }
  finally {
    yield put(createOrganization.finally(id));
  }

  return workerResponse;
}

function* createOrganizationWatcher() :Saga<*> {

  yield takeEvery(CREATE_ORGANIZATION, createOrganizationWorker);
}

/*
 *
 * OrganizationsApi.createRole
 * OrganizationsApiActions.createRole
 *
 */

function* createRoleWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, CREATE_ROLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(createRole.request(id, value));
    const response = yield call(OrganizationsApi.createRole, value);
    workerResponse = { data: response };
    yield put(createRole.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(createRole.failure(id, error));
  }
  finally {
    yield put(createRole.finally(id));
  }

  return workerResponse;
}

function* createRoleWatcher() :Saga<*> {

  yield takeEvery(CREATE_ROLE, createRoleWorker);
}

/*
 *
 * OrganizationsApi.deleteOrganization
 * OrganizationsApiActions.deleteOrganization
 *
 */

function* deleteOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteOrganization.request(id, value));
    const response = yield call(OrganizationsApi.deleteOrganization, value);
    workerResponse = { data: response };
    yield put(deleteOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteOrganization.failure(id, error));
  }
  finally {
    yield put(deleteOrganization.finally(id));
  }

  return workerResponse;
}

function* deleteOrganizationWatcher() :Saga<*> {

  yield takeEvery(DELETE_ORGANIZATION, deleteOrganizationWorker);
}

/*
 *
 * OrganizationsApi.deleteRole
 * OrganizationsApiActions.deleteRole
 *
 */

function* deleteRoleWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DELETE_ROLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(deleteRole.request(id, value));
    const { organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.deleteRole, organizationId, roleId);
    workerResponse = { data: response };
    yield put(deleteRole.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(deleteRole.failure(id, error));
  }
  finally {
    yield put(deleteRole.finally(id));
  }

  return workerResponse;
}

function* deleteRoleWatcher() :Saga<*> {

  yield takeEvery(DELETE_ROLE, deleteRoleWorker);
}

/*
 *
 * OrganizationsApi.destroyTransportedOrganizationEntitySet
 * OrganizationsApiActions.destroyTransportedOrganizationEntitySet
 *
 */

function* destroyTransportedOrganizationEntitySetWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(destroyTransportedOrganizationEntitySet.request(id, value));
    const { entitySetId, organizationId } = value;
    const response = yield call(OrganizationsApi.destroyTransportedOrganizationEntitySet, organizationId, entitySetId);
    workerResponse = { data: response };
    yield put(destroyTransportedOrganizationEntitySet.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(destroyTransportedOrganizationEntitySet.failure(id, error));
  }
  finally {
    yield put(destroyTransportedOrganizationEntitySet.finally(id));
  }

  return workerResponse;
}

function* destroyTransportedOrganizationEntitySetWatcher() :Saga<*> {

  yield takeEvery(DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET, destroyTransportedOrganizationEntitySetWorker);
}

/*
 *
 * OrganizationsApi.getAllOrganizations
 * OrganizationsApiActions.getAllOrganizations
 *
 */

function* getAllOrganizationsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ALL_ORGANIZATIONS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id } = action;

  try {
    yield put(getAllOrganizations.request(id));
    const response = yield call(OrganizationsApi.getAllOrganizations);
    workerResponse = { data: response };
    yield put(getAllOrganizations.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getAllOrganizations.failure(id, error));
  }
  finally {
    yield put(getAllOrganizations.finally(id));
  }

  return workerResponse;
}

function* getAllOrganizationsWatcher() :Saga<*> {

  yield takeEvery(GET_ALL_ORGANIZATIONS, getAllOrganizationsWorker);
}

/*
 *
 * OrganizationsApi.getOrganization
 * OrganizationsApiActions.getOrganization
 *
 */

function* getOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganization.request(id, value));
    const response = yield call(OrganizationsApi.getOrganization, value);
    workerResponse = { data: response };
    yield put(getOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganization.failure(id, error));
  }
  finally {
    yield put(getOrganization.finally(id));
  }

  return workerResponse;
}

function* getOrganizationWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION, getOrganizationWorker);
}

/*
 *
 * OrganizationsApi.getOrganizationDatabaseName
 * OrganizationsApiActions.getOrganizationDatabaseName
 *
 */

function* getOrganizationDatabaseNameWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_DATABASE_NAME)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationDatabaseName.request(id, value));
    const response = yield call(OrganizationsApi.getOrganizationDatabaseName, value);
    workerResponse = { data: response };
    yield put(getOrganizationDatabaseName.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationDatabaseName.failure(id, error));
  }
  finally {
    yield put(getOrganizationDatabaseName.finally(id));
  }

  return workerResponse;
}

function* getOrganizationDatabaseNameWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_DATABASE_NAME, getOrganizationDatabaseNameWorker);
}

/*
 *
 * OrganizationsApi.getOrganizationEntitySets
 * OrganizationsApiActions.getOrganizationEntitySets
 *
 */

function* getOrganizationEntitySetsWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_ENTITY_SETS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationEntitySets.request(id, value));
    const response = yield call(OrganizationsApi.getOrganizationEntitySets, value);
    workerResponse = { data: response };
    yield put(getOrganizationEntitySets.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationEntitySets.failure(id, error));
  }
  finally {
    yield put(getOrganizationEntitySets.finally(id));
  }

  return workerResponse;
}

function* getOrganizationEntitySetsWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_ENTITY_SETS, getOrganizationEntitySetsWorker);
}

/*
 *
 * OrganizationsApi.getOrganizationIntegrationAccount
 * OrganizationsApiActions.getOrganizationIntegrationAccount
 *
 */

function* getOrganizationIntegrationAccountWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_INTEGRATION_ACCOUNT)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationIntegrationAccount.request(id, value));
    const response = yield call(OrganizationsApi.getOrganizationIntegrationAccount, value);
    workerResponse = { data: response };
    yield put(getOrganizationIntegrationAccount.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationIntegrationAccount.failure(id, error));
  }
  finally {
    yield put(getOrganizationIntegrationAccount.finally(id));
  }

  return workerResponse;
}

function* getOrganizationIntegrationAccountWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_INTEGRATION_ACCOUNT, getOrganizationIntegrationAccountWorker);
}

/*
 *
 * OrganizationsApi.getOrganizationMembers
 * OrganizationsApiActions.getOrganizationMembers
 *
 */

function* getOrganizationMembersWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_MEMBERS)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationMembers.request(id, value));
    const response = yield call(OrganizationsApi.getOrganizationMembers, value);
    workerResponse = { data: response };
    yield put(getOrganizationMembers.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationMembers.failure(id, error));
  }
  finally {
    yield put(getOrganizationMembers.finally(id));
  }

  return workerResponse;
}

function* getOrganizationMembersWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_MEMBERS, getOrganizationMembersWorker);
}

/*
 *
 * OrganizationsApi.getOrganizationRoles
 * OrganizationsApiActions.getOrganizationRoles
 *
 */

function* getOrganizationRolesWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ORGANIZATION_ROLES)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getOrganizationRoles.request(id, value));
    const response = yield call(OrganizationsApi.getOrganizationRoles, value);
    workerResponse = { data: response };
    yield put(getOrganizationRoles.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getOrganizationRoles.failure(id, error));
  }
  finally {
    yield put(getOrganizationRoles.finally(id));
  }

  return workerResponse;
}

function* getOrganizationRolesWatcher() :Saga<*> {

  yield takeEvery(GET_ORGANIZATION_ROLES, getOrganizationRolesWorker);
}

/*
 *
 * OrganizationsApi.getRole
 * OrganizationsApiActions.getRole
 *
 */

function* getRoleWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_ROLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getRole.request(id, value));
    const { organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.getRole, organizationId, roleId);
    workerResponse = { data: response };
    yield put(getRole.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getRole.failure(id, error));
  }
  finally {
    yield put(getRole.finally(id));
  }

  return workerResponse;
}

function* getRoleWatcher() :Saga<*> {

  yield takeEvery(GET_ROLE, getRoleWorker);
}

/*
 *
 * OrganizationsApi.getUsersWithRole
 * OrganizationsApiActions.getUsersWithRole
 *
 */

function* getUsersWithRoleWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GET_USERS_WITH_ROLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(getUsersWithRole.request(id, value));
    const { organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.getUsersWithRole, organizationId, roleId);
    workerResponse = { data: response };
    yield put(getUsersWithRole.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(getUsersWithRole.failure(id, error));
  }
  finally {
    yield put(getUsersWithRole.finally(id));
  }

  return workerResponse;
}

function* getUsersWithRoleWatcher() :Saga<*> {

  yield takeEvery(GET_USERS_WITH_ROLE, getUsersWithRoleWorker);
}

/*
 *
 * OrganizationsApi.grantTrustToOrganization
 * OrganizationsApiActions.grantTrustToOrganization
 *
 */

function* grantTrustToOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, GRANT_TRUST_TO_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(grantTrustToOrganization.request(id, value));
    const { organizationId, principalId } = value;
    const response = yield call(OrganizationsApi.grantTrustToOrganization, organizationId, principalId);
    workerResponse = { data: response };
    yield put(grantTrustToOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(grantTrustToOrganization.failure(id, error));
  }
  finally {
    yield put(grantTrustToOrganization.finally(id));
  }

  return workerResponse;
}

function* grantTrustToOrganizationWatcher() :Saga<*> {

  yield takeEvery(GRANT_TRUST_TO_ORGANIZATION, grantTrustToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.promoteStagingTable
 * OrganizationsApiActions.promoteStagingTable
 *
 */

function* promoteStagingTableWorker(action :SequenceAction) :Saga<WorkerResponse> {
  if (!isValidAction(action, PROMOTE_STAGING_TABLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(promoteStagingTable.request(id, value));
    const { organizationId, tableName } = value;
    const response = yield call(OrganizationsApi.promoteStagingTable, organizationId, tableName);
    workerResponse = { data: response };
    yield put(promoteStagingTable.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(promoteStagingTable.failure(id, error));
  }
  finally {
    yield put(promoteStagingTable.finally(id));
  }

  return workerResponse;
}

function* promoteStagingTableWatcher() :Saga<*> {

  yield takeEvery(GRANT_TRUST_TO_ORGANIZATION, grantTrustToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.removeConnectionsFromOrganization
 * OrganizationsApiActions.removeConnectionsFromOrganization
 *
 */

function* removeConnectionsFromOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_CONNECTIONS_FROM_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeConnectionsFromOrganization.request(id, value));
    const { connections, organizationId } = value;
    const response = yield call(OrganizationsApi.removeConnectionsFromOrganization, organizationId, connections);
    workerResponse = { data: response };
    yield put(removeConnectionsFromOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeConnectionsFromOrganization.failure(id, error));
  }
  finally {
    yield put(removeConnectionsFromOrganization.finally(id));
  }

  return workerResponse;
}

function* removeConnectionsFromOrganizationWatcher() :Saga<*> {

  yield takeEvery(REMOVE_CONNECTIONS_FROM_ORGANIZATION, removeConnectionsFromOrganizationWorker);
}

/*
 *
 * OrganizationsApi.removeDomainsFromOrganization
 * OrganizationsApiActions.removeDomainsFromOrganization
 *
 */

function* removeDomainsFromOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_DOMAINS_FROM_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeDomainsFromOrganization.request(id, value));
    const { domains, organizationId } = value;
    const response = yield call(OrganizationsApi.removeDomainsFromOrganization, organizationId, domains);
    workerResponse = { data: response };
    yield put(removeDomainsFromOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeDomainsFromOrganization.failure(id, error));
  }
  finally {
    yield put(removeDomainsFromOrganization.finally(id));
  }

  return workerResponse;
}

function* removeDomainsFromOrganizationWatcher() :Saga<*> {

  yield takeEvery(REMOVE_DOMAINS_FROM_ORGANIZATION, removeDomainsFromOrganizationWorker);
}

/*
 *
 * OrganizationsApi.removeMemberFromOrganization
 * OrganizationsApiActions.removeMemberFromOrganization
 *
 */

function* removeMemberFromOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_MEMBER_FROM_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeMemberFromOrganization.request(id, value));
    const { memberId, organizationId } = value;
    const response = yield call(OrganizationsApi.removeMemberFromOrganization, organizationId, memberId);
    workerResponse = { data: response };
    yield put(removeMemberFromOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeMemberFromOrganization.failure(id, error));
  }
  finally {
    yield put(removeMemberFromOrganization.finally(id));
  }

  return workerResponse;
}

function* removeMemberFromOrganizationWatcher() :Saga<*> {

  yield takeEvery(REMOVE_MEMBER_FROM_ORGANIZATION, removeMemberFromOrganizationWorker);
}

/*
 *
 * OrganizationsApi.removeRoleFromMember
 * OrganizationsApiActions.removeRoleFromMember
 *
 */

function* removeRoleFromMemberWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REMOVE_ROLE_FROM_MEMBER)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(removeRoleFromMember.request(id, value));
    const { memberId, organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.removeRoleFromMember, organizationId, roleId, memberId);
    workerResponse = { data: response };
    yield put(removeRoleFromMember.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(removeRoleFromMember.failure(id, error));
  }
  finally {
    yield put(removeRoleFromMember.finally(id));
  }

  return workerResponse;
}

function* removeRoleFromMemberWatcher() :Saga<*> {

  yield takeEvery(REMOVE_ROLE_FROM_MEMBER, removeRoleFromMemberWorker);
}

/*
 *
 * OrganizationsApi.renameOrganizationDatabase
 * OrganizationsApiActions.renameOrganizationDatabase
 *
 */

function* renameOrganizationDatabaseWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, RENAME_ORGANIZATION_DATABASE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(renameOrganizationDatabase.request(id, value));
    const { databaseName, organizationId } = value;
    const response = yield call(OrganizationsApi.renameOrganizationDatabase, organizationId, databaseName);
    workerResponse = { data: response };
    yield put(renameOrganizationDatabase.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(renameOrganizationDatabase.failure(id, error));
  }
  finally {
    yield put(renameOrganizationDatabase.finally(id));
  }

  return workerResponse;
}

function* renameOrganizationDatabaseWatcher() :Saga<*> {

  yield takeEvery(RENAME_ORGANIZATION_DATABASE, renameOrganizationDatabaseWorker);
}

/*
 *
 * OrganizationsApi.revokeTrustFromOrganization
 * OrganizationsApiActions.revokeTrustFromOrganization
 *
 */

function* revokeTrustFromOrganizationWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, REVOKE_TRUST_FROM_ORGANIZATION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(revokeTrustFromOrganization.request(id, value));
    const { organizationId, principalId } = value;
    const response = yield call(OrganizationsApi.revokeTrustFromOrganization, organizationId, principalId);
    workerResponse = { data: response };
    yield put(revokeTrustFromOrganization.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(revokeTrustFromOrganization.failure(id, error));
  }
  finally {
    yield put(revokeTrustFromOrganization.finally(id));
  }

  return workerResponse;
}

function* revokeTrustFromOrganizationWatcher() :Saga<*> {

  yield takeEvery(REVOKE_TRUST_FROM_ORGANIZATION, revokeTrustFromOrganizationWorker);
}

/*
 *
 * OrganizationsApi.transportOrganizationEntitySet
 * OrganizationsApiActions.transportOrganizationEntitySet
 *
 */

function* transportOrganizationEntitySetWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, TRANSPORT_ORGANIZATION_ENTITY_SET)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(transportOrganizationEntitySet.request(id, value));
    const { entitySetId, organizationId } = value;
    const response = yield call(OrganizationsApi.transportOrganizationEntitySet, organizationId, entitySetId);
    workerResponse = { data: response };
    yield put(transportOrganizationEntitySet.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(transportOrganizationEntitySet.failure(id, error));
  }
  finally {
    yield put(transportOrganizationEntitySet.finally(id));
  }

  return workerResponse;
}

function* transportOrganizationEntitySetWatcher() :Saga<*> {

  yield takeEvery(TRANSPORT_ORGANIZATION_ENTITY_SET, transportOrganizationEntitySetWorker);
}

/*
 *
 * OrganizationsApi.updateOrganizationDescription
 * OrganizationsApiActions.updateOrganizationDescription
 *
 */

function* updateOrganizationDescriptionWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ORGANIZATION_DESCRIPTION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateOrganizationDescription.request(id, value));
    const { description, organizationId } = value;
    const response = yield call(OrganizationsApi.updateOrganizationDescription, organizationId, description);
    workerResponse = { data: response };
    yield put(updateOrganizationDescription.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateOrganizationDescription.failure(id, error));
  }
  finally {
    yield put(updateOrganizationDescription.finally(id));
  }

  return workerResponse;
}

function* updateOrganizationDescriptionWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ORGANIZATION_DESCRIPTION, updateOrganizationDescriptionWorker);
}

/*
 *
 * OrganizationsApi.updateOrganizationTitle
 * OrganizationsApiActions.updateOrganizationTitle
 *
 */

function* updateOrganizationTitleWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ORGANIZATION_TITLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateOrganizationTitle.request(id, value));
    const { organizationId, title } = value;
    const response = yield call(OrganizationsApi.updateOrganizationTitle, organizationId, title);
    workerResponse = { data: response };
    yield put(updateOrganizationTitle.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateOrganizationTitle.failure(id, error));
  }
  finally {
    yield put(updateOrganizationTitle.finally(id));
  }

  return workerResponse;
}

function* updateOrganizationTitleWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ORGANIZATION_TITLE, updateOrganizationTitleWorker);
}

/*
 *
 * OrganizationsApi.updateRoleDescription
 * OrganizationsApiActions.updateRoleDescription
 *
 */

function* updateRoleDescriptionWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ROLE_DESCRIPTION)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateRoleDescription.request(id, value));
    const { description, organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.updateRoleDescription, organizationId, roleId, description);
    workerResponse = { data: response };
    yield put(updateRoleDescription.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateRoleDescription.failure(id, error));
  }
  finally {
    yield put(updateRoleDescription.finally(id));
  }

  return workerResponse;
}

function* updateRoleDescriptionWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ROLE_DESCRIPTION, updateRoleDescriptionWorker);
}

/*
 *
 * OrganizationsApi.updateRoleGrant
 * OrganizationsApiActions.updateRoleGrant
 *
 */

function* updateRoleGrantWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ROLE_GRANT)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateRoleGrant.request(id, value));
    const { grant, organizationId, roleId } = value;
    const response = yield call(OrganizationsApi.updateRoleGrant, organizationId, roleId, grant);
    workerResponse = { data: response };
    yield put(updateRoleGrant.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateRoleGrant.failure(id, error));
  }
  finally {
    yield put(updateRoleGrant.finally(id));
  }

  return workerResponse;
}

function* updateRoleGrantWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ROLE_GRANT, updateRoleGrantWorker);
}

/*
 *
 * OrganizationsApi.updateRoleTitle
 * OrganizationsApiActions.updateRoleTitle
 *
 */

function* updateRoleTitleWorker(action :SequenceAction) :Saga<WorkerResponse> {

  if (!isValidAction(action, UPDATE_ROLE_TITLE)) {
    return { error: new Error(ERR_INVALID_ACTION) };
  }

  let workerResponse :WorkerResponse;
  const { id, value } = action;

  try {
    yield put(updateRoleTitle.request(id, value));
    const { organizationId, roleId, title } = value;
    const response = yield call(OrganizationsApi.updateRoleTitle, organizationId, roleId, title);
    workerResponse = { data: response };
    yield put(updateRoleTitle.success(id, response));
  }
  catch (error) {
    workerResponse = { error };
    yield put(updateRoleTitle.failure(id, error));
  }
  finally {
    yield put(updateRoleTitle.finally(id));
  }

  return workerResponse;
}

function* updateRoleTitleWatcher() :Saga<*> {

  yield takeEvery(UPDATE_ROLE_TITLE, updateRoleTitleWorker);
}

export {
  addConnectionsToOrganizationWatcher,
  addConnectionsToOrganizationWorker,
  addDomainsToOrganizationWatcher,
  addDomainsToOrganizationWorker,
  addMemberToOrganizationWatcher,
  addMemberToOrganizationWorker,
  addRoleToMemberWatcher,
  addRoleToMemberWorker,
  createOrganizationWatcher,
  createOrganizationWorker,
  createRoleWatcher,
  createRoleWorker,
  deleteOrganizationWatcher,
  deleteOrganizationWorker,
  deleteRoleWatcher,
  deleteRoleWorker,
  destroyTransportedOrganizationEntitySetWatcher,
  destroyTransportedOrganizationEntitySetWorker,
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getOrganizationDatabaseNameWatcher,
  getOrganizationDatabaseNameWorker,
  getOrganizationEntitySetsWatcher,
  getOrganizationEntitySetsWorker,
  getOrganizationIntegrationAccountWatcher,
  getOrganizationIntegrationAccountWorker,
  getOrganizationMembersWatcher,
  getOrganizationMembersWorker,
  getOrganizationRolesWatcher,
  getOrganizationRolesWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
  getRoleWatcher,
  getRoleWorker,
  getUsersWithRoleWatcher,
  getUsersWithRoleWorker,
  grantTrustToOrganizationWatcher,
  grantTrustToOrganizationWorker,
  promoteStagingTableWatcher,
  promoteStagingTableWorker,
  removeConnectionsFromOrganizationWatcher,
  removeConnectionsFromOrganizationWorker,
  removeDomainsFromOrganizationWatcher,
  removeDomainsFromOrganizationWorker,
  removeMemberFromOrganizationWatcher,
  removeMemberFromOrganizationWorker,
  removeRoleFromMemberWatcher,
  removeRoleFromMemberWorker,
  renameOrganizationDatabaseWatcher,
  renameOrganizationDatabaseWorker,
  revokeTrustFromOrganizationWatcher,
  revokeTrustFromOrganizationWorker,
  transportOrganizationEntitySetWatcher,
  transportOrganizationEntitySetWorker,
  updateOrganizationDescriptionWatcher,
  updateOrganizationDescriptionWorker,
  updateOrganizationTitleWatcher,
  updateOrganizationTitleWorker,
  updateRoleDescriptionWatcher,
  updateRoleDescriptionWorker,
  updateRoleGrantWatcher,
  updateRoleGrantWorker,
  updateRoleTitleWatcher,
  updateRoleTitleWorker,
};
