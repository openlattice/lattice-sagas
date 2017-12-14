/*
 * @flow
 */

import PACKAGE from '../package.json';

import { OBJECT_TAG } from './utils/TestUtils';
import * as LatticeSagas from './index';

describe('lattice-sagas library export', () => {

  test('should expose the correct version', () => {
    expect(LatticeSagas.version).toEqual(PACKAGE.version);
  });

  test('should expose AppApiActionFactory', () => {
    expect(Object.prototype.toString.call(LatticeSagas.AppApiActionFactory)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.AppApiActionFactory).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.AppApiActionFactory).length % 2).toEqual(0);
  });

  test('should expose AppApiSagas', () => {
    expect(Object.prototype.toString.call(LatticeSagas.AppApiSagas)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.AppApiSagas).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.AppApiSagas).length % 2).toEqual(0);
  });

  test('should expose DataApiActionFactory', () => {
    expect(Object.prototype.toString.call(LatticeSagas.DataApiActionFactory)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.DataApiActionFactory).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.DataApiActionFactory).length % 2).toEqual(0);
  });

  test('should expose DataApiSagas', () => {
    expect(Object.prototype.toString.call(LatticeSagas.DataApiSagas)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.DataApiSagas).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.DataApiSagas).length % 2).toEqual(0);
  });

  test('should expose EntityDataModelApiActionFactory', () => {
    expect(Object.prototype.toString.call(LatticeSagas.EntityDataModelApiActionFactory)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.EntityDataModelApiActionFactory).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.EntityDataModelApiActionFactory).length % 2).toEqual(0);
  });

  test('should expose EntityDataModelApiSagas', () => {
    expect(Object.prototype.toString.call(LatticeSagas.EntityDataModelApiSagas)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.EntityDataModelApiSagas).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.EntityDataModelApiSagas).length % 2).toEqual(0);
  });

  test('should expose SearchApiActionFactory', () => {
    expect(Object.prototype.toString.call(LatticeSagas.SearchApiActionFactory)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.SearchApiActionFactory).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.SearchApiActionFactory).length % 2).toEqual(0);
  });

  test('should expose SearchApiSagas', () => {
    expect(Object.prototype.toString.call(LatticeSagas.SearchApiSagas)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.SearchApiSagas).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.SearchApiSagas).length % 2).toEqual(0);
  });

  test('should expose SyncApiActionFactory', () => {
    expect(Object.prototype.toString.call(LatticeSagas.SyncApiActionFactory)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.SyncApiActionFactory).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.SyncApiActionFactory).length % 2).toEqual(0);
  });

  test('should expose SyncApiSagas', () => {
    expect(Object.prototype.toString.call(LatticeSagas.SyncApiSagas)).toEqual(OBJECT_TAG);
    expect(Object.keys(LatticeSagas.SyncApiSagas).length).toBeGreaterThan(0);
    expect(Object.keys(LatticeSagas.SyncApiSagas).length % 2).toEqual(0);
  });

});
