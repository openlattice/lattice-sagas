/*
 * @flow
 */

/* eslint-disable max-len */

import { newRequestSequence } from 'redux-reqseq';
import type { RequestSequence } from 'redux-reqseq';

const ADD_DATA_SET_TO_COLLABORATION :'ADD_DATA_SET_TO_COLLABORATION' = 'ADD_DATA_SET_TO_COLLABORATION';
const addDataSetToCollaboration :RequestSequence = newRequestSequence(ADD_DATA_SET_TO_COLLABORATION);

const ADD_ORGANIZATIONS_TO_COLLABORATION :'ADD_ORGANIZATIONS_TO_COLLABORATION' = 'ADD_ORGANIZATIONS_TO_COLLABORATION';
const addOrganizationsToCollaboration :RequestSequence = newRequestSequence(ADD_ORGANIZATIONS_TO_COLLABORATION);

const CREATE_COLLABORATION :'CREATE_COLLABORATION' = 'CREATE_COLLABORATION';
const createCollaboration :RequestSequence = newRequestSequence(CREATE_COLLABORATION);

const DELETE_COLLABORATION :'DELETE_COLLABORATION' = 'DELETE_COLLABORATION';
const deleteCollaboration :RequestSequence = newRequestSequence(DELETE_COLLABORATION);

const GET_COLLABORATION :'GET_COLLABORATION' = 'GET_COLLABORATION';
const getCollaboration :RequestSequence = newRequestSequence(GET_COLLABORATION);

const GET_COLLABORATION_DATA_SETS :'GET_COLLABORATION_DATA_SETS' = 'GET_COLLABORATION_DATA_SETS';
const getCollaborationDataSets :RequestSequence = newRequestSequence(GET_COLLABORATION_DATA_SETS);

const GET_COLLABORATION_DATABASE_INFO :'GET_COLLABORATION_DATABASE_INFO' = 'GET_COLLABORATION_DATABASE_INFO';
const getCollaborationDatabaseInfo :RequestSequence = newRequestSequence(GET_COLLABORATION_DATABASE_INFO);

const GET_ALL_COLLABORATIONS :'GET_ALL_COLLABORATIONS' = 'GET_ALL_COLLABORATIONS';
const getAllCollaborations :RequestSequence = newRequestSequence(GET_ALL_COLLABORATIONS);

const GET_COLLABORATIONS :'GET_COLLABORATIONS' = 'GET_COLLABORATIONS';
const getCollaborations :RequestSequence = newRequestSequence(GET_COLLABORATIONS);

const GET_COLLABORATIONS_WITH_DATA_SETS :'GET_COLLABORATIONS_WITH_DATA_SETS' = 'GET_COLLABORATIONS_WITH_DATA_SETS';
const getCollaborationsWithDataSets :RequestSequence = newRequestSequence(GET_COLLABORATIONS_WITH_DATA_SETS);

const GET_COLLABORATIONS_WITH_ORGANIZATION :'GET_COLLABORATIONS_WITH_ORGANIZATION' = 'GET_COLLABORATIONS_WITH_ORGANIZATION';
const getCollaborationsWithOrganization :RequestSequence = newRequestSequence(GET_COLLABORATIONS_WITH_ORGANIZATION);

const GET_ORGANIZATION_COLLABORATION_DATA_SETS :'GET_ORGANIZATION_COLLABORATION_DATA_SETS' = 'GET_ORGANIZATION_COLLABORATION_DATA_SETS';
const getOrganizationCollaborationDataSets :RequestSequence = newRequestSequence(GET_ORGANIZATION_COLLABORATION_DATA_SETS);

const REMOVE_DATA_SET_FROM_COLLABORATION :'REMOVE_DATA_SET_FROM_COLLABORATION' = 'REMOVE_DATA_SET_FROM_COLLABORATION';
const removeDataSetFromCollaboration :RequestSequence = newRequestSequence(REMOVE_DATA_SET_FROM_COLLABORATION);

const REMOVE_ORGANIZATIONS_FROM_COLLABORATION :'REMOVE_ORGANIZATIONS_FROM_COLLABORATION' = 'REMOVE_ORGANIZATIONS_FROM_COLLABORATION';
const removeOrganizationsFromCollaboration :RequestSequence = newRequestSequence(REMOVE_ORGANIZATIONS_FROM_COLLABORATION);

const RENAME_COLLABORATION_DATABASE :'RENAME_COLLABORATION_DATABASE' = 'RENAME_COLLABORATION_DATABASE';
const renameCollaborationDatabase :RequestSequence = newRequestSequence(RENAME_COLLABORATION_DATABASE);

export {
  ADD_DATA_SET_TO_COLLABORATION,
  ADD_ORGANIZATIONS_TO_COLLABORATION,
  CREATE_COLLABORATION,
  DELETE_COLLABORATION,
  GET_ALL_COLLABORATIONS,
  GET_COLLABORATION,
  GET_COLLABORATIONS,
  GET_COLLABORATIONS_WITH_DATA_SETS,
  GET_COLLABORATIONS_WITH_ORGANIZATION,
  GET_COLLABORATION_DATABASE_INFO,
  GET_COLLABORATION_DATA_SETS,
  GET_ORGANIZATION_COLLABORATION_DATA_SETS,
  REMOVE_DATA_SET_FROM_COLLABORATION,
  REMOVE_ORGANIZATIONS_FROM_COLLABORATION,
  RENAME_COLLABORATION_DATABASE,
  addDataSetToCollaboration,
  addOrganizationsToCollaboration,
  createCollaboration,
  deleteCollaboration,
  getAllCollaborations,
  getCollaboration,
  getCollaborationDataSets,
  getCollaborationDatabaseInfo,
  getCollaborations,
  getCollaborationsWithDataSets,
  getCollaborationsWithOrganization,
  getOrganizationCollaborationDataSets,
  removeDataSetFromCollaboration,
  removeOrganizationsFromCollaboration,
  renameCollaborationDatabase,
};
