/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as PermissionsApiActions from './PermissionsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_ACL',
  'GET_ACL_EXPLANATION',
  'UPDATE_ACL',
  'UPDATE_ACLS',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'getAcl',
  'getAclExplanation',
  'updateAcl',
  'updateAcls',
]).sort().toJS();

describe('PermissionsApiActions', () => {

  testShouldExportActionTypes(PermissionsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(PermissionsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
