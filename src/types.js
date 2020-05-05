/*
 * @flow
 */

type WorkerResponse =
  | {| data :any |}
  | {| error :Error |};

export type {
  WorkerResponse,
};
