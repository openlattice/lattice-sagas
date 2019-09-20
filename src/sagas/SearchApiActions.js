/*
 * @flow
 */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const EXECUTE_SEARCH :'EXECUTE_SEARCH' = 'EXECUTE_SEARCH';
const executeSearch :RequestSequence = newRequestSequence(EXECUTE_SEARCH);

const SEARCH_ENTITY_NEIGHBORS :'SEARCH_ENTITY_NEIGHBORS' = 'SEARCH_ENTITY_NEIGHBORS';
const searchEntityNeighbors :RequestSequence = newRequestSequence(SEARCH_ENTITY_NEIGHBORS);

const SEARCH_ENTITY_NEIGHBORS_BULK :'SEARCH_ENTITY_NEIGHBORS_BULK' = 'SEARCH_ENTITY_NEIGHBORS_BULK';
const searchEntityNeighborsBulk :RequestSequence = newRequestSequence(SEARCH_ENTITY_NEIGHBORS_BULK);

const SEARCH_ENTITY_NEIGHBORS_FILTER :'SEARCH_ENTITY_NEIGHBORS_FILTER' = 'SEARCH_ENTITY_NEIGHBORS_FILTER';
const searchEntityNeighborsWithFilter :RequestSequence = newRequestSequence(SEARCH_ENTITY_NEIGHBORS_FILTER);

const SEARCH_ENTITY_SET_DATA :'SEARCH_ENTITY_SET_DATA' = 'SEARCH_ENTITY_SET_DATA';
const searchEntitySetData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_DATA);

const SEARCH_ENTITY_SET_METADATA :'SEARCH_ENTITY_SET_METADATA' = 'SEARCH_ENTITY_SET_METADATA';
const searchEntitySetMetaData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_METADATA);

export {
  EXECUTE_SEARCH,
  SEARCH_ENTITY_NEIGHBORS,
  SEARCH_ENTITY_NEIGHBORS_BULK,
  SEARCH_ENTITY_NEIGHBORS_FILTER,
  SEARCH_ENTITY_SET_DATA,
  SEARCH_ENTITY_SET_METADATA,
  executeSearch,
  searchEntityNeighbors,
  searchEntityNeighborsBulk,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
  searchEntitySetMetaData,
};
