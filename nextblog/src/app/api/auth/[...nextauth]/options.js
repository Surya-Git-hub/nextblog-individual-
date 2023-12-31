import Github, { GithubProfile } from "next-auth/providers/github";
import Google from "next-auth/providers/google";


export const options = {
    providers: [
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
                    image:profile.avatar_url
                }
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
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
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.role = user.role;
            return token
        },
        async session({ session, token }) {
            if (session?.user) session.user.role = token.role;
            return session;
        }
    }
}