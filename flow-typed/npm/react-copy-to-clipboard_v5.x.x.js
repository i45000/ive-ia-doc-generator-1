// flow-typed signature: 183f50b80bab27f72b96292451182e7d
// flow-typed version: 5b66f9f650/react-copy-to-clipboard_v5.x.x/flow_>=v0.25.x

// @flow

declare module 'react-copy-to-clipboard' {
  declare export type CopyToClipboardOptions = {
    debug: boolean,
    message: string
  };

  declare export type CopyToClipboardProps = {
    text: string,
    onCopy?: (text: string, result: boolean) => void,
    options?: CopyToClipboardOptions,
    children?: React$Node
  };

  declare export default class CopyToClipboard extends React$Component<CopyToClipboardProps> {}
}
