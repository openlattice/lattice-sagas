/*
 * @flow
 */

import * as EntityDataModelApiActionFactory from './sagas/EntityDataModelApiActionFactory';
import * as EntityDataModelApiSagas from './sagas/EntityDataModelApiSagas';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  version
};

export default {
  EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  version
};
