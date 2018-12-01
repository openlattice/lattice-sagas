import Immutable from 'immutable';

import * as SearchApiActions from './SearchApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'SEARCH_ENTITY_NEIGHBORS',
  'SEARCH_ENTITY_NEIGHBORS_BULK',
  'SEARCH_ENTITY_NEIGHBORS_FILTER',
  'SEARCH_ENTITY_SET_DATA',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'searchEntityNeighbors',
  'searchEntityNeighborsBulk',
  'searchEntityNeighborsWithFilter',
  'searchEntitySetData'
]).sort();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(SearchApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(SearchApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
