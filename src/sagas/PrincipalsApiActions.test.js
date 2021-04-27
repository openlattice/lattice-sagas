/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as PrincipalsApiActions from './PrincipalsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_ALL_ROLES',
  'GET_ALL_USERS',
  'GET_ATLAS_CREDENTIALS',
  'GET_CURRENT_ROLES',
  'GET_SECURABLE_PRINCIPAL',
  'GET_USER',
  'GET_USERS',
  'REGENERATE_CREDENTIAL',
  'SEARCH_USERS',
  'SYNC_USER',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'getAllRoles',
  'getAllUsers',
  'getAtlasCredentials',
  'getCurrentRoles',
  'getSecurablePrincipal',
  'getUser',
  'getUsers',
  'regenerateCredential',
  'searchUsers',
  'syncUser',
]).toJS();

describe('PrincipalsApiActions', () => {

  testShouldExportActionTypes(PrincipalsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(PrincipalsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
