'use client'
import { signOut,useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Nav } from "@/components/nav";
import Link from "next/link"
import { BsFillGridFill } from "react-icons/bs"




export default function Home() {
  const router = useRouter()
  const session = useSession()
  async function handleSignOut() {
    await signOut({redirect: false})
    router.replace('/signup')
  }
  return (
    <div className="flex">
      <Nav/>
      <div className="inline-block">
        <h1>Dashoard</h1>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
}
