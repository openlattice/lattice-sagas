/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

/*
 *
 * Entity Data Model APIs
 *
 */

const GET_ENTITY_DATA_MODEL :'GET_ENTITY_DATA_MODEL' = 'GET_ENTITY_DATA_MODEL';
const getEntityDataModel :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL);

const GET_ENTITY_DATA_MODEL_DIFF :'GET_ENTITY_DATA_MODEL_DIFF' = 'GET_ENTITY_DATA_MODEL_DIFF';
const getEntityDataModelDiff :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL_DIFF);

const GET_ENTITY_DATA_MODEL_PROJECTION :'GET_ENTITY_DATA_MODEL_PROJECTION' = 'GET_ENTITY_DATA_MODEL_PROJECTION';
const getEntityDataModelProjection :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL_PROJECTION);

const GET_ENTITY_DATA_MODEL_VERSION :'GET_ENTITY_DATA_MODEL_VERSION' = 'GET_ENTITY_DATA_MODEL_VERSION';
const getEntityDataModelVersion :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL_VERSION);

const UPDATE_ENTITY_DATA_MODEL :'UPDATE_ENTITY_DATA_MODEL' = 'UPDATE_ENTITY_DATA_MODEL';
const updateEntityDataModel :RequestSequence = newRequestSequence(UPDATE_ENTITY_DATA_MODEL);

/*
 *
 * EntityType APIs
 *
 */

const CREATE_ENTITY_TYPE :'CREATE_ENTITY_TYPE' = 'CREATE_ENTITY_TYPE';
const createEntityType :RequestSequence = newRequestSequence(CREATE_ENTITY_TYPE);

const DELETE_ENTITY_TYPE :'DELETE_ENTITY_TYPE' = 'DELETE_ENTITY_TYPE';
const deleteEntityType :RequestSequence = newRequestSequence(DELETE_ENTITY_TYPE);

const GET_ALL_ENTITY_TYPES :'GET_ALL_ENTITY_TYPES' = 'GET_ALL_ENTITY_TYPES';
const getAllEntityTypes :RequestSequence = newRequestSequence(GET_ALL_ENTITY_TYPES);

const GET_ENTITY_TYPE :'GET_ENTITY_TYPE' = 'GET_ENTITY_TYPE';
const getEntityType :RequestSequence = newRequestSequence(GET_ENTITY_TYPE);

const UPDATE_ENTITY_TYPE_METADATA :'UPDATE_ENTITY_TYPE_METADATA' = 'UPDATE_ENTITY_TYPE_METADATA';
const updateEntityTypeMetaData :RequestSequence = newRequestSequence(UPDATE_ENTITY_TYPE_METADATA);

const ADD_PROPERTY_TYPE_TO_ENTITY_TYPE :'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE' = 'ADD_PROPERTY_TYPE_TO_ENTITY_TYPE';
const addPropertyTypeToEntityType :RequestSequence = newRequestSequence(ADD_PROPERTY_TYPE_TO_ENTITY_TYPE);

// eslint-disable-next-line max-len
const REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE :'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE' = 'REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE';
const removePropertyTypeFromEntityType :RequestSequence = newRequestSequence(REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE);

const REORDER_ENTITY_TYPE_PROPERTY_TYPES :'REORDER_ENTITY_TYPE_PROPERTY_TYPES' = 'REORDER_ENTITY_TYPE_PROPERTY_TYPES';
const reorderEntityTypePropertyTypes :RequestSequence = newRequestSequence(REORDER_ENTITY_TYPE_PROPERTY_TYPES);

/*
 *
 * PropertyType APIs
 *
 */

const CREATE_PROPERTY_TYPE :'CREATE_PROPERTY_TYPE' = 'CREATE_PROPERTY_TYPE';
const createPropertyType :RequestSequence = newRequestSequence(CREATE_PROPERTY_TYPE);

const DELETE_PROPERTY_TYPE :'DELETE_PROPERTY_TYPE' = 'DELETE_PROPERTY_TYPE';
const deletePropertyType :RequestSequence = newRequestSequence(DELETE_PROPERTY_TYPE);

const GET_ALL_PROPERTY_TYPES :'GET_ALL_PROPERTY_TYPES' = 'GET_ALL_PROPERTY_TYPES';
const getAllPropertyTypes :RequestSequence = newRequestSequence(GET_ALL_PROPERTY_TYPES);

const GET_PROPERTY_TYPE :'GET_PROPERTY_TYPE' = 'GET_PROPERTY_TYPE';
const getPropertyType :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE);

