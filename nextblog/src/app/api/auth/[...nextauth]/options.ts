import Github, { GithubProfile } from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"
import {AuthOptions, User} from "next-auth";
import { JWT } from "next-auth/jwt";

interface AdapterUser extends User {
    role: string; // Add the missing 'role' property
  }

export const options:AuthOptions = {

    pages: {
        signIn: "/register",
    },

    providers: [

        Credentials({
            name: 'nextBlog',
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "jsmith"
                },
                email: {
                    label: "email:",
                    type: "text",
                    placeholder: "your-email",
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                const res = await fetch("/your/endpoint", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        }),

        Github({
            profile(profile) {
                console.log("Profile Github: ", profile)
                let userRole = "Github User"
                if (profile?.email == "codesorcerers@gmail.com") {
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole,
                    image: profile.avatar_url
                }
            },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),

        Google({
            profile(profile) {
                console.log("Profile Google: ", profile)
                let userRole = "Google User"
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole
                }
            },
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
    ],

    callbacks: {
        async jwt({ token, user }: { token: JWT; user: User | AdapterUser }) {
            if ('role' in user) {
                token.role = (user as AdapterUser).role;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: JWT }) {
            if (session?.user && token && 'role' in token) {
                session.user.role = token.role;
            }
            return session;
        }
    }
}