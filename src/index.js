/*
 * @flow
 */

import * as AppApiActions from './sagas/AppApiActions';
import * as AppApiSagas from './sagas/AppApiSagas';
import * as AuthorizationsApiActions from './sagas/AuthorizationsApiActions';
import * as AuthorizationsApiSagas from './sagas/AuthorizationsApiSagas';
import * as DataApiActions from './sagas/DataApiActions';
import * as DataApiSagas from './sagas/DataApiSagas';
import * as DataIntegrationApiActions from './sagas/DataIntegrationApiActions';
import * as DataIntegrationApiSagas from './sagas/DataIntegrationApiSagas';
import * as EntityDataModelApiActions from './sagas/EntityDataModelApiActions';
import * as EntityDataModelApiSagas from './sagas/EntityDataModelApiSagas';
import * as EntitySetsApiActions from './sagas/EntitySetsApiActions';
import * as EntitySetsApiSagas from './sagas/EntitySetsApiSagas';
import * as OrganizationsApiActions from './sagas/OrganizationsApiActions';
import * as OrganizationsApiSagas from './sagas/OrganizationsApiSagas';
import * as PermissionsApiActions from './sagas/PermissionsApiActions';
import * as PermissionsApiSagas from './sagas/PermissionsApiSagas';
import * as PrincipalsApiActions from './sagas/PrincipalsApiActions';
import * as PrincipalsApiSagas from './sagas/PrincipalsApiSagas';
import * as SearchApiActions from './sagas/SearchApiActions';
import * as SearchApiSagas from './sagas/SearchApiSagas';

export type { Response } from './types';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  AppApiActions,
  AppApiSagas,
  AuthorizationsApiActions,
  AuthorizationsApiSagas,
  DataApiActions,
  DataApiSagas,
  DataIntegrationApiActions,
  DataIntegrationApiSagas,
  EntityDataModelApiActions,
  EntityDataModelApiSagas,
  EntitySetsApiActions,
  EntitySetsApiSagas,
  OrganizationsApiActions,
  OrganizationsApiSagas,
  PermissionsApiActions,
  PermissionsApiSagas,
  PrincipalsApiActions,
  PrincipalsApiSagas,
  SearchApiActions,
  SearchApiSagas,
  version,
};

export default {
  AppApiActions,
  AppApiSagas,
  AuthorizationsApiActions,
  AuthorizationsApiSagas,
  DataApiActions,
  DataApiSagas,
  DataIntegrationApiActions,
  DataIntegrationApiSagas,
  EntityDataModelApiActions,
  EntityDataModelApiSagas,
  EntitySetsApiActions,
  EntitySetsApiSagas,
  OrganizationsApiActions,
  OrganizationsApiSagas,
  PermissionsApiActions,
  PermissionsApiSagas,
  PrincipalsApiActions,
  PrincipalsApiSagas,
  SearchApiActions,
  SearchApiSagas,
  version,
};
