import connectDB from '@/utils/connectdb';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,
  
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name :'credentials',
      type : 'credentials',
      async authorize(credentials) {
        const {email, password} = credentials
        try {
          const db = await connectDB()
          const coll = db.collection('user')
          const correct =  await coll.findOne({email : email, password : password})
          if (correct) {
            return credentials
          } else {
            return null
          }
        } catch (error) {
          console.error(error)
        }
      },
    })
  ],
  page : {
    signIn : '/'
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };