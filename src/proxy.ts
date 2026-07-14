import { NextRequest, NextResponse } from 'next/server';

const legacyRedirects: Record<string, string> = {
  '/request-pricing': '/contact',
  '/request-proposal': '/contact',
};

const legacyProfessionalKeywordPattern = /^\/professional\/keyword\/[^/]+$/;

export function proxy(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const destinationPath =
    legacyRedirects[pathname] ?? (legacyProfessionalKeywordPattern.test(pathname) ? '/services' : null);

  if (!destinationPath) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL(destinationPath, origin), 301);
}

export const config = {
  matcher: ['/request-pricing', '/request-proposal', '/professional/keyword/:slug*'],
};
