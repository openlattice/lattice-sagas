/*
 * @flow
 */

import {
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
} from './EntityDataModelApiActionFactory';

import { testShouldBeRequestSequenceFunction } from '../utils/TestUtils';

describe('EntityDataModelApiActionFactory', () => {

  describe('should export action types', () => {

    test('GET_ENTITY_DATA_MODEL', () => {
      expect(GET_ENTITY_DATA_MODEL).toEqual('GET_ENTITY_DATA_MODEL');
    });

    test('GET_ENTITY_DATA_MODEL_PROJECTION', () => {
      expect(GET_ENTITY_DATA_MODEL_PROJECTION).toEqual('GET_ENTITY_DATA_MODEL_PROJECTION');
    });

    test('GET_ENTITY_SET', () => {
      expect(GET_ENTITY_SET).toEqual('GET_ENTITY_SET');
    });

    test('GET_ENTITY_SET_ID', () => {
      expect(GET_ENTITY_SET_ID).toEqual('GET_ENTITY_SET_ID');
    });

    test('GET_ENTITY_TYPE', () => {
      expect(GET_ENTITY_TYPE).toEqual('GET_ENTITY_TYPE');
    });

    test('GET_PROPERTY_TYPE', () => {
      expect(GET_PROPERTY_TYPE).toEqual('GET_PROPERTY_TYPE');
    });

  });

  describe('should export RequestSequence functions', () => {

    describe('getEntityDataModel', () => {
      testShouldBeRequestSequenceFunction(getEntityDataModel, GET_ENTITY_DATA_MODEL);
    });

    describe('getEntityDataModelProjection', () => {
      testShouldBeRequestSequenceFunction(getEntityDataModelProjection, GET_ENTITY_DATA_MODEL_PROJECTION);
    });

    describe('getEntitySet', () => {
      testShouldBeRequestSequenceFunction(getEntitySet, GET_ENTITY_SET);
    });

    describe('getEntitySetId', () => {
      testShouldBeRequestSequenceFunction(getEntitySetId, GET_ENTITY_SET_ID);
    });

    describe('getEntityType', () => {
      testShouldBeRequestSequenceFunction(getEntityType, GET_ENTITY_TYPE);
    });

    describe('getPropertyType', () => {
      testShouldBeRequestSequenceFunction(getPropertyType, GET_PROPERTY_TYPE);
    });

  });

});
