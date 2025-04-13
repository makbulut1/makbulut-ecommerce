import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // Eğer zaten TR ile başlıyorsa, direkt devam et
  if (url.pathname.startsWith("/tr")) {
    return NextResponse.next()
  }

  // Diğer her isteği /tr altına yönlendir
  url.pathname = `/tr${url.pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|assets|png|svg|jpg|jpeg|gif|webp).*)",
  ],
}