/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as AuthorizationsApiActions from './AuthorizationsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_AUTHORIZATIONS',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'getAuthorizations',
]).toJS();

describe('AuthorizationsApiActions', () => {

  testShouldExportActionTypes(AuthorizationsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(AuthorizationsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
