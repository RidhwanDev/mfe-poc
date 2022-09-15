///<reference types="react" />

declare module 'helloReact/HelloReactApp' {
  const mount: (
    el: any,
  ) => {
    onParentNavigate({ pathname }: { pathname: any }): void;
  };

  export { mount };
}
// expose this via npm package
