/*
 * @flow
 */

import Immutable from 'immutable';

import * as PrincipalsApiActions from './PrincipalsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'SEARCH_ALL_USERS',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'searchAllUsers',
]).sort();

describe('PrincipalsApiActions', () => {

  testShouldExportActionTypes(PrincipalsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(PrincipalsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
