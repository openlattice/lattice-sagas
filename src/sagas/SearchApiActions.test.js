/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as SearchApiActions from './SearchApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'SEARCH_ENTITY_NEIGHBORS_WITH_FILTER',
  'SEARCH_ENTITY_SET_DATA',
  'SEARCH_ENTITY_SET_METADATA',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'searchEntityNeighborsWithFilter',
  'searchEntitySetData',
  'searchEntitySetMetaData',
]).toJS();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(SearchApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(SearchApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