const GET_PROPERTY_TYPE_ID :'GET_PROPERTY_TYPE_ID' = 'GET_PROPERTY_TYPE_ID';
const getPropertyTypeId :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE_ID);

const UPDATE_PROPERTY_TYPE_METADATA :'UPDATE_PROPERTY_TYPE_METADATA' = 'UPDATE_PROPERTY_TYPE_METADATA';
const updatePropertyTypeMetaData :RequestSequence = newRequestSequence(UPDATE_PROPERTY_TYPE_METADATA);

/*
 *
 * AssociationType APIs
 *
 */

const CREATE_ASSOCIATION_TYPE :'CREATE_ASSOCIATION_TYPE' = 'CREATE_ASSOCIATION_TYPE';
const createAssociationType :RequestSequence = newRequestSequence(CREATE_ASSOCIATION_TYPE);

const DELETE_ASSOCIATION_TYPE :'DELETE_ASSOCIATION_TYPE' = 'DELETE_ASSOCIATION_TYPE';
const deleteAssociationType :RequestSequence = newRequestSequence(DELETE_ASSOCIATION_TYPE);

const GET_ALL_ASSOCIATION_TYPES :'GET_ALL_ASSOCIATION_TYPES' = 'GET_ALL_ASSOCIATION_TYPES';
const getAllAssociationTypes :RequestSequence = newRequestSequence(GET_ALL_ASSOCIATION_TYPES);

const UPDATE_ASSOCIATION_TYPE_METADATA :'UPDATE_ASSOCIATION_TYPE_METADATA' = 'UPDATE_ASSOCIATION_TYPE_METADATA';
const updateAssociationTypeMetaData :RequestSequence = newRequestSequence(UPDATE_ASSOCIATION_TYPE_METADATA);

const ADD_DST_ET_TO_AT :'ADD_DST_ET_TO_AT' = 'ADD_DST_ET_TO_AT';
const addDstEntityTypeToAssociationType :RequestSequence = newRequestSequence(ADD_DST_ET_TO_AT);

const ADD_SRC_ET_TO_AT :'ADD_SRC_ET_TO_AT' = 'ADD_SRC_ET_TO_AT';
const addSrcEntityTypeToAssociationType :RequestSequence = newRequestSequence(ADD_SRC_ET_TO_AT);

const REMOVE_DST_ET_FROM_AT :'REMOVE_DST_ET_FROM_AT' = 'REMOVE_DST_ET_FROM_AT';
const removeDstEntityTypeFromAssociationType :RequestSequence = newRequestSequence(REMOVE_DST_ET_FROM_AT);

const REMOVE_SRC_ET_FROM_AT :'REMOVE_SRC_ET_FROM_AT' = 'REMOVE_SRC_ET_FROM_AT';
const removeSrcEntityTypeFromAssociationType :RequestSequence = newRequestSequence(REMOVE_SRC_ET_FROM_AT);

/*
 *
 * Schema APIs
 *
 */

const CREATE_SCHEMA :'CREATE_SCHEMA' = 'CREATE_SCHEMA';
const createSchema :RequestSequence = newRequestSequence(CREATE_SCHEMA);

const GET_ALL_SCHEMAS :'GET_ALL_SCHEMAS' = 'GET_ALL_SCHEMAS';
const getAllSchemas :RequestSequence = newRequestSequence(GET_ALL_SCHEMAS);

const UPDATE_SCHEMA :'UPDATE_SCHEMA' = 'UPDATE_SCHEMA';
const updateSchema :RequestSequence = newRequestSequence(UPDATE_SCHEMA);

/*
 *
 * exports
 *
 */

export {
  ADD_DST_ET_TO_AT,
  ADD_PROPERTY_TYPE_TO_ENTITY_TYPE,
  ADD_SRC_ET_TO_AT,
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  CREATE_SCHEMA,
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_DIFF,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_DATA_MODEL_VERSION,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  GET_PROPERTY_TYPE_ID,
  REMOVE_DST_ET_FROM_AT,
  REMOVE_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  REMOVE_SRC_ET_FROM_AT,
  REORDER_ENTITY_TYPE_PROPERTY_TYPES,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_DATA_MODEL,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  UPDATE_SCHEMA,
  addDstEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSrcEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  createSchema,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getEntityDataModel,
  getEntityDataModelDiff,
  getEntityDataModelProjection,
  getEntityDataModelVersion,
  getEntityType,
  getPropertyType,
  getPropertyTypeId,
  removeDstEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSrcEntityTypeFromAssociationType,
  reorderEntityTypePropertyTypes,
  updateAssociationTypeMetaData,
  updateEntityDataModel,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData,
  updateSchema,
};
