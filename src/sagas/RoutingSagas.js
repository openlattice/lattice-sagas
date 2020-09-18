/*
 * @flow
 */

import { put, takeEvery } from '@redux-saga/core/effects';
import { push } from 'connected-react-router';
import type { Saga } from '@redux-saga/core';

import {
  GO_TO_ROOT,
  GO_TO_ROUTE,
  routingFailure,
} from './RoutingActions';
import type { RoutingAction } from './RoutingActions';

const ERR_INVALID_ROUTE = 'invalid route: a route must be a non-empty string that starts with "/"';

/*
 *
 * RoutingActions.goToRoute()
 *
 */

function* goToRouteWorker(action :RoutingAction) :Saga<*> {

  const { route, state = {} } = action;
  if (route === null || route === undefined || !route.startsWith('/', 0)) {
    yield put(routingFailure(ERR_INVALID_ROUTE, route));
    return;
  }

  // ISSUE: https://github.com/supasate/connected-react-router/issues/394#issuecomment-596713700
  // FIX: https://github.com/supasate/connected-react-router/pull/399
  // TODO: remove JSON.stringify() once the fix ^ is released
  yield put(push({ state: JSON.stringify(state), pathname: route }));
}

function* goToRouteWatcher() :Saga<*> {

  yield takeEvery(GO_TO_ROUTE, goToRouteWorker);
}

/*
 *
 * RoutingActions.goToRoot()
 *
 */

function* goToRootWatcher() :Saga<*> {

  yield takeEvery(GO_TO_ROOT, goToRouteWorker);
}

export {
  goToRootWatcher,
  goToRouteWatcher,
  goToRouteWorker,
};
