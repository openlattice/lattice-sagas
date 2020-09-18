/*
 * @flow
 */

type WorkerResponse =
  | {| data :mixed |}
  | {| error :Error |};

export type {
  WorkerResponse,
};
