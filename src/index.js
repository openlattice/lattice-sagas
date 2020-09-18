/*
 * @flow
 */

import * as AppApiActions from './sagas/AppApiActions';
import * as AppApiSagas from './sagas/AppApiSagas';
import * as AuthorizationsApiActions from './sagas/AuthorizationsApiActions';
import * as AuthorizationsApiSagas from './sagas/AuthorizationsApiSagas';
import * as CodexApiActions from './sagas/CodexApiActions';
import * as CodexApiSagas from './sagas/CodexApiSagas';
import * as DataApiActions from './sagas/DataApiActions';
import * as DataApiSagas from './sagas/DataApiSagas';
import * as DataIntegrationApiActions from './sagas/DataIntegrationApiActions';
import * as DataIntegrationApiSagas from './sagas/DataIntegrationApiSagas';
import * as DataSetsApiActions from './sagas/DataSetsApiActions';
import * as DataSetsApiSagas from './sagas/DataSetsApiSagas';
import * as EntityDataModelApiActions from './sagas/EntityDataModelApiActions';
import * as EntityDataModelApiSagas from './sagas/EntityDataModelApiSagas';
import * as EntitySetsApiActions from './sagas/EntitySetsApiActions';
import * as EntitySetsApiSagas from './sagas/EntitySetsApiSagas';
import * as OrganizationsApiActions from './sagas/OrganizationsApiActions';
import * as OrganizationsApiSagas from './sagas/OrganizationsApiSagas';
import * as PermissionsApiActions from './sagas/PermissionsApiActions';
import * as PermissionsApiSagas from './sagas/PermissionsApiSagas';
import * as PersistentSearchApiActions from './sagas/PersistentSearchApiActions';
import * as PersistentSearchApiSagas from './sagas/PersistentSearchApiSagas';
import * as PrincipalsApiActions from './sagas/PrincipalsApiActions';
import * as PrincipalsApiSagas from './sagas/PrincipalsApiSagas';
import * as RoutingActions from './sagas/RoutingActions';
import * as RoutingSagas from './sagas/RoutingSagas';
import * as SearchApiActions from './sagas/SearchApiActions';
import * as SearchApiSagas from './sagas/SearchApiSagas';

export type {
  GoToRoot,
  GoToRoute,
  RoutingAction,
} from './sagas/RoutingActions';
export type { WorkerResponse } from './types';

// injected by Webpack.DefinePlugin
declare var __VERSION__ :string;
const version :string = __VERSION__;

export {
  AppApiActions,
  AppApiSagas,
  AuthorizationsApiActions,
  AuthorizationsApiSagas,
  CodexApiActions,
  CodexApiSagas,
  DataApiActions,
  DataApiSagas,
  DataIntegrationApiActions,
  DataIntegrationApiSagas,
  DataSetsApiActions,
  DataSetsApiSagas,
  EntityDataModelApiActions,
  EntityDataModelApiSagas,
  EntitySetsApiActions,
  EntitySetsApiSagas,
  OrganizationsApiActions,
  OrganizationsApiSagas,
  PermissionsApiActions,
  PermissionsApiSagas,
  PersistentSearchApiActions,
  PersistentSearchApiSagas,
  PrincipalsApiActions,
  PrincipalsApiSagas,
  RoutingActions,
  RoutingSagas,
  SearchApiActions,
  SearchApiSagas,
  version,
};

export default {
  AppApiActions,
  AppApiSagas,
  AuthorizationsApiActions,
  AuthorizationsApiSagas,
  CodexApiActions,
  CodexApiSagas,
  DataApiActions,
  DataApiSagas,
  DataIntegrationApiActions,
  DataIntegrationApiSagas,
  DataSetsApiActions,
  DataSetsApiSagas,
  EntityDataModelApiActions,
  EntityDataModelApiSagas,
  EntitySetsApiActions,
  EntitySetsApiSagas,
  OrganizationsApiActions,
  OrganizationsApiSagas,
  PermissionsApiActions,
  PermissionsApiSagas,
  PersistentSearchApiActions,
  PersistentSearchApiSagas,
  PrincipalsApiActions,
  PrincipalsApiSagas,
  RoutingActions,
  RoutingSagas,
  SearchApiActions,
  SearchApiSagas,
  version,
};
