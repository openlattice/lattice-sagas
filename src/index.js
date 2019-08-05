/*
 * @flow
 */

import * as AppApiActions from './sagas/AppApiActions';
import * as AppApiSagas from './sagas/AppApiSagas';
import * as DataApiActions from './sagas/DataApiActions';
import * as DataApiSagas from './sagas/DataApiSagas';
import * as DataIntegrationApiActions from './sagas/DataIntegrationApiActions';
import * as DataIntegrationApiSagas from './sagas/DataIntegrationApiSagas';
import * as EntityDataModelApiActions from './sagas/EntityDataModelApiActions';
import * as EntityDataModelApiSagas from './sagas/EntityDataModelApiSagas';
import * as OrganizationsApiActions from './sagas/OrganizationsApiActions';
import * as OrganizationsApiSagas from './sagas/OrganizationsApiSagas';
import * as PrincipalsApiActions from './sagas/PrincipalsApiActions';
import * as PrincipalsApiSagas from './sagas/PrincipalsApiSagas';
import * as SearchApiActions from './sagas/SearchApiActions';
import * as SearchApiSagas from './sagas/SearchApiSagas';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  AppApiActions,
  AppApiActions as AppApiActionFactory,
  AppApiSagas,
  DataApiActions,
  DataApiActions as DataApiActionFactory,
  DataApiSagas,
  DataIntegrationApiActions,
  DataIntegrationApiActions as DataIntegrationApiActionFactory,
  DataIntegrationApiSagas,
  EntityDataModelApiActions,
  EntityDataModelApiActions as EntityDataModelApiActionFactory,
  EntityDataModelApiSagas,
  OrganizationsApiActions,
  OrganizationsApiSagas,
  PrincipalsApiActions,
  PrincipalsApiSagas,
  SearchApiActions,
  SearchApiActions as SearchApiActionFactory,
  SearchApiSagas,
  version,
};

export default {
  AppApiActions,
  AppApiSagas,
  DataApiActions,
  DataApiSagas,
  DataIntegrationApiActions,
  DataIntegrationApiSagas,
  EntityDataModelApiActions,
  EntityDataModelApiSagas,
  OrganizationsApiActions,
  OrganizationsApiSagas,
  PrincipalsApiActions,
  PrincipalsApiSagas,
  SearchApiActions,
  SearchApiSagas,
  version,
};
