/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { PrincipalsApi } from 'lattice';

import {
  GET_ALL_USERS,
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  SEARCH_ALL_USERS,
  getAllUsers,
  getCurrentRoles,
  getSecurablePrincipal,
  searchAllUsers,
} from './PrincipalsApiActions';

import {
  getAllUsersWatcher,
  getAllUsersWorker,
  getCurrentRolesWatcher,
  getCurrentRolesWorker,
  getSecurablePrincipalWatcher,
  getSecurablePrincipalWorker,
  searchAllUsersWatcher,
  searchAllUsersWorker,
} from './PrincipalsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('PrincipalsApiSagas', () => {

  /*
   *
   * PrincipalsApi.getAllUsers()
   * PrincipalsApiActions.getAllUsers()
   *
   */

  describe('getAllUsersWatcher', () => {
    testShouldBeGeneratorFunction(getAllUsersWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllUsersWatcher,
      getAllUsersWorker,
      GET_ALL_USERS,
    );
  });

  describe('getAllUsersWorker', () => {

    testShouldBeGeneratorFunction(getAllUsersWorker);
    testShouldFailOnInvalidAction(getAllUsersWorker, GET_ALL_USERS, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getAllUsers,
      latticeApiParams: [],
      latticeApiReqSeq: getAllUsers,
      workerSagaAction: getAllUsers(),
      workerSagaToTest: getAllUsersWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getAllUsers,
      latticeApiParams: [],
      latticeApiReqSeq: getAllUsers,
      workerSagaAction: getAllUsers(),
      workerSagaToTest: getAllUsersWorker,
    });

  });

  /*
   *
   * PrincipalsApi.getCurrentRoles()
   * PrincipalsApiActions.getCurrentRoles()
   *
   */

  describe('getCurrentRolesWatcher', () => {
    testShouldBeGeneratorFunction(getCurrentRolesWatcher);
    testWatcherSagaShouldTakeEvery(
      getCurrentRolesWatcher,
      getCurrentRolesWorker,
      GET_CURRENT_ROLES,
    );
  });

  describe('getCurrentRolesWorker', () => {

    testShouldBeGeneratorFunction(getCurrentRolesWorker);
    testShouldFailOnInvalidAction(getCurrentRolesWorker, GET_CURRENT_ROLES, false);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getCurrentRoles,
      latticeApiParams: [],
      latticeApiReqSeq: getCurrentRoles,
      workerSagaAction: getCurrentRoles(),
      workerSagaToTest: getCurrentRolesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getCurrentRoles,
      latticeApiParams: [],
      latticeApiReqSeq: getCurrentRoles,
      workerSagaAction: getCurrentRoles(),
      workerSagaToTest: getCurrentRolesWorker,
    });

  });

  /*
   *
   * PrincipalsApi.getSecurablePrincipal()
   * PrincipalsApiActions.getSecurablePrincipal()
   *
   */

  describe('getSecurablePrincipalWatcher', () => {
    testShouldBeGeneratorFunction(getSecurablePrincipalWatcher);
    testWatcherSagaShouldTakeEvery(
      getSecurablePrincipalWatcher,
      getSecurablePrincipalWorker,
      GET_SECURABLE_PRINCIPAL,
    );
  });

  describe('getSecurablePrincipalWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getSecurablePrincipalWorker);
    testShouldFailOnInvalidAction(getSecurablePrincipalWorker, GET_SECURABLE_PRINCIPAL);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getSecurablePrincipal,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getSecurablePrincipal,
      workerSagaAction: getSecurablePrincipal(mockActionValue),
      workerSagaToTest: getSecurablePrincipalWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getSecurablePrincipal,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getSecurablePrincipal,
      workerSagaAction: getSecurablePrincipal(mockActionValue),
      workerSagaToTest: getSecurablePrincipalWorker,
    });

  });

  /*
   *
   * PrincipalsApi.searchAllUsers
   * PrincipalsApiActions.searchAllUsers
   *
   */

  describe('searchAllUsersWatcher', () => {
    testShouldBeGeneratorFunction(searchAllUsersWatcher);
    testWatcherSagaShouldTakeEvery(
      searchAllUsersWatcher,
      searchAllUsersWorker,
      SEARCH_ALL_USERS,
    );
  });

  describe('searchAllUsersWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(searchAllUsersWorker);
    testShouldFailOnInvalidAction(searchAllUsersWorker, SEARCH_ALL_USERS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.searchAllUsers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchAllUsers,
      workerSagaAction: searchAllUsers(mockActionValue),
      workerSagaToTest: searchAllUsersWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.searchAllUsers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: searchAllUsers,
      workerSagaAction: searchAllUsers(mockActionValue),
      workerSagaToTest: searchAllUsersWorker,
    });

  });

});
