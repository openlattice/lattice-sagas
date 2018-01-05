import fs from 'fs';
import path from 'path';

const SAGAS_DIR = path.join(__dirname, '../sagas');

describe('naming conventions', () => {

  test('file names in src/sagas should end with either "ActionFactory" or "Sagas"', () => {
    fs.readdirSync(SAGAS_DIR)
      .forEach((fileName) => {
        expect(fileName).toMatch(/ActionFactory(\.test)?\.js$|Sagas(\.test)?\.js$/);
      });
  });

  test('saga names should end with either "Watcher" or "Worker"', () => {
    fs.readdirSync(SAGAS_DIR)
      .filter((fileName) => {
        // include only files ending with "Sagas.js"
        return /Sagas\.js$/.test(fileName);
      })
      .forEach((fileName) => {
        // TODO: not sure if using require() is the right thing to do
        /* eslint-disable global-require, import/no-dynamic-require */
        const sagaModule = require(path.join(SAGAS_DIR, fileName));
        /* eslint-enable */
        Object.keys(sagaModule).forEach((exportedSaga) => {
          expect(exportedSaga).toMatch(/Watcher$|Worker$/);
        });
      });
  });

});
