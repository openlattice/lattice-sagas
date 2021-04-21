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

const DELETE_ENTITY_AND_NEIGHBOR_DATA :'DELETE_ENTITY_AND_NEIGHBOR_DATA' = 'DELETE_ENTITY_AND_NEIGHBOR_DATA';
const deleteEntityAndNeighborData :RequestSequence = newRequestSequence(DELETE_ENTITY_AND_NEIGHBOR_DATA);

const DELETE_ENTITY_DATA :'DELETE_ENTITY_DATA' = 'DELETE_ENTITY_DATA';
const deleteEntityData :RequestSequence = newRequestSequence(DELETE_ENTITY_DATA);

const DELETE_ENTITY_SET_DATA :'DELETE_ENTITY_SET_DATA' = 'DELETE_ENTITY_SET_DATA';
const deleteEntitySetData :RequestSequence = newRequestSequence(DELETE_ENTITY_SET_DATA);

const GET_ENTITY_DATA :'GET_ENTITY_DATA' = 'GET_ENTITY_DATA';
const getEntityData :RequestSequence = newRequestSequence(GET_ENTITY_DATA);

const GET_ENTITY_SET_DATA :'GET_ENTITY_SET_DATA' = 'GET_ENTITY_SET_DATA';
const getEntitySetData :RequestSequence = newRequestSequence(GET_ENTITY_SET_DATA);

const GET_ENTITY_SET_SIZE :'GET_ENTITY_SET_SIZE' = 'GET_ENTITY_SET_SIZE';
const getEntitySetSize :RequestSequence = newRequestSequence(GET_ENTITY_SET_SIZE);

const GET_LINKED_ENTITY_SET_BREAKDOWN :'GET_LINKED_ENTITY_SET_BREAKDOWN' = 'GET_LINKED_ENTITY_SET_BREAKDOWN';
const getLinkedEntitySetBreakdown :RequestSequence = newRequestSequence(GET_LINKED_ENTITY_SET_BREAKDOWN);

const GET_BINARY_PROPERTIES :'GET_BINARY_PROPERTIES' = 'GET_BINARY_PROPERTIES';
const getBinaryProperties :RequestSequence = newRequestSequence(GET_BINARY_PROPERTIES);

const UPDATE_ENTITY_DATA :'UPDATE_ENTITY_DATA' = 'UPDATE_ENTITY_DATA';
const updateEntityData :RequestSequence = newRequestSequence(UPDATE_ENTITY_DATA);

export {
  CREATE_ASSOCIATIONS,
  CREATE_ENTITY_AND_ASSOCIATION_DATA,
  CREATE_OR_MERGE_ENTITY_DATA,
  DELETE_ENTITY_AND_NEIGHBOR_DATA,
  DELETE_ENTITY_DATA,
  DELETE_ENTITY_SET_DATA,
  GET_ENTITY_DATA,
  GET_ENTITY_SET_DATA,
  GET_ENTITY_SET_SIZE,
  GET_LINKED_ENTITY_SET_BREAKDOWN,
  GET_BINARY_PROPERTIES,
  UPDATE_ENTITY_DATA,
  createAssociations,
  createEntityAndAssociationData,
  createOrMergeEntityData,
  deleteEntityAndNeighborData,
  deleteEntityData,
  deleteEntitySetData,
  getEntityData,
  getEntitySetData,
  getEntitySetSize,
  getLinkedEntitySetBreakdown,
  getBinaryProperties,
  updateEntityData,
};
