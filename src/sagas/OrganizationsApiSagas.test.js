/*
 * @flow
 */

import { OrganizationsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

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
import {
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
   * OrganizationsApi.addConnectionsToOrganization
   * OrganizationsApiActions.addConnectionsToOrganization
   *
   */

  describe('addConnectionsToOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(addConnectionsToOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      addConnectionsToOrganizationWatcher,
      addConnectionsToOrganizationWorker,
      ADD_CONNECTIONS_TO_ORGANIZATION,
    );
  });

  describe('addConnectionsToOrganizationWorker', () => {

    const mockActionValue = {
      connections: [uuid()],
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(addConnectionsToOrganizationWorker);
    testShouldFailOnInvalidAction(addConnectionsToOrganizationWorker, ADD_CONNECTIONS_TO_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.addConnectionsToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.connections],
      latticeApiReqSeq: addConnectionsToOrganization,
      workerSagaAction: addConnectionsToOrganization(mockActionValue),
      workerSagaToTest: addConnectionsToOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.addConnectionsToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.connections],
      latticeApiReqSeq: addConnectionsToOrganization,
      workerSagaAction: addConnectionsToOrganization(mockActionValue),
      workerSagaToTest: addConnectionsToOrganizationWorker,
    });
  });

  /*
   *
   * OrganizationsApi.addDomainsToOrganization
   * OrganizationsApiActions.addDomainsToOrganization
   *
   */

  describe('addDomainsToOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(addDomainsToOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      addDomainsToOrganizationWatcher,
      addDomainsToOrganizationWorker,
      ADD_DOMAINS_TO_ORGANIZATION,
    );
  });

  describe('addDomainsToOrganizationWorker', () => {

    const mockActionValue = {
      domains: [uuid()],
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(addDomainsToOrganizationWorker);
    testShouldFailOnInvalidAction(addDomainsToOrganizationWorker, ADD_DOMAINS_TO_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.addDomainsToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domains],
      latticeApiReqSeq: addDomainsToOrganization,
      workerSagaAction: addDomainsToOrganization(mockActionValue),
      workerSagaToTest: addDomainsToOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.addDomainsToOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domains],
      latticeApiReqSeq: addDomainsToOrganization,
      workerSagaAction: addDomainsToOrganization(mockActionValue),
      workerSagaToTest: addDomainsToOrganizationWorker,
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
      memberId: uuid(),
      organizationId: uuid(),
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
      memberId: uuid(),
      organizationId: uuid(),
      roleId: uuid(),
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
      id: uuid(),
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
      id: uuid(),
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

    const mockActionValue = uuid();

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
      organizationId: uuid(),
      roleId: uuid(),
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
   * OrganizationsApi.destroyTransportedOrganizationEntitySet
   * OrganizationsApiActions.destroyTransportedOrganizationEntitySet
   *
   */

  describe('destroyTransportedOrganizationEntitySetWatcher', () => {
    testShouldBeGeneratorFunction(destroyTransportedOrganizationEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      destroyTransportedOrganizationEntitySetWatcher,
      destroyTransportedOrganizationEntitySetWorker,
      DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET,
    );
  });

  describe('destroyTransportedOrganizationEntitySetWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(destroyTransportedOrganizationEntitySetWorker);
    testShouldFailOnInvalidAction(
      destroyTransportedOrganizationEntitySetWorker,
      DESTROY_TRANSPORTED_ORGANIZATION_ENTITY_SET,
    );

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.destroyTransportedOrganizationEntitySet,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.entitySetId],
      latticeApiReqSeq: destroyTransportedOrganizationEntitySet,
      workerSagaAction: destroyTransportedOrganizationEntitySet(mockActionValue),
      workerSagaToTest: destroyTransportedOrganizationEntitySetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.destroyTransportedOrganizationEntitySet,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.entitySetId],
      latticeApiReqSeq: destroyTransportedOrganizationEntitySet,
      workerSagaAction: destroyTransportedOrganizationEntitySet(mockActionValue),
      workerSagaToTest: destroyTransportedOrganizationEntitySetWorker,
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
    testShouldFailOnInvalidAction(getAllOrganizationsWorker, GET_ALL_ORGANIZATIONS);

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

    const mockActionValue = uuid();

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
   * OrganizationsApi.getOrganizationDatabaseName
   * OrganizationsApiActions.getOrganizationDatabaseName
   *
   */

  describe('getOrganizationDatabaseNameWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationDatabaseNameWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationDatabaseNameWatcher,
      getOrganizationDatabaseNameWorker,
      GET_ORGANIZATION_DATABASE_NAME,
    );
  });

  describe('getOrganizationDatabaseNameWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationDatabaseNameWorker);
    testShouldFailOnInvalidAction(getOrganizationDatabaseNameWorker, GET_ORGANIZATION_DATABASE_NAME);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getOrganizationDatabaseName,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationDatabaseName,
      workerSagaAction: getOrganizationDatabaseName(mockActionValue),
      workerSagaToTest: getOrganizationDatabaseNameWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganizationDatabaseName,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationDatabaseName,
      workerSagaAction: getOrganizationDatabaseName(mockActionValue),
      workerSagaToTest: getOrganizationDatabaseNameWorker,
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
      GET_ORGANIZATION_ENTITY_SETS,
    );
  });

  describe('getOrganizationEntitySetsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationEntitySetsWorker);
    testShouldFailOnInvalidAction(getOrganizationEntitySetsWorker, GET_ORGANIZATION_ENTITY_SETS);

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
      GET_ORGANIZATION_INTEGRATION_ACCOUNT,
    );
  });

  describe('getOrganizationIntegrationAccountWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationIntegrationAccountWorker);
    testShouldFailOnInvalidAction(getOrganizationIntegrationAccountWorker, GET_ORGANIZATION_INTEGRATION_ACCOUNT);

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
   * OrganizationsApi.getOrganizationMembers
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

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationMembersWorker);
    testShouldFailOnInvalidAction(getOrganizationMembersWorker, GET_ORGANIZATION_MEMBERS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getOrganizationMembers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationMembers,
      workerSagaAction: getOrganizationMembers(mockActionValue),
      workerSagaToTest: getOrganizationMembersWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganizationMembers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationMembers,
      workerSagaAction: getOrganizationMembers(mockActionValue),
      workerSagaToTest: getOrganizationMembersWorker,
    });
  });

  /*
   *
   * OrganizationsApi.getOrganizationRoles
   * OrganizationsApiActions.getOrganizationRoles
   *
   */

  describe('getOrganizationRolesWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationRolesWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationRolesWatcher,
      getOrganizationRolesWorker,
      GET_ORGANIZATION_ROLES,
    );
  });

  describe('getOrganizationRolesWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationRolesWorker);
    testShouldFailOnInvalidAction(getOrganizationRolesWorker, GET_ORGANIZATION_ROLES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getOrganizationRoles,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationRoles,
      workerSagaAction: getOrganizationRoles(mockActionValue),
      workerSagaToTest: getOrganizationRolesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganizationRoles,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationRoles,
      workerSagaAction: getOrganizationRoles(mockActionValue),
      workerSagaToTest: getOrganizationRolesWorker,
    });
  });

  /*
   *
   * OrganizationsApi.getRole
   * OrganizationsApiActions.getRole
   *
   */

  describe('getRoleWatcher', () => {
    testShouldBeGeneratorFunction(getRoleWatcher);
    testWatcherSagaShouldTakeEvery(
      getRoleWatcher,
      getRoleWorker,
      GET_ROLE,
    );
  });

  describe('getRoleWorker', () => {

    const mockActionValue = {
      organizationId: uuid(),
      roleId: uuid(),
    };

    testShouldBeGeneratorFunction(getRoleWorker);
    testShouldFailOnInvalidAction(getRoleWorker, GET_ROLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: getRole,
      workerSagaAction: getRole(mockActionValue),
      workerSagaToTest: getRoleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: getRole,
      workerSagaAction: getRole(mockActionValue),
      workerSagaToTest: getRoleWorker,
    });
  });

  /*
   *
   * OrganizationsApi.getUsersWithRole
   * OrganizationsApiActions.getUsersWithRole
   *
   */

  describe('getUsersWithRoleWatcher', () => {
    testShouldBeGeneratorFunction(getUsersWithRoleWatcher);
    testWatcherSagaShouldTakeEvery(
      getUsersWithRoleWatcher,
      getUsersWithRoleWorker,
      GET_USERS_WITH_ROLE,
    );
  });

  describe('getUsersWithRoleWorker', () => {

    const mockActionValue = {
      organizationId: uuid(),
      roleId: uuid(),
    };

    testShouldBeGeneratorFunction(getUsersWithRoleWorker);
    testShouldFailOnInvalidAction(getUsersWithRoleWorker, GET_USERS_WITH_ROLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.getUsersWithRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: getUsersWithRole,
      workerSagaAction: getUsersWithRole(mockActionValue),
      workerSagaToTest: getUsersWithRoleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getUsersWithRole,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId],
      latticeApiReqSeq: getUsersWithRole,
      workerSagaAction: getUsersWithRole(mockActionValue),
      workerSagaToTest: getUsersWithRoleWorker,
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
      GRANT_TRUST_TO_ORGANIZATION,
    );
  });

  describe('grantTrustToOrganizationWorker', () => {

    const mockActionValue = {
      organizationId: uuid(),
      principalId: uuid(),
    };

    testShouldBeGeneratorFunction(grantTrustToOrganizationWorker);
    testShouldFailOnInvalidAction(grantTrustToOrganizationWorker, GRANT_TRUST_TO_ORGANIZATION);

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
   * OrganizationsApi.removeConnectionsFromOrganization
   * OrganizationsApiActions.removeConnectionsFromOrganization
   *
   */

  describe('removeConnectionsFromOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(removeConnectionsFromOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      removeConnectionsFromOrganizationWatcher,
      removeConnectionsFromOrganizationWorker,
      REMOVE_CONNECTIONS_FROM_ORGANIZATION,
    );
  });

  describe('removeConnectionsFromOrganizationWorker', () => {

    const mockActionValue = {
      connections: [uuid()],
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(removeConnectionsFromOrganizationWorker);
    testShouldFailOnInvalidAction(removeConnectionsFromOrganizationWorker, REMOVE_CONNECTIONS_FROM_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.removeConnectionsFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.connections],
      latticeApiReqSeq: removeConnectionsFromOrganization,
      workerSagaAction: removeConnectionsFromOrganization(mockActionValue),
      workerSagaToTest: removeConnectionsFromOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.removeConnectionsFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.connections],
      latticeApiReqSeq: removeConnectionsFromOrganization,
      workerSagaAction: removeConnectionsFromOrganization(mockActionValue),
      workerSagaToTest: removeConnectionsFromOrganizationWorker,
    });
  });

  /*
   *
   * OrganizationsApi.removeDomainsFromOrganization
   * OrganizationsApiActions.removeDomainsFromOrganization
   *
   */

  describe('removeDomainsFromOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(removeDomainsFromOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      removeDomainsFromOrganizationWatcher,
      removeDomainsFromOrganizationWorker,
      REMOVE_DOMAINS_FROM_ORGANIZATION,
    );
  });

  describe('removeDomainsFromOrganizationWorker', () => {

    const mockActionValue = {
      domains: [uuid()],
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(removeDomainsFromOrganizationWorker);
    testShouldFailOnInvalidAction(removeDomainsFromOrganizationWorker, REMOVE_DOMAINS_FROM_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.removeDomainsFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domains],
      latticeApiReqSeq: removeDomainsFromOrganization,
      workerSagaAction: removeDomainsFromOrganization(mockActionValue),
      workerSagaToTest: removeDomainsFromOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.removeDomainsFromOrganization,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.domains],
      latticeApiReqSeq: removeDomainsFromOrganization,
      workerSagaAction: removeDomainsFromOrganization(mockActionValue),
      workerSagaToTest: removeDomainsFromOrganizationWorker,
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
      memberId: uuid(),
      organizationId: uuid(),
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
      memberId: uuid(),
      organizationId: uuid(),
      roleId: uuid(),
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
   * OrganizationsApi.renameOrganizationDatabase
   * OrganizationsApiActions.renameOrganizationDatabase
   *
   */

  describe('renameOrganizationDatabaseWatcher', () => {
    testShouldBeGeneratorFunction(renameOrganizationDatabaseWatcher);
    testWatcherSagaShouldTakeEvery(
      renameOrganizationDatabaseWatcher,
      renameOrganizationDatabaseWorker,
      RENAME_ORGANIZATION_DATABASE,
    );
  });

  describe('renameOrganizationDatabaseWorker', () => {

    const mockActionValue = {
      databaseName: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(renameOrganizationDatabaseWorker);
    testShouldFailOnInvalidAction(renameOrganizationDatabaseWorker, RENAME_ORGANIZATION_DATABASE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.renameOrganizationDatabase,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.databaseName],
      latticeApiReqSeq: renameOrganizationDatabase,
      workerSagaAction: renameOrganizationDatabase(mockActionValue),
      workerSagaToTest: renameOrganizationDatabaseWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.renameOrganizationDatabase,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.databaseName],
      latticeApiReqSeq: renameOrganizationDatabase,
      workerSagaAction: renameOrganizationDatabase(mockActionValue),
      workerSagaToTest: renameOrganizationDatabaseWorker,
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
      REVOKE_TRUST_FROM_ORGANIZATION,
    );
  });

  describe('revokeTrustFromOrganizationWorker', () => {

    const mockActionValue = {
      organizationId: uuid(),
      principalId: uuid(),
    };

    testShouldBeGeneratorFunction(revokeTrustFromOrganizationWorker);
    testShouldFailOnInvalidAction(revokeTrustFromOrganizationWorker, REVOKE_TRUST_FROM_ORGANIZATION);

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
   * OrganizationsApi.transportOrganizationEntitySet
   * OrganizationsApiActions.transportOrganizationEntitySet
   *
   */

  describe('transportOrganizationEntitySetWatcher', () => {
    testShouldBeGeneratorFunction(transportOrganizationEntitySetWatcher);
    testWatcherSagaShouldTakeEvery(
      transportOrganizationEntitySetWatcher,
      transportOrganizationEntitySetWorker,
      TRANSPORT_ORGANIZATION_ENTITY_SET,
    );
  });

  describe('transportOrganizationEntitySetWorker', () => {

    const mockActionValue = {
      entitySetId: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(transportOrganizationEntitySetWorker);
    testShouldFailOnInvalidAction(transportOrganizationEntitySetWorker, TRANSPORT_ORGANIZATION_ENTITY_SET);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.transportOrganizationEntitySet,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.entitySetId],
      latticeApiReqSeq: transportOrganizationEntitySet,
      workerSagaAction: transportOrganizationEntitySet(mockActionValue),
      workerSagaToTest: transportOrganizationEntitySetWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.transportOrganizationEntitySet,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.entitySetId],
      latticeApiReqSeq: transportOrganizationEntitySet,
      workerSagaAction: transportOrganizationEntitySet(mockActionValue),
      workerSagaToTest: transportOrganizationEntitySetWorker,
    });
  });

  /*
   *
   * OrganizationsApi.updateOrganizationDescription
   * OrganizationsApiActions.updateOrganizationDescription
   *
   */

  describe('updateOrganizationDescriptionWatcher', () => {
    testShouldBeGeneratorFunction(updateOrganizationDescriptionWatcher);
    testWatcherSagaShouldTakeEvery(
      updateOrganizationDescriptionWatcher,
      updateOrganizationDescriptionWorker,
      UPDATE_ORGANIZATION_DESCRIPTION,
    );
  });

  describe('updateOrganizationDescriptionWorker', () => {

    const mockActionValue = {
      description: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(updateOrganizationDescriptionWorker);
    testShouldFailOnInvalidAction(updateOrganizationDescriptionWorker, UPDATE_ORGANIZATION_DESCRIPTION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateOrganizationDescription,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.description],
      latticeApiReqSeq: updateOrganizationDescription,
      workerSagaAction: updateOrganizationDescription(mockActionValue),
      workerSagaToTest: updateOrganizationDescriptionWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateOrganizationDescription,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.description],
      latticeApiReqSeq: updateOrganizationDescription,
      workerSagaAction: updateOrganizationDescription(mockActionValue),
      workerSagaToTest: updateOrganizationDescriptionWorker,
    });
  });

  /*
   *
   * OrganizationsApi.updateOrganizationTitle
   * OrganizationsApiActions.updateOrganizationTitle
   *
   */

  describe('updateOrganizationTitleWatcher', () => {
    testShouldBeGeneratorFunction(updateOrganizationTitleWatcher);
    testWatcherSagaShouldTakeEvery(
      updateOrganizationTitleWatcher,
      updateOrganizationTitleWorker,
      UPDATE_ORGANIZATION_TITLE,
    );
  });

  describe('updateOrganizationTitleWorker', () => {

    const mockActionValue = {
      organizationId: uuid(),
      title: uuid(),
    };

    testShouldBeGeneratorFunction(updateOrganizationTitleWorker);
    testShouldFailOnInvalidAction(updateOrganizationTitleWorker, UPDATE_ORGANIZATION_TITLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateOrganizationTitle,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.title],
      latticeApiReqSeq: updateOrganizationTitle,
      workerSagaAction: updateOrganizationTitle(mockActionValue),
      workerSagaToTest: updateOrganizationTitleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateOrganizationTitle,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.title],
      latticeApiReqSeq: updateOrganizationTitle,
      workerSagaAction: updateOrganizationTitle(mockActionValue),
      workerSagaToTest: updateOrganizationTitleWorker,
    });
  });

  /*
   *
   * OrganizationsApi.updateRoleDescription
   * OrganizationsApiActions.updateRoleDescription
   *
   */

  describe('updateRoleDescriptionWatcher', () => {
    testShouldBeGeneratorFunction(updateRoleDescriptionWatcher);
    testWatcherSagaShouldTakeEvery(
      updateRoleDescriptionWatcher,
      updateRoleDescriptionWorker,
      UPDATE_ROLE_DESCRIPTION,
    );
  });

  describe('updateRoleDescriptionWorker', () => {

    const mockActionValue = {
      description: uuid(),
      organizationId: uuid(),
      roleId: uuid(),
    };

    testShouldBeGeneratorFunction(updateRoleDescriptionWorker);
    testShouldFailOnInvalidAction(updateRoleDescriptionWorker, UPDATE_ROLE_DESCRIPTION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateRoleDescription,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.description],
      latticeApiReqSeq: updateRoleDescription,
      workerSagaAction: updateRoleDescription(mockActionValue),
      workerSagaToTest: updateRoleDescriptionWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateRoleDescription,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.description],
      latticeApiReqSeq: updateRoleDescription,
      workerSagaAction: updateRoleDescription(mockActionValue),
      workerSagaToTest: updateRoleDescriptionWorker,
    });
  });

  /*
   *
   * OrganizationsApi.updateRoleGrant
   * OrganizationsApiActions.updateRoleGrant
   *
   */

  describe('updateRoleGrantWatcher', () => {
    testShouldBeGeneratorFunction(updateRoleGrantWatcher);
    testWatcherSagaShouldTakeEvery(
      updateRoleGrantWatcher,
      updateRoleGrantWorker,
      UPDATE_ROLE_GRANT,
    );
  });

  describe('updateRoleGrantWorker', () => {

    const mockActionValue = {
      grant: uuid(),
      organizationId: uuid(),
      roleId: uuid(),
    };

    testShouldBeGeneratorFunction(updateRoleGrantWorker);
    testShouldFailOnInvalidAction(updateRoleGrantWorker, UPDATE_ROLE_GRANT);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateRoleGrant,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.grant],
      latticeApiReqSeq: updateRoleGrant,
      workerSagaAction: updateRoleGrant(mockActionValue),
      workerSagaToTest: updateRoleGrantWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateRoleGrant,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.grant],
      latticeApiReqSeq: updateRoleGrant,
      workerSagaAction: updateRoleGrant(mockActionValue),
      workerSagaToTest: updateRoleGrantWorker,
    });
  });

  /*
   *
   * OrganizationsApi.updateRoleTitle
   * OrganizationsApiActions.updateRoleTitle
   *
   */

  describe('updateRoleTitleWatcher', () => {
    testShouldBeGeneratorFunction(updateRoleTitleWatcher);
    testWatcherSagaShouldTakeEvery(
      updateRoleTitleWatcher,
      updateRoleTitleWorker,
      UPDATE_ROLE_TITLE,
    );
  });

  describe('updateRoleTitleWorker', () => {

    const mockActionValue = {
      organizationId: uuid(),
      roleId: uuid(),
      title: uuid(),
    };

    testShouldBeGeneratorFunction(updateRoleTitleWorker);
    testShouldFailOnInvalidAction(updateRoleTitleWorker, UPDATE_ROLE_TITLE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: OrganizationsApi.updateRoleTitle,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.title],
      latticeApiReqSeq: updateRoleTitle,
      workerSagaAction: updateRoleTitle(mockActionValue),
      workerSagaToTest: updateRoleTitleWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.updateRoleTitle,
      latticeApiParams: [mockActionValue.organizationId, mockActionValue.roleId, mockActionValue.title],
      latticeApiReqSeq: updateRoleTitle,
      workerSagaAction: updateRoleTitle(mockActionValue),
      workerSagaToTest: updateRoleTitleWorker,
    });
  });

});
