/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as DataIntegrationApiActions from './DataIntegrationApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_ENTITY_KEY_IDS',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'getEntityKeyIds',
]).sort().toJS();

describe('DataIntegrationApiActions', () => {

  testShouldExportActionTypes(DataIntegrationApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(DataIntegrationApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
