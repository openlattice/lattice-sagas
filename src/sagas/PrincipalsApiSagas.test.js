/*
 * @flow
 */

import { PrincipalsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_ALL_ROLES,
  GET_ALL_USERS,
  GET_ATLAS_CREDENTIALS,
  GET_CURRENT_ROLES,
  GET_SECURABLE_PRINCIPAL,
  GET_USER,
  GET_USERS,
  SEARCH_ALL_USERS,
  SYNC_USER,
  getAllRoles,
  getAllUsers,
  getAtlasCredentials,
  getCurrentRoles,
  getSecurablePrincipal,
  getUser,
  getUsers,
  searchAllUsers,
  syncUser,
} from './PrincipalsApiActions';
import {
  getAllRolesWatcher,
  getAllRolesWorker,
  getAllUsersWatcher,
  getAllUsersWorker,
  getAtlasCredentialsWatcher,
  getAtlasCredentialsWorker,
  getCurrentRolesWatcher,
  getCurrentRolesWorker,
  getSecurablePrincipalWatcher,
  getSecurablePrincipalWorker,
  getUserWatcher,
  getUserWorker,
  getUsersWatcher,
  getUsersWorker,
  searchAllUsersWatcher,
  searchAllUsersWorker,
  syncUserWatcher,
  syncUserWorker,
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
   * PrincipalsApi.getAllRoles
   * PrincipalsApiActions.getAllRoles
   *
   */

  describe('getAllRolesWatcher', () => {
    testShouldBeGeneratorFunction(getAllRolesWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllRolesWatcher,
      getAllRolesWorker,
      GET_ALL_ROLES,
    );
  });

  describe('getAllRolesWorker', () => {

    testShouldBeGeneratorFunction(getAllRolesWorker);
    testShouldFailOnInvalidAction(getAllRolesWorker, GET_ALL_ROLES);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getAllRoles,
      latticeApiParams: [],
      latticeApiReqSeq: getAllRoles,
      workerSagaAction: getAllRoles(),
      workerSagaToTest: getAllRolesWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getAllRoles,
      latticeApiParams: [],
      latticeApiReqSeq: getAllRoles,
      workerSagaAction: getAllRoles(),
      workerSagaToTest: getAllRolesWorker,
    });
  });

  /*
   *
   * PrincipalsApi.getAllUsers
   * PrincipalsApiActions.getAllUsers
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
    testShouldFailOnInvalidAction(getAllUsersWorker, GET_ALL_USERS);

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
   * PrincipalsApi.getAtlasCredentials
   * PrincipalsApiActions.getAtlasCredentials
   *
   */

  describe('getAtlasCredentialsWatcher', () => {
    testShouldBeGeneratorFunction(getAtlasCredentialsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAtlasCredentialsWatcher,
      getAtlasCredentialsWorker,
      GET_ATLAS_CREDENTIALS,
    );
  });

  describe('getAtlasCredentialsWorker', () => {

    testShouldBeGeneratorFunction(getAtlasCredentialsWorker);
    testShouldFailOnInvalidAction(getAtlasCredentialsWorker, GET_ATLAS_CREDENTIALS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getAtlasCredentials,
      latticeApiParams: [],
      latticeApiReqSeq: getAtlasCredentials,
      workerSagaAction: getAtlasCredentials(),
      workerSagaToTest: getAtlasCredentialsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getAtlasCredentials,
      latticeApiParams: [],
      latticeApiReqSeq: getAtlasCredentials,
      workerSagaAction: getAtlasCredentials(),
      workerSagaToTest: getAtlasCredentialsWorker,
    });
  });

  /*
   *
   * PrincipalsApi.getCurrentRoles
   * PrincipalsApiActions.getCurrentRoles
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
    testShouldFailOnInvalidAction(getCurrentRolesWorker, GET_CURRENT_ROLES);

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
   * PrincipalsApi.getSecurablePrincipal
   * PrincipalsApiActions.getSecurablePrincipal
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

    const mockActionValue = uuid();

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
   * PrincipalsApi.getUser
   * PrincipalsApiActions.getUser
   *
   */

  describe('getUserWatcher', () => {
    testShouldBeGeneratorFunction(getUserWatcher);
    testWatcherSagaShouldTakeEvery(
      getUserWatcher,
      getUserWorker,
      GET_USER,
    );
  });

  describe('getUserWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getUserWorker);
    testShouldFailOnInvalidAction(getUserWorker, GET_USER);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getUser,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getUser,
      workerSagaAction: getUser(mockActionValue),
      workerSagaToTest: getUserWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getUser,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getUser,
      workerSagaAction: getUser(mockActionValue),
      workerSagaToTest: getUserWorker,
    });
  });

  /*
   *
   * PrincipalsApi.getUsers
   * PrincipalsApiActions.getUsers
   *
   */

  describe('getUsersWatcher', () => {
    testShouldBeGeneratorFunction(getUsersWatcher);
    testWatcherSagaShouldTakeEvery(
      getUsersWatcher,
      getUsersWorker,
      GET_USERS,
    );
  });

  describe('getUsersWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getUsersWorker);
    testShouldFailOnInvalidAction(getUsersWorker, GET_USERS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.getUsers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getUsers,
      workerSagaAction: getUsers(mockActionValue),
      workerSagaToTest: getUsersWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.getUsers,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getUsers,
      workerSagaAction: getUsers(mockActionValue),
      workerSagaToTest: getUsersWorker,
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

    const mockActionValue = uuid();

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

  /*
   *
   * PrincipalsApi.syncUser
   * PrincipalsApiActions.syncUser
   *
   */

  describe('syncUserWatcher', () => {
    testShouldBeGeneratorFunction(syncUserWatcher);
    testWatcherSagaShouldTakeEvery(
      syncUserWatcher,
      syncUserWorker,
      SYNC_USER,
    );
  });

  describe('syncUserWorker', () => {

    testShouldBeGeneratorFunction(syncUserWorker);
    testShouldFailOnInvalidAction(syncUserWorker, SYNC_USER);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PrincipalsApi.syncUser,
      latticeApiParams: [],
      latticeApiReqSeq: syncUser,
      workerSagaAction: syncUser(),
      workerSagaToTest: syncUserWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PrincipalsApi.syncUser,
      latticeApiParams: [],
      latticeApiReqSeq: syncUser,
      workerSagaAction: syncUser(),
      workerSagaToTest: syncUserWorker,
    });
  });

});
