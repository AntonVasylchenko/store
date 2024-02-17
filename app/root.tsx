import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStylesUrl from "~/styles/base.css";
import resetStyleUrl from "~/styles/reset.css";
import { links as linksHeader } from "~/components/Header";
import { Header } from "~/components/index";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: resetStyleUrl },
  { rel: "stylesheet", href: globalStylesUrl },
  ...linksHeader(),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="app">
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}