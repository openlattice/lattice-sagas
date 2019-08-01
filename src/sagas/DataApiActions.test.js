import { Set } from 'immutable';

import * as DataApiActions from './DataApiActions';
import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = Set([
  'CREATE_ASSOCIATIONS',
  'CREATE_ENTITY_AND_ASSOCIATION_DATA',
  'CREATE_OR_MERGE_ENTITY_DATA',
  'DELETE_ENTITIES_AND_NEIGHBORS',
  'DELETE_ENTITY',
  'DELETE_ENTITY_SET',
  'GET_ENTITY_DATA',
  'GET_ENTITY_SET_DATA',
  'GET_ENTITY_SET_SIZE',
  'UPDATE_ENTITY_DATA',
]).sort();

const REQSEQ_NAMES = Set([
  'createAssociations',
  'createEntityAndAssociationData',
  'createOrMergeEntityData',
  'deleteEntitiesAndNeighbors',
  'deleteEntity',
  'deleteEntitySet',
  'getEntityData',
  'getEntitySetData',
  'getEntitySetSize',
  'updateEntityData',
]).sort();

describe('DataApiActions', () => {

  testShouldExportActionTypes(DataApiActions, ACTION_TYPES.toJS());
  testShouldExportRequestSequences(DataApiActions, ACTION_TYPES.toJS(), REQSEQ_NAMES.toJS());
});
