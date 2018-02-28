import Immutable from 'immutable';

import * as AppApiActionFactory from './AppApiActionFactory';
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

describe('AppApiActionFactory', () => {

  testShouldExportActionTypes(AppApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(AppApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
