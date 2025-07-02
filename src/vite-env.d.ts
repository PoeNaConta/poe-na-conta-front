declare module '*.css';

interface ImportMetaEnv {
  readonly BACKEND_ROUTE?: string;
  readonly VITE_BACKEND_ROUTE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
