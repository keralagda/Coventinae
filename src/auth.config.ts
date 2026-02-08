import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      if (isOnAdmin) {
        if (isLoggedIn) return true
        return false // Redirect unauthenticated users to login page
      }
      return true
    },
    jwt({ token, user }) {
        if (user) {
            token.id = user.id
            // @ts-ignore
            token.role = user.role
        }
        return token
    },
    session({ session, token }) {
        if (session.user) {
             // @ts-ignore
            session.user.id = token.id as string
             // @ts-ignore
            session.user.role = token.role as string
        }
        return session
    }
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig
