import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./src/i18n";

// Locale detection middleware (very simple)
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore assets & API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if path already has a locale
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`));
  if (hasLocale) return NextResponse.next();

  // Default redirect
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next|.*\..*).*)"],
};
