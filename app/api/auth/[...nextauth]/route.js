import connectDB from '@/utils/connectdb';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from "bcrypt"
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
          const user =  await coll.findOne({email : email})
          if (!user) {
            return null
          }
          const passwordMatch = await bcrypt.compare(password,user.password)
          if (!passwordMatch) {
            return null
          } else {
            return user  
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