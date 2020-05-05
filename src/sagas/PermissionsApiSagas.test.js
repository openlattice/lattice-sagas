/*
 * @flow
 */

import { PermissionsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_ACL,
  GET_ACL_EXPLANATION,
  UPDATE_ACL,
  UPDATE_ACLS,
  getAcl,
  getAclExplanation,
  updateAcl,
  updateAcls,
} from './PermissionsApiActions';
import {
  getAclExplanationWatcher,
  getAclExplanationWorker,
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
   * PermissionsApi.getAcl
   * PermissionsApiActions.getAcl
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

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAclWorker);
    testShouldFailOnInvalidAction(getAclWorker, GET_ACL);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.getAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAcl,
      workerSagaAction: getAcl(mockActionValue),
      workerSagaToTest: getAclWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.getAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAcl,
      workerSagaAction: getAcl(mockActionValue),
      workerSagaToTest: getAclWorker,
    });
  });

  /*
   *
   * PermissionsApi.getAclExplanation
   * PermissionsApiActions.getAclExplanation
   *
   */

  describe('getAclExplanationWatcher', () => {
    testShouldBeGeneratorFunction(getAclExplanationWatcher);
    testWatcherSagaShouldTakeEvery(
      getAclExplanationWatcher,
      getAclExplanationWorker,
      GET_ACL_EXPLANATION,
    );
  });

  describe('getAclExplanationWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getAclExplanationWorker);
    testShouldFailOnInvalidAction(getAclExplanationWorker, GET_ACL_EXPLANATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.getAclExplanation,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAclExplanation,
      workerSagaAction: getAclExplanation(mockActionValue),
      workerSagaToTest: getAclExplanationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.getAclExplanation,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getAclExplanation,
      workerSagaAction: getAclExplanation(mockActionValue),
      workerSagaToTest: getAclExplanationWorker,
    });
  });

  /*
   *
   * PermissionsApi.updateAcl
   * PermissionsApiActions.updateAcl
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

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(updateAclWorker);
    testShouldFailOnInvalidAction(updateAclWorker, UPDATE_ACL);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.updateAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcl,
      workerSagaAction: updateAcl(mockActionValue),
      workerSagaToTest: updateAclWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.updateAcl,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcl,
      workerSagaAction: updateAcl(mockActionValue),
      workerSagaToTest: updateAclWorker,
    });
  });

  /*
   *
   * PermissionsApi.updateAcls
   * PermissionsApiActions.updateAcls
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

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(updateAclsWorker);
    testShouldFailOnInvalidAction(updateAclsWorker, UPDATE_ACLS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: PermissionsApi.updateAcls,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcls,
      workerSagaAction: updateAcls(mockActionValue),
      workerSagaToTest: updateAclsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: PermissionsApi.updateAcls,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: updateAcls,
      workerSagaAction: updateAcls(mockActionValue),
      workerSagaToTest: updateAclsWorker,
    });
  });

});
