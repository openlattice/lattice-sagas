/*
 * @flow
 */

import * as EntityDataModelApiSagas from '../sagas/EntityDataModelApiSagas';

describe('Saga Naming Conventions', () => {

  describe('saga names should end with either "Watcher" or "Worker"', () => {

    test('EntityDataModelApiSagas', () => {
      Object.keys(EntityDataModelApiSagas).forEach((sagaName :string) => {
        expect(sagaName).toMatch(/Watcher$|Worker$/);
      });
    });

  });

});
