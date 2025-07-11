/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './pages/__root';
import { Route as IndexImport } from './pages/index';
import { Route as VerifyEmailIndexImport } from './pages/verify-email/index';
import { Route as LoginIndexImport } from './pages/login/index';
import { Route as HomeIndexImport } from './pages/home/index';

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const VerifyEmailIndexRoute = VerifyEmailIndexImport.update({
  id: '/verify-email/',
  path: '/verify-email/',
  getParentRoute: () => rootRoute,
} as any);

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any);

const HomeIndexRoute = HomeIndexImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/home/': {
      id: '/home/';
      path: '/home';
      fullPath: '/home';
      preLoaderRoute: typeof HomeIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/login/': {
      id: '/login/';
      path: '/login';
      fullPath: '/login';
      preLoaderRoute: typeof LoginIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/verify-email/': {
      id: '/verify-email/';
      path: '/verify-email';
      fullPath: '/verify-email';
      preLoaderRoute: typeof VerifyEmailIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute;
  '/home': typeof HomeIndexRoute;
  '/login': typeof LoginIndexRoute;
  '/verify-email': typeof VerifyEmailIndexRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute;
  '/home': typeof HomeIndexRoute;
  '/login': typeof LoginIndexRoute;
  '/verify-email': typeof VerifyEmailIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexRoute;
  '/home/': typeof HomeIndexRoute;
  '/login/': typeof LoginIndexRoute;
  '/verify-email/': typeof VerifyEmailIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/home' | '/login' | '/verify-email';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/home' | '/login' | '/verify-email';
  id: '__root__' | '/' | '/home/' | '/login/' | '/verify-email/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  HomeIndexRoute: typeof HomeIndexRoute;
  LoginIndexRoute: typeof LoginIndexRoute;
  VerifyEmailIndexRoute: typeof VerifyEmailIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  HomeIndexRoute: HomeIndexRoute,
  LoginIndexRoute: LoginIndexRoute,
  VerifyEmailIndexRoute: VerifyEmailIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/home/",
        "/login/",
        "/verify-email/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/home/": {
      "filePath": "home/index.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/verify-email/": {
      "filePath": "verify-email/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
