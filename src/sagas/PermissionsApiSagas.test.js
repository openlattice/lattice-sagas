/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { PermissionsApi } from 'lattice';

import {
  GET_ACL,
  UPDATE_ACL,
  UPDATE_ACLS,
  getAcl,
  updateAcl,
  updateAcls,
} from './PermissionsApiActions';

import {
  getAclWatcher,
  getAclWorker,
  updateAclWatcher,
  updateAclWorker,
  updateAclsWatcher,
  updateAclsWorker,
} from './PermissionsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('PermissionsApiSagas', () => {

  /*
   *
   * PermissionsApi.getAcl()
   * PermissionsApiActions.getAcl()
   *
   */

  describe('getAclWatcher', () => {
    testShouldBeGeneratorFunction(getAclWatcher);
    testWatcherSagaShouldTakeEvery(
      getAclWatcher,
      getAclWorker,
      GET_ACL,
    );
  });

  describe('getAclWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(getAclWorker);
    testShouldFailOnInvalidAction(getAclWorker, GET_ACL);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.getAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAcl,
      workerSagaAction: getAcl(mockActionValue),
      workerSagaToTest: getAclWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.getAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAcl,
      workerSagaAction: getAcl(mockActionValue),
      workerSagaToTest: getAclWorker
    });

  });

  /*
   *
   * PermissionsApi.updateAcl()
   * PermissionsApiActions.updateAcl()
   *
   */

  describe('updateAclWatcher', () => {
    testShouldBeGeneratorFunction(updateAclWatcher);
    testWatcherSagaShouldTakeEvery(
      updateAclWatcher,
      updateAclWorker,
      UPDATE_ACL,
    );
  });

  describe('updateAclWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(updateAclWorker);
    testShouldFailOnInvalidAction(updateAclWorker, UPDATE_ACL);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.updateAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcl,
      workerSagaAction: updateAcl(mockActionValue),
      workerSagaToTest: updateAclWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.updateAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcl,
      workerSagaAction: updateAcl(mockActionValue),
      workerSagaToTest: updateAclWorker
    });

  });

  /*
   *
   * PermissionsApi.updateAcls()
   * PermissionsApiActions.updateAcls()
   *
   */

  describe('updateAclsWatcher', () => {
    testShouldBeGeneratorFunction(updateAclsWatcher);
    testWatcherSagaShouldTakeEvery(
      updateAclsWatcher,
      updateAclsWorker,
      UPDATE_ACLS,
    );
  });

  describe('updateAclsWorker', () => {

    const mockActionValue = randomUUID();

    testShouldBeGeneratorFunction(updateAclsWorker);
    testShouldFailOnInvalidAction(updateAclsWorker, UPDATE_ACLS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.updateAcls,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcls,
      workerSagaAction: updateAcls(mockActionValue),
      workerSagaToTest: updateAclsWorker
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.updateAcls,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcls,
      workerSagaAction: updateAcls(mockActionValue),
      workerSagaToTest: updateAclsWorker
    });

  });

});
