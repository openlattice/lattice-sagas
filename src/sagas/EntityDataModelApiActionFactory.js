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

/*
 *
 * EntityType APIs
 *
 */

const CREATE_ENTITY_TYPE :'CREATE_ENTITY_TYPE' = 'CREATE_ENTITY_TYPE';
const createEntityType :RequestSequence = newRequestSequence(CREATE_ENTITY_TYPE);

const GET_ALL_ENTITY_TYPES :'GET_ALL_ENTITY_TYPES' = 'GET_ALL_ENTITY_TYPES';
const getAllEntityTypes :RequestSequence = newRequestSequence(GET_ALL_ENTITY_TYPES);

const GET_ENTITY_TYPE :'GET_ENTITY_TYPE' = 'GET_ENTITY_TYPE';
const getEntityType :RequestSequence = newRequestSequence(GET_ENTITY_TYPE);

/*
 *
 * PropertyType APIs
 *
 */

const CREATE_PROPERTY_TYPE :'CREATE_PROPERTY_TYPE' = 'CREATE_PROPERTY_TYPE';
const createPropertyType :RequestSequence = newRequestSequence(CREATE_PROPERTY_TYPE);

const GET_ALL_PROPERTY_TYPES :'GET_ALL_PROPERTY_TYPES' = 'GET_ALL_PROPERTY_TYPES';
const getAllPropertyTypes :RequestSequence = newRequestSequence(GET_ALL_PROPERTY_TYPES);

const GET_PROPERTY_TYPE :'GET_PROPERTY_TYPE' = 'GET_PROPERTY_TYPE';
const getPropertyType :RequestSequence = newRequestSequence(GET_PROPERTY_TYPE);

/*
 *
 * AssociationType APIs
 *
 */

const CREATE_ASSOCIATION_TYPE :'CREATE_ASSOCIATION_TYPE' = 'CREATE_ASSOCIATION_TYPE';
const createAssociationType :RequestSequence = newRequestSequence(CREATE_ASSOCIATION_TYPE);

const GET_ALL_ASSOCIATION_TYPES :'GET_ALL_ASSOCIATION_TYPES' = 'GET_ALL_ASSOCIATION_TYPES';
const getAllAssociationTypes :RequestSequence = newRequestSequence(GET_ALL_ASSOCIATION_TYPES);

/*
 *
 * exports
 *
 */

export {
  CREATE_ASSOCIATION_TYPE,
  CREATE_ENTITY_TYPE,
  CREATE_PROPERTY_TYPE,
  GET_ALL_ASSOCIATION_TYPES,
  GET_ALL_ENTITY_TYPES,
  GET_ALL_PROPERTY_TYPES,
  GET_ENTITY_DATA_MODEL,
  GET_ENTITY_DATA_MODEL_PROJECTION,
  GET_ENTITY_SET,
  GET_ENTITY_SET_ID,
  GET_ENTITY_TYPE,
  GET_PROPERTY_TYPE,
  createAssociationType,
  createEntityType,
  createPropertyType,
  getAllAssociationTypes,
  getAllEntityTypes,
  getAllPropertyTypes,
  getEntityDataModel,
  getEntityDataModelProjection,
  getEntitySet,
  getEntitySetId,
  getEntityType,
  getPropertyType
};
