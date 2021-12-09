/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as SearchApiActions from './SearchApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'COUNT_ENTITIES_IN_SETS',
  'SEARCH_DATA_SET_METADATA',
  'SEARCH_ENTITY_NEIGHBORS_WITH_FILTER',
  'SEARCH_ENTITY_SET_DATA',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'countEntitiesInSets',
  'searchDataSetMetadata',
  'searchEntityNeighborsWithFilter',
  'searchEntitySetData',
]).toJS();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(SearchApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(SearchApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
