/*
 * @flow
 */

import randomUUID from 'uuid/v4';
import { PermissionsApi } from 'lattice';

import {
  GET_ACL,
  getAcl,
} from './PermissionsApiActions';

import {
  getAclWatcher,
  getAclWorker,
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

});
