/*
 * @flow
 */

import { call, put, takeEvery } from '@redux-saga/core/effects';
import { OrganizationsApi } from 'lattice';
import type { SequenceAction } from 'redux-reqseq';

import { ERR_INVALID_ACTION, ERR_ACTION_VALUE_NOT_DEFINED } from '../utils/Errors';
import { isValidAction } from '../utils/Utils';

import {
  ADD_DOMAIN_TO_ORG,
  ADD_MEMBER_TO_ORG,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_ORG_INTEGRATION_ACCOUNT,
  GET_ORG_MEMBERS,
  GRANT_TRUST_TO_ORG,
  REMOVE_DOMAIN_FROM_ORG,
  REMOVE_MEMBER_FROM_ORG,
  REVOKE_TRUST_FROM_ORG,
  addDomainToOrganization,
  addMemberToOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  getAllOrganizations,
  getOrganization,
  getOrganizationIntegrationAccount,
  getOrganizationMembers,
  grantTrustToOrganization,
  removeDomainFromOrganization,
  removeMemberFromOrganization,
  revokeTrustFromOrganization,
} from './OrganizationsApiActions';

/*
 *
 * OrganizationsApi.addAutoApprovedEmailDomain
 * OrganizationsApiActions.addDomainToOrganization
 *
 */

function* addDomainToOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, ADD_DOMAIN_TO_ORG)) {
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
  const { domain, organizationId } = value;

  try {
    yield put(addDomainToOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.addAutoApprovedEmailDomain, organizationId, domain);
    yield put(addDomainToOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addDomainToOrganization.failure(id, response.error));
  }
  finally {
    yield put(addDomainToOrganization.finally(id));
  }

  return response;
}

function* addDomainToOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(ADD_DOMAIN_TO_ORG, addDomainToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.addMemberToOrganization
 * OrganizationsApiActions.addMemberToOrganization
 *
 */

function* addMemberToOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, ADD_MEMBER_TO_ORG)) {
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
  const { memberId, organizationId } = value;

  try {
    yield put(addMemberToOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.addMemberToOrganization, organizationId, memberId);
    yield put(addMemberToOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(addMemberToOrganization.failure(id, response.error));
  }
  finally {
    yield put(addMemberToOrganization.finally(id));
  }

  return response;
}

function* addMemberToOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(ADD_MEMBER_TO_ORG, addMemberToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.createRole
 * OrganizationsApiActions.createRole
 *
 */

function* createRoleWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, CREATE_ROLE)) {
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
    yield put(createRole.request(id, value));
    response.data = yield call(OrganizationsApi.createRole, value);
    yield put(createRole.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(createRole.failure(id, response.error));
  }
  finally {
    yield put(createRole.finally(id));
  }

  return response;
}

function* createRoleWatcher() :Generator<*, *, *> {

  yield takeEvery(CREATE_ROLE, createRoleWorker);
}

/*
 *
 * OrganizationsApi.deleteOrganization
 * OrganizationsApiActions.deleteOrganization
 *
 */

function* deleteOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, DELETE_ORGANIZATION)) {
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
    yield put(deleteOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.deleteOrganization, value);
    yield put(deleteOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteOrganization.failure(id, response.error));
  }
  finally {
    yield put(deleteOrganization.finally(id));
  }

  return response;
}

function* deleteOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ORGANIZATION, deleteOrganizationWorker);
}

/*
 *
 * OrganizationsApi.deleteRole
 * OrganizationsApiActions.deleteRole
 *
 */

function* deleteRoleWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, DELETE_ROLE)) {
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
  const { organizationId, roleId } = value;

  try {
    yield put(deleteRole.request(id, value));
    response.data = yield call(OrganizationsApi.deleteRole, organizationId, roleId);
    yield put(deleteRole.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(deleteRole.failure(id, response.error));
  }
  finally {
    yield put(deleteRole.finally(id));
  }

  return response;
}

function* deleteRoleWatcher() :Generator<*, *, *> {

  yield takeEvery(DELETE_ROLE, deleteRoleWorker);
}

/*
 *
 * OrganizationsApi.getAllOrganizations
 * OrganizationsApiActions.getAllOrganizations
 *
 */

function* getAllOrganizationsWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ALL_ORGANIZATIONS)) {
    return {
      error: ERR_INVALID_ACTION
    };
  }

  const { id } = seqAction;
  const response :Object = {};

  try {
    yield put(getAllOrganizations.request(id));
    response.data = yield call(OrganizationsApi.getAllOrganizations);
    yield put(getAllOrganizations.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getAllOrganizations.failure(id, response.error));
  }
  finally {
    yield put(getAllOrganizations.finally(id));
  }

  return response;
}

function* getAllOrganizationsWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ALL_ORGANIZATIONS, getAllOrganizationsWorker);
}

/*
 *
 * OrganizationsApi.getOrganization
 * OrganizationsApiActions.getOrganization
 *
 */

function* getOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ORGANIZATION)) {
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
    yield put(getOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.getOrganization, value);
    yield put(getOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getOrganization.failure(id, response.error));
  }
  finally {
    yield put(getOrganization.finally(id));
  }

  return response;
}

function* getOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ORGANIZATION, getOrganizationWorker);
}

/*
 *
 * OrganizationsApi.getOrganizationIntegrationAccount
 * OrganizationsApiActions.getOrganizationIntegrationAccount
 *
 */

function* getOrganizationIntegrationAccountWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ORG_INTEGRATION_ACCOUNT)) {
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
    yield put(getOrganizationIntegrationAccount.request(id, value));
    response.data = yield call(OrganizationsApi.getOrganizationIntegrationAccount, value);
    yield put(getOrganizationIntegrationAccount.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getOrganizationIntegrationAccount.failure(id, response.error));
  }
  finally {
    yield put(getOrganizationIntegrationAccount.finally(id));
  }

  return response;
}

function* getOrganizationIntegrationAccountWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ORG_INTEGRATION_ACCOUNT, getOrganizationIntegrationAccountWorker);
}

/*
 *
 * OrganizationsApi.getAllMembers
 * OrganizationsApiActions.getOrganizationMembers
 *
 */

function* getOrganizationMembersWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GET_ORG_MEMBERS)) {
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
    yield put(getOrganizationMembers.request(id, value));
    response.data = yield call(OrganizationsApi.getAllMembers, value);
    yield put(getOrganizationMembers.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(getOrganizationMembers.failure(id, response.error));
  }
  finally {
    yield put(getOrganizationMembers.finally(id));
  }

  return response;
}

function* getOrganizationMembersWatcher() :Generator<*, *, *> {

  yield takeEvery(GET_ORG_MEMBERS, getOrganizationMembersWorker);
}

/*
 *
 * OrganizationsApi.grantTrustToOrganization
 * OrganizationsApiActions.grantTrustToOrganization
 *
 */

function* grantTrustToOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, GRANT_TRUST_TO_ORG)) {
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
  const { organizationId, principalId } = value;

  try {
    yield put(grantTrustToOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.grantTrustToOrganization, organizationId, principalId);
    yield put(grantTrustToOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(grantTrustToOrganization.failure(id, response.error));
  }
  finally {
    yield put(grantTrustToOrganization.finally(id));
  }

  return response;
}

function* grantTrustToOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(GRANT_TRUST_TO_ORG, grantTrustToOrganizationWorker);
}

/*
 *
 * OrganizationsApi.removeAutoApprovedEmailDomain
 * OrganizationsApiActions.removeDomainFromOrganization
 *
 */

function* removeDomainFromOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REMOVE_DOMAIN_FROM_ORG)) {
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
  const { domain, organizationId } = value;

  try {
    yield put(removeDomainFromOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.removeAutoApprovedEmailDomain, organizationId, domain);
    yield put(removeDomainFromOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeDomainFromOrganization.failure(id, response.error));
  }
  finally {
    yield put(removeDomainFromOrganization.finally(id));
  }

  return response;
}

function* removeDomainFromOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(REMOVE_DOMAIN_FROM_ORG, removeDomainFromOrganizationWorker);
}

/*
 *
 * OrganizationsApi.removeMemberFromOrganization
 * OrganizationsApiActions.removeMemberFromOrganization
 *
 */

function* removeMemberFromOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {


  if (!isValidAction(seqAction, REMOVE_MEMBER_FROM_ORG)) {
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
  const { memberId, organizationId } = value;

  try {
    yield put(removeMemberFromOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.removeMemberFromOrganization, organizationId, memberId);
    yield put(removeMemberFromOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(removeMemberFromOrganization.failure(id, response.error));
  }
  finally {
    yield put(removeMemberFromOrganization.finally(id));
  }

  return response;
}

function* removeMemberFromOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(REMOVE_MEMBER_FROM_ORG, removeMemberFromOrganizationWorker);
}

/*
 *
 * OrganizationsApi.revokeTrustFromOrganization
 * OrganizationsApiActions.revokeTrustFromOrganization
 *
 */

function* revokeTrustFromOrganizationWorker(seqAction :SequenceAction) :Generator<*, *, *> {

  if (!isValidAction(seqAction, REVOKE_TRUST_FROM_ORG)) {
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
  const { organizationId, principalId } = value;

  try {
    yield put(revokeTrustFromOrganization.request(id, value));
    response.data = yield call(OrganizationsApi.revokeTrustFromOrganization, organizationId, principalId);
    yield put(revokeTrustFromOrganization.success(id, response.data));
  }
  catch (error) {
    response.error = error;
    yield put(revokeTrustFromOrganization.failure(id, response.error));
  }
  finally {
    yield put(revokeTrustFromOrganization.finally(id));
  }

  return response;
}

function* revokeTrustFromOrganizationWatcher() :Generator<*, *, *> {

  yield takeEvery(REVOKE_TRUST_FROM_ORG, revokeTrustFromOrganizationWorker);
}

export {
  addDomainToOrganizationWatcher,
  addDomainToOrganizationWorker,
  addMemberToOrganizationWatcher,
  addMemberToOrganizationWorker,
  createRoleWatcher,
  createRoleWorker,
  deleteOrganizationWatcher,
  deleteOrganizationWorker,
  deleteRoleWatcher,
  deleteRoleWorker,
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
  getOrganizationIntegrationAccountWatcher,
  getOrganizationIntegrationAccountWorker,
  getOrganizationMembersWatcher,
  getOrganizationMembersWorker,
  grantTrustToOrganizationWatcher,
  grantTrustToOrganizationWorker,
  removeDomainFromOrganizationWatcher,
  removeDomainFromOrganizationWorker,
  removeMemberFromOrganizationWatcher,
  removeMemberFromOrganizationWorker,
  revokeTrustFromOrganizationWatcher,
  revokeTrustFromOrganizationWorker,
};
