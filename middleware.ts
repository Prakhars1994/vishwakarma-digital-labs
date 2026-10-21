import { NextRequest, NextResponse } from "next/server";

const WORKERS_HOST = "vdl.vliab.workers.dev";
const PRODUCTION_HOST = "vdldigital.com";

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === WORKERS_HOST) {
    const target = request.nextUrl.clone();
    target.protocol = "https:";
    target.hostname = PRODUCTION_HOST;
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
