/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { OrganizationsApi } from 'lattice';

import {
  ADD_DOMAIN_TO_ORG,
  ADD_MEMBER_TO_ORG,
  ADD_ROLE_TO_MEMBER,
  CREATE_ORGANIZATION,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ALL_USERS_OF_ROLE,
  GET_ORGANIZATION,
  GET_ORG_ENTITY_SETS,
  GET_ORG_INTEGRATION_ACCOUNT,
  GET_ORG_MEMBERS,
  GRANT_TRUST_TO_ORG,
  REMOVE_DOMAIN_FROM_ORG,
  REMOVE_MEMBER_FROM_ORG,
  REMOVE_ROLE_FROM_MEMBER,
  REVOKE_TRUST_FROM_ORG,
  UPDATE_ORG_DESCRIPTION,
  UPDATE_ORG_TITLE,
  addDomainToOrganization,
  addMemberToOrganization,
  addRoleToMember,
  createOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  getAllOrganizations,
  getAllUsersOfRole,
  getOrganization,
  getOrganizationEntitySets,
  getOrganizationIntegrationAccount,
  getOrganizationMembers,
  grantTrustToOrganization,
  removeDomainFromOrganization,
  removeMemberFromOrganization,
  removeRoleFromMember,
  revokeTrustFromOrganization,
  updateOrganizationDescription,
  updateOrganizationTitle,
} from './OrganizationsApiActions';

