/*
 * @flow
 */

import Immutable from 'immutable';

import * as PrincipalsApiActions from './PrincipalsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_ALL_USERS',
  'GET_CURRENT_ROLES',
  'GET_SECURABLE_PRINCIPAL',
  'SEARCH_ALL_USERS',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getAllUsers',
  'getCurrentRoles',
  'getSecurablePrincipal',
  'searchAllUsers',
]).sort();

describe('PrincipalsApiActions', () => {

  testShouldExportActionTypes(PrincipalsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(PrincipalsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
