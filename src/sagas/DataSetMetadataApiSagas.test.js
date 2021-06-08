/*
 * @flow
 */

import { DataSetMetadataApi } from 'lattice';
import { v4 as uuid } from 'uuid';

import {
  GET_DATA_SETS_METADATA,
  GET_DATA_SET_COLUMNS_METADATA,
  GET_DATA_SET_COLUMN_METADATA,
  GET_DATA_SET_METADATA,
  UPDATE_DATA_SET_COLUMN_METADATA,
  UPDATE_DATA_SET_METADATA,
  getDataSetColumnMetadata,
  getDataSetColumnsMetadata,
  getDataSetMetadata,
  getDataSetsMetadata,
  updateDataSetColumnMetadata,
  updateDataSetMetadata,
} from './DataSetMetadataApiActions';
import {
  getDataSetColumnMetadataWatcher,
  getDataSetColumnMetadataWorker,
  getDataSetColumnsMetadataWatcher,
  getDataSetColumnsMetadataWorker,
  getDataSetMetadataWatcher,
  getDataSetMetadataWorker,
  getDataSetsMetadataWatcher,
  getDataSetsMetadataWorker,
  updateDataSetColumnMetadataWatcher,
  updateDataSetColumnMetadataWorker,
  updateDataSetMetadataWatcher,
  updateDataSetMetadataWorker,
} from './DataSetMetadataApiSagas';

import {
  testShouldBeGeneratorFunction,
  testShouldFailOnInvalidAction,
  testWatcherSagaShouldTakeEvery,
  testWorkerSagaShouldHandleFailureCase,
  testWorkerSagaShouldHandleSuccessCase,
} from '../utils/testing/TestUtils';

