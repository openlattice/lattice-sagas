import fs from 'fs';
import path from 'path';

import PACKAGE from '../package.json';

import { OBJECT_TAG } from './utils/Constants';

import * as LatticeSagas from './index';

const SAGAS_DIR = path.join(__dirname, 'sagas');

describe('lattice-sagas named exports', () => {

  test('should export the correct version', () => {
    expect(LatticeSagas.version).toEqual(PACKAGE.version);
  });

  fs.readdirSync(SAGAS_DIR)
    /* eslint-disable arrow-body-style */
    .filter((fileName) => {
      // exclude files that end with ".test.js"
      return !(/\.test\.js$/.test(fileName));
    })
    /* eslint-enable */
    .forEach((fileName) => {
      const expectedExport = fileName.slice(0, -3); // strip the ".js"
      test(`should export ${expectedExport}`, () => {
        expect(LatticeSagas).toHaveProperty(expectedExport);
        expect(Object.prototype.toString.call(LatticeSagas[expectedExport])).toEqual(OBJECT_TAG);
        expect(Object.keys(LatticeSagas[expectedExport]).length).toBeGreaterThan(0);
        expect(Object.keys(LatticeSagas[expectedExport]).length % 2).toEqual(0);
      });
    });

});
