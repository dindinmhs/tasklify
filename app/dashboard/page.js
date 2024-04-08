'use client'
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  async function handleSignOut() {
    await signOut({redirect: false})
    router.replace('/signup')
  }
  return (
    <div>
      <h1>Dashoard</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
