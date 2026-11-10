// Platform-owned hostname suffixes that must never be indexed.
const PLATFORM_SUFFIXES = [".lovable.app", ".workers.dev", ".pages.dev", ".netlify.app"];

export function isPlatformHost(hostname: string): boolean {
  const h = hostname.toLowerCase().replace(/\.$/, "");
  return PLATFORM_SUFFIXES.some((s) => h.endsWith(s) || h === s.slice(1));
}
