/*
 * @flow
 */

import {
  SEARCH_ENTITY_SET_DATA,
  searchEntitySetData
} from './SearchApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('SearchApiActionFactory', () => {

  describe('should export action types', () => {

    test('SEARCH_ENTITY_SET_DATA', () => {
      expect(SEARCH_ENTITY_SET_DATA).toEqual('SEARCH_ENTITY_SET_DATA');
    });

  });

  describe('should export RequestSequence actions', () => {

    describe('searchEntitySetData', () => {
      testShouldBeRequestSequenceFunction(searchEntitySetData, SEARCH_ENTITY_SET_DATA);
    });

  });

});
