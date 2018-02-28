import Immutable from 'immutable';

import * as DataApiActionFactory from './DataApiActionFactory';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/TestUtils';

const ACTION_TYPES = Immutable.List([
  'ACQUIRE_SYNC_TICKET',
  'CREATE_ENTITY_AND_ASSOCIATION_DATA',
  'GET_ENTITY_SET_DATA'
]).sort();

const REQSEQ_NAMES = Immutable.List([
  'acquireSyncTicket',
  'createEntityAndAssociationData',
  'getEntitySetData'
]).sort();

describe('SyncApiActionFactory', () => {

  testShouldExportActionTypes(DataApiActionFactory, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataApiActionFactory, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
