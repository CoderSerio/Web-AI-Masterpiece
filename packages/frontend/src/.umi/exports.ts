// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
// defineApp
export { defineApp } from './core/defineApp'
export type { RuntimeConfig } from './core/defineApp'
// plugins
export { Access, useAccess, useAccessMarkedRoutes } from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-access';
export { Provider, useModel } from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-model';
export { useRequest, UseRequestProvider, request, getRequestInstance } from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-request';
// plugins types.d.ts
export * from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-access/types.d';
export * from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-antd/types.d';
export * from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-layout/types.d';
export * from 'D:/code/fe/programs/masterpiece/packages/frontend/src/.umi/plugin-request/types.d';
// @umijs/renderer-*
export { createBrowserHistory, createHashHistory, createMemoryHistory, Helmet, HelmetProvider, createSearchParams, generatePath, matchPath, matchRoutes, Navigate, NavLink, Outlet, resolvePath, useLocation, useMatch, useNavigate, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams, useAppData, useClientLoaderData, useRouteProps, useSelectedRoutes, useServerLoaderData, renderClient, __getRoot, Link, useRouteData, __useFetcher, withRouter } from 'D:/code/fe/programs/masterpiece/node_modules/.pnpm/@umijs+renderer-react@4.1.2_react-dom@18.1.0_react@18.1.0/node_modules/@umijs/renderer-react';
export type { History } from 'D:/code/fe/programs/masterpiece/node_modules/.pnpm/@umijs+renderer-react@4.1.2_react-dom@18.1.0_react@18.1.0/node_modules/@umijs/renderer-react'
// umi/client/client/plugin
export { ApplyPluginsType, PluginManager } from 'D:/code/fe/programs/masterpiece/node_modules/.pnpm/umi@4.1.2_@babel+core@7.24.0_@types+react@18.2.64_eslint@8.35.0_prettier@3.2.5_react-dom@18.2_mjbtcrym4gbujhpi5upxhakrjm/node_modules/umi/client/client/plugin.js';
export { history, createHistory } from './core/history';
export { terminal } from './core/terminal';
// react ssr
export const useServerInsertedHTML: Function = () => {};
// test
export { TestBrowser } from './testBrowser';