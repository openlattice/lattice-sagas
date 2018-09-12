import Immutable from 'immutable';

import * as AppApiActions from './AppApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_APP',
  'GET_APP_CONFIGS',
  'GET_APP_TYPES'
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getApp',
  'getAppConfigs',
  'getAppTypes'
]).sort();

describe('AppApiActions', () => {

  testShouldExportActionTypes(AppApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(AppApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
