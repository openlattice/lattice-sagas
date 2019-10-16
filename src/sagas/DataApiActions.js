/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const CREATE_ASSOCIATIONS :'CREATE_ASSOCIATIONS' = 'CREATE_ASSOCIATIONS';
const createAssociations :RequestSequence = newRequestSequence(CREATE_ASSOCIATIONS);

const CREATE_ENTITY_AND_ASSOCIATION_DATA :'CREATE_ENTITY_AND_ASSOCIATION_DATA' = 'CREATE_ENTITY_AND_ASSOCIATION_DATA';
const createEntityAndAssociationData :RequestSequence = newRequestSequence(CREATE_ENTITY_AND_ASSOCIATION_DATA);

const CREATE_OR_MERGE_ENTITY_DATA :'CREATE_OR_MERGE_ENTITY_DATA' = 'CREATE_OR_MERGE_ENTITY_DATA';
const createOrMergeEntityData :RequestSequence = newRequestSequence(CREATE_OR_MERGE_ENTITY_DATA);

const DELETE_ENTITIES_AND_NEIGHBORS :'DELETE_ENTITIES_AND_NEIGHBORS' = 'DELETE_ENTITIES_AND_NEIGHBORS';
const deleteEntitiesAndNeighbors :RequestSequence = newRequestSequence(DELETE_ENTITIES_AND_NEIGHBORS);

const DELETE_ENTITY :'DELETE_ENTITY' = 'DELETE_ENTITY';
const deleteEntity :RequestSequence = newRequestSequence(DELETE_ENTITY);

const DELETE_ENTITY_DATA :'DELETE_ENTITY_DATA' = 'DELETE_ENTITY_DATA';
const deleteEntityData :RequestSequence = newRequestSequence(DELETE_ENTITY_DATA);

const DELETE_ENTITY_SET :'DELETE_ENTITY_SET' = 'DELETE_ENTITY_SET';
const deleteEntitySet :RequestSequence = newRequestSequence(DELETE_ENTITY_SET);

const GET_ENTITY_DATA :'GET_ENTITY_DATA' = 'GET_ENTITY_DATA';
const getEntityData :RequestSequence = newRequestSequence(GET_ENTITY_DATA);

const GET_ENTITY_SET_DATA :'GET_ENTITY_SET_DATA' = 'GET_ENTITY_SET_DATA';
const getEntitySetData :RequestSequence = newRequestSequence(GET_ENTITY_SET_DATA);

const GET_ENTITY_SET_SIZE :'GET_ENTITY_SET_SIZE' = 'GET_ENTITY_SET_SIZE';
const getEntitySetSize :RequestSequence = newRequestSequence(GET_ENTITY_SET_SIZE);

const UPDATE_ENTITY_DATA :'UPDATE_ENTITY_DATA' = 'UPDATE_ENTITY_DATA';
const updateEntityData :RequestSequence = newRequestSequence(UPDATE_ENTITY_DATA);

export {
  CREATE_ASSOCIATIONS,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITIES_AND_NEIGHBORS,
  DELETE_ENTITY,
  DELETE_ENTITY_DATA,
  DELETE_ENTITY_SET,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  GET_ENTITY_SET_SIZE,
  UPDATE_ENTITY_DATA,
  createAssociations,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntitiesAndNeighbors,
  deleteEntity,
  deleteEntityData,
  deleteEntitySet,
  getEntityData,
  getEntitySetData,
  getEntitySetSize,
  updateEntityData,
};
