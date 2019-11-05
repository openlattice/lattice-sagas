/*
 * @flow
 */

import Immutable from 'immutable';

import * as PermissionsApiActions from './PermissionsApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_ACL',
  'UPDATE_ACL',
  'UPDATE_ACLS',
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getAcl',
  'updateAcl',
  'updateAcls',
]).sort();

describe('PermissionsApiActions', () => {

  testShouldExportActionTypes(PermissionsApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(PermissionsApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
