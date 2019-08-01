/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { OrganizationsApi } from 'lattice';

import {
  ADD_AUTO_APPROVED_DOMAIN,
  CREATE_ROLE,
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  REMOVE_AUTO_APPROVED_DOMAIN,
  addAutoApprovedDomain,
  createRole,
  getAllOrganizations,
  getOrganization,
  removeAutoApprovedDomain,
} from './OrganizationsApiActions';

import {
  addAutoApprovedDomainWatcher,
  addAutoApprovedDomainWorker,
  createRoleWatcher,
  createRoleWorker,
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
  removeAutoApprovedDomainWatcher,
  removeAutoApprovedDomainWorker,
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

});
