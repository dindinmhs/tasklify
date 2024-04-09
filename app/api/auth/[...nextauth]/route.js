import connectDB from '@/utils/connectdb';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
import { redirect } from 'next/dist/server/api-utils';
export const authOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,
  
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name :'credentials',
      // menangani sign in
      async authorize(credentials) {
        const {email, password} = credentials
        try {
          const db = await connectDB()
          const coll = db.collection('user')
          const correct =  await coll.findOne({email : email, password : password})
          if (correct) {
            return correct
          } else {
            return null
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  ],
  pages : {
    signIn : "/",
    newUser : '/signup'
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };