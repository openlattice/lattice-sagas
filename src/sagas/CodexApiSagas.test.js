/*
 * @flow
 */

import { v4 as uuid } from 'uuid';
import { CodexApi } from 'lattice';

import {
  SEND_OUTGOING_TEXT,
  sendOutgoingText,
} from './CodexApiActions';

import {
  sendOutgoingTextWatcher,
  sendOutgoingTextWorker,
} from './CodexApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('CodexApiSagas', () => {

  /*
   *
   * CodexApi.sendOutgoingText
   * CodexApiActions.sendOutgoingText
   *
   */

  describe('sendOutgoingTextWatcher', () => {
    testShouldBeGeneratorFunction(sendOutgoingTextWatcher);
    testWatcherSagaShouldTakeEvery(
      sendOutgoingTextWatcher,
      sendOutgoingTextWorker,
      SEND_OUTGOING_TEXT,
    );
  });

  describe('sendOutgoingTextWorker', () => {

    const mockActionValue = {
      messageContents: uuid(),
      organizationId: uuid(),
    };

    testShouldBeGeneratorFunction(sendOutgoingTextWorker);
    testShouldFailOnInvalidAction(sendOutgoingTextWorker, SEND_OUTGOING_TEXT);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CodexApi.sendOutgoingText,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: sendOutgoingText,
      workerSagaAction: sendOutgoingText(mockActionValue),
      workerSagaToTest: sendOutgoingTextWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CodexApi.sendOutgoingText,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: sendOutgoingText,
      workerSagaAction: sendOutgoingText(mockActionValue),
      workerSagaToTest: sendOutgoingTextWorker,
    });
  });

});