describe('DataSetMetadataApiSagas', () => {

  /*
   *
   * DataSetMetadataApi.getDataSetMetadata
   * DataSetMetadataApiActions.getDataSetMetadata
   *
   */

  describe('getDataSetMetadataWatcher', () => {
    testShouldBeGeneratorFunction(getDataSetMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      getDataSetMetadataWatcher,
      getDataSetMetadataWorker,
      GET_DATA_SET_METADATA,
    );
  });

  describe('getDataSetMetadataWorker', () => {

    const mockActionValue = uuid();

    testShouldBeGeneratorFunction(getDataSetMetadataWorker);
    testShouldFailOnInvalidAction(getDataSetMetadataWorker, GET_DATA_SET_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetMetadataApi.getDataSetMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getDataSetMetadata,
      workerSagaAction: getDataSetMetadata(mockActionValue),
      workerSagaToTest: getDataSetMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetMetadataApi.getDataSetMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getDataSetMetadata,
      workerSagaAction: getDataSetMetadata(mockActionValue),
      workerSagaToTest: getDataSetMetadataWorker,
    });
  });

  /*
   *
   * DataSetMetadataApi.getDataSetsMetadata
   * DataSetMetadataApiActions.getDataSetsMetadata
   *
   */

  describe('getDataSetsMetadataWatcher', () => {
    testShouldBeGeneratorFunction(getDataSetsMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      getDataSetsMetadataWatcher,
      getDataSetsMetadataWorker,
      GET_DATA_SETS_METADATA,
    );
  });

  describe('getDataSetsMetadataWorker', () => {

    const mockActionValue = [uuid()];

    testShouldBeGeneratorFunction(getDataSetsMetadataWorker);
    testShouldFailOnInvalidAction(getDataSetsMetadataWorker, GET_DATA_SETS_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetMetadataApi.getDataSetsMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getDataSetsMetadata,
      workerSagaAction: getDataSetsMetadata(mockActionValue),
      workerSagaToTest: getDataSetsMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetMetadataApi.getDataSetsMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getDataSetsMetadata,
      workerSagaAction: getDataSetsMetadata(mockActionValue),
      workerSagaToTest: getDataSetsMetadataWorker,
    });
  });

  /*
   *
   * DataSetMetadataApi.getDataSetColumnMetadata
   * DataSetMetadataApiActions.getDataSetColumnMetadata
   *
   */

  describe('getDataSetColumnMetadataWatcher', () => {
    testShouldBeGeneratorFunction(getDataSetColumnMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      getDataSetColumnMetadataWatcher,
      getDataSetColumnMetadataWorker,
      GET_DATA_SET_COLUMN_METADATA,
    );
  });

  describe('getDataSetColumnMetadataWorker', () => {

    const mockActionValue = {
      columnId: uuid(),
      dataSetId: uuid(),
    };

    testShouldBeGeneratorFunction(getDataSetColumnMetadataWorker);
    testShouldFailOnInvalidAction(getDataSetColumnMetadataWorker, GET_DATA_SET_COLUMN_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetMetadataApi.getDataSetColumnMetadata,
      latticeApiParams: [mockActionValue.dataSetId, mockActionValue.columnId],
      latticeApiReqSeq: getDataSetColumnMetadata,
      workerSagaAction: getDataSetColumnMetadata(mockActionValue),
      workerSagaToTest: getDataSetColumnMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetMetadataApi.getDataSetColumnMetadata,
      latticeApiParams: [mockActionValue.dataSetId, mockActionValue.columnId],
      latticeApiReqSeq: getDataSetColumnMetadata,
      workerSagaAction: getDataSetColumnMetadata(mockActionValue),
      workerSagaToTest: getDataSetColumnMetadataWorker,
    });
  });

  /*
   *
   * DataSetMetadataApi.getDataSetColumnsMetadata
   * DataSetMetadataApiActions.getDataSetColumnsMetadata
   *
   */

  describe('getDataSetColumnsMetadataWatcher', () => {
    testShouldBeGeneratorFunction(getDataSetColumnsMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      getDataSetColumnsMetadataWatcher,
      getDataSetColumnsMetadataWorker,
      GET_DATA_SET_COLUMNS_METADATA,
    );
  });

  describe('getDataSetColumnsMetadataWorker', () => {

    const mockActionValue = [uuid()];

    testShouldBeGeneratorFunction(getDataSetColumnsMetadataWorker);
    testShouldFailOnInvalidAction(getDataSetColumnsMetadataWorker, GET_DATA_SET_COLUMNS_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetMetadataApi.getDataSetColumnsMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getDataSetColumnsMetadata,
      workerSagaAction: getDataSetColumnsMetadata(mockActionValue),
      workerSagaToTest: getDataSetColumnsMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetMetadataApi.getDataSetColumnsMetadata,
      latticeApiParams: [mockActionValue],
      latticeApiReqSeq: getDataSetColumnsMetadata,
      workerSagaAction: getDataSetColumnsMetadata(mockActionValue),
      workerSagaToTest: getDataSetColumnsMetadataWorker,
    });
  });

  /*
   *
   * DataSetMetadataApi.updateDataSetMetadata
   * DataSetMetadataApiActions.updateDataSetMetadata
   *
   */

  describe('updateDataSetMetadataWatcher', () => {
    testShouldBeGeneratorFunction(updateDataSetMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateDataSetMetadataWatcher,
      updateDataSetMetadataWorker,
      UPDATE_DATA_SET_METADATA,
    );
  });

  describe('updateDataSetMetadataWorker', () => {

    const mockActionValue = {
      dataSetId: uuid(),
      metadata: uuid(),
    };

    testShouldBeGeneratorFunction(updateDataSetMetadataWorker);
    testShouldFailOnInvalidAction(updateDataSetMetadataWorker, UPDATE_DATA_SET_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetMetadataApi.updateDataSetMetadata,
      latticeApiParams: [mockActionValue.dataSetId, mockActionValue.metadata],
      latticeApiReqSeq: updateDataSetMetadata,
      workerSagaAction: updateDataSetMetadata(mockActionValue),
      workerSagaToTest: updateDataSetMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetMetadataApi.updateDataSetMetadata,
      latticeApiParams: [mockActionValue.dataSetId, mockActionValue.metadata],
      latticeApiReqSeq: updateDataSetMetadata,
      workerSagaAction: updateDataSetMetadata(mockActionValue),
      workerSagaToTest: updateDataSetMetadataWorker,
    });
  });

  /*
   *
   * DataSetMetadataApi.updateDataSetColumnMetadata
   * DataSetMetadataApiActions.updateDataSetColumnMetadata
   *
   */

  describe('updateDataSetColumnMetadataWatcher', () => {
    testShouldBeGeneratorFunction(updateDataSetColumnMetadataWatcher);
    testWatcherSagaShouldTakeEvery(
      updateDataSetColumnMetadataWatcher,
      updateDataSetColumnMetadataWorker,
      UPDATE_DATA_SET_COLUMN_METADATA,
    );
  });

  describe('updateDataSetColumnMetadataWorker', () => {

    const mockActionValue = {
      columnId: uuid(),
      dataSetId: uuid(),
      metadata: uuid(),
    };

    testShouldBeGeneratorFunction(updateDataSetColumnMetadataWorker);
    testShouldFailOnInvalidAction(updateDataSetColumnMetadataWorker, UPDATE_DATA_SET_COLUMN_METADATA);

    testWorkerSagaShouldHandleSuccessCase({
      latticeApi: DataSetMetadataApi.updateDataSetColumnMetadata,
      latticeApiParams: [mockActionValue.dataSetId, mockActionValue.columnId, mockActionValue.metadata],
      latticeApiReqSeq: updateDataSetColumnMetadata,
      workerSagaAction: updateDataSetColumnMetadata(mockActionValue),
      workerSagaToTest: updateDataSetColumnMetadataWorker,
    });

    testWorkerSagaShouldHandleFailureCase({
      latticeApi: DataSetMetadataApi.updateDataSetColumnMetadata,
      latticeApiParams: [mockActionValue.dataSetId, mockActionValue.columnId, mockActionValue.metadata],
      latticeApiReqSeq: updateDataSetColumnMetadata,
      workerSagaAction: updateDataSetColumnMetadata(mockActionValue),
      workerSagaToTest: updateDataSetColumnMetadataWorker,
    });
  });

});
