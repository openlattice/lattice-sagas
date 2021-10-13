/*
 * @flow
 */

import { CollaborationsApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
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
} from './CollaborationsApiActions';
import {
  addDataSetToCollaborationWatcher,
  addDataSetToCollaborationWorker,
  addOrganizationsToCollaborationWatcher,
  addOrganizationsToCollaborationWorker,
  createCollaborationWatcher,
  createCollaborationWorker,
  deleteCollaborationWatcher,
  deleteCollaborationWorker,
  getAllCollaborationsWatcher,
  getAllCollaborationsWorker,
  getCollaborationDataSetsWatcher,
  getCollaborationDataSetsWorker,
  getCollaborationDatabaseInfoWatcher,
  getCollaborationDatabaseInfoWorker,
  getCollaborationWatcher,
  getCollaborationWorker,
  getCollaborationsWatcher,
  getCollaborationsWithDataSetsWatcher,
  getCollaborationsWithDataSetsWorker,
  getCollaborationsWithOrganizationWatcher,
  getCollaborationsWithOrganizationWorker,
  getCollaborationsWorker,
  getOrganizationCollaborationDataSetsWatcher,
  getOrganizationCollaborationDataSetsWorker,
  removeDataSetFromCollaborationWatcher,
  removeDataSetFromCollaborationWorker,
  removeOrganizationsFromCollaborationWatcher,
  removeOrganizationsFromCollaborationWorker,
  renameCollaborationDatabaseWatcher,
  renameCollaborationDatabaseWorker,
} from './CollaborationsApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('CollaborationsApiSagas', () => {

  /*
   *
   * CollaborationsApi.addDataSetToCollaboration
   * CollaborationsApiActions.addDataSetToCollaboration
   *
   */

  describe('addDataSetToCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(addDataSetToCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      addDataSetToCollaborationWatcher,
      addDataSetToCollaborationWorker,
      ADD_DATA_SET_TO_COLLABORATION,
    );
  });

  describe('addDataSetToCollaborationWorker', () => {

    const mockActionValue = {
      collaborationId: uuid(),
      organizationId: uuid(),
      dataSetId: uuid(),
    };

    testShouldBeGeneratorFunction(addDataSetToCollaborationWorker);
    testShouldFailOnInvalidAction(addDataSetToCollaborationWorker, ADD_DATA_SET_TO_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.addDataSetToCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationId,
        mockActionValue.dataSetId,
      ],
      latticeApiReqSeq: addDataSetToCollaboration,
      workerSagaAction: addDataSetToCollaboration(mockActionValue),
      workerSagaToTest: addDataSetToCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.addDataSetToCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationId,
        mockActionValue.dataSetId,
      ],
      latticeApiReqSeq: addDataSetToCollaboration,
      workerSagaAction: addDataSetToCollaboration(mockActionValue),
      workerSagaToTest: addDataSetToCollaborationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.addOrganizationsToCollaboration
   * CollaborationsApiActions.addOrganizationsToCollaboration
   *
   */

  describe('addOrganizationsToCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(addOrganizationsToCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      addOrganizationsToCollaborationWatcher,
      addOrganizationsToCollaborationWorker,
      ADD_ORGANIZATIONS_TO_COLLABORATION,
    );
  });

  describe('addOrganizationsToCollaborationWorker', () => {

    const mockActionValue = {
      collaborationId: uuid(),
      organizationIds: [uuid(), uuid()]
    };

    testShouldBeGeneratorFunction(addOrganizationsToCollaborationWorker);
    testShouldFailOnInvalidAction(addOrganizationsToCollaborationWorker, ADD_ORGANIZATIONS_TO_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.addOrganizationsToCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationIds,
      ],
      latticeApiReqSeq: addOrganizationsToCollaboration,
      workerSagaAction: addOrganizationsToCollaboration(mockActionValue),
      workerSagaToTest: addOrganizationsToCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.addOrganizationsToCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationIds,
      ],
      latticeApiReqSeq: addOrganizationsToCollaboration,
      workerSagaAction: addOrganizationsToCollaboration(mockActionValue),
      workerSagaToTest: addOrganizationsToCollaborationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.createCollaboration
   * CollaborationsApiActions.createCollaboration
   *
   */

  describe('createCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(createCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      createCollaborationWatcher,
      createCollaborationWorker,
      CREATE_COLLABORATION,
    );
  });

  describe('createCollaborationWorker', () => {

    const mockActionValue = {
      name: 'test_collaboration',
      organizationIds: [uuid()],
      title: 'Test Collaboration',
    };

    testShouldBeGeneratorFunction(createCollaborationWorker);
    testShouldFailOnInvalidAction(createCollaborationWorker, CREATE_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.createCollaboration,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createCollaboration,
      workerSagaAction: createCollaboration(mockActionValue),
      workerSagaToTest: createCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.createCollaboration,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: createCollaboration,
      workerSagaAction: createCollaboration(mockActionValue),
      workerSagaToTest: createCollaborationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.deleteCollaboration
   * CollaborationsApiActions.deleteCollaboration
   *
   */

  describe('deleteCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(deleteCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      deleteCollaborationWatcher,
      deleteCollaborationWorker,
      DELETE_COLLABORATION,
    );
  });

  describe('deleteCollaborationWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(deleteCollaborationWorker);
    testShouldFailOnInvalidAction(deleteCollaborationWorker, DELETE_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.deleteCollaboration,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteCollaboration,
      workerSagaAction: deleteCollaboration(mockActionValue),
      workerSagaToTest: deleteCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.deleteCollaboration,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: deleteCollaboration,
      workerSagaAction: deleteCollaboration(mockActionValue),
      workerSagaToTest: deleteCollaborationWorker,
    });
  });

  /*
  *
  * CollaborationsApi.getAllCollaborations
  * CollaborationsApiActions.getAllCollaborations
  *
  */

  describe('getAllCollaborationsWatcher', () => {
    testShouldBeGeneratorFunction(getAllCollaborationsWatcher);
    testWatcherSagaShouldTakeEvery(
      getAllCollaborationsWatcher,
      getAllCollaborationsWorker,
      GET_ALL_COLLABORATIONS,
    );
  });

  describe('getAllCollaborationsWorker', () => {

    testShouldBeGeneratorFunction(getAllCollaborationsWorker);
    testShouldFailOnInvalidAction(getAllCollaborationsWorker, GET_ALL_COLLABORATIONS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getAllCollaborations,
      latticeApiParams: [],
      latticeApiReqSeq: getAllCollaborations,
      workerSagaAction: getAllCollaborations(),
      workerSagaToTest: getAllCollaborationsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getAllCollaborations,
      latticeApiParams: [],
      latticeApiReqSeq: getAllCollaborations,
      workerSagaAction: getAllCollaborations(),
      workerSagaToTest: getAllCollaborationsWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getCollaboration
   * CollaborationsApiActions.getCollaboration
   *
   */

  describe('getCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(getCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      getCollaborationWatcher,
      getCollaborationWorker,
      GET_COLLABORATION,
    );
  });

  describe('getCollaborationWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getCollaborationWorker);
    testShouldFailOnInvalidAction(getCollaborationWorker, GET_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getCollaboration,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaboration,
      workerSagaAction: getCollaboration(mockActionValue),
      workerSagaToTest: getCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getCollaboration,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaboration,
      workerSagaAction: getCollaboration(mockActionValue),
      workerSagaToTest: getCollaborationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getCollaborations
   * CollaborationsApiActions.getCollaborations
   *
   */

  describe('getCollaborationsWatcher', () => {
    testShouldBeGeneratorFunction(getCollaborationsWatcher);
    testWatcherSagaShouldTakeEvery(
      getCollaborationsWatcher,
      getCollaborationsWorker,
      GET_COLLABORATIONS,
    );
  });

  describe('getCollaborationsWorker', () => {

    const mockActionValue = [uuid(), uuid()];

    testShouldBeGeneratorFunction(getCollaborationsWorker);
    testShouldFailOnInvalidAction(getCollaborationsWorker, GET_COLLABORATIONS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getCollaborations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborations,
      workerSagaAction: getCollaborations(mockActionValue),
      workerSagaToTest: getCollaborationsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getCollaborations,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborations,
      workerSagaAction: getCollaborations(mockActionValue),
      workerSagaToTest: getCollaborationsWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getCollaborationsWithDataSets
   * CollaborationsApiActions.getCollaborationsWithDataSets
   *
   */

  describe('getCollaborationsWithDataSetsWatcher', () => {
    testShouldBeGeneratorFunction(getCollaborationsWithDataSetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getCollaborationsWithDataSetsWatcher,
      getCollaborationsWithDataSetsWorker,
      GET_COLLABORATIONS_WITH_DATA_SETS,
    );
  });

  describe('getCollaborationsWithDataSetsWorker', () => {

    const mockActionValue = [uuid(), uuid()];

    testShouldBeGeneratorFunction(getCollaborationsWithDataSetsWorker);
    testShouldFailOnInvalidAction(getCollaborationsWithDataSetsWorker, GET_COLLABORATIONS_WITH_DATA_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getCollaborationsWithDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationsWithDataSets,
      workerSagaAction: getCollaborationsWithDataSets(mockActionValue),
      workerSagaToTest: getCollaborationsWithDataSetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getCollaborationsWithDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationsWithDataSets,
      workerSagaAction: getCollaborationsWithDataSets(mockActionValue),
      workerSagaToTest: getCollaborationsWithDataSetsWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getCollaborationsWithOrganization
   * CollaborationsApiActions.getCollaborationsWithOrganization
   *
   */

  describe('getCollaborationsWithOrganizationWatcher', () => {
    testShouldBeGeneratorFunction(getCollaborationsWithOrganizationWatcher);
    testWatcherSagaShouldTakeEvery(
      getCollaborationsWithOrganizationWatcher,
      getCollaborationsWithOrganizationWorker,
      GET_COLLABORATIONS_WITH_ORGANIZATION,
    );
  });

  describe('getCollaborationsWithOrganizationWorker', () => {

    const mockActionValue = [uuid(), uuid()];

    testShouldBeGeneratorFunction(getCollaborationsWithOrganizationWorker);
    testShouldFailOnInvalidAction(getCollaborationsWithOrganizationWorker, GET_COLLABORATIONS_WITH_ORGANIZATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getCollaborationsWithOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationsWithOrganization,
      workerSagaAction: getCollaborationsWithOrganization(mockActionValue),
      workerSagaToTest: getCollaborationsWithOrganizationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getCollaborationsWithOrganization,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationsWithOrganization,
      workerSagaAction: getCollaborationsWithOrganization(mockActionValue),
      workerSagaToTest: getCollaborationsWithOrganizationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getCollaborationDataSets
   * CollaborationsApiActions.getCollaborationDataSets
   *
   */

  describe('getCollaborationDataSetsWatcher', () => {
    testShouldBeGeneratorFunction(getCollaborationDataSetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getCollaborationDataSetsWatcher,
      getCollaborationDataSetsWorker,
      GET_COLLABORATION_DATA_SETS,
    );
  });

  describe('getCollaborationDataSetsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getCollaborationDataSetsWorker);
    testShouldFailOnInvalidAction(getCollaborationDataSetsWorker, GET_COLLABORATION_DATA_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getCollaborationDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationDataSets,
      workerSagaAction: getCollaborationDataSets(mockActionValue),
      workerSagaToTest: getCollaborationDataSetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getCollaborationDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationDataSets,
      workerSagaAction: getCollaborationDataSets(mockActionValue),
      workerSagaToTest: getCollaborationDataSetsWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getCollaborationDatabaseInfo
   * CollaborationsApiActions.getCollaborationDatabaseInfo
   *
   */

  describe('getCollaborationDatabaseInfoWatcher', () => {
    testShouldBeGeneratorFunction(getCollaborationDatabaseInfoWatcher);
    testWatcherSagaShouldTakeEvery(
      getCollaborationDatabaseInfoWatcher,
      getCollaborationDatabaseInfoWorker,
      GET_COLLABORATION_DATABASE_INFO,
    );
  });

  describe('getCollaborationDatabaseInfoWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getCollaborationDatabaseInfoWorker);
    testShouldFailOnInvalidAction(getCollaborationDatabaseInfoWorker, GET_COLLABORATION_DATABASE_INFO);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getCollaborationDatabaseInfo,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationDatabaseInfo,
      workerSagaAction: getCollaborationDatabaseInfo(mockActionValue),
      workerSagaToTest: getCollaborationDatabaseInfoWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getCollaborationDatabaseInfo,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getCollaborationDatabaseInfo,
      workerSagaAction: getCollaborationDatabaseInfo(mockActionValue),
      workerSagaToTest: getCollaborationDatabaseInfoWorker,
    });
  });

  /*
   *
   * CollaborationsApi.getOrganizationCollaborationDataSets
   * CollaborationsApiActions.getOrganizationCollaborationDataSets
   *
   */

  describe('getOrganizationCollaborationDataSetsWatcher', () => {
    testShouldBeGeneratorFunction(getOrganizationCollaborationDataSetsWatcher);
    testWatcherSagaShouldTakeEvery(
      getOrganizationCollaborationDataSetsWatcher,
      getOrganizationCollaborationDataSetsWorker,
      GET_ORGANIZATION_COLLABORATION_DATA_SETS,
    );
  });

  describe('getOrganizationCollaborationDataSetsWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getOrganizationCollaborationDataSetsWorker);
    testShouldFailOnInvalidAction(getOrganizationCollaborationDataSetsWorker, GET_ORGANIZATION_COLLABORATION_DATA_SETS);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.getOrganizationCollaborationDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationCollaborationDataSets,
      workerSagaAction: getOrganizationCollaborationDataSets(mockActionValue),
      workerSagaToTest: getOrganizationCollaborationDataSetsWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.getOrganizationCollaborationDataSets,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getOrganizationCollaborationDataSets,
      workerSagaAction: getOrganizationCollaborationDataSets(mockActionValue),
      workerSagaToTest: getOrganizationCollaborationDataSetsWorker,
    });
  });

  /*
   *
   * CollaborationsApi.removeDataSetFromCollaboration
   * CollaborationsApiActions.removeDataSetFromCollaboration
   *
   */

  describe('removeDataSetFromCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(removeDataSetFromCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      removeDataSetFromCollaborationWatcher,
      removeDataSetFromCollaborationWorker,
      REMOVE_DATA_SET_FROM_COLLABORATION,
    );
  });

  describe('removeDataSetFromCollaborationWorker', () => {

    const mockActionValue = {
      collaborationId: uuid(),
      organizationId: uuid(),
      dataSetId: uuid(),
    };

    testShouldBeGeneratorFunction(removeDataSetFromCollaborationWorker);
    testShouldFailOnInvalidAction(removeDataSetFromCollaborationWorker, REMOVE_DATA_SET_FROM_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.removeDataSetFromCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationId,
        mockActionValue.dataSetId,
      ],
      latticeApiReqSeq: removeDataSetFromCollaboration,
      workerSagaAction: removeDataSetFromCollaboration(mockActionValue),
      workerSagaToTest: removeDataSetFromCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.removeDataSetFromCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationId,
        mockActionValue.dataSetId,
      ],
      latticeApiReqSeq: removeDataSetFromCollaboration,
      workerSagaAction: removeDataSetFromCollaboration(mockActionValue),
      workerSagaToTest: removeDataSetFromCollaborationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.removeOrganizationsFromCollaboration
   * CollaborationsApiActions.removeOrganizationsFromCollaboration
   *
   */

  describe('removeOrganizationsFromCollaborationWatcher', () => {
    testShouldBeGeneratorFunction(removeOrganizationsFromCollaborationWatcher);
    testWatcherSagaShouldTakeEvery(
      removeOrganizationsFromCollaborationWatcher,
      removeOrganizationsFromCollaborationWorker,
      REMOVE_ORGANIZATIONS_FROM_COLLABORATION,
    );
  });

  describe('removeOrganizationsFromCollaborationWorker', () => {

    const mockActionValue = {
      collaborationId: uuid(),
      organizationIds: [uuid(), uuid()],
    };

    testShouldBeGeneratorFunction(removeOrganizationsFromCollaborationWorker);
    testShouldFailOnInvalidAction(removeOrganizationsFromCollaborationWorker, REMOVE_ORGANIZATIONS_FROM_COLLABORATION);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.removeOrganizationsFromCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationIds,
      ],
      latticeApiReqSeq: removeOrganizationsFromCollaboration,
      workerSagaAction: removeOrganizationsFromCollaboration(mockActionValue),
      workerSagaToTest: removeOrganizationsFromCollaborationWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.removeOrganizationsFromCollaboration,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.organizationIds,
      ],
      latticeApiReqSeq: removeOrganizationsFromCollaboration,
      workerSagaAction: removeOrganizationsFromCollaboration(mockActionValue),
      workerSagaToTest: removeOrganizationsFromCollaborationWorker,
    });
  });

  /*
   *
   * CollaborationsApi.renameCollaborationDatabase
   * CollaborationsApiActions.renameCollaborationDatabase
   *
   */

  describe('renameCollaborationDatabaseWatcher', () => {
    testShouldBeGeneratorFunction(renameCollaborationDatabaseWatcher);
    testWatcherSagaShouldTakeEvery(
      renameCollaborationDatabaseWatcher,
      renameCollaborationDatabaseWorker,
      RENAME_COLLABORATION_DATABASE,
    );
  });

  describe('renameCollaborationDatabaseWorker', () => {

    const mockActionValue = {
      collaborationId: uuid(),
      name: 'test_collaboration',
    };

    testShouldBeGeneratorFunction(renameCollaborationDatabaseWorker);
    testShouldFailOnInvalidAction(renameCollaborationDatabaseWorker, RENAME_COLLABORATION_DATABASE);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: CollaborationsApi.renameCollaborationDatabase,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.name,
      ],
      latticeApiReqSeq: renameCollaborationDatabase,
      workerSagaAction: renameCollaborationDatabase(mockActionValue),
      workerSagaToTest: renameCollaborationDatabaseWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: CollaborationsApi.renameCollaborationDatabase,
      latticeApiParams: [
        mockActionValue.collaborationId,
        mockActionValue.name,
      ],
      latticeApiReqSeq: renameCollaborationDatabase,
      workerSagaAction: renameCollaborationDatabase(mockActionValue),
      workerSagaToTest: renameCollaborationDatabaseWorker,
    });
  });

});
