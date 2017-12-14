/*
 * @flow
 */

import * as AppApiActionFactory from './sagas/AppApiActionFactory';
import * as AppApiSagas from './sagas/AppApiSagas';
import * as DataApiActionFactory from './sagas/DataApiActionFactory';
import * as DataApiSagas from './sagas/DataApiSagas';
import * as EntityDataModelApiActionFactory from './sagas/EntityDataModelApiActionFactory';
import * as EntityDataModelApiSagas from './sagas/EntityDataModelApiSagas';
import * as SearchApiActionFactory from './sagas/SearchApiActionFactory';
import * as SearchApiSagas from './sagas/SearchApiSagas';
import * as SyncApiActionFactory from './sagas/SyncApiActionFactory';
import * as SyncApiSagas from './sagas/SyncApiSagas';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  AppApiActionFactory,
  AppApiSagas,
  DataApiActionFactory,
  DataApiSagas,
  EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  SearchApiActionFactory,
  SearchApiSagas,
  SyncApiActionFactory,
  SyncApiSagas,
  version
};

export default {
  AppApiActionFactory,
  AppApiSagas,
  DataApiActionFactory,
  DataApiSagas,
  EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  SearchApiActionFactory,
  SearchApiSagas,
  SyncApiActionFactory,
  SyncApiSagas,
  version
};
