import {
  GET_APP,
  GET_APP_CONFIGS,
  GET_APP_TYPES,
  getApp,
  getAppConfigs,
  getAppTypes
} from './AppApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('AppApiActionFactory', () => {

  describe('should export action types', () => {

    test('GET_APP', () => {
      expect(GET_APP).toEqual('GET_APP');
    });

    test('GET_APP_CONFIGS', () => {
      expect(GET_APP_CONFIGS).toEqual('GET_APP_CONFIGS');
    });

    test('GET_APP_TYPES', () => {
      expect(GET_APP_TYPES).toEqual('GET_APP_TYPES');
    });

  });

  describe('should export RequestSequence actions', () => {

    describe('fetchApp', () => {
      testShouldBeRequestSequenceFunction(getApp, GET_APP);
    });

    describe('fetchAppConfigs', () => {
      testShouldBeRequestSequenceFunction(getAppConfigs, GET_APP_CONFIGS);
    });

    describe('fetchAppTypes', () => {
      testShouldBeRequestSequenceFunction(getAppTypes, GET_APP_TYPES);
    });

  });

});
