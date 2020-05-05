/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as PrincipalsApiActions from './PrincipalsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_ALL_ROLES',
  'GET_ALL_USERS',
  'GET_CURRENT_ROLES',
  'GET_SECURABLE_PRINCIPAL',
  'GET_USER',
  'SEARCH_ALL_USERS',
  'SYNC_USER',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'getAllRoles',
  'getAllUsers',
  'getCurrentRoles',
  'getSecurablePrincipal',
  'getUser',
  'searchAllUsers',
  'syncUser',
]).sort().toJS();

describe('PrincipalsApiActions', () => {

  testShouldExportActionTypes(PrincipalsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(PrincipalsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
