import Immutable from 'immutable';

import * as SearchApiActionFactory from './SearchApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/TestUtils';

const ACTION_TYPES = Immutable.List([
  'SEARCH_ENTITY_NEIGHBORS',
  'SEARCH_ENTITY_SET_DATA'
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'searchEntityNeighbors',
  'searchEntitySetData'
]).sort();

describe('SearchApiActionFactory', () => {

  testShouldExportActionTypes(SearchApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(SearchApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
