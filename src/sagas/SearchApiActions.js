/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const SEARCH_DATA_SET_METADATA :'SEARCH_DATA_SET_METADATA' = 'SEARCH_DATA_SET_METADATA';
const searchDataSetMetadata :RequestSequence = newRequestSequence(SEARCH_DATA_SET_METADATA);

const SEARCH_ENTITY_NEIGHBORS_WITH_FILTER :'SEARCH_ENTITY_NEIGHBORS_WITH_FILTER' = 'SEARCH_ENTITY_NEIGHBORS_WITH_FILTER';
const searchEntityNeighborsWithFilter :RequestSequence = newRequestSequence(SEARCH_ENTITY_NEIGHBORS_WITH_FILTER);

const SEARCH_ENTITY_SET_DATA :'SEARCH_ENTITY_SET_DATA' = 'SEARCH_ENTITY_SET_DATA';
const searchEntitySetData :RequestSequence = newRequestSequence(SEARCH_ENTITY_SET_DATA);

export {
  SEARCH_DATA_SET_METADATA,
  SEARCH_ENTITY_NEIGHBORS_WITH_FILTER,
  SEARCH_ENTITY_SET_DATA,
  searchDataSetMetadata,
  searchEntityNeighborsWithFilter,
  searchEntitySetData,
};
