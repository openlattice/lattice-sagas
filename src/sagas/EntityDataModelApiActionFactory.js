/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';

/*
 *
 * Entity Data Model APIs
 *
 */

const GET_ENTITY_DATA_MODEL :'GET_ENTITY_DATA_MODEL' = 'GET_ENTITY_DATA_MODEL';
const getEntityDataModel :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL);

const GET_ENTITY_DATA_MODEL_PROJECTION :'GET_ENTITY_DATA_MODEL_PROJECTION' = 'GET_ENTITY_DATA_MODEL_PROJECTION';
const getEntityDataModelProjection :RequestSequence = newRequestSequence(GET_ENTITY_DATA_MODEL_PROJECTION);

/*
 *
 * EntitySet APIs
 *
 */

const GET_ENTITY_SET :'GET_ENTITY_SET' = 'GET_ENTITY_SET';
const getEntitySet :RequestSequence = newRequestSequence(GET_ENTITY_SET);

const GET_ENTITY_SET_ID :'GET_ENTITY_SET_ID' = 'GET_ENTITY_SET_ID';
const getEntitySetId :RequestSequence = newRequestSequence(GET_ENTITY_SET_ID);

const UPDATE_ENTITY_SET_METADATA :'UPDATE_ENTITY_SET_METADATA' = 'UPDATE_ENTITY_SET_METADATA';
const updateEntitySetMetaData :RequestSequence = newRequestSequence(UPDATE_ENTITY_SET_METADATA);

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

const RM_PROPERTY_TYPE_FROM_ENTITY_TYPE :'RM_PROPERTY_TYPE_FROM_ENTITY_TYPE' = 'RM_PROPERTY_TYPE_FROM_ENTITY_TYPE';
const removePropertyTypeFromEntityType :RequestSequence = newRequestSequence(RM_PROPERTY_TYPE_FROM_ENTITY_TYPE);

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
const addDestinationEntityTypeToAssociationType :RequestSequence = newRequestSequence(ADD_DST_ET_TO_AT);

const ADD_SRC_ET_TO_AT :'ADD_SRC_ET_TO_AT' = 'ADD_SRC_ET_TO_AT';
const addSourceEntityTypeToAssociationType :RequestSequence = newRequestSequence(ADD_SRC_ET_TO_AT);

const RM_DST_ET_FROM_AT :'RM_DST_ET_FROM_AT' = 'RM_DST_ET_FROM_AT';
const removeDestinationEntityTypeFromAssociationType :RequestSequence = newRequestSequence(RM_DST_ET_FROM_AT);

const RM_SRC_ET_FROM_AT :'RM_SRC_ET_FROM_AT' = 'RM_SRC_ET_FROM_AT';
const removeSourceEntityTypeFromAssociationType :RequestSequence = newRequestSequence(RM_SRC_ET_FROM_AT);

/*
 *
 * Schema APIs
 *
 */

const GET_ALL_SCHEMAS :'GET_ALL_SCHEMAS' = 'GET_ALL_SCHEMAS';
const getAllSchemas :RequestSequence = newRequestSequence(GET_ALL_SCHEMAS);

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
  DELETE_ASSOCIATION_TYPE,
  DELETE_ENTITY_TYPE,
  DELETE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ALL_SCHEMAS,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  RM_DST_ET_FROM_AT,
  RM_PROPERTY_TYPE_FROM_ENTITY_TYPE,
  RM_SRC_ET_FROM_AT,
  UPDATE_ASSOCIATION_TYPE_METADATA,
  UPDATE_ENTITY_SET_METADATA,
  UPDATE_ENTITY_TYPE_METADATA,
  UPDATE_PROPERTY_TYPE_METADATA,
  addDestinationEntityTypeToAssociationType,
  addPropertyTypeToEntityType,
  addSourceEntityTypeToAssociationType,
  createAssociationType,
  createEntityType,
  createPropertyType,
  deleteAssociationType,
  deleteEntityType,
  deletePropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getAllSchemas,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType,
  removeDestinationEntityTypeFromAssociationType,
  removePropertyTypeFromEntityType,
  removeSourceEntityTypeFromAssociationType,
  updateAssociationTypeMetaData,
  updateEntitySetMetaData,
  updateEntityTypeMetaData,
  updatePropertyTypeMetaData
};
