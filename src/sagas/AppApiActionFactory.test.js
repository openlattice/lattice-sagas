import {
  FETCH_APP,
  FETCH_APP_CONFIGS,
  FETCH_APP_TYPES,
  fetchApp,
  fetchAppConfigs,
  fetchAppTypes
} from './AppApiActionFactory.js'

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('AppApiActionFactory', () => {

  describe('should export action types', () => {

    test('FETCH_APP', () => {
      expect(FETCH_APP).toEqual('FETCH_APP');
    });

    test('FETCH_APP_CONFIGS', () => {
      expect(FETCH_APP_CONFIGS).toEqual('FETCH_APP_CONFIGS');
    });

    test('FETCH_APP_TYPES', () => {
      expect(FETCH_APP_TYPES).toEqual('FETCH_APP_TYPES');
    });

  });

  describe('should export RequestSequence actions', () => {

    describe('fetchApp', () => {
      testShouldBeRequestSequenceFunction(fetchApp, FETCH_APP);
    });

    describe('fetchAppConfigs', () => {
      testShouldBeRequestSequenceFunction(fetchAppConfigs, FETCH_APP_CONFIGS);
    });

    describe('fetchAppTypes', () => {
      testShouldBeRequestSequenceFunction(fetchAppTypes, FETCH_APP_TYPES);
    });

  });

});
