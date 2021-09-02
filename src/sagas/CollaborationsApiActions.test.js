/*
 * @flow
 */

import { OrderedSet } from 'immutable';

import * as CollaborationsApiActions from './CollaborationsApiActions';

import { testShouldExportActionTypes, testShouldExportRequestSequences } from '../utils/testing/TestUtils';

const ACTION_TYPES = OrderedSet([
  'ADD_DATA_SET_TO_COLLABORATION',
  'ADD_ORGANIZATIONS_TO_COLLABORATION',
  'CREATE_COLLABORATION',
  'DELETE_COLLABORATION',
  'GET_ALL_COLLABORATIONS',
  'GET_COLLABORATION',
  'GET_COLLABORATIONS',
  'GET_COLLABORATIONS_WITH_DATA_SETS',
  'GET_COLLABORATIONS_WITH_ORGANIZATION',
  'GET_COLLABORATION_DATA_SETS',
  'GET_COLLABORATION_DATABASE_INFO',
  'GET_ORGANIZATION_COLLABORATION_DATA_SETS',
  'REMOVE_DATA_SET_FROM_COLLABORATION',
  'REMOVE_ORGANIZATIONS_FROM_COLLABORATION',
  'RENAME_COLLABORATION_DATABASE',
]).toJS();

const REQSEQ_NAMES = OrderedSet([
  'addDataSetToCollaboration',
  'addOrganizationsToCollaboration',
  'createCollaboration',
  'deleteCollaboration',
  'getAllCollaborations',
  'getCollaboration',
  'getCollaborations',
  'getCollaborationsWithDataSets',
  'getCollaborationsWithOrganization',
  'getCollaborationDataSets',
  'getCollaborationDatabaseInfo',
  'getOrganizationCollaborationDataSets',
  'removeDataSetFromCollaboration',
  'removeOrganizationsFromCollaboration',
  'renameCollaborationDatabase',
]).toJS();

describe('CollaborationsApiActions', () => {

  testShouldExportActionTypes(CollaborationsApiActions, ACTION_TYPES);
  testShouldExportRequestSequences(CollaborationsApiActions, ACTION_TYPES, REQSEQ_NAMES);
});
