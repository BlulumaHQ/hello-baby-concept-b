import { describe, it, expect } from "vitest";
import { isPlatformHost } from "./noindex-host";
describe("isPlatformHost", () => {
  it("flags lovable.app", () => expect(isPlatformHost("hello-baby-concept-b.lovable.app")).toBe(true));
  it("flags workers.dev", () => expect(isPlatformHost("x.y.workers.dev")).toBe(true));
  it("flags pages.dev", () => expect(isPlatformHost("x.pages.dev")).toBe(true));
  it("flags netlify.app", () => expect(isPlatformHost("x.netlify.app")).toBe(true));
  it("keeps custom domain indexable", () => expect(isPlatformHost("www.example.com")).toBe(false));
  it("rejects lookalike", () => expect(isPlatformHost("evil-lovable.app.com")).toBe(false));
});
