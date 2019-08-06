/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { OrganizationsApi } from 'lattice';

import {
  ADD_AUTO_APPROVED_DOMAIN,
  ADD_MEMBER_TO_ORGANIZATION,
  CREATE_ROLE,
  DELETE_ORGANIZATION,
  DELETE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  GET_ORGANIZATION_MEMBERS,
  REMOVE_AUTO_APPROVED_DOMAIN,
  REMOVE_MEMBER_FROM_ORGANIZATION,
  addAutoApprovedDomain,
  addMemberToOrganization,
  createRole,
  deleteOrganization,
  deleteRole,
  getAllOrganizations,
  getOrganization,
  getOrganizationMembers,
  removeAutoApprovedDomain,
  removeMemberFromOrganization,
} from './OrganizationsApiActions';

import {
  addAutoApprovedDomainWatcher,
  addAutoApprovedDomainWorker,
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
  getOrganizationMembersWatcher,
  getOrganizationMembersWorker,
  removeAutoApprovedDomainWatcher,
  removeAutoApprovedDomainWorker,
  removeMemberFromOrganizationWatcher,
  removeMemberFromOrganizationWorker,
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
   * OrganizationsApiActions.addAutoApprovedDomain
   *
   */

  describe('addAutoApprovedDomainWatcher', () => {
    testShouldBeGeneratorFunction(addAutoApprovedDomainWatcher);
    testWatcherSagaShouldTakeEvery(
      addAutoApprovedDomainWatcher,
      addAutoApprovedDomainWorker,
      ADD_AUTO_APPROVED_DOMAIN,
    );
  });

  describe('addAutoApprovedDomainWorker', () => {

    const mockActionValue = {
      domain: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(addAutoApprovedDomainWorker);
    testShouldFailOnInvalidAction(addAutoApprovedDomainWorker, ADD_AUTO_APPROVED_DOMAIN);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.addAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: addAutoApprovedDomain,
      workerSagaAction: addAutoApprovedDomain(mockActionValue),
      workerSagaToTest: addAutoApprovedDomainWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.addAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: addAutoApprovedDomain,
      workerSagaAction: addAutoApprovedDomain(mockActionValue),
      workerSagaToTest: addAutoApprovedDomainWorker,
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
      ADD_MEMBER_TO_ORGANIZATION,
    );
  });

  describe('addMemberToOrganizationWorker', () => {

    const mockActionValue = {
      memberId: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(addMemberToOrganizationWorker);
    testShouldFailOnInvalidAction(addMemberToOrganizationWorker, ADD_MEMBER_TO_ORGANIZATION);

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
   * OrganizationsApi.getAllMembers
   * OrganizationsApiActions.getOrganizationMembers
   *
   */

  describe('getOrganizationMembersWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationMembersWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationMembersWatcher,
      getOrganizationMembersWorker,
      GET_ORGANIZATION_MEMBERS,
    );
  });

  describe('getOrganizationMembersWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getOrganizationMembersWorker);
    testShouldFailOnInvalidAction(getOrganizationMembersWorker, GET_ORGANIZATION_MEMBERS);

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
   * OrganizationsApi.removeAutoApprovedEmailDomain
   * OrganizationsApiActions.removeAutoApprovedDomain
   *
   */

  describe('removeAutoApprovedDomainWatcher', () => {
    testShouldBeGeneratorFunction(removeAutoApprovedDomainWatcher);
    testWatcherSagaShouldTakeEvery(
      removeAutoApprovedDomainWatcher,
      removeAutoApprovedDomainWorker,
      REMOVE_AUTO_APPROVED_DOMAIN,
    );
  });

  describe('removeAutoApprovedDomainWorker', () => {

    const mockActionValue = {
      domain: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(removeAutoApprovedDomainWorker);
    testShouldFailOnInvalidAction(removeAutoApprovedDomainWorker, REMOVE_AUTO_APPROVED_DOMAIN);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.removeAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: removeAutoApprovedDomain,
      workerSagaAction: removeAutoApprovedDomain(mockActionValue),
      workerSagaToTest: removeAutoApprovedDomainWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.removeAutoApprovedEmailDomain,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domain],
      latticeApiReqSeq: removeAutoApprovedDomain,
      workerSagaAction: removeAutoApprovedDomain(mockActionValue),
      workerSagaToTest: removeAutoApprovedDomainWorker,
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
      REMOVE_MEMBER_FROM_ORGANIZATION,
    );
  });

  describe('removeMemberFromOrganizationWorker', () => {

    const mockActionValue = {
      memberId: randomUUID(),
      organizationId: randomUUID(),
    };

    testShouldBeGeneratorFunction(removeMemberFromOrganizationWorker);
    testShouldFailOnInvalidAction(removeMemberFromOrganizationWorker, REMOVE_MEMBER_FROM_ORGANIZATION);

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

});
