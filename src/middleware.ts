import NextAuth from "next-auth"
import { auth } from "@/auth"

export default auth((req) => {
  // middleware logic is handled in auth.config or callbacks
})

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