import {
  addDomainToOrganizationWatcher,
  addDomainToOrganizationWorker,
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
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getAllUsersOfRoleWatcher,
  getAllUsersOfRoleWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
  getOrganizationEntitySetsWatcher,
  getOrganizationEntitySetsWorker,
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
  removeRoleFromMemberWatcher,
  removeRoleFromMemberWorker,
  revokeTrustFromOrganizationWatcher,
  revokeTrustFromOrganizationWorker,
  updateOrganizationDescriptionWatcher,
  updateOrganizationDescriptionWorker,
  updateOrganizationTitleWatcher,
  updateOrganizationTitleWorker,
} from './OrganizationsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('OrganizationsApiSagas', () => {

  /*
   *
   * OrganizationsApi.addAutoApprovedEmailDomain
   * OrganizationsApiActions.addDomainToOrganization
   *
   */

  describe('addDomainToOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(addDomainToOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      addDomainToOrganizationWatcher,
      addDomainToOrganizationWorker,
      ADD_DOMAIN_TO_ORG,
    );
  });

  describe('addDomainToOrganizationWorker', () => {

    const mockActionValue = {
      domain: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(addDomainToOrganizationWorker);
    testShouldFailOnInvalidAction(addDomainToOrganizationWorker, ADD_DOMAIN_TO_ORG);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.addAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: addDomainToOrganization,
      workerSagaAction: addDomainToOrganization(mockActionValue),
      workerSagaToTest: addDomainToOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.addAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: addDomainToOrganization,
      workerSagaAction: addDomainToOrganization(mockActionValue),
      workerSagaToTest: addDomainToOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.addMemberToOrganization
   * OrganizationsApiActions.addMemberToOrganization
   *
   */

  describe('addMemberToOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(addMemberToOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      addMemberToOrganizationWatcher,
      addMemberToOrganizationWorker,
      ADD_MEMBER_TO_ORG,
    );
  });

  describe('addMemberToOrganizationWorker', () => {

    const mockActionValue = {
      memberId: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(addMemberToOrganizationWorker);
    testShouldFailOnInvalidAction(addMemberToOrganizationWorker, ADD_MEMBER_TO_ORG);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.addMemberToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.memberId],
      latticeApiReqSeq: addMemberToOrganization,
      workerSagaAction: addMemberToOrganization(mockActionValue),
      workerSagaToTest: addMemberToOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.addMemberToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.memberId],
      latticeApiReqSeq: addMemberToOrganization,
      workerSagaAction: addMemberToOrganization(mockActionValue),
      workerSagaToTest: addMemberToOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.addRoleToMember
   * OrganizationsApiActions.addRoleToMember
   *
   */

  describe('addRoleToMemberWatcher', () => {
    testShouldBeGeneratorFunction(addRoleToMemberWatcher);
    testWatcherSagaShouldTakeEvery(
      addRoleToMemberWatcher,
      addRoleToMemberWorker,
      ADD_ROLE_TO_MEMBER,
    );
  });

  describe('addRoleToMemberWorker', () => {

    const mockActionValue = {
      memberId: randomUUID(),
      organizationId: randomUUID(),
      roleId: randomUUID(),
    };

    testShouldBeGeneratorFunction(addRoleToMemberWorker);
    testShouldFailOnInvalidAction(addRoleToMemberWorker, ADD_ROLE_TO_MEMBER);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.addRoleToMember,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.memberId],
      latticeApiReqSeq: addRoleToMember,
      workerSagaAction: addRoleToMember(mockActionValue),
      workerSagaToTest: addRoleToMemberWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.addRoleToMember,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.memberId],
      latticeApiReqSeq: addRoleToMember,
      workerSagaAction: addRoleToMember(mockActionValue),
      workerSagaToTest: addRoleToMemberWorker,
    });

  });

  /*
   *
   * OrganizationsApi.createOrganization
   * OrganizationsApiActions.createOrganization
   *
   */

  describe('createOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(createOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      createOrganizationWatcher,
      createOrganizationWorker,
      CREATE_ORGANIZATION,
    );
  });

  describe('createOrganizationWorker', () => {

    const mockActionValue = {
      id: randomUUID(),
    };

    testShouldBeGeneratorFunction(createOrganizationWorker);
    testShouldFailOnInvalidAction(createOrganizationWorker, CREATE_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.createOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createOrganization,
      workerSagaAction: createOrganization(mockActionValue),
      workerSagaToTest: createOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.createOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createOrganization,
      workerSagaAction: createOrganization(mockActionValue),
      workerSagaToTest: createOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.createRole
   * OrganizationsApiActions.createRole
   *
   */

  describe('createRoleWatcher', () => {
    testShouldBeGeneratorFunction(createRoleWatcher);
    testWatcherSagaShouldTakeEvery(
      createRoleWatcher,
      createRoleWorker,
      CREATE_ROLE,
    );
  });

  describe('createRoleWorker', () => {

    const mockActionValue = {
      id: randomUUID(),
    };

    testShouldBeGeneratorFunction(createRoleWorker);
    testShouldFailOnInvalidAction(createRoleWorker, CREATE_ROLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.createRole,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createRole,
      workerSagaAction: createRole(mockActionValue),
      workerSagaToTest: createRoleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.createRole,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createRole,
      workerSagaAction: createRole(mockActionValue),
      workerSagaToTest: createRoleWorker,
    });

  });

  /*
   *
   * OrganizationsApi.deleteOrganization
   * OrganizationsApiActions.deleteOrganization
   *
   */

  describe('deleteOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(deleteOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteOrganizationWatcher,
      deleteOrganizationWorker,
      DELETE_ORGANIZATION,
    );
  });

  describe('deleteOrganizationWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(deleteOrganizationWorker);
    testShouldFailOnInvalidAction(deleteOrganizationWorker, DELETE_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.deleteOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteOrganization,
      workerSagaAction: deleteOrganization(mockActionValue),
      workerSagaToTest: deleteOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.deleteOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteOrganization,
      workerSagaAction: deleteOrganization(mockActionValue),
      workerSagaToTest: deleteOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.deleteRole
   * OrganizationsApiActions.deleteRole
   *
   */

  describe('deleteRoleWatcher', () => {
    testShouldBeGeneratorFunction(deleteRoleWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteRoleWatcher,
      deleteRoleWorker,
      DELETE_ROLE,
    );
  });

  describe('deleteRoleWorker', () => {

    const mockActionValue = {
      organizationId: randomUUID(),
      roleId: randomUUID(),
    };

    testShouldBeGeneratorFunction(deleteRoleWorker);
    testShouldFailOnInvalidAction(deleteRoleWorker, DELETE_ROLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.deleteRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: deleteRole,
      workerSagaAction: deleteRole(mockActionValue),
      workerSagaToTest: deleteRoleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.deleteRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: deleteRole,
      workerSagaAction: deleteRole(mockActionValue),
      workerSagaToTest: deleteRoleWorker,
    });

  });

  /*
   *
   * OrganizationsApi.getAllOrganizations
   * OrganizationsApiActions.getAllOrganizations
   *
   */

  describe('getAllOrganizationsWatcher', () => {
    testShouldBeGeneratorFunction(getAllOrganizationsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllOrganizationsWatcher,
      getAllOrganizationsWorker,
      GET_ALL_ORGANIZATIONS,
    );
  });

  describe('getAllOrganizationsWorker', () => {

    testShouldBeGeneratorFunction(getAllOrganizationsWorker);
    testShouldFailOnInvalidAction(getAllOrganizationsWorker, GET_ALL_ORGANIZATIONS, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getAllOrganizations,
      latticeApiParams: [],
      latticeApiReqSeq: getAllOrganizations,
      workerSagaAction: getAllOrganizations(),
      workerSagaToTest: getAllOrganizationsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getAllOrganizations,
      latticeApiParams: [],
      latticeApiReqSeq: getAllOrganizations,
      workerSagaAction: getAllOrganizations(),
      workerSagaToTest: getAllOrganizationsWorker,
    });

  });

  /*
   *
   * OrganizationsApi.getAllUsersOfRole
   * OrganizationsApiActions.getAllUsersOfRole
   *
   */

  describe('getAllUsersOfRoleWatcher', () => {
    testShouldBeGeneratorFunction(getAllUsersOfRoleWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllUsersOfRoleWatcher,
      getAllUsersOfRoleWorker,
      GET_ALL_USERS_OF_ROLE,
    );
  });

  describe('getAllUsersOfRoleWorker', () => {

    const mockActionValue = {
      organizationId: randomUUID(),
      roleId: randomUUID(),
    };

    testShouldBeGeneratorFunction(getAllUsersOfRoleWorker);
    testShouldFailOnInvalidAction(getAllUsersOfRoleWorker, GET_ALL_USERS_OF_ROLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getAllUsersOfRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: getAllUsersOfRole,
      workerSagaAction: getAllUsersOfRole(mockActionValue),
      workerSagaToTest: getAllUsersOfRoleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getAllUsersOfRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: getAllUsersOfRole,
      workerSagaAction: getAllUsersOfRole(mockActionValue),
      workerSagaToTest: getAllUsersOfRoleWorker,
    });

  });

  /*
   *
   * OrganizationsApi.getOrganization
   * OrganizationsApiActions.getOrganization
   *
   */

  describe('getOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationWatcher,
      getOrganizationWorker,
      GET_ORGANIZATION,
    );
  });

  describe('getOrganizationWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getOrganizationWorker);
    testShouldFailOnInvalidAction(getOrganizationWorker, GET_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganization,
      workerSagaAction: getOrganization(mockActionValue),
      workerSagaToTest: getOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganization,
      workerSagaAction: getOrganization(mockActionValue),
      workerSagaToTest: getOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.getOrganizationEntitySets
   * OrganizationsApiActions.getOrganizationEntitySets
   *
   */

  describe('getOrganizationEntitySetsWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationEntitySetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationEntitySetsWatcher,
      getOrganizationEntitySetsWorker,
      GET_ORG_ENTITY_SETS,
    );
  });

  describe('getOrganizationEntitySetsWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getOrganizationEntitySetsWorker);
    testShouldFailOnInvalidAction(getOrganizationEntitySetsWorker, GET_ORG_ENTITY_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getOrganizationEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationEntitySets,
      workerSagaAction: getOrganizationEntitySets(mockActionValue),
      workerSagaToTest: getOrganizationEntitySetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganizationEntitySets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationEntitySets,
      workerSagaAction: getOrganizationEntitySets(mockActionValue),
      workerSagaToTest: getOrganizationEntitySetsWorker,
    });

  });

  /*
   *
   * OrganizationsApi.getOrganizationIntegrationAccount
   * OrganizationsApiActions.getOrganizationIntegrationAccount
   *
   */

  describe('getOrganizationIntegrationAccountWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationIntegrationAccountWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationIntegrationAccountWatcher,
      getOrganizationIntegrationAccountWorker,
      GET_ORG_INTEGRATION_ACCOUNT,
    );
  });

  describe('getOrganizationIntegrationAccountWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getOrganizationIntegrationAccountWorker);
    testShouldFailOnInvalidAction(getOrganizationIntegrationAccountWorker, GET_ORG_INTEGRATION_ACCOUNT);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getOrganizationIntegrationAccount,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationIntegrationAccount,
      workerSagaAction: getOrganizationIntegrationAccount(mockActionValue),
      workerSagaToTest: getOrganizationIntegrationAccountWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganizationIntegrationAccount,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationIntegrationAccount,
      workerSagaAction: getOrganizationIntegrationAccount(mockActionValue),
      workerSagaToTest: getOrganizationIntegrationAccountWorker,
    });

  });

  /*
   *
   * OrganizationsApi.getAllMembers
   * OrganizationsApiActions.getOrganizationMembers
   *
   */

  describe('getOrganizationMembersWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationMembersWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationMembersWatcher,
      getOrganizationMembersWorker,
      GET_ORG_MEMBERS,
    );
  });

  describe('getOrganizationMembersWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getOrganizationMembersWorker);
    testShouldFailOnInvalidAction(getOrganizationMembersWorker, GET_ORG_MEMBERS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getAllMembers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationMembers,
      workerSagaAction: getOrganizationMembers(mockActionValue),
      workerSagaToTest: getOrganizationMembersWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getAllMembers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationMembers,
      workerSagaAction: getOrganizationMembers(mockActionValue),
      workerSagaToTest: getOrganizationMembersWorker,
    });

  });

  /*
   *
   * OrganizationsApi.grantTrustToOrganization
   * OrganizationsApiActions.grantTrustToOrganization
   *
   */

  describe('grantTrustToOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(grantTrustToOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      grantTrustToOrganizationWatcher,
      grantTrustToOrganizationWorker,
      GRANT_TRUST_TO_ORG,
    );
  });

  describe('grantTrustToOrganizationWorker', () => {

    const mockActionValue = {
      organizationId: randomUUID(),
      principalId: randomUUID(),
    };

    testShouldBeGeneratorFunction(grantTrustToOrganizationWorker);
    testShouldFailOnInvalidAction(grantTrustToOrganizationWorker, GRANT_TRUST_TO_ORG);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.grantTrustToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.principalId],
      latticeApiReqSeq: grantTrustToOrganization,
      workerSagaAction: grantTrustToOrganization(mockActionValue),
      workerSagaToTest: grantTrustToOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.grantTrustToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.principalId],
      latticeApiReqSeq: grantTrustToOrganization,
      workerSagaAction: grantTrustToOrganization(mockActionValue),
      workerSagaToTest: grantTrustToOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.removeAutoApprovedEmailDomain
   * OrganizationsApiActions.removeDomainFromOrganization
   *
   */

  describe('removeDomainFromOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(removeDomainFromOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      removeDomainFromOrganizationWatcher,
      removeDomainFromOrganizationWorker,
      REMOVE_DOMAIN_FROM_ORG,
    );
  });

  describe('removeDomainFromOrganizationWorker', () => {

    const mockActionValue = {
      domain: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(removeDomainFromOrganizationWorker);
    testShouldFailOnInvalidAction(removeDomainFromOrganizationWorker, REMOVE_DOMAIN_FROM_ORG);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.removeAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: removeDomainFromOrganization,
      workerSagaAction: removeDomainFromOrganization(mockActionValue),
      workerSagaToTest: removeDomainFromOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.removeAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: removeDomainFromOrganization,
      workerSagaAction: removeDomainFromOrganization(mockActionValue),
      workerSagaToTest: removeDomainFromOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.removeMemberFromOrganization
   * OrganizationsApiActions.removeMemberFromOrganization
   *
   */

  describe('removeMemberFromOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(removeMemberFromOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      removeMemberFromOrganizationWatcher,
      removeMemberFromOrganizationWorker,
      REMOVE_MEMBER_FROM_ORG,
    );
  });

  describe('removeMemberFromOrganizationWorker', () => {

    const mockActionValue = {
      memberId: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(removeMemberFromOrganizationWorker);
    testShouldFailOnInvalidAction(removeMemberFromOrganizationWorker, REMOVE_MEMBER_FROM_ORG);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.removeMemberFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.memberId],
      latticeApiReqSeq: removeMemberFromOrganization,
      workerSagaAction: removeMemberFromOrganization(mockActionValue),
      workerSagaToTest: removeMemberFromOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.removeMemberFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.memberId],
      latticeApiReqSeq: removeMemberFromOrganization,
      workerSagaAction: removeMemberFromOrganization(mockActionValue),
      workerSagaToTest: removeMemberFromOrganizationWorker,
    });

  });


  /*
   *
   * OrganizationsApi.removeRoleFromMember
   * OrganizationsApiActions.removeRoleFromMember
   *
   */

  describe('removeRoleFromMemberWatcher', () => {
    testShouldBeGeneratorFunction(removeRoleFromMemberWatcher);
    testWatcherSagaShouldTakeEvery(
      removeRoleFromMemberWatcher,
      removeRoleFromMemberWorker,
      REMOVE_ROLE_FROM_MEMBER,
    );
  });

  describe('removeRoleFromMemberWorker', () => {

    const mockActionValue = {
      memberId: randomUUID(),
      organizationId: randomUUID(),
      roleId: randomUUID(),
    };

    testShouldBeGeneratorFunction(removeRoleFromMemberWorker);
    testShouldFailOnInvalidAction(removeRoleFromMemberWorker, REMOVE_ROLE_FROM_MEMBER);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.removeRoleFromMember,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.memberId],
      latticeApiReqSeq: removeRoleFromMember,
      workerSagaAction: removeRoleFromMember(mockActionValue),
      workerSagaToTest: removeRoleFromMemberWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.removeRoleFromMember,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.memberId],
      latticeApiReqSeq: removeRoleFromMember,
      workerSagaAction: removeRoleFromMember(mockActionValue),
      workerSagaToTest: removeRoleFromMemberWorker,
    });

  });

  /*
   *
   * OrganizationsApi.revokeTrustFromOrganization
   * OrganizationsApiActions.revokeTrustFromOrganization
   *
   */

  describe('revokeTrustFromOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(revokeTrustFromOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      revokeTrustFromOrganizationWatcher,
      revokeTrustFromOrganizationWorker,
      REVOKE_TRUST_FROM_ORG,
    );
  });

  describe('revokeTrustFromOrganizationWorker', () => {

    const mockActionValue = {
      organizationId: randomUUID(),
      principalId: randomUUID(),
    };

    testShouldBeGeneratorFunction(revokeTrustFromOrganizationWorker);
    testShouldFailOnInvalidAction(revokeTrustFromOrganizationWorker, REVOKE_TRUST_FROM_ORG);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.revokeTrustFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.principalId],
      latticeApiReqSeq: revokeTrustFromOrganization,
      workerSagaAction: revokeTrustFromOrganization(mockActionValue),
      workerSagaToTest: revokeTrustFromOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.revokeTrustFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.principalId],
      latticeApiReqSeq: revokeTrustFromOrganization,
      workerSagaAction: revokeTrustFromOrganization(mockActionValue),
      workerSagaToTest: revokeTrustFromOrganizationWorker,
    });

  });

  /*
   *
   * OrganizationsApi.updateDescription
   * OrganizationsApiActions.updateOrganizationDescription
   *
   */

  describe('updateOrganizationDescriptionWatcher', () => {
    testShouldBeGeneratorFunction(updateOrganizationDescriptionWatcher);
    testWatcherSagaShouldTakeEvery(
      updateOrganizationDescriptionWatcher,
      updateOrganizationDescriptionWorker,
      UPDATE_ORG_DESCRIPTION,
    );
  });

  describe('updateOrganizationDescriptionWorker', () => {

    const mockActionValue = {
      description: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(updateOrganizationDescriptionWorker);
    testShouldFailOnInvalidAction(updateOrganizationDescriptionWorker, UPDATE_ORG_DESCRIPTION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateDescription,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.description],
      latticeApiReqSeq: updateOrganizationDescription,
      workerSagaAction: updateOrganizationDescription(mockActionValue),
      workerSagaToTest: updateOrganizationDescriptionWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateDescription,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.description],
      latticeApiReqSeq: updateOrganizationDescription,
      workerSagaAction: updateOrganizationDescription(mockActionValue),
      workerSagaToTest: updateOrganizationDescriptionWorker,
    });

  });

  /*
   *
   * OrganizationsApi.updateTitle
   * OrganizationsApiActions.updateOrganizationTitle
   *
   */

  describe('updateOrganizationTitleWatcher', () => {
    testShouldBeGeneratorFunction(updateOrganizationTitleWatcher);
    testWatcherSagaShouldTakeEvery(
      updateOrganizationTitleWatcher,
      updateOrganizationTitleWorker,
      UPDATE_ORG_TITLE,
    );
  });

  describe('updateOrganizationTitleWorker', () => {

    const mockActionValue = {
      organizationId: randomUUID(),
      title: randomUUID(),
    };

    testShouldBeGeneratorFunction(updateOrganizationTitleWorker);
    testShouldFailOnInvalidAction(updateOrganizationTitleWorker, UPDATE_ORG_TITLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateTitle,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.title],
      latticeApiReqSeq: updateOrganizationTitle,
      workerSagaAction: updateOrganizationTitle(mockActionValue),
      workerSagaToTest: updateOrganizationTitleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateTitle,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.title],
      latticeApiReqSeq: updateOrganizationTitle,
      workerSagaAction: updateOrganizationTitle(mockActionValue),
      workerSagaToTest: updateOrganizationTitleWorker,
    });

  });

});
