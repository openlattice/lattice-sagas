/*
 * @flow
 */

import Immutable from 'immutable';

import * as EntityDataModelApiActions from './EntityDataModelApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'ADD_DST_ET_TO_AT',
  'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE',
  'ADD_SRC_ET_TO_AT',
  'CREATE_ASSOCIATION_TYPE',
  'CREATE_ENTITY_TYPE',
  'CREATE_PROPERTY_TYPE',
  'CREATE_SCHEMA',
  'DELETE_ASSOCIATION_TYPE',
  'DELETE_ENTITY_TYPE',
  'DELETE_PROPERTY_TYPE',
  'GET_ALL_ASSOCIATION_TYPES',
  'GET_ALL_ENTITY_TYPES',
  'GET_ALL_PROPERTY_TYPES',
  'GET_ALL_SCHEMAS',
  'GET_ENTITY_DATA_MODEL',
  'GET_ENTITY_DATA_MODEL_DIFF',
  'GET_ENTITY_DATA_MODEL_PROJECTION',
  'GET_ENTITY_DATA_MODEL_VERSION',
  'GET_ENTITY_TYPE',
  'GET_PROPERTY_TYPE',
  'GET_PROPERTY_TYPE_ID',
  'REMOVE_DST_ET_FROM_AT',
  'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE',
  'REMOVE_SRC_ET_FROM_AT',
  'REORDER_ENTITY_TYPE_PROPERTY_TYPES',
  'UPDATE_ASSOCIATION_TYPE_METADATA',
  'UPDATE_ENTITY_DATA_MODEL',
  'UPDATE_ENTITY_TYPE_METADATA',
  'UPDATE_PROPERTY_TYPE_METADATA',
  'UPDATE_SCHEMA',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'addDstEntityTypeToAssociationType',
  'addPropertyTypeToEntityType',
  'addSrcEntityTypeToAssociationType',
  'createAssociationType',
  'createEntityType',
  'createPropertyType',
  'createSchema',
  'deleteAssociationType',
  'deleteEntityType',
  'deletePropertyType',
  'getAllAssociationTypes',
  'getAllEntityTypes',
  'getAllPropertyTypes',
  'getAllSchemas',
  'getEntityDataModel',
  'getEntityDataModelDiff',
  'getEntityDataModelProjection',
  'getEntityDataModelVersion',
  'getEntityType',
  'getPropertyType',
  'getPropertyTypeId',
  'removeDstEntityTypeFromAssociationType',
  'removePropertyTypeFromEntityType',
  'removeSrcEntityTypeFromAssociationType',
  'reorderEntityTypePropertyTypes',
  'updateAssociationTypeMetaData',
  'updateEntityDataModel',
  'updateEntityTypeMetaData',
  'updatePropertyTypeMetaData',
  'updateSchema',
]).sort();

describe('EntityDataModelApiActions', () => {

  testShouldExportActionTypes(EntityDataModelApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(EntityDataModelApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
