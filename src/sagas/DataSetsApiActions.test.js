/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as DataSetsApiActions from './DataSetsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_ORGANIZATION_DATA_SET',
  'GET_ORGANIZATION_DATA_SETS',
  'GET_ORGANIZATION_DATA_SET_DATA',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'getOrganizationDataSet',
  'getOrganizationDataSets',
  'getOrganizationDataSetData',
]).toJS();

describe('DataSetsApiActions', () => {

  testShouldExportActionTypes(DataSetsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(DataSetsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
