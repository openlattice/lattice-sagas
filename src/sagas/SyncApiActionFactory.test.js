/*
 * @flow
 */

import {
  GET_CURRENT_SYNC_ID,
  getCurrentSyncId
} from './SyncApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('SyncApiActionFactory', () => {

  describe('should export action types', () => {

    test('GET_CURRENT_SYNC_ID', () => {
      expect(GET_CURRENT_SYNC_ID).toEqual('GET_CURRENT_SYNC_ID');
    });

  });

  describe('should export RequestSequence actions', () => {

    describe('getCurrentSyncId', () => {
      testShouldBeRequestSequenceFunction(getCurrentSyncId, GET_CURRENT_SYNC_ID);
    });

  });

});
