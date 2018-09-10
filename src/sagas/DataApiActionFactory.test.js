import { Set } from 'immutable';

import * as DataApiActions from './DataApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Set([
  'GET_ENTITY_SET_DATA',
  'GET_ENTITY_SET_DATA',
]).sort();

const REQSEQ_NAMES = Set([
  'getEntityData',
  'getEntitySetData',
]).sort();

describe('DataApiActions', () => {

  testShouldExportActionTypes(DataApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
