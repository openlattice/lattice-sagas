/*
 * @flow
 */

declare type RoutingAction = {|
  +route ?:string;
  +state ?:Object;
  +type :string;
|};

declare type GoToRoute = (route :string, state ?:Object) => RoutingAction;

const GO_TO_ROUTE :'GO_TO_ROUTE' = 'GO_TO_ROUTE';
function goToRoute(route ?:string = '/', state ?:Object = {}) :RoutingAction {
  return {
    route,
    state,
    type: GO_TO_ROUTE,
  };
}

const ROUTING_FAILURE :'ROUTING_FAILURE' = 'ROUTING_FAILURE';
function routingFailure(errorMessage :string, route :string) :Object {
  return {
    route,
    error: errorMessage,
    type: ROUTING_FAILURE,
  };
}

export {
  GO_TO_ROUTE,
  ROUTING_FAILURE,
  goToRoute,
  routingFailure,
};

export type {
  GoToRoute,
  RoutingAction,
};
