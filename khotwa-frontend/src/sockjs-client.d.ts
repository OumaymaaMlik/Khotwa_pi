declare module 'sockjs-client' {
  interface SockJSOptions {
    [key: string]: any;
  }

  class SockJS {
    constructor(url: string, _reserved?: any, options?: SockJSOptions);
    send(data: string): void;
    close(): void;
    onopen: (() => void) | null;
    onmessage: ((event: any) => void) | null;
    onerror: ((error: any) => void) | null;
    onclose: (() => void) | null;
  }

  export = SockJS;
}
