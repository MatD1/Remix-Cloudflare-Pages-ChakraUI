// root.tsx
import React, { Suspense, useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { Box, ChakraProvider, extendTheme, Heading } from "@chakra-ui/react";
import { theme } from "@chakra-ui/pro-theme";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { MetaFunction, LinksFunction } from "@remix-run/cloudflare"; // Depends on the runtime you choose

import { ServerStyleContext, ClientStyleContext } from "./context";

// Fonts
import "@fontsource/bebas-neue";
import Layout from "./Components/Layout/layout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Placeholder",
  viewport: "width=device-width,initial-scale=1",
  name: "description",
  content:
    "The best site to get all relevant information on the Factions of the game Squad!",
  rel: "canonical",
  href: "PLACEHOLDER",
});

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@600&display=swap",
    },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  const myTheme = extendTheme(
    {
      fonts: {
        heading: "Bebas Neue",
        //body: "Open Sans",
      },
      colors: {
        squadYellow: "#eeba14",
      },
    },
    theme
  );
  return (
    <Document>
      <ChakraProvider theme={myTheme}>
        <Layout>
          <Suspense fallback={<Box>Loading...</Box>}>
            <Outlet />
          </Suspense>
        </Layout>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <Document>
        <ChakraProvider>
          <Box>
            <Heading as="h1">There was an error</Heading>
          </Box>
        </ChakraProvider>
      </Document>
    </div>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  return (
    <Document>
      <ChakraProvider>
        <Box>
          <Heading as="h1">
            {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}
