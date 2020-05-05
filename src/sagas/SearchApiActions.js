/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const SEARCH_ENTITY_NEIGHBORS_WITH_FILTER :'SEARCH_ENTITY_NEIGHBORS_WITH_FILTER' = 'SEARCH_ENTITY_NEIGHBORS_WITH_FILTER';
const searchEntityNeighborsWithFilter :RequestSequence = newRequestSequence(SEARCH_ENTITY_NEIGHBORS_WITH_FILTER);

const SEARCH_ENTITY_SET_DATA :'SEARCH_ENTITY_SET_DATA' = 'SEARCH_ENTITY_SET_DATA';
const searchEntitySetData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_DATA);

const SEARCH_ENTITY_SET_METADATA :'SEARCH_ENTITY_SET_METADATA' = 'SEARCH_ENTITY_SET_METADATA';
const searchEntitySetMetaData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_METADATA);

export {
  SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
  SEARCH_ENTITY_SET_DATA,
  SEARCH_ENTITY_SET_METADATA,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
  searchEntitySetMetaData,
};
