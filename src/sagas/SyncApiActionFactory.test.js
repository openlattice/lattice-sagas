import Immutable from 'immutable';

import * as SyncApiActionFactory from './SyncApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/TestUtils';

const ACTION_TYPES = Immutable.List([
  'GET_CURRENT_SYNC_ID'
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'getCurrentSyncId'
]).sort();

describe('SyncApiActionFactory', () => {

  testShouldExportActionTypes(SyncApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(SyncApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
