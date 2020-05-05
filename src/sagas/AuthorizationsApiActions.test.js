/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as AuthorizationsApiActions from './AuthorizationsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_AUTHORIZATIONS',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'getAuthorizations',
]).sort().toJS();

describe('AuthorizationsApiActions', () => {

  testShouldExportActionTypes(AuthorizationsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(AuthorizationsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
