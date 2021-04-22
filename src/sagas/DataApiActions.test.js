/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as DataApiActions from './DataApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'CREATE_ASSOCIATIONS',
  'CREATE_ENTITY_AND_ASSOCIATION_DATA',
  'CREATE_OR_MERGE_ENTITY_DATA',
  'DELETE_ENTITY_AND_NEIGHBOR_DATA',
  'DELETE_ENTITY_DATA',
  'DELETE_ENTITY_SET_DATA',
  'GET_BINARY_PROPERTIES',
  'GET_ENTITY_DATA',
  'GET_ENTITY_SET_DATA',
  'GET_ENTITY_SET_SIZE',
  'GET_LINKED_ENTITY_SET_BREAKDOWN',
  'UPDATE_ENTITY_DATA',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'createAssociations',
  'createEntityAndAssociationData',
  'createOrMergeEntityData',
  'deleteEntityAndNeighborData',
  'deleteEntityData',
  'deleteEntitySetData',
  'getBinaryProperties',
  'getEntityData',
  'getEntitySetData',
  'getEntitySetSize',
  'getLinkedEntitySetBreakdown',
  'updateEntityData',
]).toJS();

describe('DataApiActions', () => {

  testShouldExportActionTypes(DataApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(DataApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
