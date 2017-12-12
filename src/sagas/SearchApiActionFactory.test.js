/*
 * @flow
 */

import {
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_SET_DATA,
  searchEntityNeighbors,
  searchEntitySetData
} from './SearchApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('SearchApiActionFactory', () => {

  describe('should export action types', () => {

    test('SEARCH_ENTITY_NEIGHBORS', () => {
      expect(SEARCH_ENTITY_NEIGHBORS).toEqual('SEARCH_ENTITY_NEIGHBORS');
    });

    test('SEARCH_ENTITY_SET_DATA', () => {
      expect(SEARCH_ENTITY_SET_DATA).toEqual('SEARCH_ENTITY_SET_DATA');
    });

  });

  describe('should export RequestSequence actions', () => {

    describe('searchEntityNeighbors', () => {
      testShouldBeRequestSequenceFunction(searchEntityNeighbors, SEARCH_ENTITY_NEIGHBORS);
    });

    describe('searchEntitySetData', () => {
      testShouldBeRequestSequenceFunction(searchEntitySetData, SEARCH_ENTITY_SET_DATA);
    });

  });

});
