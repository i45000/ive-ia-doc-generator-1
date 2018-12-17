// flow-typed signature: 8d02aa153cf5c5dd1c55c574c8220df9
// flow-typed version: 0038776ff6/file-saver_v2.x.x/flow_>=v0.75.x

declare function saveAs(
  data: Blob | File | string,
  filename?: string,
  options?: {| autoBom: boolean |}
): void;

declare module "file-saver" {
  declare module.exports: {
    [[call]]: typeof saveAs,
    saveAs: typeof saveAs
  };
}
