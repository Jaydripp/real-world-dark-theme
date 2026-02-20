import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In Next.js 16, this function MUST be named "proxy" 
export function proxy(request: NextRequest) {
  // This allows the request to continue as normal
  return NextResponse.next();
}

// Optional: specific paths for the proxy to run on
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};