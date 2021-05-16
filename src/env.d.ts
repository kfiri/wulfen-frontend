declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
  }
}
declare module '*.txt' {
  const content: string;
  export default content;
}
declare module '*.csv' {
  const content: string;
  export default content;
}
