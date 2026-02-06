import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const session_token = request.cookies.get("better-auth.session_token")?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/lobby") && !session_token) {
    return redirect("/authentication/sign-in");
  }

  return NextResponse.next();
}
