import { Set } from 'immutable';

import * as DataApiActions from './DataApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Set([
  'GET_ENTITY_DATA',
  'GET_ENTITY_SET_DATA',
  'UPDATE_ENTITY_DATA',
]).sort();

const REQSEQ_NAMES = Set([
  'getEntityData',
  'getEntitySetData',
  'updateEntityData',
]).sort();

describe('DataApiActions', () => {

  testShouldExportActionTypes(DataApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
