/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { OrganizationsApi } from 'lattice';

import {
  GET_ALL_ORGANIZATIONS,
  GET_ORGANIZATION,
  getAllOrganizations,
  getOrganization,
} from './OrganizationsApiActions';

import {
  getAllOrganizationsWatcher,
  getAllOrganizationsWorker,
  getOrganizationWatcher,
  getOrganizationWorker,
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
   * OrganizationsApi.getAllOrganizations
   * OrganizationsApiActions.getAllOrganizations
   *
   */

  describe('getAllOrganizationsWatcher', () => {
    testShouldBeGeneratorFunction(getAllOrganizationsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllOrganizationsWatcher,
      getAllOrganizationsWorker,
      GET_ALL_ORGANIZATIONS
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
      workerSagaToTest: getAllOrganizationsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getAllOrganizations,
      latticeApiParams: [],
      latticeApiReqSeq: getAllOrganizations,
      workerSagaAction: getAllOrganizations(),
      workerSagaToTest: getAllOrganizationsWorker
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
      GET_ORGANIZATION
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
      workerSagaToTest: getOrganizationWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: OrganizationsApi.getOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganization,
      workerSagaAction: getOrganization(mockActionValue),
      workerSagaToTest: getOrganizationWorker
    });

  });

});
