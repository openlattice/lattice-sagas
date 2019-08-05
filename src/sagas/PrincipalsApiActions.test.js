import Immutable from 'immutable';

import * as SearchApiActions from './PrincipalsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'SEARCH_ALL_USERS',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'searchAllUsers',
]).sort();

describe('SearchApiActions', () => {

  testShouldExportActionTypes(SearchApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(SearchApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
