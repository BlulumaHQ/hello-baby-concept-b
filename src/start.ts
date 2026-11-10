import { createStart, createMiddleware } from "@tanstack/react-start";
import { setResponseHeader } from "@tanstack/react-start/server";
import { isPlatformHost } from "./lib/noindex-host";

// Adds X-Robots-Tag: noindex only on platform-owned hostnames; custom domains stay indexable.
const platformNoindex = createMiddleware().server(async ({ next, request }) => {
  const host = new URL(request.url).hostname;
  if (isPlatformHost(host) || (process.env.NOINDEX_TEST_LOCALHOST === "1" && host === "localhost")) {
    setResponseHeader("X-Robots-Tag", "noindex, nofollow");
  }
  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [platformNoindex],
}));
