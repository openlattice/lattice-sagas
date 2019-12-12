/*
 * @flow
 */

import Immutable from 'immutable';

import * as PrincipalsApiActions from './PrincipalsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_ALL_ROLES',
  'GET_ALL_USERS',
  'GET_CURRENT_ROLES',
  'GET_SECURABLE_PRINCIPAL',
  'GET_USER',
  'SEARCH_ALL_USERS',
  'SYNC_USER',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getAllRoles',
  'getAllUsers',
  'getCurrentRoles',
  'getSecurablePrincipal',
  'getUser',
  'searchAllUsers',
  'syncUser',
]).sort();

describe('PrincipalsApiActions', () => {

  testShouldExportActionTypes(PrincipalsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(PrincipalsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
