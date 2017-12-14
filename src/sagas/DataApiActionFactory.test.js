/*
 * @flow
 */

import {
  ACQUIRE_SYNC_TICKET,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  acquireSyncTicket,
  createEntityAndAssociationData
} from './DataApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('SyncApiActionFactory', () => {

  describe('should export action types', () => {

    test('ACQUIRE_SYNC_TICKET', () => {
      expect(ACQUIRE_SYNC_TICKET).toEqual('ACQUIRE_SYNC_TICKET');
    });

    test('CREATE_ENTITY_AND_ASSOCIATION_DATA', () => {
      expect(CREATE_ENTITY_AND_ASSOCIATION_DATA).toEqual('CREATE_ENTITY_AND_ASSOCIATION_DATA');
    });

  });

  describe('should export RequestSequence actions', () => {

    describe('acquireSyncTicket', () => {
      testShouldBeRequestSequenceFunction(acquireSyncTicket, ACQUIRE_SYNC_TICKET);
    });

    describe('createEntityAndAssociationData', () => {
      testShouldBeRequestSequenceFunction(createEntityAndAssociationData, CREATE_ENTITY_AND_ASSOCIATION_DATA);
    });

  });

});
