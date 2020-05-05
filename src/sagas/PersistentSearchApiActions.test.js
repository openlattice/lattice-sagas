/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as PersistentSearchApiActions from './PersistentSearchApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'CREATE_PERSISTENT_SEARCH',
  'EXPIRE_PERSISTENT_SEARCH',
  'GET_PERSISTENT_SEARCHES',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'createPersistentSearch',
  'expirePersistentSearch',
  'getPersistentSearches',
]).sort().toJS();

describe('PersistentSearchApiActions', () => {

  testShouldExportActionTypes(PersistentSearchApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(PersistentSearchApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
