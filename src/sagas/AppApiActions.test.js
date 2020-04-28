/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as AppApiActions from './AppApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'GET_ALL_APPS',
  'GET_APP',
  'GET_APP_CONFIGS',
  'GET_APP_TYPE',
  'GET_APP_TYPES',
  'INSTALL_APP',
]).sort().toJS();

const REQSEQ_NAMES = OrderedSet([
  'getAllApps',
  'getApp',
  'getAppConfigs',
  'getAppType',
  'getAppTypes',
  'installApp',
]).sort().toJS();

describe('AppApiActions', () => {

  testShouldExportActionTypes(AppApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(AppApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
