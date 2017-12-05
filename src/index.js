/*
 * @flow
 */

import * as AppApiActionFactory from './sagas/AppApiActionFactory';
import * as AppApiSagas from './sagas/AppApiSagas';
import * as EntityDataModelApiActionFactory from './sagas/EntityDataModelApiActionFactory';
import * as EntityDataModelApiSagas from './sagas/EntityDataModelApiSagas';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  AppApiActionFactory,
  AppApiSagas,
  EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  version
};

export default {
  AppApiActionFactory,
  AppApiSagas,
  EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  version
};
