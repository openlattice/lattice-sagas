/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as DataSetMetadataApiActions from './DataSetMetadataApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_DATA_SET_METADATA',
  'GET_DATA_SETS_METADATA',
  'GET_DATA_SET_COLUMN_METADATA',
  'GET_DATA_SET_COLUMNS_METADATA',
  'GET_ORGANIZATION_DATA_SETS_METADATA',
  'UPDATE_DATA_SET_METADATA',
  'UPDATE_DATA_SET_COLUMN_METADATA',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'getDataSetMetadata',
  'getDataSetsMetadata',
  'getDataSetColumnMetadata',
  'getDataSetColumnsMetadata',
  'getOrganizationDataSetsMetadata',
  'updateDataSetMetadata',
  'updateDataSetColumnMetadata',
]).toJS();

describe('DataSetMetadataApiActions', () => {

  testShouldExportActionTypes(DataSetMetadataApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(DataSetMetadataApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
