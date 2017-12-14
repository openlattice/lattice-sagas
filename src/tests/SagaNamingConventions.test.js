/*
 * @flow
 */

import * as AppApiSagas from '../sagas/AppApiSagas';
import * as DataApiSagas from '../sagas/DataApiSagas';
import * as EntityDataModelApiSagas from '../sagas/EntityDataModelApiSagas';
import * as SearchApiSagas from '../sagas/SearchApiSagas';
import * as SyncApiSagas from '../sagas/SyncApiSagas';

describe('Saga Naming Conventions', () => {

  describe('saga names should end with either "Watcher" or "Worker"', () => {

    test('AppApiSagas', () => {
      Object.keys(AppApiSagas).forEach((sagaName :string) => {
        expect(sagaName).toMatch(/Watcher$|Worker$/);
      });
    });

    test('DataApiSagas', () => {
      Object.keys(DataApiSagas).forEach((sagaName :string) => {
        expect(sagaName).toMatch(/Watcher$|Worker$/);
      });
    });

    test('EntityDataModelApiSagas', () => {
      Object.keys(EntityDataModelApiSagas).forEach((sagaName :string) => {
        expect(sagaName).toMatch(/Watcher$|Worker$/);
      });
    });

    test('SearchApiSagas', () => {
      Object.keys(SearchApiSagas).forEach((sagaName :string) => {
        expect(sagaName).toMatch(/Watcher$|Worker$/);
      });
    });

    test('SyncApiSagas', () => {
      Object.keys(SyncApiSagas).forEach((sagaName :string) => {
        expect(sagaName).toMatch(/Watcher$|Worker$/);
      });
    });

  });

});
